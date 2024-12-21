// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract TukTra {
    error GameNotStarted();
    error PlayerNotExists();
    error InvalidChoice();
    error GameAlreadyFinished();
    error NotPlayerInGame();
    error AlreadyMadeMove();

    uint8 constant NULL = 0;
    uint8 constant TUKTUK = 1;
    uint8 constant TRAFFICJAM = 2;
    uint8 constant FOODCART = 3;

    struct Player {
        bool initialized;
        uint wins;
        uint losses;
    }

    struct Game {
        address player1;
        address player2;
        string player1Name;
        string player2Name;
        uint8 p1Choice;
        uint8 p2Choice;
        address winner;
        // 0 = Not started
        // 1 = Waiting for player 2
        // 2 = Both players moved
        // 3 = Game finished
        uint8 gameState;
    }

    // Public view of game that hides choices until game is finished
    struct PublicGameView {
        address player1;
        address player2;
        string player1Name;
        string player2Name;
        uint8 p1Choice; // Will be NULL unless game is finished
        uint8 p2Choice; // Will be NULL unless game is finished
        address winner;
        uint8 gameState;
    }

    mapping(address => Player) public players;
    mapping(bytes32 => Game) private games;

    event Winner(bytes32 indexed gameId, address winner);
    event GameCreated(bytes32 indexed gameId, address indexed player1);
    event MoveMade(bytes32 indexed gameId, address indexed player);

    function _createGame(address _player1, string calldata _player1Name, bytes32 _id, uint8 _choice) internal {
        games[_id] = Game({
            player1: _player1,
            player2: address(0),
            player1Name: _player1Name,
            player2Name: "",
            p1Choice: _choice,
            p2Choice: NULL,
            winner: address(0),
            gameState: 0
        });
        
        emit GameCreated(_id, _player1);
    }

    function getGameDetails(bytes32 _id) public view returns (PublicGameView memory) {
        if (games[_id].gameState == 0) {
            revert GameNotStarted();
        }

        // Create a public view of the game that hides choices until game is finished
        return PublicGameView({
            player1: games[_id].player1,
            player2: games[_id].player2,
            player1Name: games[_id].player1Name,
            player2Name: games[_id].player2Name,
            // Only show choices if game is finished
            p1Choice: games[_id].gameState == 3 ? games[_id].p1Choice : NULL,
            p2Choice: games[_id].gameState == 3 ? games[_id].p2Choice : NULL,
            winner: games[_id].winner,
            gameState: games[_id].gameState
        });
    }

    function getPlayerDetails(address _player) public view returns (uint wins, uint losses) {
        if (!players[_player].initialized) {
            revert PlayerNotExists();
        }
        return (players[_player].wins, players[_player].losses);
    }

    function _registerPlayer(address _player) internal {
        players[_player] = Player({
            initialized: true,
            wins: 0,
            losses: 0
        });
    }

    function makeMove(bytes32 _id, uint8 _choice, string calldata _playerName) external {
        if (_choice < 1 || _choice > 3) {
            revert InvalidChoice();
        }
        if (games[_id].gameState >= 3) {
            revert GameAlreadyFinished();
        }
        
        if (!players[msg.sender].initialized) {
            _registerPlayer(msg.sender);
        }

        if (games[_id].gameState == 0) {
            _createGame(msg.sender, _playerName, _id, _choice);
            games[_id].gameState = 1;
            emit MoveMade(_id, msg.sender);
        } else if (games[_id].gameState == 1) {
            if (games[_id].player1 == msg.sender) {
                revert AlreadyMadeMove();
            }
            
            games[_id].player2 = msg.sender;
            games[_id].player2Name = _playerName;
            games[_id].p2Choice = _choice;
            games[_id].gameState = 3;  // Game is finished immediately after player 2's move
            
            emit MoveMade(_id, msg.sender);
            emit Winner(_id, _determineWinner(_id));
        }
    }

    function _determineWinner(bytes32 _id) internal returns (address) {
        address winnerAddr;
        address loserAddr;
        address p1 = games[_id].player1;
        address p2 = games[_id].player2;
        uint8 p1Choice = games[_id].p1Choice;
        uint8 p2Choice = games[_id].p2Choice;

        if (p1Choice == p2Choice) {
            games[_id].winner = address(0);
            return address(0);
        }

        if (p1Choice == TUKTUK && p2Choice == FOODCART) {
            (winnerAddr, loserAddr) = (p2, p1);
        } else if (p2Choice == TUKTUK && p1Choice == FOODCART) {
            (winnerAddr, loserAddr) = (p1, p2);
        } else if (p1Choice == TRAFFICJAM && p2Choice == FOODCART) {
            (winnerAddr, loserAddr) = (p1, p2);
        } else if (p2Choice == TRAFFICJAM && p1Choice == FOODCART) {
            (winnerAddr, loserAddr) = (p2, p1);
        } else if (p1Choice == TUKTUK && p2Choice == TRAFFICJAM) {
            (winnerAddr, loserAddr) = (p1, p2);
        } else if (p2Choice == TUKTUK && p1Choice == TRAFFICJAM) {
            (winnerAddr, loserAddr) = (p2, p1);
        }

        games[_id].winner = winnerAddr;
        players[winnerAddr].wins++;
        players[loserAddr].losses++;
        
        return winnerAddr;
    }
}
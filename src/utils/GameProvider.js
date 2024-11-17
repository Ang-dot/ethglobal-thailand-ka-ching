'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';
// import { useDynamicContext } from "../lib/dynamic";

// Contract ABI and address
const CONTRACT_ADDRESS = "0x6Aa208c4770ecAE834eD521c4Bf26437D1f799cf";

const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "AlreadyMadeMove",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "GameAlreadyFinished",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "GameNotStarted",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidChoice",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotPlayerInGame",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PlayerNotExists",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "gameId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "player1",
                "type": "address"
            }
        ],
        "name": "GameCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "gameId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "MoveMade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "gameId",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "winner",
                "type": "address"
            }
        ],
        "name": "Winner",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_id",
                "type": "bytes32"
            }
        ],
        "name": "getGameDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "player1",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "player2",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "player1Name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "player2Name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint8",
                        "name": "p1Choice",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint8",
                        "name": "p2Choice",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "gameState",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct ThaiGame.PublicGameView",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_player",
                "type": "address"
            }
        ],
        "name": "getPlayerDetails",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "wins",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "losses",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_id",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "_choice",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_playerName",
                "type": "string"
            }
        ],
        "name": "makeMove",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    // const { primaryWallet, network } = useDynamicContext();
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
        account: null,
        choice: 0,
        username: '',
        gameId: '',
        gameDetails: null, // Added
        playerDetails: null, // Added
        winner: null, // Add this line
        loading: false,
        error: null
    });

    useEffect(() => {
        const init = async () => {
            try {
                // if (!primaryWallet) {
                //     console.log("No wallet connected");
                //     setState(prev => ({
                //         ...prev,
                //         error: "Please connect to a wallet before playing!",
                //         isConnected: false
                //     }));
                //     return;
                // }

                // Get the provider directly from window.ethereum for MetaMask
                if (!window.ethereum) {
                    throw new Error("MetaMask is not installed");
                }

                const provider = new ethers.BrowserProvider(window.ethereum);

                // Get signer
                const signer = await provider.getSigner();

                // Initialize contract
                const contract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    CONTRACT_ABI,
                    signer
                );

                // Get connected account
                const account = await signer.getAddress();

                setState(prev => ({
                    ...prev,
                    provider,
                    signer,
                    contract,
                    account,
                    isConnected: true,
                    error: null
                }));

            } catch (error) {
                console.error("Web3 initialization error:", error);
                setState(prev => ({
                    ...prev,
                    error: `Failed to connect to Web3: ${error.message}`,
                    isConnected: false
                }));
            }
        };

        init();
    }, []);

    // Make a move in the game
    const makeMove = async () => {
        if (!state.contract || !state.choice || !state.username || !state.gameId) {
            setState(prev => ({ ...prev, error: "Please fill in all fields" }));
            return;
        }

        try {
            setState(prev => ({ ...prev, loading: true }));
            const tx = await state.contract.makeMove(
                ethers.encodeBytes32String(state.gameId),
                state.choice,
                state.username
            );
            await tx.wait();

            // // Fetch game details after the move
            // await fetchGameDetails(state.gameId); // Add this line

            setState(prev => ({
                ...prev,
                loading: false,
                error: null
            }));
        } catch (error) {
            console.error("Game move error:", error);
            setState(prev => ({
                ...prev,
                loading: false,
                error: getRequireError(error)
            }));
        }
    };

    const fetchGameDetails = async (gameId) => {
        if (!state.contract) {
            setState(prev => ({ ...prev, error: "Contract not initialized" }));
            return;
        }

        try {
            const details = await state.contract.getGameDetails(ethers.encodeBytes32String(gameId));
            setState(prev => ({
                ...prev,
                gameDetails: details,
                winner: details.winner // Add this line to set the winner
            }));
            return details;
        } catch (error) {
            console.error("Error fetching game details:", error);
            // setState(prev => ({ ...prev, error: getRequireError(error) }));
        }
    };

    const fetchPlayerDetails = async (playerAddress) => {
        if (!state.contract) {
            setState(prev => ({ ...prev, error: "Contract not initialized" }));
            return;
        }

        try {
            const playerDetails = await state.contract.getPlayerDetails(playerAddress);
            setState(prev => ({
                ...prev,
                playerDetails: playerDetails
            }));
            return playerDetails;
        } catch (error) {
            console.error("Error fetching player details:", error);
            setState(prev => ({ ...prev, error: getRequireError(error) }));
        }
    };

    const getRequireError = (err) => {
        // First check for the specific MetaMask RPC error structure
        if (err?.info?.error?.message) {
            var message = err.info.error.message;
            if (message.startsWith('execution reverted:')) {
                message = message.replace('execution reverted:', '').trim();
            }
            if (message == "ethers-user-denied: MetaMask Tx Signature: User denied transaction signature.") {
                message = "User denied transaction signature!"
            }
            if (message == 'execution reverted') {
                message = "This game is ended!"
            }
            return message;
        }

        // Handle user rejection
        if (err?.code === 'ACTION_REJECTED') {
            return 'Transaction was rejected';
        }

        // Fallback
        return 'Action failed. Please try again.';
    };

    // Update state functions
    const setChoice = (choice) => setState(prev => ({ ...prev, choice }));
    const setUsername = (username) => setState(prev => ({ ...prev, username }));
    const setGameId = (gameId) => setState(prev => ({ ...prev, gameId }));

    const value = {
        state,
        makeMove,
        fetchGameDetails,
        fetchPlayerDetails,
        setChoice,
        setUsername,
        setGameId
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;
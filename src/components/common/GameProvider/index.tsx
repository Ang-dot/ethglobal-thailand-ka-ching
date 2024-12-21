

'use client'

import { createContext, type ReactElement, type ReactNode, useState, useEffect, useContext } from 'react';
import { type BrowserProvider, type Contract, type JsonRpcSigner, ethers } from 'ethers';
import Link from 'next/link';

// Contract configuration
const CONTRACT_ADDRESS = "0x240755c562ca5c3d280d0f77d6565150de2c763d";
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
] as const;

// Types
type GameState = {
    provider: BrowserProvider | null
    signer: JsonRpcSigner | null
    contract: Contract | null
    account: string | null
    choice: number
    username: string
    gameId: string
    gameDetails: any | null
    playerDetails: any | null
    winner: string | null
    loading: boolean
    error: string | null
    isConnected?: boolean
}

type GameContextType = {
    state: GameState
    makeMove: () => Promise<void>
    fetchGameDetails: (gameId: string) => Promise<any>
    fetchPlayerDetails: (playerAddress: string) => Promise<any>
    setChoice: (choice: number) => void
    setUsername: (username: string) => void
    setGameId: (gameId: string) => void
}

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [state, setState] = useState<GameState>({
        provider: null,
        signer: null,
        contract: null,
        account: null,
        choice: 0,
        username: '',
        gameId: '',
        gameDetails: null,
        playerDetails: null,
        winner: null,
        loading: false,
        error: null
    });

    useEffect(() => {
        const init = async () => {
            try {
                if (!window.ethereum) {
                    throw new Error("MetaMask is not installed");
                }

                const provider = new ethers.BrowserProvider(window.ethereum as any);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    CONTRACT_ABI,
                    signer
                );
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
                    error: `Failed to connect to Web3: ${error instanceof Error ? error.message : 'Unknown error'}`,
                    isConnected: false
                }));
            }
        };

        init();
    }, []);

    const makeMove = async (): Promise<void> => {
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

    const fetchGameDetails = async (gameId: string) => {
        if (!state.contract) {
            setState(prev => ({ ...prev, error: "Contract not initialized" }));
            return;
        }

        try {
            const details = await state.contract.getGameDetails(ethers.encodeBytes32String(gameId));
            setState(prev => ({
                ...prev,
                gameDetails: details,
                winner: details.winner
            }));
            return details;
        } catch (error) {
            console.error("Error fetching game details:", error);
        }
    };

    const fetchPlayerDetails = async (playerAddress: string) => {
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

    const getRequireError = (err: any): string => {
        if (err?.info?.error?.message) {
            let message = err.info.error.message;
            if (message.startsWith('execution reverted:')) {
                message = message.replace('execution reverted:', '').trim();
            }
            if (message === "ethers-user-denied: MetaMask Tx Signature: User denied transaction signature.") {
                message = "User denied transaction signature!"
            }
            if (message === 'execution reverted') {
                message = "This game is ended!"
            }
            return message;
        }

        if (err?.code === 'ACTION_REJECTED') {
            return 'Transaction was rejected';
        }

        return 'Action failed. Please try again.';
    };

    const setChoice = (choice: number) => setState(prev => ({ ...prev, choice }));
    const setUsername = (username: string) => setState(prev => ({ ...prev, username }));
    const setGameId = (gameId: string) => setState(prev => ({ ...prev, gameId }));

    const value: GameContextType = {
        state,
        makeMove,
        fetchGameDetails,
        fetchPlayerDetails,
        setChoice,
        setUsername,
        setGameId
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

// In your GameProvider.tsx, add this at the bottom:
export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};

export default GameProvider;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDynamicContext } from '../../lib/dynamic';
import { useEnsName } from 'wagmi';
import { Menu, X } from 'lucide-react';
import { Modal } from '../modal';
const GameNavbar = ({
    fetchGameDetails,
    // fetchPlayerDetails, 
    setGameDetails,
    // setPlayerDetails, 
    setIsModalOpen,
    gameID,
    setGameID,
    showNotification,
    setGameFinish,
    setIsOpen
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const {
        setShowAuthFlow,
        primaryWallet,
        user,
    } = useDynamicContext();

    const { data: ensName, isLoading: isEnsLoading } = useEnsName({
        address: primaryWallet?.address,
        enabled: Boolean(primaryWallet?.address),
    });

    const [balance, setBalance] = useState('0');


    const handleConnect = (e) => {
        e.preventDefault();
        console.log('Connect button clicked');

        if (setShowAuthFlow) {
            setShowAuthFlow(true);
        } else {
            console.error('setShowAuthFlow is not available');
        }
    };

    const getBalance = async () => {
        try {
            if (primaryWallet) {
                const balance = await primaryWallet.getBalance();
                // Convert balance to ETH and format to 4 decimal places
                const formattedBalance = parseFloat(balance).toFixed(4);
                setBalance(formattedBalance);
            }
        } catch (error) {
            console.error('Error fetching balance:', error);
            setBalance('0.0000');
        }
    };

    const handleSearch = async () => {
        setIsModalOpen(true);
        setGameFinish(false);
        if (!gameID) {
            showNotification(
                "Game ID Empty",
                'Please enter a game id!'
            );
            return;
        }

        try {
            // Fetch game details
            const fetchedGameDetails = await fetchGameDetails(gameID);
            if (!fetchedGameDetails) {
                showNotification(
                    "Game Not Found",
                    'Invalid Game ID. Please try again!'
                );
                return;
            }
            // const fetchedPlayerDetails = await fetchPlayerDetails(fetchedGameDetails.player1); // Assuming you want details for player1
            // console.log(fetchedPlayerDetails);

            setGameDetails(fetchedGameDetails);
            // setPlayerDetails(fetchedPlayerDetails);
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };

    useEffect(() => {
        if (primaryWallet) {
            getBalance();
        } else {
            setBalance('0');
        }
    }, [primaryWallet]);

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-black/85 z-10">
            <header>
                <nav className="relative mx-auto p-6">
                    {/* Desktop Navigation */}
                    <div className="flex items-center justify-between w-full h-14 px-4">
                        {/* Left side - Logo */}
                        <div className="flex items-center gap-2">
                            <Link href="/home" className="text-2xl font-nountown text-white">Ka-Ching
                            </Link>
                        </div>

                        {/* Right side - Wallet and Login */}
                        <div className="hidden lg:flex gap-8">
                            <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-white transition-colors">
                                How To Play
                            </button>
                            {!Boolean(primaryWallet?.address) && !Boolean(user) ? (
                                <Modal>
                                    <div className="flex flex-col">
                                        <span className="text-white text-sm">Not connected</span>
                                        <span className="text-red-500 text-sm cursor-pointer">Connect Wallet</span>
                                    </div>
                                </Modal>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col">
                                        <span className="text-white text-sm">
                                            {ensName ? ensName : `${primaryWallet?.address?.slice(0, 6)}...${primaryWallet?.address?.slice(-4)}`}
                                        </span>
                                        <span className="text-sm text-red-500">{balance} ETH</span>
                                    </div>
                                </div>
                            )}
                            <input
                                type="text"
                                placeholder="Search the blockchain"
                                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60"
                                onChange={(e) => setGameID(e.target.value)}
                            />
                            <button onClick={handleSearch} className="pixelBtn transform transition-transform hover:scale-[1.02]">
                                Search
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-lg hover:bg-[#FFE69B] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6 text-gray-600" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                    {/* Mobile Navigation */}
                    <div className={`
                        absolute top-17 left-0 w-full bg-black/85 border-b border-black
                        lg:hidden transition-all duration-300 ease-in-out p-4
                        ${isMenuOpen ? 'block' : 'hidden'}
                    `}>
                        <div className="px-4 py-3">
                            <div className='flex flex-row justify-between p-3'>
                                <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-white transition-colors">
                                    How To Play
                                </button>
                                {!Boolean(primaryWallet?.address) && !Boolean(user) ? (
                                    <Modal>
                                        <div className="flex flex-col">
                                            <span className="text-white text-sm">Not connected</span>
                                            <span className="text-red-500 text-sm cursor-pointer">Connect Wallet</span>
                                        </div>
                                    </Modal>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-white text-sm">
                                                {ensName ? ensName : `${primaryWallet?.address?.slice(0, 6)}...${primaryWallet?.address?.slice(-4)}`}
                                            </span>
                                            <span className="text-sm text-red-500">{balance} ETH</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-row justify-between p-3'>
                                <input
                                    type="text"
                                    placeholder="Search the blockchain"
                                    className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 w-2/4"
                                    onChange={(e) => setGameID(e.target.value)}
                                />
                                <button onClick={handleSearch} className="pixelBtn transform transition-transform hover:scale-[1.02]">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                </nav>
            </header>

        </div>
    );
};

export default GameNavbar;
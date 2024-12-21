"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getNetwork, DynamicWidget, useDynamicContext, useSwitchWallet, useUserWallets } from '../lib/dynamic';
import { useEnsName } from 'wagmi';

import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp, Wallet } from 'lucide-react';
import Link from 'next/link'
import { Modal } from './modal';
import useStore from '@/utils/store';

export const NavBar = () => {
    const { currentNetwork } = useStore();
    const pathname = usePathname();
    const [gasPrice, setGasPrice] = useState('0');

    const requestGasPrice = async () => {
        try {
            const response = await window.ethereum.request({
                method: 'eth_gasPrice',
                params: [],
            });
            const gasPriceInGwei = parseInt(response, 16) / 1e9;
            setGasPrice(gasPriceInGwei.toFixed(2));
        } catch (error) {
            console.error('Error fetching gas price:', error);
            setGasPrice('N/A');
        }
    };

    useEffect(() => {
        const intervalId = setInterval(requestGasPrice, 10000); // Fetch gas price every 10 seconds
        return () => clearInterval(intervalId);
    }, []);

    const { step, setStep } = useStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { balance, setIsMainModalOpen } = useStore();
    const setBalance = useStore(state => state.setBalance);

    // When you need to update the balance
    const updateBalance = async () => {
        await setBalance(primaryWallet);
    };

    const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
    const {
        setShowAuthFlow,
        primaryWallet,
        user,
        handleLogOut,
        evmNetworks,
    } = useDynamicContext();


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { data: ensName, isLoading: isEnsLoading } = useEnsName({
        address: primaryWallet?.address,
        enabled: Boolean(primaryWallet?.address),
    });

    const STEP_CHANGE_EVENT = 'verificationStepChange';

    const broadcastStepChange = (step) => {
        localStorage.setItem('verificationStep', step.toString());
        const event = new CustomEvent(STEP_CHANGE_EVENT, { detail: step });
        window.dispatchEvent(event);
    };

    const updateStep = (newStep) => {
        setStep(newStep);
        broadcastStepChange(newStep);
    };

    const handleDisconnect = async () => {
        try {
            await handleLogOut();
            setIsWalletPopupOpen(false)
            // clearSteps();
            updateStep(0);
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    };

    const userWallets = useUserWallets();
    
    const setCurrentNetwork = useStore(state => state.setCurrentNetwork);

    const handleSetNetwork = async () => {
        console.log("start! Fetchinggg data");
        await setCurrentNetwork(primaryWallet);
        console.log("end! Fetchinggg data");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from backend
                if (Boolean(primaryWallet?.address) && Boolean(user)) {
                    if (step === 1) {
                        setIsMainModalOpen(true);
                        updateStep(2);
                        await updateBalance();
                        await handleSetNetwork();
                    } else if (step === 4) {
                        await updateBalance();
                        await handleSetNetwork();
                        console.log("Success! Fetchinggg data");
                    }
                }
                if (!Boolean(primaryWallet?.address) && !Boolean(user) && step !== 0) {
                    updateStep(0);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [Boolean(primaryWallet?.address)]);

    const handleConnect = async (e) => {
        e.preventDefault();
        console.log('Connect button clicked');

        if (setShowAuthFlow) {
            if (step === 0 && !Boolean(primaryWallet?.address) && !Boolean(user)) {
                await handleLogOut(); // Ensure proper use of await here
            }
            setShowAuthFlow(true);
        } else {
            console.error('setShowAuthFlow is not available');
        }
    };

    const renderMiddleContent = () => {
        switch (pathname) {
            case '/create-transactions':
            case '/transactions':
                return (
                    <div class="relative flex overflow-x-hidden">
                        <div class="py-12 animate-marquee whitespace-nowrap">
                            <span class="text-black mx-5">Gas Price: {gasPrice} Gwei</span>
                            <span class="text-black mx-5">Gas Price: {gasPrice} Gwei</span>
                        </div>

                        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                            <span class="text-black mx-5">Gas Price: {gasPrice} Gwei</span>
                            <span class="text-black mx-5">Gas Price: {gasPrice} Gwei</span>
                        </div>
                    </div>
                )
                    ;
            case '/home':
                return (
                    <div className="hidden lg:flex items-center gap-2">
                        <div className="flex items-center gap-2 px-4 py-1">
                            <span className="text-[#343235] font-londrina font-[600] text-[16px] leading-[18.93px]">
                                Thailand version of rock paper scissors is{" "}
                                <Link href="/game" className="underline">
                                    here
                                </Link>{" "}
                                now
                            </span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Function to determine what mobile content to show
    const renderMobileContent = () => {
        switch (pathname) {
            case '/home':
                return (
                    <div className="py-3 border-b border-neutral-300 flex justify-center">
                        <span className="text-[#343235] font-londrina font-[600] text-[16px] leading-tight">
                            Thailand version of rock paper scissors is here now
                        </span>
                    </div>
                );
            case '/create-transactions':
            case '/transactions':
                return (
                    <div className="py-3 border-b border-neutral-300 flex justify-center">
                        <span className="text-[#343235] font-londrina font-[600] text-[12px] leading-tight">
                            Gas Price: {gasPrice} Gwei
                        </span>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-[#FFF0BE] z-10">
            <header>
                <nav className="relative mx-auto">
                    {/* Desktop Navigation */}
                    <div className="flex items-center justify-between w-full h-14 px-4">
                        {/* Left side - Logo */}
                        <div className="flex items-center gap-2">
                            <div className="p-4">
                            </div>
                            <a href="/home" className="text-2xl font-nountown text-black">Ka-Ching</a>
                        </div>
                        <div className="hidden md:block">
                            {renderMiddleContent()}
                        </div>
                        {/* Right side - Wallet and Login */}
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/Basketball.png"
                                    alt="Wallet Logo"
                                    width={32}
                                    height={32}
                                    className="object-fill w-full h-full"
                                    priority
                                />
                            </div>
                            {Boolean(primaryWallet?.address) && Boolean(user) && step === 4 ? (
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col">
                                        <span className="text-black text-sm"> {ensName ? ensName : `${primaryWallet?.address?.slice(0, 6)}...${primaryWallet?.address?.slice(-4)}`} </span>
                                        <span className="text-sm text-red-500">{balance} {currentNetwork?.currency}</span>
                                    </div>
                                    <div className="hidden lg:flex items-center gap-2 relative">
                                        {isWalletPopupOpen ? (
                                            <ChevronUp
                                                className="w-4 h-4 text-gray-600 mt-1 cursor-pointer"
                                                onClick={() => setIsWalletPopupOpen(!isWalletPopupOpen)}
                                            />
                                        ) : (
                                            <ChevronDown
                                                className="w-4 h-4 text-gray-600 mt-1 cursor-pointer"
                                                onClick={() => setIsWalletPopupOpen(!isWalletPopupOpen)}
                                            />
                                        )}

                                        {isWalletPopupOpen && (
                                            <WalletCard
                                                walletName={primaryWallet?.connector?.name}
                                                walletAddress={primaryWallet?.address}
                                                balance={balance}
                                                onDisconnect={handleDisconnect}
                                                ensName={ensName}
                                                primaryWallet={primaryWallet}
                                                setBalance={setBalance}
                                                setCurrentNetwork={setCurrentNetwork}
                                            />
                                        )}

                                    </div>
                                </div>
                                // <DynamicWidget innerButtonComponent="Log in" />
                            ) : (
                                <Modal>
                                    <div className="flex flex-col">
                                        <span className="text-black text-sm">Not connected</span>
                                        <span className="text-red-500 text-sm cursor-pointer">Connect Wallet</span>
                                    </div>
                                </Modal>
                            )}

                            <div className="p-4">
                            </div>
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
                                <Wallet className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`
                        absolute top-14 left-0 w-full bg-[#FFF0BE] border-b border-neutral-300
                        lg:hidden transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'block' : 'hidden'}
                    `}>
                        <div className="px-4 py-3">
                            {/* Mobile Center Text */}
                            {renderMobileContent()}

                            {/* Mobile Wallet and Login */}
                            <div className="flex items-center gap-4 py-3 justify-center">
                                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/Basketball.png"
                                        alt="Wallet Logo"
                                        width={32}
                                        height={32}
                                        className="object-fill w-full h-full"
                                        priority
                                    />
                                </div>
                                {!Boolean(primaryWallet?.address) && !Boolean(user) ? (
                                    <div className="flex flex-col">
                                        <span className="text-black text-sm">Not connected</span>
                                        <span className="text-red-500 text-sm cursor-pointer" onClick={handleConnect}>Connect Wallet</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-black text-sm"> {ensName ? ensName : `${primaryWallet?.address?.slice(0, 6)}...${primaryWallet?.address?.slice(-4)}`} </span>
                                            <span className="text-sm text-red-500">{balance} {currentNetwork?.currency}</span>
                                        </div>
                                        <div className="lg:flex items-center gap-2 relative">
                                            {isWalletPopupOpen ? (
                                                <ChevronUp
                                                    className="w-4 h-4 text-gray-600 mt-1 cursor-pointer"
                                                    onClick={() => setIsWalletPopupOpen(!isWalletPopupOpen)}
                                                />
                                            ) : (
                                                <ChevronDown
                                                    className="w-4 h-4 text-gray-600 mt-1 cursor-pointer"
                                                    onClick={() => setIsWalletPopupOpen(!isWalletPopupOpen)}
                                                />
                                            )}

                                            {isWalletPopupOpen && (
                                                <WalletCard
                                                    walletName={primaryWallet?.connector?.name}
                                                    walletAddress={primaryWallet?.address}
                                                    balance={balance}
                                                    onDisconnect={handleDisconnect}
                                                    ensName={ensName}
                                                    primartWallet={primaryWallet}
                                                    setBalance={setBalance}
                                                    setCurrentNetwork={setCurrentNetwork}
                                                // getBalance={getBalance}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

const WalletCard = ({ walletAddress, walletName, balance, onDisconnect, ensName, primaryWallet, setBalance, setCurrentNetwork }) => {
    const { currentNetwork } = useStore();

    return (
        <div
            className="fixed right-4 top-16 w-80 bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-50"
            style={{
                transform: 'translateY(calc(2px + var(--navbar-height, 0px)))',
            }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <Image
                        src="/Basketball.png"
                        alt="Wallet Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{walletName} Wallet</h3>
                    <p className="text-sm text-gray-600">
                        {ensName ? ensName : `${walletAddress?.slice(0, 6)}...${walletAddress?.slice(-4)}`}
                    </p>
                </div>
            </div>

            <NetworkSelector primaryWallet={primaryWallet} setBalance={setBalance} setCurrentNetwork={setCurrentNetwork} />


            {/* Wallet Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4 border-2 border-solid border-black">
                <div className="grid gap-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Wallet</p>
                        <p className="font-semibold text-gray-800">{walletName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Balance</p>
                        <p className="font-semibold text-gray-800">{balance} {currentNetwork?.currency}</p>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-2 ">
                <button
                    onClick={onDisconnect}
                    className="pixelRedBtn transform transition-transform hover:scale-[1.02]"
                >
                    Disconnect

                </button>
            </div>
        </div>
    );
};

const NetworkSelector = ({ primaryWallet, setBalance, setCurrentNetwork }) => {
    const userWallets = useUserWallets();
    const { currentNetwork, evmNetworks } = useStore();
    const [isOpen, setIsOpen] = useState(false);

    const handleSetNetwork = async () => {
        await setCurrentNetwork(primaryWallet);
    };

    const updateBalance = async () => {
        await setBalance(primaryWallet);
    };

    const handleNetworkSelect = async (network) => {
        setIsOpen(false);
        if (primaryWallet?.connector.supportsNetworkSwitching()) {
            await primaryWallet.switchNetwork(network.chainId);
            await updateBalance();
            await handleSetNetwork();
            console.log("Success! Network switched");
        }
    };

    return (
        <div className="relative w-full mb-4">
            {/* Selected Network Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 bg-white border border-black rounded-lg shadow-sm flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <div className="flex items-center space-x-2">
                    <Image
                        src={currentNetwork.iconUrls}
                        alt={`${currentNetwork.name} Icon`}
                        width={24}
                        height={24}
                        className="object-fill"
                        priority
                    />
                    <span className="font-medium">{currentNetwork?.name}</span>
                </div>
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    <div className="py-1">
                        {evmNetworks.map((network) => (
                            <button
                                key={network.chainId}
                                onClick={() => handleNetworkSelect(network)}
                                className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            >
                                <Image
                                    src={network.iconUrls}
                                    alt={`${network.name} Icon`}
                                    width={24}
                                    height={24}
                                    className="object-fill"
                                    priority
                                />
                                <span className="font-medium">{network.name}</span>
                                {currentNetwork.chainId === network.chainId && (
                                    <span className="ml-auto text-blue-600">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

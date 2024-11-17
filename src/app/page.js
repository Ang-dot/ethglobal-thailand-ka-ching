'use client'

import React, {useEffect}from "react";
import OwnershipCard from "@/components/main/OwnershipCard";
import GameBoyWallet from "@/components/main/GameBoyWallet";
import { Modal } from "@/components/modal";

import { useDynamicContext } from "../lib/dynamic";
import Link from 'next/link';
import Image from 'next/image';
import Dashboard from "@/components/main/Dashboard";
import { NavBar } from "@/components/navbar";
import useStore from "@/utils/store";

export default function Home() {
    const { isMainModalOpen, setIsMainModalOpen } = useStore();
    const {
        primaryWallet,
        user
    } = useDynamicContext();

    const { step } = useStore();
    

    const handleWatchAccount = () => {
        // Implement watch account logic here
        console.log('Watch account clicked');
    };

    return (
        <div>
            {/* <NavBar /> */}
            <div className="min-h-[calc(100vh-56px)] pt-28 flex flex-col items-center justify-center flex-grow px-4 py-8">
                {/* Text container with responsive padding and margins */}
                <div className="text-center mb-6 md:mb-8 max-w-5xl w-full">
                    <h1 className="text-[#1F1D29] font-londrina text-[35px] sm:text-[55px] md:text-[100px] leading-tight sm:leading-relaxed md:leading-[94.64px]">
                        Get Started With<span className="text-[#E8A616]"> Ka-Ching</span>
                    </h1>
                    <h2 className="text-[#343235] font-londrina text-[18px] sm:text-[22px] md:text-[26px] leading-tight sm:leading-relaxed md:leading-[18.93px] py-6">
                        Connect your wallet to create a new Safe Account or open an existing one
                    </h2>
                </div>

                {/* Cards container with responsive layout */}
                <div className="flex flex-col gap-10 sm:flex-col md:flex-col lg:flex-row items-center sm:items-center md:items-center">
                    <OwnershipCard />
                    <GameBoyWallet>
                        {Boolean(primaryWallet?.address) && Boolean(user) && step === 4 ? (
                            <div className="text-center w-full">
                                <h2 className="text-white font-londrina font-bold text-2xl sm:text-3xl md:text-4xl">
                                    === Get started ===
                                </h2>
                                <p className="text-white font-londrinaLight text-center text-[12px] sm:text-[16px] md:text-[20px]">
                                    Open your existing Safe Accounts<br /> or create a new one
                                </p>

                                <Link
                                    href='/setup-safe-account'
                                    className="flex flex-col cursor-pointer transform transition-transform hover:scale-[1.02] items-center space-x-2 bg-black text-white px-4 py-3 mt-3 mx-7 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        {/* Display MetaMask icon if MetaMask is the connected wallet */}
                                        {primaryWallet?.connector?.name === "MetaMask" && (
                                            <Image
                                                src="/MetaMask.png"
                                                alt="MetaMask"
                                                width={24}
                                                height={24}
                                                className="object-fill"
                                                priority
                                            />
                                        )}
                                        <span className="font-londrinaLight text-[12px] sm:text-[16px] md:text-[20px]">Continue with {primaryWallet?.connector?.name} Wallet</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {/* Display MetaMask icon if MetaMask is the connected wallet */}
                                        {primaryWallet?.connector?.name === "MetaMask" && (
                                            <Image
                                                src="/Basketball.png"
                                                alt="Basektball"
                                                width={18}
                                                height={10}
                                                className="object-fill"
                                                priority
                                            />

                                        )}
                                        <span className="font-londrinaLight text-[12px] sm:text-[16px] md:text-[20px]">eth: {primaryWallet?.address?.slice(0, 6)}...{primaryWallet?.address?.slice(-4)}</span>
                                    </div>

                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-6 sm:space-y-8 md:space-y-12 text-center w-full">
                                <Modal>
                                    <button className="group relative w-full">
                                        <div className="w-full p-2 group-hover:bg-black transition duration-300 ease-in-out">
                                            <h2 className="text-white font-londrina font-[1000] text-2xl sm:text-3xl md:text-[35px] leading-tight sm:leading-relaxed md:leading-[56.78px] transition duration-300 ease-in-out">
                                                <span className="group-hover:hidden">Connect Wallet</span>
                                                <span className="hidden group-hover:inline underline text-[#909B0E]">
                                                    &gt; Connect Wallet
                                                </span>
                                            </h2>
                                        </div>
                                    </button>
                                </Modal>
                                <button
                                    className="group relative w-full"
                                    onClick={handleWatchAccount}
                                >
                                    <div className="w-full p-2 group-hover:bg-black transition duration-300 ease-in-out">
                                        <h2 className="text-white font-londrina font-[1000] text-2xl sm:text-3xl md:text-[35px] leading-tight sm:leading-relaxed md:leading-[56.78px] transition duration-300 ease-in-out">
                                            <span className="group-hover:hidden">Watch Any Account</span>
                                            <span className="hidden group-hover:inline underline text-[#909B0E]">
                                                &gt; Watch Any Account
                                            </span>
                                        </h2>
                                    </div>
                                </button>
                            </div>
                        )}
                    </GameBoyWallet>
                </div>
            </div>

        </div>
    );
}

// export default function Home() {
//     return (
//         <Dashboard />
//     );
// }
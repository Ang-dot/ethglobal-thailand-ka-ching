'use client'

import React from 'react';

const GameBoyWallet = ({ children }) => {
    return (
        <div className="w-full max-w-lg transform transition-transform hover:scale-102 rounded-lg shadow-lg">
            {/* Main console body */}
            <div className="bg-[#CFC2AB] p-4 sm:p-6 md:p-8 w-full aspect-square">
                {/* Screen area */}
                <div className="bg-[#867C1D] ps-5 sm:ps-6 md:ps-7 lg:ps-8 pt-5 sm:pt-6 md:pt-7 lg:pt-8 w-full aspect-[4/3]">
                    <div className="bg-[#909b0e] w-full h-full flex relative">
                        {/* Scrollable content container */}
                        <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                            <div className="p-4 min-h-full flex items-center justify-center">
                                <div className="w-full flex flex-col items-center justify-center">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Control buttons */}
                <div className="flex items-center pt-4 sm:pt-5 md:pt-7 gap-2 sm:gap-3 md:gap-3">
                    {/* D-Pad and Small squares in the same flex container */}
                    <div className="flex items-center">
                        {/* Cross button */}
                        <div className="grid grid-rows-3 grid-flow-col gap-0 pe-2">
                            <div></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-neutral-500"></div>
                            <div></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-neutral-500"></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-neutral-500"></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-neutral-500"></div>
                            <div></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-neutral-500"></div>
                            <div></div>
                        </div>

                        {/* Small squares section */}
                        <div className="grid grid-rows-2 grid-flow-col gap-0">
                            <div></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-neutral-500"></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-neutral-500"></div>
                            <div></div>
                            <div></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-neutral-500"></div>
                            <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-neutral-500"></div>
                            <div></div>
                        </div>
                    </div>

                    {/* A/B buttons */}
                    <div className="flex gap-2 sm:gap-3 md:gap-3">
                        <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-16 h-10 sm:w-20 sm:h-12 md:w-20 md:h-12 lg:w-[86.17px] lg:h-[57.44px] rounded-sm"></button>
                        <button className="bg-red-600 hover:bg-red-700 transition-colors w-16 h-10 sm:w-20 sm:h-12 md:w-20 md:h-12 lg:w-[86.17px] lg:h-[57.44px] rounded-sm"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameBoyWallet;
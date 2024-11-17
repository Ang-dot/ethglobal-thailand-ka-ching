import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const GameRules = ({ setIsOpen }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
                <div className="relative bg-[#11172A] rounded-lg max-w-3xl w-full shadow-2xl p-8">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 z-50 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Modal Content */}
                    <div className="p-6">
                        {/* Title */}
                        <h2 className="text-pink-500 font-pressStart2P text-2xl md:text-3xl text-center mb-8 animate-pulse">
                            How To Play?
                        </h2>

                        {/* Rules */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/tuktuk.png"
                                    alt="Tuk-Tuk"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 object-contain"
                                />
                                <p className="text-white font-londrina text-xl">
                                    Tuk-Tuk defeats Traffic Jam (zips through the jam)
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/traffic_jam.png"
                                    alt="Traffic Jam"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 object-contain"
                                />
                                <p className="text-white font-londrina text-xl">
                                    Traffic Jam defeats Food Cart (blocks the food cart from moving)
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/food_truck.png"
                                    alt="Food Cart"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 object-contain"
                                />
                                <p className="text-white font-londrina text-xl">
                                    Food Cart defeats Tuk-Tuk (the cart feeds the hungry driver)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameRules;
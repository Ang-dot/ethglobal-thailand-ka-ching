'use client'

import React, { useState } from 'react';
import GameBoyWallet from '../main/GameBoyWallet';
import Image from 'next/image';
import { Copy, MoveRight, X } from 'lucide-react';

const CreateTransaction = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, 3));
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <BasicSetup
                    handleInputChange={handleInputChange}
                    nextStep={nextStep}
                />;
            case 2:
                return <TransConfirmation
                    handleInputChange={handleInputChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />;
            default:
                return <BasicSetup />;
        }
    };

    return (
        <div className="min-h-screen bg-customWhiteBackground p-4 md:p-8 mx-auto">
            {renderStep()}
        </div>
    );
};

const BasicSetup = ({ nextStep }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };
    const [isAIClicked, setIsAIClicked] = useState(false);

    return (
        <div className="min-h-[calc(100vh-56px)] pt-28 flex flex-col xl:flex-row gap-8 mx-auto lg:max-w-7xl">
            <div className="flex flex-col space-y-6 p-1 flex-1 w-full">
                <div className="pixelCard transform space-y-6 p-8">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-londrina text-black text-[36px]">New Transaction</h2>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    className="w-4 h-4"
                                >
                                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                </svg>
                            </div>
                            <span className="text-black">Ethereum</span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm text-gray-600">Recipient Address</label>
                            <div className="flex items-center border border-black rounded-md p-2">
                                <div className="w-6 h-6 bg-green-600 rounded-sm mr-2" />
                                <input
                                    type="text"
                                    placeholder="matto:"
                                    className="flex-1 bg-transparent text-black focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-600">Amount</label>
                            <div className="flex items-center">
                                <div className="border border-gray-500 rounded-md w-full flex">
                                    <input
                                        type="text"
                                        placeholder="0"
                                        className="flex-1 p-2 mr-2 bg-white text-black w-[90%] focus:outline-none"
                                    />
                                    <button className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm m-2">
                                        MAX
                                    </button>
                                </div>
                                <div className="ml-2 flex items-center space-x-2 border border-gray-500 text-black rounded-md p-2">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            className="w-4 h-4"
                                        >
                                            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                        </svg>
                                    </div>
                                    <span>ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleSubmit}
                        className="pixelBtn w-fit ml-auto transform transition-transform hover:scale-[1.02]"
                    >
                        Next
                    </button>

                </div>
                <div className="pixelCard transform space-y-6 p-4">
                    {/* AI Risk Assessment */}
                    <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-londrina text-black text-[30px]">All Clear! No Fraud Detected</h3>
                                <p className="text-sm text-gray-600">Our AI's got your back—nothing suspicious here, just smooth sailing!</p>
                                <p className='text-md text-red-500 flex flex-row cursor-pointer' onClick={() => setIsAIClicked(true)}>View AI Explanation <MoveRight /></p>
                            </div>
                            <Image
                                src="/PredictAI.png"
                                alt="predict ai"
                                width={60}
                                height={60}
                                className="object-fill"
                                priority
                            />
                        </div>
                        <button className="pixelBtn px-4 py-2 mt-4 transform transition-transform hover:scale-[1.02]">
                            Predict Fraud
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <GameBoyWallet>
                    {/* Status Display */}
                    <div className="p-4 text-white w-full flex flex-col items-start">
                        <h3 className="text-xl font-londrina text-[40px] mb-4">Transaction Status</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full bg-white text-green-700 flex items-center justify-center">1</div>
                                <span>Create</span>
                            </div>
                            <div className="border-l-2 border-gray-300 h-6 ms-3"></div>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <span>Confirmation (0 of 2)</span>
                            </div>
                            <div className="border-l-2 border-gray-300 h-6 ms-3"></div>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <span>Can be executed</span>
                            </div>
                        </div>
                    </div>
                </GameBoyWallet>
            </div>
            {/* Modal Overlay */}
            {isAIClicked && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg border-8 border-[#D7D3CD] w-full max-w-md relative">
                        <div className='flex justify-end items-end '>
                            <button
                                className="text-gray-400 hover:text-gray-600 bg-black"
                                onClick={() => setIsAIClicked(false)}
                            >
                                <X />
                            </button>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <Image
                                src="/Brain2.png"
                                alt="Brain 2"
                                width={150}
                                height={150}
                                className="object-fill"
                                priority
                            />
                            <p className='font-londrina text-lg py-3'>Headline</p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};

const TransConfirmation = ({ nextStep, prevStep }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div className="min-h-[calc(100vh-56px)] pt-28 flex flex-col xl:flex-row gap-8 mx-auto">
            <div className="flex flex-col space-y-6 p-1 flex-1 w-full">
                <div className='pixelCard transform space-y-6 p-8'>
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-londrina text-black text-[40px]">Confirm Transaction</h2>
                        <div className="flex items-center space-x-2 text-black">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    className="w-4 h-4"
                                >
                                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                </svg>
                            </div>
                            <span>Ethereum</span>
                        </div>
                    </div>

                    {/* Transaction Details */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Send:</span>
                                <div className="flex items-center text-black">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            className="w-4 h-4"
                                        >
                                            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                        </svg>
                                    </div>
                                    <span className="ps-2">Ethereum 0.01</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-black">
                                <span className="text-gray-600">To:</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full" />
                                    <div>
                                        <div>Elise</div>
                                        <div className="text-sm text-gray-600">matic: 0xhsuhshs</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 text-black">
                            <div className="flex justify-between items-center border border-black rounded-md p-3">
                                <span>Advance Details</span>
                                <span className="text-gray-600">native transfer</span>
                            </div>

                            <div className="flex justify-between items-center border border-black rounded-md p-3">
                                <span>Balance Charge</span>
                                <span className="text-gray-400">No balance charge detected</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-black">Confirm</h3>
                            <p className="text-sm text-gray-600">You're about to create and confirm the transaction</p>
                        </div>
                    </div>


                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={prevStep}
                            className="pixelWhiteBtn"
                        >
                            Back
                        </button>
                        <button
                            // onClick={handleSubmit}
                            className="pixelBtn"
                        >
                            Sign
                        </button>
                    </div>
                </div>
            </div>

            <div className="">
                <GameBoyWallet>
                    {/* Status Display */}
                    <div className="p-4 text-white w-full h-full flex flex-col items-start">
                        <h3 className="font-londrina mb-4">Transaction Status</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-300">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <span>Create</span>
                            </div>
                            <div className="border-l-2 border-gray-300 h-6 ms-3"></div>
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full bg-white text-green-700  flex items-center justify-center">2</div>
                                <span>Confirmation (0 of 2)</span>
                            </div>
                            <div className="border-l-2 border-gray-300 h-6 ms-3"></div>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <span>Can be executed</span>
                            </div>
                        </div>
                    </div>
                </GameBoyWallet>
            </div>
        </div>
    );
};

export default CreateTransaction;
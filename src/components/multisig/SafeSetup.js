'use client'

import React, { useState } from 'react';
import GameBoyWallet from '../main/GameBoyWallet';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import Link from "next/link";

const SafeSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    network: 'Ethereum',
    signers: ['0xBf...A413'],
    threshold: 1,
  });

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
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
        />;
      case 2:
        return <SignersConfirmation
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />;
      case 3:
        return <Review
          formData={formData}
          prevStep={prevStep}
          handleCreateAccount={() => console.log('Creating account with:', formData)}
        />;
      default:
        return <BasicSetup />;
    }
  };

  return (
    <div className="min-h-screen bg-customWhiteBackground p-4 md:p-8">
      <div className="min-h-[calc(100vh-56px)] pt-28">
        <ProgressSteps currentStep={currentStep} />
        {renderStep()}
      </div>
    </div>
  );
};

const BasicSetup = ({ formData, handleInputChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col space-y-6 p-1 flex-1 w-full">
        <div className="pixelCard transform transition-transform">
          <div className="p-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name here"
                  className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:[#FFF0BE] focus:border-transparent text-black"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-black">Select Networks</h2>
                <p className="text-gray-600">
                  Choose which networks you want your account to be active on.
                  You can add more networks later
                </p>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-between bg-white"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          className="w-5 h-5"
                        >
                          <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                        </svg>
                      </div>
                      <span className="text-black">{formData.network}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                By continuing, you agree to our terms of use and privacy policy
              </p>

              <div className="flex justify-between">
                <Link href="/">
                  <button
                    type="button"
                    className="pixelWhiteBtn transform transition-transform hover:scale-[1.02]"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="pixelBtn transform transition-transform hover:scale-[1.02]"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <GameBoyWallet>
        <div className="w-full h-full p-6 flex flex-col">
          <h1 className="text-white font-londrina text-4xl mb-8">Your Safe Preview</h1>

          <div className="space-y-6">
            {/* Wallet Row */}
            <div className="flex items-center justify-between">
              <span className="text-white text-xl">Wallet</span>
              <div className="flex items-center gap-2">
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
                <span className="text-white text-lg">0xADb1...97F9</span>
              </div>
            </div>
          </div>
        </div>
      </GameBoyWallet>
    </div>
  );
};

const SignersConfirmation = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-center">
      <div className="pixelCard transform transition-transform flex-1 w-full">
        <div className="p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value="Signer 1"
                  disabled
                  className="w-full p-3 border bg-white border-gray-300 rounded-lg mr-4 text-black"
                />
                <div className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg bg-white">
                  <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="/Basketball.png"
                      alt="Wallet Logo"
                      width={20}
                      height={20}
                      className="object-fill w-full h-full"
                      priority
                    />
                  </div>
                  <span className="text-black text-sm">{formData.signers[0]}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Your connected wallet</p>
            </div>

            <button
              type="button"
              className="flex items-center text-[#909B0E] hover:text-[#7A830B]"
            >
              <span className="mr-2">+</span>
              Add new signer
            </button>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-black">Threshold</h2>
              <p className="text-gray-600">Any transaction requires the confirmation of:</p>
              <div className="flex items-center space-x-2">
                <select
                  name="threshold"
                  value={formData.threshold}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded bg-white text-black"
                >
                  <option value={1}>1</option>
                </select>
                <span className="text-black">out of {formData.signers.length} signer(s)</span>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="pixelWhiteBtn transform transition-transform hover:scale-[1.02]"
              >
                Back
              </button>
              <button
                type="submit"
                className="pixelBtn transform transition-transform hover:scale-[1.02]"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <GameBoyWallet>
        <div className="w-full h-full p-6 flex flex-col">
          <h1 className="text-white font-londrina text-4xl mb-8">Your Safe Preview</h1>

          <div className="space-y-6">
            {/* Wallet Row */}
            <div className="flex items-center justify-between">
              <span className="text-white text-xl">Wallet</span>
              <div className="flex items-center gap-2">
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
                <span className="text-white text-lg">0xADb1...97F9</span>
              </div>
            </div>

            {/* Name Row */}
            <div className="flex items-center justify-between">
              <span className="text-white text-xl">Name</span>
              <span className="text-white text-lg">Elis's 1st acc</span>
            </div>

            {/* Network Row */}
            <div className="flex items-center justify-between">
              <span className="text-white text-xl">Network(s)</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </GameBoyWallet>
    </div>
  );
};

const Review = ({ formData, prevStep, handleCreateAccount }) => {
  const [paymentOption, setPaymentOption] = useState('later');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateAccount();
  };

  const handleCopy = (signer) => {
    // navigator.clipboard.writeText(signer);
  };

  const handleShare = () => {
    // Add your share functionality here
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-xl mx-auto items-center">
      <div className="pixelCard transform transition-transform flex-1 w-full">
        <div className="p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <h1 className="font-londrina text-[50px] text-[#221B1A]">{formData.name || "Elise's 1st Acc"}</h1>

            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#8F7E7C] font-semibold">Network(s)</span>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                  </svg>
                </div>

              </div>
              <span className="text-gray-500">|</span>
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#8F7E7C] font-semibold">Threshold</span>
                <span className="font-bold text-[#221B1A] text-[20px]">{formData.threshold}/1 Signers</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[#8F7E7C] font-semibold">Signers</span>
              {formData.signers.map((signer, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center w-full">
                    <div className="flex items-center space-x-2 flex-grow">
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
                      <span className="text-[#221B1A]">{signer}</span>
                      <button
                        type="button"
                        onClick={handleCopy(signer)}
                        className="p-1 hover:bg-gray-100 rounded-md"
                        title="Copy signer"
                      >
                        <Copy className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="ml-auto p-1 hover:bg-gray-100 rounded-md"
                      title="Share"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full h-px bg-gray-200 mt-4 mb-4" />
                </div>

              ))}
            </div>

            <div className="bg-[#FFFDEA] p-6 rounded-lg space-y-4 border-4 border-solid border-black">
              <h3 className="font-bold text-[#221B1A] text-[20px]">Before we continue...</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#221B1A]">There will be a one-time activation fee</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#221B1A]">If you choose to pay later, the fee will be included with the first transaction you make.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#221B1A]">Safe doesn't profit from the fees.</span>
                </li>
              </ul>
              <div className="flex gap-4 flex-col md:flex-row lg:flex-row">
                <label
                  className={`flex-1 relative p-3 border rounded-lg cursor-pointer ${paymentOption === 'now'
                    ? 'border-red-500 bg-[#F553221A]'
                    : 'border-red-500'
                    }`}
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="now"
                      checked={paymentOption === 'now'}
                      onChange={() => setPaymentOption('now')}
                      className="appearance-none h-4 w-4 rounded-full border border-red-500 checked:border-red-500 checked:bg-red-500 relative
            before:content-[''] before:block before:absolute before:w-2 before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
                    />
                  </div>
                  <div className="pl-6">
                    <span className="font-bold text-[#F55322] block">Pay Now</span>
                    <span className="text-sm block text-gray-500">≈ 0.00381 ETH</span>
                  </div>
                </label>

                <label
                  className={`flex-1 relative p-3 border rounded-lg cursor-pointer ${paymentOption === 'later'
                    ? 'border-red-500 bg-[#F553221A]'
                    : 'border-red-500'
                    }`}
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="later"
                      checked={paymentOption === 'later'}
                      onChange={() => setPaymentOption('later')}
                      className="appearance-none h-4 w-4 rounded-full border border-red-500 checked:border-red-500 checked:bg-red-500 relative
            before:content-[''] before:block before:absolute before:w-2 before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
                    />
                  </div>
                  <div className="pl-6">
                    <span className="font-bold text-[#F55322] block">Pay Later</span>
                    <span className="text-sm block text-red-500">with the first transaction</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-between gap-4 flex-col md:flex-row lg:flex-row">
              <button
                type="button"
                onClick={prevStep}
                className="pixelWhiteBtn transform transition-transform hover:scale-[1.02] h-[40px]"
              >
                Back
              </button>
              <button
                type="submit"
                className="pixelBtn transform transition-transform hover:scale-[1.02] h-[40px]"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Set Up The Basics" },
    { number: 2, label: "Signers & Confirmation" },
    { number: 3, label: "Review" }
  ];

  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center">
              <span
                className={`h-8 w-8 rounded-full ${currentStep >= step.number ? 'bg-[#909B0E]' : 'bg-gray-300'} text-white flex items-center justify-center`}
              >
                {currentStep > step.number ? '✓' : step.number}
              </span>
              <span
                className={`ml-4 ${currentStep >= step.number ? 'text-[#909B0E] font-medium' : 'text-gray-500'}`}
              >
                {step.label}
              </span>
            </div>
            {/* Line between steps, shown only if not the last step */}
            {index < steps.length - 1 && (
              <div className="hidden sm:block flex-1 mx-4 border-t-2 border-gray-300"></div>)}

            {index < steps.length - 1 && (
              <div className="block sm:hidden ml-4 border-l-2 border-gray-300 h-6 sm:h-10"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};



export default SafeSetup;
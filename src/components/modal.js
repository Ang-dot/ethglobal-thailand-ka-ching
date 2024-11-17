"use client"

import React, { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { IDKitWidget, VerificationLevel, useIDKit } from '@worldcoin/idkit'
import { DynamicWidget, useDynamicContext, useSwitchWallet, useUserWallets } from '../lib/dynamic';
import useStore from "@/utils/store";
import Image from 'next/image';

const Verification = ({ onSuccess }) => {
    const [isVerifying, setIsVerifying] = useState(false);

    const handleVerify = useCallback(async (proof) => {
        setIsVerifying(true);
        try {
            const res = await fetch("/api/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(proof),
            });
            if (!res.ok) {
                throw new Error("Verification failed.");
            }
            onSuccess(proof);
        } catch (error) {
            console.error(error);
        } finally {
            setIsVerifying(false);
        }
    }, [onSuccess]);

    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <p className="text-center text-gray-600 mb-8">
                Please verify your identity to continue
            </p>

            <div className="space-y-4">
                <IDKitWidget
                    app_id={process.env.NEXT_PUBLIC_WLD_APP_ID}
                    action={process.env.NEXT_PUBLIC_WLD_ACTION_ID}
                    onSuccess={handleVerify}
                    verification_level={VerificationLevel.Device}
                    credential_types={['orb', 'phone']}
                >
                    {({ open }) => (
                        <button
                            onClick={open}
                            className="w-full flex items-center justify-between p-4 bg-white rounded hover:bg-gray-50 transition-colors"
                            disabled={isVerifying}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                    <img src="/wld.svg" alt="WorldID" className="w-6 h-6" />
                                </div>
                                <span>{isVerifying ? 'Verifying...' : 'Verify with WorldID'}</span>
                            </div>
                        </button>
                    )}
                </IDKitWidget>
            </div>
        </>
    );
};

const ConnectWallet = ({ onConnect }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-4">Connect Wallet</h2>
            <button onClick={onConnect} className="w-full flex items-center justify-between p-4 bg-white rounded hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <img src="/dynamic.svg" alt="Dynamic" className="w-6 h-6" />
                    </div>
                    <span>Connect with Wallet </span>
                </div>
            </button>
        </>
    );
};

const PushProtocolStep = ({ onNext }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-2">Initializing Push Protocol…</h2>
            <div className="flex flex-col justify-center items-center w-full">
                <Image
                    src="/PushPC.png"
                    alt="pp"
                    width={120}
                    height={120}
                    className="object-fill"
                />
                <p className="text-lg font-light text-center">Bringing real-time updates to your fingertips!</p>
            </div>
            <button onClick={onNext} className="w-full flex items-center justify-between p-4 bg-white rounded hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <img src="/check.svg" alt="Check" className="w-6 h-6" />
                    </div>
                    <span>Next</span>
                </div>
            </button>
        </>
    );
};

const FinalStep = ({ onClose }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-4">Final Step</h2>
            <button onClick={onClose} className="w-full flex items-center justify-between p-4 bg-white rounded hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <img src="/check.svg" alt="Check" className="w-6 h-6" />
                    </div>
                    <span>Done</span>
                </div>
            </button>
        </>
    );
};

const ProgressBar = ({ currentStep }) => {
    const steps = [
        "Verify with World ID",
        "Connect Your Wallet",
        "Final Step"
    ];

    return (
        <div className="w-full px-6 py-4">
            <div className="bg-gray-200 h-1 flex items-center justify-between">
                {/* First section */}
                <div className={`w-1/3 ${currentStep >= 0 ? 'bg-[#909B0E]' : 'bg-gray-200'} h-1 flex items-center`}>
                    <div className={`${currentStep >= 0 ? 'bg-[#909B0E]' : 'bg-white'} h-6 w-6 rounded-full shadow flex items-center justify-center`}>
                        {currentStep > 0 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        ) : currentStep === 0 ? (
                            <div className="h-3 w-3 bg-white rounded-full"></div>
                        ) : null}
                    </div>
                </div>

                {/* Second section */}
                <div className={`w-1/3 flex justify-between ${currentStep >= 1 ? 'bg-[#909B0E]' : 'bg-gray-200'} h-1 items-center relative`}>
                    <div className={`${currentStep >= 1 ? 'bg-[#909B0E]' : 'bg-white'} h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2`}>
                        {currentStep > 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        ) : currentStep === 1 ? (
                            <div className="h-3 w-3 bg-white rounded-full"></div>
                        ) : null}
                    </div>
                </div>

                {/* Third section */}
                <div className={`w-1/3 flex justify-between ${currentStep >= 2 ? 'bg-[#909B0E]' : 'bg-gray-200'} h-1 items-center relative`}>
                    <div className={`${currentStep >= 2 ? 'bg-[#909B0E]' : 'bg-white'} h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2`}>
                        {currentStep > 2 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        ) : currentStep === 2 ? (
                            <div className="h-3 w-3 bg-white rounded-full"></div>
                        ) : null}
                    </div>
                    <div className={`${currentStep >= 3 ? 'bg-[#909B0E]' : 'bg-white'} h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3`}>
                        {currentStep === 3 ? (
                            <div className="h-3 w-3 bg-white rounded-full"></div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

const STEP_CHANGE_EVENT = 'verificationStepChange';

const broadcastStepChange = (step) => {
    localStorage.setItem('verificationStep', step.toString());
    const event = new CustomEvent(STEP_CHANGE_EVENT, { detail: step });
    window.dispatchEvent(event);
};

export const Modal = ({ children }) => {
    const { isMainModalOpen, setIsMainModalOpen } = useStore();
    const { step, setStep } = useStore();
    // const { isAuthSuccess, setAuthSuccess } = useStore();
    // const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    // const [isMainModalOpen, setIsMainModalOpen] = useState(false);
    const {
        setShowAuthFlow,
        primaryWallet,
        user,
        handleLogOut,
    } = useDynamicContext();

    useEffect(() => {
        const savedStep = localStorage.getItem('verificationStep');
        if (savedStep !== null) {
            setStep(parseInt(savedStep));
        }

        const handleStepChange = (event) => {
            console.log("Step Changes", event);
            setStep(event.detail);
        };

        window.addEventListener(STEP_CHANGE_EVENT, handleStepChange);

        return () => {
            window.removeEventListener(STEP_CHANGE_EVENT, handleStepChange);
        };
    }, []);

    

    // Watch for wallet connection


    // useEffect(() => {
      
    // }, [!Boolean(primaryWallet?.address)]);

    // useEffect(() => {
    //     if (isAuthSuccess) {
    //         setIsMainModalOpen(true);
    //         updateStep(2);
    //     }
    // }, [isAuthSuccess]);


    // Watch for Dynamic auth flow closure without connection
    // useEffect(() => {
    //     const handleMessage = (event) => {
    //         console.log('Received message event:', event);
    //         if (event.data.type === 'DYNAMIC_AUTH_MODAL_CLOSE') {
    //             setIsWalletModalOpen(false);
    //         }
    //     };

    //     window.addEventListener('message', handleMessage);
    //     return () => window.removeEventListener('message', handleMessage);
    // }, []);

    const updateStep = (newStep) => {
        setStep(newStep);
        broadcastStepChange(newStep);
    };

    // const onSuccess = useCallback((proof) => {
    //     console.log("Verification successful!", proof);
    //     updateStep(1);
    // }, []);

    const handleVerificationSuccess = (proof) => {
        updateStep(1);
    };

    // const handleVerify = async (proof) => {
    //     const res = await fetch("/api/verify", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(proof),
    //     })
    //     if (!res.ok) {
    //         throw new Error("Verification failed.");
    //     }
    // }

    const handleConnect = (e) => {
        e.preventDefault();
        // setIsWalletModalOpen(true);

        if (setShowAuthFlow) {
            setShowAuthFlow(true);
            setIsMainModalOpen(false);
        } else {
            console.error('setShowAuthFlow is not available');
        }
    };

    const handleNext = () => {
        updateStep(3);
    };

    const handleClose = () => {
        updateStep(4);
        // setIsMainModalOpen(false);
    };

    const renderStepContent = () => {
        switch (step) {
            case 0:
                return <Verification onSuccess={handleVerificationSuccess} />;
            case 1:
                return <ConnectWallet onConnect={handleConnect} />;
            case 2:
                return <PushProtocolStep onNext={handleNext} />;
            case 3:
                return <FinalStep onClose={handleClose} />;
            default:
                return null;
        }
    }

    return (
        <Dialog
            open={isMainModalOpen}
            onOpenChange={() => setIsMainModalOpen(!isMainModalOpen)}
        >
            <DialogTrigger asChild>
                {/* <div onClick={() => setIsMainModalOpen(true)}> */}
                {children}
                {/* </div> */}
            </DialogTrigger>

            <DialogContent
                className="border-[16px] border-stone-300 bg-white p-0 w-[90vw] max-w-xl"
                onPointerDownOutside={(e) => {
                    // if (isWalletModalOpen) {
                    //     e.preventDefault();
                    // }
                }}
                onEscapeKeyDown={(e) => {
                    // if (isWalletModalOpen) {
                    //     e.preventDefault();
                    // }
                }}
            >
                <div className="p-6 bg-fuchsia-50 border-4 border-black rounded-sm font-londrina">
                    <div className="mb-8">
                        <DialogClose
                            className="border-4 border-black bg-stone-300 absolute right-0 top-0 rounded-sm w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity"
                            onClick={(e) => {
                                // if (isWalletModalOpen) {
                                //     e.preventDefault();
                                // }
                            }}
                        >
                            <X className="text-neutral-400 h-6 w-6" />
                        </DialogClose>
                    </div>

                    <ProgressBar currentStep={step} className="mb-4" />

                    {renderStepContent()}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;


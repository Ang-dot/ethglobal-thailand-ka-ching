'use client'

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { nanoid } from 'nanoid';
import { ethers } from 'ethers';
import Link from "next/link";
import GameContext from "../../utils/GameProvider";
import GameNavbar from './GameNavbar';
import GameHistory from './GameHistory';
import GameRules from './GameRules';

const GameHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateBtnClicked, setIsCreateBtnClicked] = useState(false);
  const [isJoinBtnClicked, setIsJoinBtnClicked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: '', description: '' });
  const [isGameFinished, setGameFinish] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameDetails, setGameDetails] = useState({});
  const [gameID, setGameID] = useState('');
  const {
    state,
    setChoice,
    setUsername,
    setGameId,
    fetchGameDetails
  } = useContext(GameContext);

  const reset = () => {
    const newId = nanoid();
    setGameId(newId);
    setChoice(1);
  };

  const showNotification = (title, description) => {
    setToastMessage({ title, description });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showNotification(
      "Game ID Copied!",
      "Send this ID to your opponent."
    );
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/gameBackground.webp')",
          }}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Header */}
      <GameNavbar
        fetchGameDetails={fetchGameDetails}
        // fetchPlayerDetails={fetchPlayerDetails}
        setGameDetails={setGameDetails}
        // setPlayerDetails={setPlayerDetails}
        setIsModalOpen={setIsModalOpen}
        gameID={gameID}
        setGameID={setGameID}
        showNotification={showNotification}
        setGameFinish={setGameFinish}
        setIsOpen={setIsOpen}
      />

      {/* Create a container with minimum height that accounts for navbar */}
      <div className="min-h-[calc(100vh-56px)] flex flex-col pt-20">
        {/* Main content wrapper */}
        <div className="flex-1 flex items-center justify-center">
          {!isModalOpen ? (
            <main className="relative flex flex-col items-center justify-center">
              {/* Vehicle Icons */}
              <div className="w-full flex justify-center py-16">
                <div className="w-full flex flex-row items-center justify-center gap-12">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden">
                    <Image
                      src="/tuktuk.png"
                      alt="Wallet Logo"
                      width={64}
                      height={64}
                      className="object-fill w-full h-full"
                      priority
                    />
                  </div>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden">
                    <Image
                      src="/traffic_jam.png"
                      alt="Wallet Logo"
                      width={64}
                      height={64}
                      className="object-fill w-full h-full"
                      priority
                    />
                  </div>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden">
                    <Image
                      src="/food_truck.png"
                      alt="Wallet Logo"
                      width={64}
                      height={64}
                      className="object-fill w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Game Title */}
              <h1 className="font-pressStart2P text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-pink-500 mb-4 animate-pulse">
                Play & Win $ETH
              </h1>

              {/* Subtitle */}
              <p className="font-pressStart2P text-gray-300 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-10 text-center pb-4">
                Choices are encrypted and stored securely on the Ethereum blockchain.
              </p>

              {/* Game Buttons */}
              <div className="flex flex-col md:flex-row gap-8 font-londrina">
                <button className="pixelWhiteBtn w-[250px] h-16" onClick={() => {
                  setIsJoinBtnClicked(true);
                }}>
                  Join Game
                </button>
                <button className="pixelBtn w-[250px] h-16" onClick={() => {
                  reset();
                  setIsCreateBtnClicked(true);
                }}>
                  Create Game
                </button>
              </div>

              {/* How to Play Button */}
              <button className="font-pressStart2P mt-8 text-white flex items-center gap-2" onClick={() => setIsOpen(true)}>
                <span className="text-2xl">💎</span>
                HOW TO PLAY
                <span className="text-2xl">💎</span>
              </button>

              {/* Modal Overlay */}
              {isOpen && (

                <GameRules
                  setIsOpen={setIsOpen}
                />
              )}

              {/* Modal Backdrop */}
              {isCreateBtnClicked && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  {/* Modal Content */}
                  <div className="bg-white rounded-lg w-[32rem] max-w-[90%] shadow-xl transform transition-all">
                    {/* Modal Header */}
                    <div className="border-b px-6 py-4 flex items-center justify-between">
                      <h3 className="font-londrina text-2xl">Create a game</h3>
                      <button
                        onClick={() => setIsCreateBtnClicked(false)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Modal Body */}
                    <div className="px-6 py-4 space-y-6">
                      {/* Username Field */}
                      <div className="space-y-2">
                        <label className="block font-londrina text-lg">
                          Username:
                        </label>
                        <input
                          type="text"
                          value={state.username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Vitalik Buterin"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>

                      {/* Game ID Field */}
                      <div className="space-y-2">
                        <label className="block font-londrina text-lg">
                          Game ID:
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            readOnly
                            value={state.gameId}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
                          />
                          <button
                            onClick={() => copyToClipboard(state.gameId)}
                            className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            <svg
                              className="h-5 w-5 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="border-t px-6 py-4 flex justify-end space-x-3">
                      <button
                        onClick={() => setIsCreateBtnClicked(false)}
                        className="pixelWhiteBtn transform transition-transform hover:scale-[1.02]"
                      >
                        Cancel
                      </button>
                      <Link href="/board">
                        <button
                          onClick={() => {
                            setIsCreateBtnClicked(false);
                            showNotification(
                              "Game Created!",
                              "May the odds be ever in your favour."
                            );
                          }}
                          className="pixelBtn transform transition-transform hover:scale-[1.02]"
                        >
                          Start Game
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Backdrop */}
              {isJoinBtnClicked && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  {/* Modal Content */}
                  <div className="bg-white rounded-lg w-[32rem] max-w-[90%] shadow-xl transform transition-all">
                    {/* Modal Header */}
                    <div className="border-b px-6 py-4 flex items-center justify-between">
                      <h3 className="font-londrina text-2xl">Join a game</h3>
                      <button
                        onClick={() => setIsJoinBtnClicked(false)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Modal Body */}
                    <div className="px-6 py-4 space-y-6">
                      <div className="space-y-2">
                        <label className="block font-londrina text-lg text-gray-700">
                          Username:
                        </label>
                        <input
                          type="text"
                          value={state.username}
                          placeholder="Vitalik Buterin"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block font-londrina text-lg text-gray-700">
                          Game ID:
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            onChange={(e) => {
                              setGameId(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="border-t px-6 py-4 flex justify-end space-x-3">
                      <button
                        onClick={() => setIsJoinBtnClicked(false)}
                        className="pixelWhiteBtn transform transition-transform hover:scale-[1.02]"
                      >
                        Cancel
                      </button>
                      <Link href="/board">
                        <button
                          onClick={() => {
                            setIsJoinBtnClicked(false);
                            showNotification(
                              "Game Joined!",
                              "May the odds be ever in your favour."
                            );
                          }}
                          className="pixelBtn transform transition-transform hover:scale-[1.02]"
                        >
                          Join Game
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Toast Notification */}
              {showToast && (
                <div className="fixed top-0 right-0 z-20 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm animate-slide-in-right">
                  <div className="flex items-start">
                    <div className="ml-3 w-150 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">{toastMessage.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{toastMessage.description}</p>
                    </div>
                    <button
                      className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setShowToast(false)}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </main>
          ) : (
            <main className="container relative flex flex-col text-white">
              <GameHistory
                gameID={gameID}
                gameDetails={gameDetails}
                setIsModalOpen={setIsModalOpen}
              />
            </main>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameHome;
import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight, Users } from 'lucide-react';
import GameBoyWallet from '../main/GameBoyWallet';

const Transactions = ({ transactions }) => {
  const [expandedTransactionIndex, setExpandedTransactionIndex] = useState(null);

  const toggleTransactionExpansion = (index) => {
    setExpandedTransactionIndex(index === expandedTransactionIndex ? null : index);
  };

  return (
    <div className="space-y-4 lg:max-w-7xl mx-auto p-4 min-h-[calc(100vh-56px)] pt-28">
      <h1 className="text-2xl font-bold mb-4 text-black">Transactions</h1>
      <div className="space-y-6">  {/* Added container with vertical spacing */}
        {transactions.map((transaction, index) => (
          <div key={index} className="pixelCard transform">
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
              onClick={() => toggleTransactionExpansion(index)}
            >
              <div className="text-sm font-medium text-black">{index}</div>
              <div className="flex text-sm font-medium text-black items-center"><ArrowUpRight /> Send</div>
              <div className="flex items-center text-sm font-medium text-black gap-x-1.5">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                  </svg>
                </div>{transaction.value} ETH</div>
              <div className="hidden sm:block text-sm text-black">{transaction.timestamp}</div>
              <div className="flex items-center text-sm text-black rounded-full bg-red-200 p-2"><Users /> 1 out of 2</div>

              <div className="flex items-center">
                {expandedTransactionIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 cursor-pointer" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 cursor-pointer" />
                )}
              </div>
            </div>
            {expandedTransactionIndex === index && (
              <div className="flex flex-col xl:flex-row items-center justify-center xl:items-start">
                <div className="px-12 py-5 text-black flex-1 w-full">
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

                      <div className="space-y-2 text-black">
                        <div className="flex items-center space-x-2">
                          <div>
                            <div>safeTxHash: 0xBf...A413</div>
                            <div>Domain Hash: 0xBf...A413</div>
                            <div>Message Hash: 0xBf...A413</div>
                            <div>Created: 25/10/2024, 15:28:59</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button className="pixelRedBtn">Reject</button>
                        <button className="pixelBtn">Confirm</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <GameBoyWallet>
                    <div className="p-4 text-white w-full h-full flex flex-col items-start">
                      <h3 className="text-xl font-londrina text-[40px] mb-4">Transaction Status</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center">1</div>
                          <span>Create</span>
                        </div>
                        <div className="border-l-2 border-gray-300 h-6 ms-3"></div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-white text-green-700 flex items-center justify-center">2</div>
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
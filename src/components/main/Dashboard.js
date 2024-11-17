'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import HeatMap from '../charts/HeatMap';
import DoughnutChart from '../charts/DoughnutChart';
import EthLoader from '../EthLoader';

const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "week",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "frequency",
                "type": "uint256"
            }
        ],
        "name": "TransactionFrequencyUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_week",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_frequency",
                "type": "uint256"
            }
        ],
        "name": "updateTransactionFrequency",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_week",
                "type": "uint256"
            }
        ],
        "name": "getTransactionFrequency",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = "0xa03943826246955aF459280D84BdFbEa66F7E42c";
const providerUrl = "https://sepolia.infura.io/v3/206aa1f4330a4ebc9969c8126a47a686";

const Dashboard = () => {
    const [weekData, setWeekData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isHeatLoading, setIsHeatLoading] = useState(true);
    const [isDonutLoading, setIsDonutLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchWeekData = async () => {
        setIsLoading(true);
        setIsHeatLoading(true);
        setIsDonutLoading(true);
        setError(null);

        if (typeof window.ethereum === 'undefined') {
            console.log("Ethereum provider not detected");
            setError("Ethereum provider not detected. Please install MetaMask or use a Web3-enabled browser.");
            setIsLoading(false);
            setIsHeatLoading(false);
            setIsDonutLoading(false);
            return;
        }

        try {
            // // const provider = new ethers.providers.Web3Provider(window.ethereum);  
            // const provider = new ethers.BrowserProvider(window.ethereum);
            // const signer = provider.getSigner();
            // const contract = new ethers.Contract(contractAddress, contractABI, signer);

            const provider = new ethers.JsonRpcProvider(providerUrl);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            const data = [];
            const weeks = Array.from({ length: 30 }, (_, i) => i + 1);
            for (let week of weeks) {
                try {
                    const value = await contract.getTransactionFrequency(week);
                    data.push({ week, value: parseInt(value.toString()) });
                } catch (weekError) {
                    console.error(`Error fetching data for week ${week}:`, weekError);
                }
            }

            if (data.length === 0) {
                setError("No data was retrieved from the contract. Please check if the contract has been properly deployed and populated with data.");
            } else {
                setWeekData(data);
            }
        } catch (err) {
            console.error("Error fetching data from contract:", err);
            setError(`Failed to fetch data: ${err.message}`);
        } finally {
            setIsLoading(false);
            setIsHeatLoading(false);
            setIsDonutLoading(false);
        }
    };

    useEffect(() => {
        fetchWeekData();
    }, []);

    const chartData = {
        labels: weekData.map(d => `Week ${d.week}`),
        datasets: [
            {
                label: 'Transaction Frequency per Week',
                data: weekData.map(d => d.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            }
        }
    };

    const riskyTransactionAlerts = [
        { "transactionID": "TX-1", "highGasFees": "High", "questionableContracts": "Low", "unusualTokenTransfer": "High", "repeatedTransactions": "Low", "suspiciousApprovals": "Low" },
        { "transactionID": "TX-2", "highGasFees": "Low", "questionableContracts": "High", "unusualTokenTransfer": "High", "repeatedTransactions": "Medium", "suspiciousApprovals": "Low" },
        { "transactionID": "TX-3", "highGasFees": "High", "questionableContracts": "Medium", "unusualTokenTransfer": "Low", "repeatedTransactions": "Medium", "suspiciousApprovals": "Medium" },
        { "transactionID": "TX-4", "highGasFees": "High", "questionableContracts": "High", "unusualTokenTransfer": "High", "repeatedTransactions": "Medium", "suspiciousApprovals": "Medium" },
        { "transactionID": "TX-5", "highGasFees": "Low", "questionableContracts": "High", "unusualTokenTransfer": "Medium", "repeatedTransactions": "Medium", "suspiciousApprovals": "Low" }
    ];

    const transactionTypeBreakdown = [
        { "transactionType": "Approvals", "transactionAmount": 54031.80 },
        { "transactionType": "Contract Interaction", "transactionAmount": 142967.99 },
        { "transactionType": "NFT Minting", "transactionAmount": 98456.39 },
        { "transactionType": "Token Transfer", "transactionAmount": 216490.95 }
    ];

    return (
        <div className="min-h-[calc(100vh-56px)] pt-28 flex flex-col lg:flex-col gap-8 mx-auto p-4 lg:max-w-7xl">
            {/* Top Row with Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Left Column - Takes 1/3 */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Total Asset Value Card */}
                    <div className="pixelCard bg-customWhiteBackground transform transition-transform hover:scale-[1.02] p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-black p-2 rounded-full">
                                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Asset Value</p>
                                <p className="text-2xl font-bold text-black">13.02 ETH</p>
                            </div>
                        </div>
                    </div>

                    {/* Native Swaps Card */}
                    <div className="pixelCard bg-customWhiteBackground transform transition-transform hover:scale-[1.02] p-6">
                        <h3 className="text-[#292F32] font-londrina font-[900] text-[16px] sm:text-[18px] md:text-[20px] mb-2">Introducing native swaps</h3>
                        <p className="text-[#1F1D29] font-londrina font-[100] text-[12px] sm:text-[14px] md:text-[16px] mb-4">
                            Experience our native swaps, powered by Dex Protocol! Trade seamlessly and efficiently with decoded transactions that are easy to understand.
                        </p>
                        <div className="flex gap-4">
                            <button className="pixelBtn w-[100px] text-black justify-center">
                                Try it now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Takes 2/3 */}
                <div className="lg:col-span-3">
                    <div className="pixelCard bg-customWhiteBackground transform transition-transform hover:scale-[1.02] p-6 h-full">
                        <h3 className="text-[#292F32] font-londrina font-[900] text-[16px] sm:text-[18px] md:text-[20px]">Other notes</h3>
                        <div className="mt-2 h-[220px]">
                            <EthLoader id="loader-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Analytics Cards Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-5 gap-6">
                {/* Risky Transaction Alerts Card */}
                <div className="2xl:col-span-2">
                    <div className="pixelCard bg-customWhiteBackground transform transition-transform hover:scale-[1.02] p-6 h-full">
                        <div className="pb-4">
                            <h3 className="text-[#292F32] font-londrina font-[900] text-[16px] sm:text-[18px] md:text-[20px]">
                                Risky Transaction Alerts
                            </h3>
                        </div>
                        <div className="pt-4 h-full">
                            {isHeatLoading ? (
                                <div className="h-[300px]"> {/* Adjust this height to match your chart */}
                                    <EthLoader id="loader-1" />
                                </div>
                            ) : error ? (
                                <p>{error}</p>
                            ) : weekData.length > 0 ? (
                                <HeatMap data={riskyTransactionAlerts} />
                            ) : (
                                <p>No data available</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 2xl:col-span-3">
                    {/* Transaction Frequency Card */}
                    <div className="lg:col-span-3">
                        <div className="pixelCard bg-customWhiteBackground transform transition-transform hover:scale-[1.02] p-6 h-full">
                            <div className="pb-4">
                                <h3 className="text-[#292F32] font-londrina font-[900] text-[16px] sm:text-[18px] md:text-[20px]">
                                    Transaction Frequency Over Time
                                </h3>
                            </div>
                            <div className="pt-4 h-full">
                                {isLoading ? (
                                    <div className="h-[300px]"> {/* Adjust this height to match your chart */}
                                        <EthLoader id="loader-2" />
                                    </div>
                                ) : error ? (
                                    <p>{error}</p>
                                ) : weekData.length > 0 ? (
                                    <div className="h-full">
                                        <Line data={chartData} options={chartOptions} />
                                    </div>
                                ) : (
                                    <p>No data available</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Transaction Type Breakdown Card */}
                    <div className="lg:col-span-2">
                        <div className="pixelCard bg-customWhiteBackground transform transition-transform hover:scale-[1.02] p-6 h-full">
                            <div className="pb-4">
                                <h3 className="text-[#292F32] font-londrina font-[900] text-[16px] sm:text-[18px] md:text-[20px]">Transaction Type Breakdown</h3>
                            </div>
                            <div className="pt-4 h-full">
                                {isDonutLoading ? (
                                    <div className="h-[300px]"> {/* Adjust this height to match your chart */}
                                        <EthLoader id="loader-3" />
                                    </div>
                                ) : error ? (
                                    <p>{error}</p>
                                ) : weekData.length > 0 ? (
                                    <div>
                                        <DoughnutChart data={transactionTypeBreakdown} />
                                        <div className="space-y-2 pt-4">
                                            {transactionTypeBreakdown.map((item, index) => (
                                                <div key={index} className="flex justify-between text-sm text-black">
                                                    <span>{item.transactionType}</span>
                                                    <span>${item.transactionAmount.toLocaleString()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <p>No data available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
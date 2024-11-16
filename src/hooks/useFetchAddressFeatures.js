import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "https://eth.blockscout.com/api/v2";
const HEADERS = { "Accept": "application/json" };

export const useFetchAddressFeatures = () => {
  const [features, setFeatures] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (address) => {
    if (!address) return;

    setLoading(true);
    try {
      const normalTransactions = await fetchPaginatedBlockscoutData(address, "transactions");
      const erc20Transfers = await fetchPaginatedBlockscoutData(address, "token-transfers", { type: "ERC-20" });

      const normalFeatures = calculateNormalFeatures(normalTransactions, address);
      const erc20Features = calculateERC20Features(erc20Transfers, address);

      setFeatures({
        ...normalFeatures,
        ...erc20Features,
      });
    } catch (error) {
      console.error("Error fetching address features:", error);
    } finally {
      setLoading(false);
    }
  };

  return { features, loading, fetchData };
};

const fetchPaginatedBlockscoutData = async (address, endpoint, queryParams = {}, retries = 3) => {
  let url = `${BASE_URL}/addresses/${address}/${endpoint}?${new URLSearchParams(queryParams).toString()}`;
  let dataItems = [];
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const response = await axios.get(url, { headers: HEADERS });
      dataItems = dataItems.concat(response.data.items || []);
      const nextPageParams = response.data.next_page_params;

      if (!nextPageParams) break;
      url = `${BASE_URL}/addresses/${address}/${endpoint}?${new URLSearchParams(nextPageParams).toString()}`;
    } catch (error) {
      console.log(`Error: ${error}. Retrying...`);
      attempt++;
      await new Promise(res => setTimeout(res, 2000 * attempt));
    }
  }

  return dataItems;
};

const calculateNormalFeatures = (transactions, address) => {
  if (!transactions.length) return emptyNormalFeatures();

  const processedData = transactions.map(tx => ({
    timestamp: new Date(tx.timestamp),
    from: tx.from?.hash.toLowerCase(),
    to: tx.to?.hash.toLowerCase(),
    valueEth: parseFloat(tx.value) / 1e18 || 0,
    createdContract: !!tx.created_contract,
    feeEth: parseFloat(tx.fee?.value || '0') / 1e18,
  }));

  const sent = processedData.filter(tx => tx.from === address.toLowerCase());
  const received = processedData.filter(tx => tx.to === address.toLowerCase());

  const timeDiffFirstLast = Math.abs((processedData[processedData.length - 1].timestamp - processedData[0].timestamp) / 60000);
  const sentTransaction = sent.length;
  const recvTransaction = received.length;
  const createdContractCount = sent.filter(tx => tx.createdContract).length;
  const maxValueRecv = received.length ? Math.max(...received.map(tx => tx.valueEth)) : 0;
  const avgValueRecv = received.length ? received.reduce((sum, tx) => sum + tx.valueEth, 0) / received.length : 0;
  const avgValueSent = sent.length ? sent.reduce((sum, tx) => sum + tx.valueEth, 0) / sent.length : 0;
  const totalEthSent = sent.reduce((sum, tx) => sum + tx.valueEth, 0);
  const totalEthBalance = received.reduce((sum, tx) => sum + tx.valueEth, 0) - totalEthSent;

  return {
    timeDiffFirstLast,
    sentTransaction,
    recvTransaction,
    createdContractCount,
    maxValueRecv,
    avgValueRecv,
    avgValueSent,
    totalEthSent,
    totalEthBalance,
  };
};

const calculateERC20Features = (transfers, address) => {
  if (!transfers.length) return emptyERC20Features();

  const processedData = transfers.map(tx => ({
    from: tx.from?.hash.toLowerCase(),
    to: tx.to?.hash.toLowerCase(),
    valueEth: parseFloat(tx.total?.value || '0') / 1e18,
    isToContract: !!tx.to?.is_contract,
    tokenAddress: tx.token?.address,
  }));

  const sent = processedData.filter(tx => tx.from === address.toLowerCase());
  const received = processedData.filter(tx => tx.to === address.toLowerCase());
  const toContracts = processedData.filter(tx => tx.isToContract);

  const erc20TotalEthRecv = received.reduce((sum, tx) => sum + tx.valueEth, 0);
  const erc20TotalEthSent = sent.reduce((sum, tx) => sum + tx.valueEth, 0);
  const erc20TotalEthSentContract = toContracts.reduce((sum, tx) => sum + tx.valueEth, 0);
  const erc20UniqueSentAddress = new Set(sent.map(tx => tx.to)).size;
  const erc20UniqueRecvTokenCount = new Set(received.map(tx => tx.tokenAddress)).size;

  return {
    erc20TotalEthRecv,
    erc20TotalEthSent,
    erc20TotalEthSentContract,
    erc20UniqueSentAddress,
    erc20UniqueRecvTokenCount,
  };
};

const emptyNormalFeatures = () => ({
  timeDiffFirstLast: 0,
  sentTransaction: 0,
  recvTransaction: 0,
  createdContractCount: 0,
  maxValueRecv: 0,
  avgValueRecv: 0,
  avgValueSent: 0,
  totalEthSent: 0,
  totalEthBalance: 0,
});

const emptyERC20Features = () => ({
  erc20TotalEthRecv: 0,
  erc20TotalEthSent: 0,
  erc20TotalEthSentContract: 0,
  erc20UniqueSentAddress: 0,
  erc20UniqueRecvTokenCount: 0,
});

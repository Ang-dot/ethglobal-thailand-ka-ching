'use client'

//Dynamic
import { DynamicContextProvider, mergeNetworks } from "../lib/dynamic";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  createConfig,
  WagmiProvider,
  useAccount,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { mainnet, sepolia, bitkubTestnet, hederaTestnet, rootstockTestnet, neonDevnet, celoAlfajores } from 'viem/chains';
import useStore from "@/utils/store";

const chainIcons = {
  25925: "/Bitkub.png",
  296: "/Hedera.jpg",
  31: "/Rootstock.png",
  245022926: "/Neon.png",
  44787: "/Celo.png",
  200002: "/Rome.jpg",
  21097: "/inco.jpeg",
}

const customEvmNetworks = [
  {
    blockExplorerUrls: ['https://rome.testnet.romeprotocol.xyz:1000/'],
    chainId: 200002,
    chainName: 'Rome Testnet',
    name: 'Rome Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'ROME',
      symbol: 'ROME',
    },
    networkId: 200002,
    rpcUrls: ['https://rome.testnet.romeprotocol.xyz/'],
    vanityName: 'Rome Testnet',
  },
  {
    blockExplorerUrls: ['https://explorer.rivest.inco.org/'],
    chainId: 21097,
    chainName: 'Inco Rivest Testnet',
    name: 'Inco Rivest Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'INCO',
      symbol: 'INCO',
    },
    networkId: 21097,
    rpcUrls: ['https://explorer.rivest.inco.org/'],
    vanityName: 'Inco Rivest Testnet',
  },
];

const formattedCustomNetworks = customEvmNetworks.map(network => ({
  blockExplorerUrls: [network.blockExplorerUrls[0]],
  chainId: network.chainId,
  name: network.name,
  rpcUrls: [network.rpcUrls[0]],
  nativeCurrency: network.nativeCurrency,
  networkId: network.networkId
}));

export const viemEvmNetworks = [
  ...formattedCustomNetworks,
  bitkubTestnet, 
  hederaTestnet, 
  rootstockTestnet, 
  neonDevnet, 
  celoAlfajores,
].map(chain => ({
  blockExplorerUrls: [
    chain.blockExplorers?.default?.url || chain.blockExplorerUrls?.[0]
  ],
  chainId: chain.id || chain.chainId,
  name: chain.name,
  iconUrls: [chainIcons[chain.id || chain.chainId]],
  rpcUrls: [
    chain.rpcUrls?.default?.http?.[0] ||
    chain.rpcUrls?.[0] || 
    chain.rpcUrls 
  ],
  nativeCurrency: chain.nativeCurrency,
  networkId: chain.id || chain.chainId
}));

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

const queryClient = new QueryClient();


export function Providers({ children }) {
  // const { setAuthSuccess } = useStore();
  const { setNetworks, evmNetworks } = useStore();
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <DynamicContextProvider
          settings={{
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID,
            walletConnectors: [EthereumWalletConnectors],
            overrides: {
              evmNetworks: (networks) => {
                networks = mergeNetworks(networks, viemEvmNetworks);
                setNetworks(networks);
                console.log(evmNetworks);
                return networks;
              },
            },
          }}
        >
          <DynamicWagmiConnector>
            {children}
          </DynamicWagmiConnector>
        </DynamicContextProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
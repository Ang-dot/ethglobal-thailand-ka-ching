import { create } from 'zustand'

const useStore = create((set, get) => ({
  // Existing state
  isMainModalOpen: false,
  step: 0,
  isAuthSuccess: false,
  evmNetworks: [],
  balance: '0.000',
  currentNetwork: [],

  setCurrentNetwork: async (primaryWallet) => {
    try {
      const chainId = await primaryWallet.connector.getNetwork();
      const matchingNetwork = get().evmNetworks.find(network =>
        network.chainId === chainId
      );
      

      if (matchingNetwork) {
        set({ currentNetwork: matchingNetwork });
        console.log('Current network set:', matchingNetwork);
      } else {
        console.warn('No matching network found in evmNetworks for the given chain IDs.');
      }
    } catch (error) {
      console.error('Error setting current network:', error);
    }
  },


  setBalance: async (primaryWallet) => {
    try {
      if (primaryWallet) {
        const balance = await primaryWallet.getBalance();
        const formattedBalance = parseFloat(balance).toFixed(4);
        set({ balance: formattedBalance });
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      set({ balance: '0.0000' });
    }
  },

  // Existing actions
  setIsMainModalOpen: (value) => set({ isMainModalOpen: value }),
  setStep: (value) => set({ step: value }),
  setAuthSuccess: (value) => set({ isAuthSuccess: value }),

  // Network actions
  setNetworks: (networks) => {
    // Create the simplified networks array outside of set
    const simplifiedNetworks = networks.map(network => ({
      chainId: parseInt(network.chainId),
      name: network.name,
      iconUrls: network.iconUrls[0],
      currency: network.nativeCurrency.symbol
    }));

    // Only update if the networks have actually changed
    const currentNetworks = get().evmNetworks;
    if (JSON.stringify(currentNetworks) !== JSON.stringify(simplifiedNetworks)) {
      set({ evmNetworks: simplifiedNetworks });
    }
  },


}));

export default useStore;
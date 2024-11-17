//thai game deploy sepolia contract 2
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

const { INFURA_API_KEY, SEPOLIA_PRIVATE_KEY, PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.28",
  networks: {
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    // },
    // morphTestnet: {
    //   url: "https://rpc-quicknode-holesky.morphl2.io",  // Updated RPC URL
    //   accounts: [`0x${PRIVATE_KEY}`],
    // }
      incoTestnet: {
        url: "https://testnet.inco.org",
        accounts: [`0x${PRIVATE_KEY}`],
      }
  },
};


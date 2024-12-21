// thai game deploy sepolia contract 1
//(Remember to get .env file from LS before can deploy)
//npx hardhat run scripts/deploy.js --network sepolia (Run this command to deploy)
const hre = require("hardhat");

async function main() {
  const RPS = await hre.ethers.getContractFactory("ThaiGame");
  const rps = await RPS.deploy();
  await rps.waitForDeployment();
  console.log("RPS deployed to:", await rps.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

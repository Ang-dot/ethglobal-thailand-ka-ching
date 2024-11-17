import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import hardhatDeploy from "@sunodo/wagmi-plugin-hardhat-deploy";

export default defineConfig({
  out: "src/hooks/cartesi-rollup/generated.ts",
  contracts: [],
  plugins: [
    hardhatDeploy({
      directory: "node_modules/@cartesi/rollups/export/abi",
    }),
    react(),
  ],
});

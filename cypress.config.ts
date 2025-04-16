import { defineConfig } from "cypress";
import { loadEnvConfig } from "./loadEnvConfig";

const config = loadEnvConfig();

export default defineConfig({
  e2e: {
    baseUrl: config.baseUrl,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "**/*.{cy,spec}.ts",
  },
  env: config.env,
});

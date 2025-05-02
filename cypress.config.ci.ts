import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "**/*.{cy,spec}.ts",
    env: {
      user: process.env.CYPRESS_USER,
      password: process.env.CYPRESS_PASSWORD,
      language: "en",
    },
  },
});

import * as dotenv from "dotenv";

export function loadEnvConfig() {
  dotenv.config();

  return {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      user: process.env.CYPRESS_USER,
      password: process.env.CYPRESS_PASSWORD,
    },
  };
}

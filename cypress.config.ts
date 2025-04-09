import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.redmine.org',
    supportFile: 'cypress/support/e2e.ts',
  },
  env: {
    user: process.env.CYPRESS_USER,
    password: process.env.CYPRESS_PASSWORD,
  }
})

import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'staging';

// Load env vars from config/env/.env.<env>
dotenv.config({
  path: path.resolve(__dirname, 'config', 'env', `.env.${env}`),
});

export default defineConfig({
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'conduit-api',
      testDir: path.resolve(__dirname, 'apps', 'conduit-api', 'tests'),
    },
    {
      name: 'salesforce-api',
      testDir: path.resolve(__dirname, 'apps', 'salesforce-api', 'tests')
    },
    {
      name: 'web-ui',
      testDir: path.resolve(__dirname, 'apps', 'web-ui', 'tests'),
      use: {
        baseURL: process.env.UI_BASE_URL,
        trace: 'retain-on-failure',
      },
    }
  ]
});
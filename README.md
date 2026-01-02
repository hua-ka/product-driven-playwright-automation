# Product-Driven Playwright Automation

A product-driven QA automation repository built with Playwright.

Each folder under `apps/` represents a product-owned automation scope (similar to embedded QA ownership in modern product teams).

## Project Structure

```text
product-driven-playwright-automation/
├── apps/
│   ├── web-ui/           # UI automation (active)
│   ├── salesforce-api/   # Salesforce API automation (in progress)
│   └── conduit-api/      # Conduit API automation (in progress)
├── k6-performance/       # k6 scripts (in progress)
├── lib/                  # shared utilities/clients/helpers
├── config/env/           # environment configuration
├── playwright.config.ts  # global Playwright config (multi-project)
└── package.json
```


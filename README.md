# Product-Driven Playwright Automation

A product-driven QA automation repository built with Playwright.

This project follows a **product-embedded QA model**, where each product or system owns its own automation scope and test strategy.  
The structure mirrors how modern product teams operate, with QA automation evolving alongside each product.


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
|── package.json
└── README.md
```


import { test, expect } from '@playwright/test';

test('SauceDemo: user can log in and see Products', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill(process.env.UI_USERNAME ?? '');
  await page.locator('[data-test="password"]').fill(process.env.UI_PASSWORD ?? '');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByText('Products')).toBeVisible();
});
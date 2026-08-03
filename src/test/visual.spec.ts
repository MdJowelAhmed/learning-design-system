import { test, expect } from '@playwright/test';

test.describe('Visual Regression Testing — Component Library', () => {
  test('Button — Primary story visual snapshot', async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-button--primary&viewMode=story',
    );
    await page.waitForSelector('button');
    await expect(page).toHaveScreenshot('button-primary.png');
  });

  test('Card — Default story visual snapshot', async ({ page }) => {
    await page.goto('/iframe.html?id=components-card--default&viewMode=story');
    await page.waitForSelector('h3');
    await expect(page).toHaveScreenshot('card-default.png');
  });

  test('Form — Default story visual snapshot', async ({ page }) => {
    await page.goto('/iframe.html?id=components-form--default&viewMode=story');
    await page.waitForSelector('form');
    await expect(page).toHaveScreenshot('form-default.png');
  });
});

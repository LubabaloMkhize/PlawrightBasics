import {test,devices,expect} from '@playwright/test';

  test.use({...devices['iPhone 14 Pro'],});

  test('mobile web test', async ({ page }) => {
    await page.goto('*/');

    await page.locator('.nav-burger').click();

    await page.locator('button:has-text("Login / Sign Up")').click();

    await expect(page.locator('#login-heading')).toBeVisible();

    console.log(devices);

    await page.waitForTimeout(5000);
  });
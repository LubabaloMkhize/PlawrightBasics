import {test,devices,expect} from '@playwright/test';

  test.use({...devices['iPhone 14 Pro'],});

  test('verify mobile web login page heading', async ({ page }) => {
    await page.goto('*/');

    await page.locator('.nav-burger').click();

    await page.locator('button:has-text("Login / Sign Up")').click();

    await expect(page.locator('#login-heading')).toBeVisible();

    //console.log(devices);

    await page.waitForTimeout(5000);
  });

  test('login using mobile web', async ({ page }) => {
    await page.goto('*/');

    await page.locator('.nav-burger').click();

    await page.locator('button:has-text("Login / Sign Up")').click();

    await page.locator('#login-email').fill('Tatalo.Mkhize@example.com');

    await page.locator('#login-password').fill('England@123456');

    await page.locator('#login-submit').click();

    

    //console.log(devices);

    await page.waitForTimeout(5000);
  });
import test, { expect } from "@playwright/test";

test.describe('Launch Ndosi Website', () => {
test('Launch Ndosi Website successfully', async ({ page }) => {

    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await expect(page).toHaveTitle('Ndosi Test Automation');

    const loginButton = page.locator('button:text("Rolling Login")');

   // await loginButton.isVisible();

    expect (await loginButton.isVisible()).toBeFalsy();

    
});
});
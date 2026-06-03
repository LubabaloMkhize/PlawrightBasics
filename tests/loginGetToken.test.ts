import { expect, test } from '@playwright/test';

test.describe('Valid login', () => {
test('@regression Login to Ndosi with valid credentials', async ({ page }) => {

    await page.goto('*/');

    await expect(page).toHaveTitle('Ndosi Test Automation');
    
    await page.click('text=Login');

    await page.fill('input[name="loginEmail"]', 'Tatalo.Mkhize@example.com');

    await page.fill('input[name="loginPassword"]', 'England@123456');

    await page.click('button[name="loginSubmit"]');

    await expect(page.locator('text=Welcomeback,Tatalo👋')).toBeVisible();

    const authToken = await page.evaluate(() => {
    return localStorage.getItem('authToken');
    });

    console.log('Auth Token:', authToken);

    expect(authToken).not.toBeNull();

    await page.click('text=Menu');

    await page.click('text=Logout');

    await page.waitForTimeout(5000);


    
});
});
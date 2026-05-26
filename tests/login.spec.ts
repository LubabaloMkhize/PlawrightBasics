import { expect, test } from '@playwright/test';

test.describe('Valid login', () => {
test('Login to Ndosi with valid credentials', async ({ page }) => {

    await page.goto('*/');

    await expect(page).toHaveTitle('Ndosi Test Automation');
    
    await page.click('text=Login');

    await page.fill('input[name="loginEmail"]', 'Tatalo.Mkhize@example.com');

    await page.fill('input[name="loginPassword"]', 'England@123456');

    await page.click('button[name="loginSubmit"]');

    await expect(page.locator('text=Welcomeback,Chief👋')).toBeVisible();

    await page.click('text=Menu');

    await page.click('text=Logout');

    await page.waitForTimeout(5000);


    
});
});

test.describe('Invalid login', () => {
test('Login to Ndosi with invalid password', async ({ page }) => {

    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.click('text=Login');

    await page.fill('input[name="loginEmail"]', 'Tatalo.Mkhize@example.com');

    await page.fill('input[name="loginPassword"]', 'England@12345');

    // Wait for dialog and click login at the same time
    const dialogPromise = page.waitForEvent('dialog');

    await page.click('button[name="loginSubmit"]');

    // Capture dialog
    const dialog = await dialogPromise;

    // Assert alert message
        expect(dialog.message()).toBe('Invalid credentials. Please try again.');

    // Accept alert
    await dialog.accept();
    console.log("Message coming from the dialog: "+ dialog.message());
});



test('Login to Ndosi without credentials', async ({ page }) => {

    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.click('text=Login');

    const loginButton = page.locator('button[name="loginSubmit"]');

    await expect(loginButton).toBeVisible();

    // Handle alert globally
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Please enter both email and password');
        await dialog.accept();
        console.log("Message coming from the dialog for empty fields: " + dialog.message());
    });

    await loginButton.click();
    
});


test('Login to Ndosi with invalid credentials', async ({ page }) => {

    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.click('text=Login');

    await page.fill('input[name="loginEmail"]', 'WildCard@example.com');

    await page.fill('input[name="loginPassword"]', 'England@123');

    // Wait for dialog and click login at the same time
    const dialogPromise = page.waitForEvent('dialog');

    await page.click('button[name="loginSubmit"]');

    // Capture dialog
    const dialog = await dialogPromise;

    // Assert alert message
        expect(dialog.message()).toBe('Invalid credentials. Please try again.');

    // Accept alert
    await dialog.accept();
    console.log("Message coming from the dialog: "+ dialog.message());
});


});
import { test, expect } from '@playwright/test';

test("@sanity Verify page title",async ({page}) => {
    await page.goto("https://ndosisimplifiedautomation.vercel.app/");

    let title:string=await page.title();
    console.log("Title : ",title);

    await expect(page).toHaveTitle(/Ndosi Test Automation/);
})

test("Verify page Url",async ({page}) => {
    await page.goto("https://ndosisimplifiedautomation.vercel.app/");

    let url:string=await page.url();
    console.log("Site Url : ",url);

    await expect(page).toHaveURL("https://ndosisimplifiedautomation.vercel.app/");
})



test("Successful login",{tag : ['@regression','@sanity'],}, async ({ page }) => {
    await page.goto("https://ndosisimplifiedautomation.vercel.app/");

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('heading', { name: 'Login to Access Learning Materials'}).isVisible();

    const element = await page.locator('#login-email');
    
    await element.screenshot({ path: 'Screenshots/login-email_field.png' });

    await page.locator('#login-email').fill('Tatalo.Mkhize@example.com');

    await page.locator('#login-password').fill('England@123456');

    await page.locator('#login-submit').click();

    await expect(page.getByRole('heading', { name: /Welcome back/ })).toBeVisible();
});
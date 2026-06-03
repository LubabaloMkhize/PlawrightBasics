import {test,expect} from '@playwright/test';

test('Login to ndosi with valid credentials',async({page})=>{

    await page.goto('*/');

    //await page.click('text=Login');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.getByPlaceholder('Email').fill('Tatalo.Mkhize@example.com');
    //await page.fill('input[name="loginEmail"]', 'Tatalo.Mkhize@example.com');
    //await page.locator('#login-email').fill('Tatalo.Mkhize@example.com');

    await page.getByRole('textbox', { name: 'Email' }).fill('Tatalo.Mkhize@example.com');

    await page.getByPlaceholder('Password').fill('England@123456');
    
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(5000);

    //await expect(page.getByRole('heading', { name: /Welcome back, Tatalo 👋/ })).toBeVisible();
    await expect(page.locator('text=Welcomeback,Tatalo👋')).toBeVisible();

    
    await page.waitForTimeout(5000);

});
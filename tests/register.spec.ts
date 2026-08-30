import {expect,test} from '@playwright/test';


test('@regression Register to Ndosi with valid credentials', async ({ page }) => {

   await page.goto('https://ndosisimplifiedautomation.vercel.app/');

   await page.getByRole('button', { name: 'Login' }).click();

   await page.getByRole('button', { name: 'Sign Up Here' }).click();

});


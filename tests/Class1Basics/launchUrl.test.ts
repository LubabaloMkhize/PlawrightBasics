import {test,expect} from '@playwright/test';

test('launch Ndosi Dev Url',async({page})=>{
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    //awaiit expect(page).toHaveURL('https://ndosisimplifiedautomation.vercel.app/');
    //await expect(page).toHaveURL(/ndosisimplifiedautomation/);
    //await expect(page).toHaveTitle('Ndosi Test Automation');
    await expect(page).toHaveTitle(/Ndosi Test/);
   
});


test('Verify login button',async({page})=>{

    await page.goto('*/');

    const loginButton = await page.getByRole('button', { name: 'Login' }).isVisible();
    
    console.log("Login Button is Visible : "+ loginButton);

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    //const loginButton = page.locator('button.user-pill');

    // const loginButton = await page.getByRole('button', { name: 'Login' });
    
     
    //await loginbutton.isVisible();

    //console.log(loginButton)

    //expect(await loginButton.isVisible()).toBeTruthy();
});

test('landing page screenshot',async({page})=>{

    await page.goto('*/');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    await page.screenshot({ path: 'Screenshots/LandingPage.png', fullPage: true });

});
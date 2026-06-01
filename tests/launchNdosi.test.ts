import test, { expect } from "@playwright/test";

test.describe('Launch Ndosi Website', () => {
test('@smoke Launch Ndosi Website successfully', async ({ page }) => {

    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await expect(page).toHaveTitle('Ndosi Test Automation');

  //  const loginButton = page.locator('button:text("Rolling Login")');

  //  await loginButton.isVisible();

   // expect (await loginButton.isVisible()).toBeFalsy();

    
});
});

test('promise style', ({ page }) => {

  return page.goto('https://ndosisimplifiedautomation.vercel.app/')
    .then(() => {
      return expect(page).toHaveTitle('Ndosi Test Automation');
    });

});


test("Verify page Url",async ({page}) => {
    await page.goto("https://ndosisimplifiedautomation.vercel.app/");

    let url:string=await page.url();
    console.log("Site Url : ",url);

    await expect(page).toHaveURL(/ndosisimplifiedautomation/);
});


test('my test', async ({ page }, testInfo) => {
  await page.goto('https://ndosisimplifiedautomation.vercel.app/');

  await page.screenshot({ path: 'Screenshots/NdosiSite.png' });

  await testInfo.attach('screenshot', {
    path: 'Screenshots/NdosiSite.png',
    contentType: 'image/png',
  });
});
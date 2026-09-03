import { test, expect } from '@playwright/test';

// Declare a serial block to enforce strict sequential execution
test.describe.serial('Dependent Workflow', () => {
  
  test('1. Must run first (e.g., Create Resource)', async ({ page }) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
    // Steps to create resource...
    await expect(page.getByRole('button', { name: 'Xterminator' })).toBeVisible();
  });

  test('2. Must run second (e.g., Edit Resource)', async ({ page }) => {
    // This will ONLY run after Test 1 succeeds.
    // If Test 1 fails, this test is automatically skipped instead of running early or failing.
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
   await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

});
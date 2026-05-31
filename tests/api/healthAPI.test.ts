import { test, expect } from '@playwright/test';

test('Health API should return 200', async ({ request }) => {

  const response = await request.get(
    'https://ndosiautomation.co.za/APIDEV/health'
  );

  // Verify status code
  expect(response.status()).toBe(200);

  // Print response body
  const responseBody = await response.text();
  console.log(responseBody);

});


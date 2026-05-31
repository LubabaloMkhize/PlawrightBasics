import { test, expect } from '@playwright/test';

test('Login API test', async ({ request }) => {

  const response = await request.post(
    'https://ndosiautomation.co.za/APIDEV/login',
    {
      data: {
        email: 'Tatalo.Mkhize@example.com',
        password: 'England@123456'
      }
    }
  );

  // Validate status
  expect(response.status()).toBe(200);

  // Convert response to JSON
   const responseBody = await response.json();

  // Print response body
 console.log('Response Body:', responseBody);

  // Example validations
  expect(responseBody).toHaveProperty('data.token');

});
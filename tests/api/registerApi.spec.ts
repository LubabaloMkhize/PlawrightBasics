import { test, expect } from '@playwright/test';

test('Registration API test', async ({ request }) => {

  const response = await request.post(
    'https://ndosiautomation.co.za/APIDEV/register',
    {
      data: {
        firstName: 'John',
        lastName: 'Doe',
        email: `john${Date.now()}@example.com`,
        password: 'SecurePass123',
        confirmPassword: 'SecurePass123',
        groupId: '5328c91e-fc40-11f0-8e00-5000e6331276'
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  console.log('Response Body:', responseBody);

  expect(responseBody.message).toBe('User registered successfully');
});
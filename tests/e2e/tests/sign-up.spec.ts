import { test, expect } from '@playwright/test';

test('User uploads avatar and generates a ticket', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const dropzoneButton = page.getByRole('button', { name: 'Dropzone area for uploading' });
  await dropzoneButton.click();

  const fileInput = page.getByLabel('Upload Avatar');
  await fileInput.setInputFiles('./tests/e2e/tests/fixtures/image-avatar.jpg');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('John Doe');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('john.doe@gmail.com');
  await page.getByRole('textbox', { name: 'GitHub Username' }).fill('@johndoecoder');

  await page.getByRole('button', { name: 'Generate My Ticket' }).click();

  await expect(page.getByRole('heading', { name: 'Congrats, John Doe!' })).toBeVisible();
});

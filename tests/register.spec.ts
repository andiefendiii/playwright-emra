import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/Register';


test.beforeEach(async ({ page }) => {
    await page.goto('/signup')
});


test('register successfully', async ({ page }) => {
  const registerpage = new RegisterPage(page);
  await registerpage.register_successfully();
});

test('register successfully with email already existing', async ({ page }) => {
  const registerpage = new RegisterPage(page);
  await registerpage.register_unsuccessfully();
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';
import dotenv from 'dotenv';
dotenv.config();



test.beforeEach(async ({ page }) => {
    await page.goto('/login')
});


test('login successfully', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.login_successfully();
});

//example group
test.describe("invalid group", {tag: '@invalidGroup'}, () => {
    test('login unsuccessfully with invalid email', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.login_unsuccessfully_invalidEmail();
    });

    test('login unsuccessfully with invalid password', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.login_unsuccessfully_invalidPassword()
    });
   
});


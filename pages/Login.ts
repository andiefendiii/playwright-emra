import { Page, Locator, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();


export class LoginPage {
    readonly page: Page;
    readonly email_input: Locator;
    readonly password_input: Locator;
    readonly signIn_button: Locator;
    readonly validate_successLogin: Locator;
    readonly validate_failedLogin: Locator;


    constructor(page: Page) {
        this.page = page;
        this.email_input = page.getByRole('textbox', { name: 'Email' });
        this.password_input = page.getByRole('textbox', { name: 'Password' });
        this.signIn_button = page.getByRole('button', { name: 'Sign In' });
        this.validate_successLogin = page.getByRole('heading', { name: 'Welcome to Emra! 🎉' });
        this.validate_failedLogin = page.getByText('Invalid credentials')
    }



    async login_successfully() {
        await this.email_input.fill(process.env.EMAIL!);
        await this.password_input.fill(process.env.PASSWORD!);
        await this.signIn_button.click();
        await expect (this.validate_successLogin).toBeVisible();
    };

     async login_unsuccessfully_invalidEmail() {
        await this.email_input.fill(process.env.EMAIL_INVALID!);
        await this.password_input.fill(process.env.PASSWORD!);
        await this.signIn_button.click();
        await expect (this.validate_failedLogin).toBeVisible();
    };

     async login_unsuccessfully_invalidPassword() {
        await this.email_input.fill(process.env.EMAIL!);
        await this.password_input.fill(process.env.PASSWORD_INVALID!);
        await this.signIn_button.click();
        await expect (this.validate_failedLogin).toBeVisible();
    };
  
}
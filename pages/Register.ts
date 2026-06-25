import { Page, Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class RegisterPage {
    readonly page: Page;
    readonly email_input: Locator;
    readonly password_input: Locator;
    readonly passwordConfirmation_input: Locator;
    readonly next_button: Locator;
    readonly fullName_input: Locator;
    readonly phoneNumber_input: Locator;
    readonly companyName_input: Locator;
    readonly industry: Locator;
    readonly companySize: Locator;
    readonly createAkun_button: Locator;
    readonly validate_successRegister: Locator;
    readonly validate_failedRegister: Locator;


    constructor(page: Page) {
        this.page = page;
        this.email_input = page.getByRole('textbox', { name: 'Email' })
        this.password_input = page.getByRole('textbox', { name: 'Password', exact: true })
        this.passwordConfirmation_input = page.getByRole('textbox', { name: 'Confirm Password' })
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.fullName_input = page.getByRole('textbox', { name: 'Full Name' })
        this.phoneNumber_input = page.getByRole('textbox', { name: 'Phone Number' })
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.companyName_input = page.getByRole('textbox', { name: 'Company Name' })
        this.industry = page.getByLabel('Industry')
        this.companySize = page.getByLabel('Company Size')
        this.createAkun_button = page.getByRole('button', { name: 'Create Account' })
        this.validate_successRegister = page.getByText('Please verify your email')
        this.validate_failedRegister = page.getByText('Email has already been taken')  
    }




    async register_successfully() {
        const randomEmail = faker.internet.email();
        await this.email_input.fill(randomEmail);
        await this.password_input.fill('1234567890');
        await this.passwordConfirmation_input.fill('1234567890');
        await this.next_button.click();
        await this.fullName_input.fill('wakwaw');
        await this.phoneNumber_input.fill('12345678901');
        await this.next_button.click();
        await this.companyName_input.fill('emra');
        await this.industry.selectOption('education');
        await this.companySize.selectOption('1-10');
        await this.createAkun_button.click();
        await expect (this.validate_successRegister).toBeVisible();
    };

    async register_unsuccessfully() {
        const randomEmail = faker.internet.email();
        await this.email_input.fill('wakwaw@yopmail.com');
        await this.password_input.fill('1234567890');
        await this.passwordConfirmation_input.fill('1234567890');
        await this.next_button.click();
        await this.fullName_input.fill('wakwaw');
        await this.phoneNumber_input.fill('12345678901');
        await this.next_button.click();
        await this.companyName_input.fill('emra');
        await this.industry.selectOption('education');
        await this.companySize.selectOption('1-10');
        await this.createAkun_button.click();
        await expect (this.validate_failedRegister).toBeVisible();
    };

}
import { Page, Locator } from '@playwright/test';


export class LoginPage {
  readonly page: Page;
  readonly loginSignupLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly closePopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginSignupLink = page.getByRole('link', { name: 'Login/Signup' });
    this.emailInput = page.getByRole('textbox', { name: 'E-mail/Mobile Number' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
    this.closePopup = page.getByTestId('authorize-modal-close-button');
  }

  async goto() {
    await this.page.goto('https://www.montecarlo.in/');
  }

  async openLogin() {
    await this.loginSignupLink.click();
  }

  async enterEmail(email: string) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
  }

  async closeModalIfPresent() {
    if (await this.closePopup.isVisible()) {
      await this.closePopup.click();
    }
  }

  async enterPassword(password: string) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.openLogin();
    await this.enterEmail(email);
    await this.closeModalIfPresent();
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
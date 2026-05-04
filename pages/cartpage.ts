import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly menLink: Locator;
  readonly productLink: Locator;
  readonly sizeOption: Locator;
  readonly addToBag: Locator;
  readonly closeBtn: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menLink = page.locator('#shopify-section-sections--26903370170656__header')
      .getByRole('link', { name: 'MEN', exact: true });

    this.productLink = page.getByRole('link', { name: 'Rock.it Men Navy Blue Solid' }).first();

    this.sizeOption = page.locator('label').filter({ hasText: '/M' });

    this.addToBag = page.getByRole('button', { name: 'Add to Bag' });

    this.closeBtn = page.getByRole('button', { name: 'Close' });

    this.cartLink = page.locator('#shopify-section-sections--26903370170656__header a')
      .filter({ hasText: 'Cart' });
  }

  async goto() {
    await this.page.goto('https://www.montecarlo.in/');
  }

  async navigateToMen() {
    await this.menLink.click();
  }

  async openProduct() {
    await this.productLink.click();
  }

  async selectSize() {
    await this.sizeOption.click();
  }

  async addToCart() {
    await this.addToBag.click();
  }

  async closePopup() {
    if (await this.closeBtn.isVisible()) {
      await this.closeBtn.click();
    }
  }

  async openCart() {
    await this.cartLink.click();
  }
}
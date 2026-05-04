import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchIcon: Locator;
  readonly searchInput: Locator;
  readonly tshirtCategory: Locator;
  readonly firstProduct: Locator;
  readonly productText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchIcon = page.getByRole('link', { name: 'Search' });
    this.searchInput = page.getByRole('textbox', { name: 'Search' });
    this.tshirtCategory = page.getByRole('link', { name: 'T-shirt For Men' });
    this.firstProduct = page.getByRole('link', { name: 'Men Blue Printed Collar Half' }).first();
    this.productText = page.getByText('Zoom Previous Next Men Blue');
  }

  async goto() {
    await this.page.goto('https://www.montecarlo.in/');
  }

  async searchProduct(product: string) {
    await this.searchIcon.click();
    await this.searchInput.fill(product);
    
  }

  async selectCategory() {
    await this.tshirtCategory.click();
  }

  async openFirstProduct() {
    await this.firstProduct.click();
  }
}
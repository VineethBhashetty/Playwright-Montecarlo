import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/searchpage';

test('Search and open product', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goto();
  await search.searchProduct('T-shirts');
  await search.selectCategory();
  await search.openFirstProduct();

  await expect(search.productText).toBeVisible();
});
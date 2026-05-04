import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/cartpage';

test('Add product and open cart', async ({ page }) => {
  const cart = new CartPage(page);

  await cart.goto();
  await cart.navigateToMen();
  await cart.openProduct();
  await cart.selectSize();
  await cart.addToCart();
  await cart.closePopup();
  await cart.openCart();

  await expect(cart.cartLink).toBeVisible();
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('vine@gmail.com', 'Vineeth@2004');

  await expect(
    page.locator('#shopify-section-sections--26903370170656__header')
      .getByText('WOMEN Cardigans Pure Wool').first()
  ).toBeVisible();
});
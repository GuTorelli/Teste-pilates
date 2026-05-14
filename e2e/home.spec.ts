import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders H1 and primary CTA", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("pilates");
    const cta = page.getByRole("button", { name: /agende sua aula experimental/i }).first();
    await expect(cta).toBeVisible();
  });

  test("credibility strip has 4 items", async ({ page }) => {
    await page.goto("/");
    const strip = page.getByRole("region", { name: /números da rede/i });
    await expect(strip).toBeVisible();
  });

  test("header navigation works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sobre" }).click();
    await expect(page).toHaveURL("/sobre");
  });
});

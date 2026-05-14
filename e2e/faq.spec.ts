import { test, expect } from "@playwright/test";

test.describe("FAQ page", () => {
  test("renders FAQ hero and agent card", async ({ page }) => {
    await page.goto("/faq");
    await expect(page.locator("h1")).toContainText("Tire suas dúvidas");
    await expect(page.getByRole("button", { name: /iniciar conversa/i })).toBeVisible();
  });

  test("accordion expands and collapses", async ({ page }) => {
    await page.goto("/faq");
    const firstTrigger = page
      .getByRole("button", { name: /O que diferencia/i })
      .first();
    await expect(firstTrigger).toBeVisible();
    await firstTrigger.click();
    const answer = page.getByText(/método clínico/i).first();
    await expect(answer).toBeVisible();
  });
});

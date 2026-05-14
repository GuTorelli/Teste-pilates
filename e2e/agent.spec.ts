import { test, expect } from "@playwright/test";

test.describe("Agent (Sofia)", () => {
  test("FAB is visible on home", async ({ page }) => {
    await page.goto("/");
    const fab = page.locator("#agent-fab");
    await expect(fab).toBeVisible();
  });

  test("opens agent drawer when FAB is clicked", async ({ page }) => {
    await page.goto("/");
    await page.locator("#agent-fab").click();
    const drawer = page.getByRole("dialog", { name: /chat com a sofia/i });
    await expect(drawer).toBeVisible();
  });

  test("shows empty state without API key", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("hc_anthropic_key"));
    await page.reload();
    await page.locator("#agent-fab").click();
    await expect(
      page.getByText(/configure sua chave da claude/i)
    ).toBeVisible();
  });

  test("lead WhatsApp flow after mock response", async ({ page }) => {
    await page.route("https://api.anthropic.com/**", async (route) => {
      const body = [
        'event: content_block_start\ndata: {"type":"content_block_start","index":0,"content_block":{"type":"text","text":""}}\n\n',
        'event: content_block_delta\ndata: {"type":"content_block_delta","index":0,"delta":{"type":"text_delta","text":"Tudo certo, João! [LEAD_READY name=\\"João\\" phone=\\"11999998888\\" unit=\\"jardins\\"]"}}\n\n',
        'event: message_stop\ndata: {"type":"message_stop"}\n\n',
      ].join("");
      await route.fulfill({ status: 200, contentType: "text/event-stream", body });
    });

    await page.goto("/");
    await page.evaluate(() => localStorage.setItem("hc_anthropic_key", "sk-ant-fake-key-for-testing-12345"));
    await page.locator("#agent-fab").click();
    const textarea = page.getByRole("textbox", { name: /mensagem para a sofia/i });
    await textarea.fill("quero agendar");
    await textarea.press("Enter");
    await expect(page.getByRole("link", { name: /continuar no whatsapp/i })).toBeVisible({ timeout: 10000 });
  });
});

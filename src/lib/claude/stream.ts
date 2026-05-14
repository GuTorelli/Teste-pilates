import { createClaude, CLAUDE_MODEL, MAX_TOKENS, TEMPERATURE } from "./client";
import { SOFIA_SYSTEM_PROMPT } from "./systemPrompt";
import type { AgentMessage } from "@/types";

export async function* streamSofia(
  apiKey: string,
  history: AgentMessage[],
  signal?: AbortSignal
): AsyncGenerator<string> {
  const client = createClaude(apiKey);

  const stream = client.messages.stream(
    {
      model: CLAUDE_MODEL,
      max_tokens: MAX_TOKENS,
      temperature: TEMPERATURE,
      system: SOFIA_SYSTEM_PROMPT,
      messages: history.map(({ role, content }) => ({ role, content })),
    },
    { signal }
  );

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      yield event.delta.text;
    }
  }
}

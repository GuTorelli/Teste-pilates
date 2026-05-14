import Anthropic from "@anthropic-ai/sdk";

export function createClaude(apiKey: string) {
  return new Anthropic({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
}

export const CLAUDE_MODEL = "claude-opus-4-7";
export const MAX_TOKENS = 1024;
export const TEMPERATURE = 0.4;

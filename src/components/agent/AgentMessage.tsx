import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { cn } from "@/lib/cn";
import type { AgentMessage as Msg } from "@/types";

type Props = { message: Msg };

export function AgentMessage({ message }: Props) {
  const isUser = message.role === "user";
  const isError = message.status === "error";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-[10px] px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-[#2c3a2e] text-[#f7f4ee]"
            : isError
              ? "bg-[#a84c40]/8 text-[#a84c40]"
              : "bg-transparent text-[#1a1a1a]"
        )}
        role={isError ? "alert" : undefined}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{message.content}</span>
        ) : (
          <ReactMarkdown
            rehypePlugins={[rehypeSanitize]}
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => (
                <strong className="font-medium text-[#1a1a1a]">{children}</strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-[#c58a6b] hover:opacity-70"
                >
                  {children}
                </a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

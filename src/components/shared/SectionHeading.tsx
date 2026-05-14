import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-eyebrow font-medium uppercase tracking-[0.18em] text-[#c58a6b]">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-display-md font-display font-light text-[#1a1a1a]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-[#8a8a85]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

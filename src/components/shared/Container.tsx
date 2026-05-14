import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  narrow?: boolean;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-12",
        narrow ? "max-w-3xl" : "max-w-[1320px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

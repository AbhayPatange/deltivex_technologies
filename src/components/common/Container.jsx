import { cn } from "../../lib/utils";

export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-container container-px", className)}>
      {children}
    </Tag>
  );
}

import { Code2, Sparkles, Blocks, Workflow, ServerCog, Cloud } from "lucide-react";

const map = {
  Code2,
  Sparkles,
  Blocks,
  Workflow,
  ServerCog,
  Cloud,
};

export function serviceIcon(name) {
  return map[name] ?? Code2;
}

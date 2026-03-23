import { ReactNode } from "react";

export const markdownComponents = {
  p: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <p className="text-xs leading-relaxed" style={{ margin: "0 0 4px 0" }} {...props} />
  ),
  li: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <li className="text-xs leading-relaxed" style={{ marginBottom: "2px" }} {...props} />
  ),
  ul: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <ul style={{ paddingLeft: "1rem", margin: "4px 0" }} {...props} />
  ),
  ol: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <ol style={{ paddingLeft: "1rem", margin: "4px 0" }} {...props} />
  ),
  strong: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <strong className="font-semibold" {...props} />
  ),
  code: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <code
      className="text-xs px-1 py-0.5 rounded font-mono"
      style={{ background: "rgba(255,255,255,0.1)" }}
      {...props}
    />
  ),
};

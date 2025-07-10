import { ReactNode } from "react";

export const markdownComponents = {
  p: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <p className="text-base" style={{ margin: "1rem 0" }} {...props} />
  ),
  li: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <li className="text-base" style={{ marginBottom: "0.5rem" }} {...props} />
  ),
};

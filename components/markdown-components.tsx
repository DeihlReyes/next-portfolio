import { ReactNode } from "react";

export const markdownComponents = {
  p: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <p style={{ margin: "1rem 0" }} {...props} /> // Adjust margin as needed
  ),
  li: ({ node, ...props }: { node: ReactNode; [key: string]: any }) => (
    <li style={{ marginBottom: "0.5rem" }} {...props} /> // Spacing between list items
  ),
};

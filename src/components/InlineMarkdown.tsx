import React from "react";

function renderBoldMarkdown(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let boldKey = 0;

  while (cursor < text.length) {
    const start = text.indexOf("**", cursor);
    if (start === -1) {
      nodes.push(text.slice(cursor));
      break;
    }

    const end = text.indexOf("**", start + 2);
    if (end === -1) {
      // Unmatched "**" → treat as plain text.
      nodes.push(text.slice(cursor));
      break;
    }

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <strong key={`bold-${boldKey++}`}>{text.slice(start + 2, end)}</strong>,
    );

    cursor = end + 2;
  }

  return nodes;
}

type InlineMarkdownProps = {
  text: string;
};

const InlineMarkdown: React.FC<InlineMarkdownProps> = ({ text }) => {
  return <>{renderBoldMarkdown(text)}</>;
};

export default InlineMarkdown;


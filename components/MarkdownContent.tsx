"use client";

import React from "react";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Convert markdown to HTML-like structure
  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // H1
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={key++} className="text-4xl font-bold mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
      }
      // H2
      else if (line.startsWith("## ")) {
        const text = line.slice(3);
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/--+/g, "-")
          .trim();
        elements.push(
          <h2
            key={key++}
            id={id}
            className="text-3xl font-bold mt-6 mb-3 scroll-mt-20"
          >
            {text}
          </h2>
        );
      }
      // H3
      else if (line.startsWith("### ")) {
        const text = line.slice(4);
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/--+/g, "-")
          .trim();
        elements.push(
          <h3
            key={key++}
            id={id}
            className="text-2xl font-semibold mt-5 mb-2 scroll-mt-20"
          >
            {text}
          </h3>
        );
      }
      // H4
      else if (line.startsWith("#### ")) {
        const text = line.slice(5);
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/--+/g, "-")
          .trim();
        elements.push(
          <h4
            key={key++}
            id={id}
            className="text-xl font-semibold mt-4 mb-2 scroll-mt-20"
          >
            {text}
          </h4>
        );
      }
      // HR
      else if (line.trim() === "---") {
        elements.push(<hr key={key++} className="my-6 border-gray-300" />);
      }
      // Bullet list
      else if (line.startsWith("* ") || line.startsWith("- ")) {
        const items = [line];
        while (
          i + 1 < lines.length &&
          (lines[i + 1].startsWith("* ") ||
            lines[i + 1].startsWith("- ") ||
            lines[i + 1].startsWith("  "))
        ) {
          i++;
          items.push(lines[i]);
        }
        elements.push(
          <ul key={key++} className="list-disc ml-6 my-3 space-y-1">
            {items.map((item, idx) => {
              const text = item.replace(/^[*-]\s+/, "").replace(/^\s+/, "");
              if (text) {
                return (
                  <li key={idx} className="text-gray-700">
                    {renderInlineMarkdown(text)}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        );
      }
      // Numbered list
      else if (/^\d+\.\s/.test(line)) {
        const items = [line];
        while (
          i + 1 < lines.length &&
          (/^\d+\.\s/.test(lines[i + 1]) || lines[i + 1].startsWith("   "))
        ) {
          i++;
          items.push(lines[i]);
        }
        elements.push(
          <ol key={key++} className="list-decimal ml-6 my-3 space-y-1">
            {items.map((item, idx) => {
              const text = item.replace(/^\d+\.\s+/, "").replace(/^\s+/, "");
              if (text) {
                return (
                  <li key={idx} className="text-gray-700">
                    {renderInlineMarkdown(text)}
                  </li>
                );
              }
              return null;
            })}
          </ol>
        );
      }
      // Regular paragraph
      else if (line.trim()) {
        elements.push(
          <p key={key++} className="my-2 text-gray-700 leading-relaxed">
            {renderInlineMarkdown(line)}
          </p>
        );
      }
      // Empty line
      else {
        elements.push(<div key={key++} className="h-2"></div>);
      }
    }

    return elements;
  };

  const renderInlineMarkdown = (text: string) => {
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // Italic
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
    // Code
    text = text.replace(
      /`(.+?)`/g,
      '<code class="bg-gray-100 px-1 rounded">$1</code>'
    );

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return <div className="prose max-w-none">{renderMarkdown(content)}</div>;
}

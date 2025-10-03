import MarkdownContent from "../MarkdownContent";

interface MarkdownBlockProps {
  section: {
    content: {
      text: string;
    };
    heading?: {
      title: string;
      headingType: string;
    };
  };
}

export default function MarkdownBlock({ section }: MarkdownBlockProps) {
  return (
    <div className="my-6">
      <MarkdownContent content={section.content.text} />
    </div>
  );
}


import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "docs");

export interface PageContent {
  slug: string;
  title: string;
  content: string;
  sections: any[];
}

export function getPageBySlug(slug: string): PageContent | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract headings for sections/table of contents
    const sections = extractSections(content);

    return {
      slug,
      title: data.title || slug.charAt(0).toUpperCase() + slug.slice(1),
      content,
      sections,
    };
  } catch (error) {
    console.error(`Error reading page ${slug}:`, error);
    return null;
  }
}

function extractSections(markdown: string) {
  const sections: any[] = [];
  const lines = markdown.split("\n");

  lines.forEach((line, index) => {
    // Match ## headings (h2) only - ignore h3 and deeper
    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      const title = h2Match[1];
      // Skip numbered headings (e.g., "## 1. Something" or "## 7. Something")
      // Only include major section headings without leading numbers
      if (!/^\d+\./.test(title)) {
        const id = generateId(title);
        const section = {
          id,
          heading: { title, headingType: "h2" },
        };
        sections.push(section);
      }
    }
  });

  return sections;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

export function getAllPages(): string[] {
  try {
    const files = fs.readdirSync(docsDirectory);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading docs directory:", error);
    return [];
  }
}

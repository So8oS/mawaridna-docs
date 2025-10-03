"use server";
// Static content replacement for Headlesshost API

import { content } from "@/content/config";
import { getPageBySlug } from "@/lib/markdown";

export async function getClientConfig(): Promise<{ siteId: string }> {
  return {
    siteId: "mawaridna-static",
  };
}

// Replaced API calls with static content
export async function getMap(instanceId: string) {
  return {
    content: {
      pages: Object.keys(content.pages).map((slug) => ({
        slug,
        title: content.pages[slug as keyof typeof content.pages].title,
      })),
    },
  };
}

export async function getCommon(instanceId: string) {
  // Enhance navigation with sections from markdown files
  const enhancedNavigation = content.navigation.map((group) => ({
    ...group,
    links: group.links.map((link) => {
      const pageData = getPageBySlug(link.slug);
      return {
        ...link,
        sections: pageData?.sections || [],
      };
    }),
  }));

  return {
    globals: {
      content: {
        links: enhancedNavigation,
      },
    },
    header: {
      content: {
        smallLogo: { url: "/logo-sm.png", width: 30, height: 22, id: "1" },
        largeLogo: { url: "/logo.png", width: 257, height: 30, id: "2" },
        links: [],
      },
    },
  };
}

export async function getPage(slug: string, instanceId: string) {
  const pageData = getPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
      sections: [],
      content: {},
    };
  }

  // Transform markdown content into section format expected by the app
  const sections = [
    {
      id: "main-content",
      type: "TEXT_BLOCK",
      content: {
        text: pageData.content,
      },
      heading: {
        title: pageData.title,
        headingType: "h1",
      },
    },
  ];

  return {
    title: pageData.title,
    sections: pageData.sections.length > 0 ? pageData.sections : sections,
    content: {
      extendedProperties: [
        {
          name: "description",
          value:
            content.pages[slug as keyof typeof content.pages]?.description ||
            "",
        },
      ],
    },
  };
}

export async function getGuide(instanceId: string) {
  return {
    name: "Documentation Guide",
    notes: "Welcome to MAWARIDNA Documentation",
    content: {
      sections: [],
    },
  };
}

export async function getSearchResults(term: string, instanceId: string) {
  // Simple static search - can be enhanced
  const results: any[] = [];

  Object.entries(content.pages).forEach(([slug, page]) => {
    if (
      page.title.toLowerCase().includes(term.toLowerCase()) ||
      page.description.toLowerCase().includes(term.toLowerCase())
    ) {
      results.push({
        slug,
        title: page.title,
        description: page.description,
      });
    }
  });

  return { results };
}

export async function clearCache(tag: string) {
  // No-op for static content
  return;
}

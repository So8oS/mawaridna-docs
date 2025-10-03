import type { Metadata, ResolvingMetadata } from "next";
import OnThisPage from "@/components/onThisPage";
import PageFoot from "@/components/pageFoot";
import MarkdownContent from "@/components/MarkdownContent";
// Using static content instead of API
import { getPage, getGuide } from "@/app/lib/api-static";
import { getPageBySlug } from "@/lib/markdown";

export default async function Body({ params }: IBody) {
  const isGuide = params.slug === "guide";

  if (isGuide) {
    const page = await getGuide(params.instance);
    return (
      <main className="flex-1 py-4 min-w-0">
        <article className="max-w-4xl">
          <div className="text-3xl font-bold my-3">{page?.name}</div>
          <div className="whitespace-pre-wrap">{page?.notes}</div>
        </article>
        <PageFoot pageIdentifier={params.slug} instanceId={params.instance} />
      </main>
    );
  }

  // Get markdown content directly
  const pageData = getPageBySlug(params.slug);

  if (!pageData) {
    return (
      <main className="flex-1 py-4 min-w-0">
        <article className="max-w-4xl">
          <h1 className="text-3xl font-bold my-3">Page Not Found</h1>
          <p>The requested page could not be found.</p>
        </article>
      </main>
    );
  }

  return (
    <div className="flex gap-8 w-full">
      <main className="flex-1 py-4 min-w-0">
        <article className="max-w-4xl">
          <MarkdownContent content={pageData.content} />
        </article>
        <PageFoot pageIdentifier={params.slug} instanceId={params.instance} />
      </main>
      <aside className="hidden xl:block xl:w-64 flex-shrink-0">
        <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <OnThisPage page={{ sections: pageData.sections }} />
        </div>
      </aside>
    </div>
  );
}

export interface NameValuePair {
  name: string;
  value: string;
}

export async function generateMetadata(
  { params }: IBody,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (params.slug === "guide")
    return { title: "Guide", description: "Style Guide" };
  const page = await getPage(params.slug, params.instance);

  const parentMeta = await parent;
  const description =
    page?.content?.extendedProperties?.find(
      (p: NameValuePair) => p.name === "description"
    )?.value || parentMeta.description;
  const keywords =
    page?.content?.extendedProperties?.find(
      (p: NameValuePair) => p.name === "keywords"
    )?.value || parentMeta.keywords;
  const title =
    page?.content?.extendedProperties?.find(
      (p: NameValuePair) => p.name === "title"
    )?.value || page.title;
  const robots =
    page?.content?.extendedProperties?.find(
      (p: NameValuePair) => p.name === "robots"
    )?.value || "index, follow";

  return {
    title,
    description,
    keywords,
    robots,
  };
}

type IBody = { params: { slug: string; instance: string } };

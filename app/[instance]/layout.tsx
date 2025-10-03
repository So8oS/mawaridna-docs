import type { Metadata } from "next";
import LeftNav from "@/components/leftNav";
import SiteHeader from "./siteHeader";
import SiteFooter from "./siteFooter";
// Using static content instead of API
import { getMap, getCommon, getClientConfig } from "@/app/lib/api-static";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { instance: string };
}) {
  const common = await getCommon(params.instance);
  const map = await getMap(params.instance);
  const clientConfig = await getClientConfig();

  return map?.content?.pages?.length > 0 ? (
    <>
      <SiteHeader
        common={common}
        instanceId={params.instance}
        clientConfig={clientConfig}
      />
      <div className="container mx-auto flex max-w-7xl px-4 pt-6 gap-8">
        <aside className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0">
          <LeftNav globals={common?.globals} instanceId={params.instance} />
        </aside>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
      <SiteFooter />
    </>
  ) : (
    <div className="m-12">
      <div className={`rounded-2xl p-6 bg-blue-50`}>
        <p className="font-display text-xl text-yellow-900 mt-0 mb-2.5">
          Connection Successful
        </p>
        <div className={`text-black-800`}>
          <p className="whitespace-pre-wrap">
            You have connected to the content site successfully but there are no
            pages. Add a page in Headlesshost and then refresh this page.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "MAWARIDNA Documentation",
  description: "Complete documentation for MAWARIDNA HR Management System",
};

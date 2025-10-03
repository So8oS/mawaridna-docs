"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globals } from "@/app/lib/types";

interface LeftNavProps {
  globals?: Globals;
  instanceId: string;
}

const LeftNav: React.FC<LeftNavProps> = ({ globals, instanceId }) => {
  const pathname = usePathname();

  const selectedCss =
    "block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-sky-500 before:bg-sky-500";
  const blankCss =
    "block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block";
  const sectionCss =
    "block w-full pl-6 py-1 text-xs text-slate-600 hover:text-sky-500";

  return (
    <div className="w-full">
      {globals?.content?.links && (
        <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pr-4">
          <nav className="text-sm pb-10">
            <ul className="space-y-9">
              {globals?.content?.links.map((item) => (
                <li key={item.group}>
                  <h2 className="font-display font-semibold text-slate-900">
                    {item.group}
                  </h2>
                  <ul className="mt-4 space-y-2 border-slate-200">
                    {item.links?.map((child: any) => {
                      const isCurrentPage = pathname.includes(`/${child.slug}`);
                      return (
                        <li className="relative" key={child.slug}>
                          <Link
                            className={isCurrentPage ? selectedCss : blankCss}
                            href={`/${instanceId}/${child.slug}`}
                          >
                            {child.title}
                          </Link>
                          {/* Show main sections (H2) only when page is active */}
                          {isCurrentPage &&
                            child.sections &&
                            child.sections.length > 0 && (
                              <ul className="mt-1 space-y-1">
                                {child.sections.map((section: any) => (
                                  <li key={section.id}>
                                    <Link
                                      href={`/${instanceId}/${child.slug}#${section.id}`}
                                      className={sectionCss}
                                    >
                                      {section.heading?.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default LeftNav;

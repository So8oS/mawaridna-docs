import { redirect } from "next/navigation";
// Using static content instead of API
import { ProductionSlug } from "@/content/config";

export default async function Home() {
  redirect(`/${ProductionSlug}/dashboard`);
}

import { headers } from "next/headers";
import { redirect } from "next/navigation";

const locales = ["es", "en"];
const defaultLocale = "es";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Parse Accept-Language header: "en-US,en;q=0.9,es;q=0.8"
  const preferred = acceptLanguage
    .split(",")
    .map((entry) => {
      const [locale, q] = entry.trim().split(";");
      const quality = parseFloat(q?.split("=")[1] || "1");
      return { locale: locale.split("-")[0].trim(), quality };
    })
    .sort((a, b) => b.quality - a.quality)
    .find((l) => locales.includes(l.locale));

  redirect(`/${preferred?.locale || defaultLocale}`);
}

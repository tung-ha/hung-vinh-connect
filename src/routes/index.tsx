import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { ProductCatalog } from "@/components/site/ProductCatalog";
import { ST25Spotlight } from "@/components/site/ST25Spotlight";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { WholesaleSteps } from "@/components/site/WholesaleSteps";
import { RfqForm } from "@/components/site/RfqForm";
import { FaqSection } from "@/components/site/FaqSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { company } from "@/data/company";

const title = "Hung Vinh Asian Food | Vietnamese Wholesale Adelaide";
const description =
  "Adelaide direct importer of Vietnamese & Southeast Asian food. Wholesale ST25 rice, fish sauce, noodles and frozen lines by the carton.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 Second St",
      addressLocality: "Wingfield",
      addressRegion: "SA",
      postalCode: "5013",
      addressCountry: "AU",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProductCatalog />
        <ST25Spotlight />
        <WhoWeServe />
        <WholesaleSteps />
        <RfqForm />
        <FaqSection />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

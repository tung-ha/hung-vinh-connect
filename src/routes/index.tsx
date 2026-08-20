import { createFileRoute } from "@tanstack/react-router";

import { FaqSection } from "@/components/site/FaqSection";
import { Hero } from "@/components/site/Hero";
import { ProductCatalog } from "@/components/site/ProductCatalog";
import { RfqForm } from "@/components/site/RfqForm";
import { ST25Spotlight } from "@/components/site/ST25Spotlight";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { WholesaleSteps } from "@/components/site/WholesaleSteps";
import { company } from "@/data/company";

const title = "Hung Vinh Asian Food — Vietnamese Wholesale Supplier Adelaide";
const description =
  "Direct importer & wholesaler of ST25 Vilaconic rice, traditional fish sauce, cooking pastes and tropical drinks. Adelaide warehouse, freight Australia-wide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  alternateName: company.name,
  telephone: company.phone,
  email: company.email,
  url: `https://${company.domain}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: company.suburb,
    addressRegion: company.state,
    postalCode: company.postcode,
    addressCountry: "AU",
  },
};

function Index() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProductCatalog />
      <ST25Spotlight />
      <WhoWeServe />
      <WholesaleSteps />
      <RfqForm />
      <FaqSection />
    </>
  );
}

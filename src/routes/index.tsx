import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { CategoryHighlights } from "@/components/site/CategoryHighlights";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { CtaBanner } from "@/components/site/CtaBanner";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

const title = "Hung Vinh Asian Food | Thực Phẩm Đông Nam Á Bán Sỉ Adelaide";
const description =
  "Nhà nhập khẩu trực tiếp tại Adelaide: gạo ST25, nước mắm, cốt gia vị, đồ đông lạnh và nước giải khát bán sỉ cho nhà hàng, siêu thị trên toàn nước Úc.";

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
  const { t } = useI18n();

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
    <main>
      <HeroSlideshow />
      <CategoryHighlights />

      <section className="border-b border-border py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
              {t("About us", "Về chúng tôi")}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              {t("About Hung Vinh Asian Food", "Về Hung Vinh Asian Food")}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {t(
                `${company.name} is a direct importer based in Wingfield, South Australia. We source rice, sauces, pastes, frozen lines and beverages straight from Vietnamese and Southeast Asian producers and supply them wholesale by the carton or pallet.`,
                `${company.name} là nhà nhập khẩu trực tiếp tại Wingfield, Nam Úc. Chúng tôi nhập gạo, nước chấm, cốt gia vị, hàng đông lạnh và đồ uống trực tiếp từ nhà sản xuất Việt Nam & Đông Nam Á, phân phối sỉ theo thùng hoặc pallet.`,
              )}
            </p>
            <Link
              to="/ve-chung-toi"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t("Read our story & process", "Xem câu chuyện & quy trình")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                ABN
              </dt>
              <dd className="mt-1 font-medium">{company.abn}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t("Warehouse", "Kho hàng")}
              </dt>
              <dd className="mt-1 font-medium">{company.address}</dd>
            </div>
          </dl>
        </div>
      </section>

      <WhoWeServe />
      <CtaBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

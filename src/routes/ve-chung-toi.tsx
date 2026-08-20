import { createFileRoute } from "@tanstack/react-router";

import { WholesaleSteps } from "@/components/site/WholesaleSteps";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";
import warehouse from "@/assets/hero-warehouse.jpg";

const title = "Về Chúng Tôi & Quy Trình Bán Sỉ | Hung Vinh Asian Food";
const description =
  "Hung & Vinh Asian Food Pty Ltd — nhà nhập khẩu trực tiếp tại Wingfield SA. Quy trình bán sỉ 4 bước và giải đáp thắc mắc cho khách doanh nghiệp.";

export const Route = createFileRoute("/ve-chung-toi")({
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
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
              {t("About us", "Về chúng tôi")}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t(
                "A trusted direct importer in Wingfield, South Australia",
                "Nhà nhập khẩu trực tiếp đáng tin cậy tại Wingfield, Nam Úc",
              )}
            </h1>
            <p className="mt-5 text-muted-foreground md:text-lg">
              {t(
                `${company.name} supplies Vietnamese and Southeast Asian food to restaurants, grocers and distributors across Australia. We buy straight from the producers, hold stock in our own Wingfield warehouse, and deliver by the carton or pallet.`,
                `${company.name} cung cấp thực phẩm Việt Nam và Đông Nam Á cho nhà hàng, cửa hàng và nhà phân phối trên toàn nước Úc. Chúng tôi mua trực tiếp từ nhà sản xuất, trữ hàng tại kho Wingfield và giao theo thùng hoặc pallet.`,
              )}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  ABN
                </dt>
                <dd className="mt-1 font-medium">{company.abn}</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("Warehouse", "Kho hàng")}
                </dt>
                <dd className="mt-1 font-medium">{company.address}</dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={warehouse}
              alt={t(
                "Hung Vinh Asian Food warehouse pallets in Wingfield",
                "Pallet hàng tại kho Hung Vinh Asian Food ở Wingfield",
              )}
              width={1920}
              height={1080}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <WholesaleSteps />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}

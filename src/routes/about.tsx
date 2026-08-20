import { createFileRoute } from "@tanstack/react-router";
import { Building2, Container, Handshake, Warehouse } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { RfqForm } from "@/components/site/RfqForm";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

const title = "About Hung Vinh Asian Food — Adelaide Importer & Wholesaler";
const description =
  "Hung & Vinh Asian Food Pty Ltd (ABN 88 699 898 238) imports authentic Vietnamese and Southeast Asian food direct to Australian trade buyers from Wingfield SA.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Container,
    en: "Direct import, no middlemen",
    vi: "Nhập khẩu trực tiếp, không qua trung gian",
    enD: "We buy at source from Vietnamese producers and ship by container, so trade pricing stays sharp.",
    viD: "Chúng tôi mua tận gốc từ nhà sản xuất Việt Nam và vận chuyển bằng container, giữ giá sỉ cạnh tranh.",
  },
  {
    icon: Warehouse,
    en: "Adelaide warehouse stock",
    vi: "Kho hàng tại Adelaide",
    enD: "Pallet stock held at Wingfield SA means fast dispatch instead of waiting on the next vessel.",
    viD: "Hàng pallet trữ sẵn tại Wingfield SA giúp giao nhanh, không phải chờ chuyến tàu kế tiếp.",
  },
  {
    icon: Handshake,
    en: "Long-term trade partnerships",
    vi: "Hợp tác thương mại lâu dài",
    enD: "Consistent supply, honest lead times, and a team that answers the phone during service hours.",
    viD: "Nguồn hàng ổn định, thời gian giao trung thực và đội ngũ luôn nghe máy trong giờ phục vụ.",
  },
];

function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={["About us", "Về chúng tôi"]}
        title={[
          "An Adelaide import hub for authentic Vietnamese food",
          "Trung tâm nhập khẩu thực phẩm Việt chính gốc tại Adelaide",
        ]}
        subtitle={[
          "Hung & Vinh Asian Food Pty Ltd supplies restaurants, grocers and distributors across Australia.",
          "Hung & Vinh Asian Food Pty Ltd cung cấp cho nhà hàng, cửa hàng và nhà phân phối trên toàn nước Úc.",
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold">
            {t("Our story", "Câu chuyện của chúng tôi")}
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              {t(
                "Hung Vinh Asian Food began with a simple frustration shared by Adelaide chefs and grocers: the flavours they grew up with were either unavailable, inconsistent, or priced through three layers of resellers.",
                "Hung Vinh Asian Food ra đời từ một trăn trở chung của các đầu bếp và chủ cửa hàng tại Adelaide: những hương vị quen thuộc thường thiếu hàng, không ổn định, hoặc bị đội giá qua nhiều tầng trung gian.",
              )}
            </p>
            <p>
              {t(
                "Today we import directly from Vietnamese producers — Vilaconic ST25 rice, Cửa Lò fish sauce houses, regional paste makers and tropical beverage plants — and hold that stock at our Wingfield warehouse ready for pallet or container dispatch.",
                "Hôm nay chúng tôi nhập khẩu trực tiếp từ các nhà sản xuất Việt Nam — gạo ST25 Vilaconic, các nhà thùng nước mắm Cửa Lò, cơ sở gia vị vùng miền và nhà máy nước giải khát — và trữ hàng tại kho Wingfield, sẵn sàng giao pallet hoặc container.",
              )}
            </p>
            <p>
              {t(
                "Everything we stock is chosen the same way: would a Vietnamese kitchen serve it? If not, it doesn't go on the truck.",
                "Mọi sản phẩm đều được chọn theo một tiêu chí: một bếp Việt có phục vụ món này không? Nếu không, chúng tôi không nhập.",
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.en} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p.icon className="size-6 text-gold-deep" aria-hidden />
                <h3 className="mt-4 font-display text-base font-semibold">{t(p.en, p.vi)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(p.enD, p.viD)}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-sand p-8">
          <Building2 className="size-7 text-primary" aria-hidden />
          <h2 className="mt-4 font-display text-2xl font-semibold">
            {t("Business details", "Thông tin doanh nghiệp")}
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              [t("Legal entity", "Pháp nhân"), company.legalName],
              ["ABN", company.abn],
              [t("Warehouse", "Kho hàng"), company.address],
              [t("Phone", "Điện thoại"), company.phone],
              [t("Email", "Email"), company.email],
              [t("Website", "Website"), company.domain],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border pb-3 last:border-0">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
                <dd className="mt-1 break-words font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <WhoWeServe />
      <RfqForm />
    </>
  );
}

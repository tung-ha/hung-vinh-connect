import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Check, ShieldCheck } from "lucide-react";

import { ST25Spotlight } from "@/components/site/ST25Spotlight";
import { useI18n } from "@/lib/i18n";

const title = "Gạo ST25 Vilaconic Bán Sỉ | Hung Vinh Asian Food";
const description =
  "Gạo ST25 Vilaconic — Gạo ngon nhất thế giới 2019 & 2023. Quy cách 18kg, 5kg, 2kg cho bếp thương mại. Chứng nhận HACCP, ISO 22000, Global G.A.P.";

export const Route = createFileRoute("/gao-st25")({
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
  component: St25Page,
});

const packs = [
  ["18 kg", "Commercial kitchen bag", "Bao bếp thương mại", "HV-ST25-18"],
  ["5 kg", "Retail shelf bag", "Túi bán lẻ", "HV-ST25-5"],
  ["2 kg", "Sample / trial bag", "Túi mẫu dùng thử", "HV-ST25-2"],
];

const certs = [
  ["HACCP", "Food safety hazard control across milling and packing.", "Kiểm soát an toàn thực phẩm trong xay xát và đóng gói."],
  ["ISO 22000", "Certified food safety management system at the mill.", "Hệ thống quản lý an toàn thực phẩm đạt chuẩn tại nhà máy."],
  ["Global G.A.P.", "Good agricultural practice verified at farm level.", "Thực hành nông nghiệp tốt được xác nhận tại vùng trồng."],
];

function St25Page() {
  const { t } = useI18n();

  const quality = [
    ["Natural pandan aroma retained after milling", "Giữ hương lá dứa tự nhiên sau xay xát"],
    ["Fluffy, separate grains that hold through long service", "Cơm tơi, hạt rời, giữ được suốt ca phục vụ"],
    ["High cooked yield per bag for better kitchen margins", "Tỉ lệ nở cao mỗi bao, tăng biên lợi nhuận cho bếp"],
    ["Consistent crop sourcing direct from Sóc Trăng", "Nguồn hàng ổn định, nhập trực tiếp từ Sóc Trăng"],
  ];

  return (
    <main>
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground">
            <Award className="size-3.5" aria-hidden />
            {t("World's Best Rice 2019 & 2023", "Gạo ngon nhất thế giới 2019 & 2023")}
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {t("ST25 Vilaconic rice, wholesale by the pallet", "Gạo ST25 Vilaconic, bán sỉ theo pallet")}
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
            {t(
              "Grown in the Sóc Trăng delta and milled by Vilaconic, ST25 is the rice that put Vietnam on the world stage. We import it directly for Australian kitchens and grocers.",
              "Trồng tại vùng Sóc Trăng và xay xát bởi Vilaconic, ST25 là loại gạo đưa Việt Nam lên bản đồ thế giới. Chúng tôi nhập trực tiếp cho bếp và cửa hàng tại Úc.",
            )}
          </p>
          <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {quality.map(([en, vi]) => (
              <li key={en} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                {t(en!, vi!)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ST25Spotlight />

      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Pack sizes", "Quy cách đóng gói")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packs.map(([size, en, vi, sku]) => (
              <article key={sku} className="rounded-2xl border border-border bg-card p-7">
                <p className="font-serif text-3xl font-bold text-primary">{size}</p>
                <h3 className="mt-3 font-serif text-lg font-semibold">{t(en!, vi!)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{sku}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Export & safety certifications", "Chứng nhận xuất khẩu & an toàn")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {certs.map(([name, en, vi]) => (
              <article key={name} className="rounded-2xl border border-border bg-card p-7">
                <ShieldCheck className="size-5 text-gold" aria-hidden />
                <h3 className="mt-4 font-serif text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(en!, vi!)}</p>
              </article>
            ))}
          </div>
          <Link
            to="/lien-he"
            search={{ item: "ST25 Vilaconic Rice" }}
            className="mt-10 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-sm"
          >
            {t("Request bulk ST25 pallet pricing", "Yêu cầu báo giá pallet gạo ST25")}
          </Link>
        </div>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Award, FileCheck2, Leaf, ShieldCheck, Snowflake, Stamp } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { RfqForm } from "@/components/site/RfqForm";
import { useI18n } from "@/lib/i18n";

const title = "Certificates & Food Standards — Hung Vinh Asian Food";
const description =
  "HACCP, ISO 22000 and Global G.A.P. certified supply chains, Australian labelling compliance and cold-chain handling for imported Vietnamese food products.";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CertificatesPage,
});

const certs = [
  {
    icon: ShieldCheck,
    name: "HACCP",
    en: "Hazard analysis and critical control points applied across our supplier factories.",
    vi: "Phân tích mối nguy và điểm kiểm soát tới hạn áp dụng tại các nhà máy cung cấp.",
  },
  {
    icon: FileCheck2,
    name: "ISO 22000",
    en: "Food safety management systems certified at our primary rice and sauce producers.",
    vi: "Hệ thống quản lý an toàn thực phẩm được chứng nhận tại nhà sản xuất gạo và nước mắm chính.",
  },
  {
    icon: Leaf,
    name: "Global G.A.P.",
    en: "Good agricultural practice for ST25 paddy farming and tropical fruit sourcing.",
    vi: "Thực hành nông nghiệp tốt cho vùng lúa ST25 và nguồn trái cây nhiệt đới.",
  },
  {
    icon: Stamp,
    name: "Australian labelling",
    en: "Country-of-origin, allergen and nutrition labelling compliant with FSANZ requirements.",
    vi: "Nhãn xuất xứ, dị ứng và dinh dưỡng tuân thủ quy định FSANZ.",
  },
  {
    icon: Snowflake,
    name: "Cold chain control",
    en: "Frozen seafood and eel lines held and transported at -18°C with temperature logging.",
    vi: "Hải sản và lươn đông lạnh được lưu trữ, vận chuyển ở -18°C kèm ghi nhận nhiệt độ.",
  },
  {
    icon: Award,
    name: "Vilaconic authorisation",
    en: "Authorised Australian distributor for Vilaconic ST25, the World's Best Rice winner.",
    vi: "Nhà phân phối được uỷ quyền tại Úc của Vilaconic ST25 — gạo ngon nhất thế giới.",
  },
];

function CertificatesPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={["Quality & compliance", "Chất lượng & Tuân thủ"]}
        title={["Certificates and food standards", "Chứng nhận và tiêu chuẩn thực phẩm"]}
        subtitle={[
          "Documentation packs are available with every wholesale account — just ask when you request pricing.",
          "Bộ hồ sơ chứng nhận có sẵn cho mọi tài khoản sỉ — chỉ cần yêu cầu khi xin báo giá.",
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <article key={c.name} className="hover-lift rounded-2xl border border-border bg-card p-7 shadow-soft">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <c.icon className="size-6" aria-hidden />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold">{c.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.en, c.vi)}</p>
          </article>
        ))}
      </section>

      <RfqForm />
    </>
  );
}

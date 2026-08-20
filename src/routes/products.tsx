import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { ProductCatalog } from "@/components/site/ProductCatalog";
import { RfqForm } from "@/components/site/RfqForm";

const title = "Wholesale Catalog — Hung Vinh Asian Food";
const description =
  "Browse the full B2B range: ST25 rice, Cửa Lò fish sauce, regional cooking pastes, frozen seafood, tropical drinks, dried fruits, noodles and snacks.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow={["B2B Catalog", "Danh mục sỉ"]}
        title={["Wholesale product catalog", "Danh mục sản phẩm bán sỉ"]}
        subtitle={[
          "Carton, pallet and container quantities dispatched from Wingfield SA.",
          "Số lượng theo thùng, pallet và container, xuất từ kho Wingfield SA.",
        ]}
      />
      <ProductCatalog />
      <RfqForm />
    </>
  );
}

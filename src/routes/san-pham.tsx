import { createFileRoute } from "@tanstack/react-router";

import { ProductCatalog } from "@/components/site/ProductCatalog";
import { CtaBanner } from "@/components/site/CtaBanner";

const title = "Danh Mục Sản Phẩm Sỉ | Hung Vinh Asian Food";
const description =
  "Danh mục sỉ thực phẩm Việt & Đông Nam Á: gạo ST25, nước mắm, cốt gia vị, đồ uống, hàng đông lạnh và đồ khô. Tìm theo tên hoặc mã SKU.";

export const Route = createFileRoute("/san-pham")({
  validateSearch: (s: Record<string, unknown>) => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
  }),
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
  component: ProductsPage,
});

function ProductsPage() {
  const { cat } = Route.useSearch();

  return (
    <main>
      <ProductCatalog initialCategory={cat} />
      <CtaBanner />
    </main>
  );
}

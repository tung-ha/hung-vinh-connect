export type Category =
  | "rice"
  | "sauces"
  | "pastes"
  | "noodles"
  | "dried"
  | "drinks"
  | "frozen";

export type Product = {
  id: string;
  name: string;
  nameVi: string;
  brand: string;
  category: Category;
  sku: string;
  /** Net weight / volume per unit */
  pack: string;
  origin: string;
  /** Carton / tray packing spec */
  cartonSpec: string;
  unitsPerCarton: number;
  cartonDims: string;
  shelfLife: string;
  image: string;
};

export const categories: { id: Category; en: string; vi: string }[] = [
  { id: "rice", en: "Premium Rice", vi: "Gạo Cao Cấp" },
  { id: "sauces", en: "Traditional Fish Sauce", vi: "Nước Mắm Truyền Thống" },
  { id: "pastes", en: "Cooking Sauce Bases", vi: "Cốt Gia Vị & Sốt Nấu" },
  { id: "drinks", en: "Beverages", vi: "Nước Giải Khát" },
  { id: "frozen", en: "Ready Meals & Frozen", vi: "Đồ Hộp & Đông Lạnh" },
  { id: "dried", en: "Dried Goods & Nuts", vi: "Đồ Khô & Hạt" },
  { id: "noodles", en: "Noodles & Crackers", vi: "Mì & Bánh Đa" },
];

const images = import.meta.glob<string>("../assets/products/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const img = (key: string): string => images[`../assets/products/${key}.jpg`] ?? "";

type Input = Omit<Product, "sku" | "image"> & { sku?: string; image: string };

const make = (p: Input): Product => ({
  ...p,
  sku: p.sku ?? `HV-${p.id.toUpperCase()}`,
  image: img(p.image),
});

const RICE_DIMS = "Palletised — 1,000 kg / pallet";

export const products: Product[] = [
  // ── Premium Rice — Vilaconic ───────────────────────────────────────────
  ...([
    ["1kg", 20],
    ["2kg", 10],
    ["5kg", 4],
    ["10kg", 2],
    ["20kg", 1],
  ] as const).map(([size, upc]) =>
    make({
      id: `st25-${size}`,
      name: `Vilaconic ST25 Rice ${size}`,
      nameVi: `Gạo ST25 Vilaconic ${size}`,
      brand: "Vilaconic",
      category: "rice",
      pack: `${size} bag`,
      origin: "Sóc Trăng, Việt Nam",
      cartonSpec: `${upc} × ${size} / bao`,
      unitsPerCarton: upc,
      cartonDims: RICE_DIMS,
      shelfLife: "24 tháng / 24 months",
      image: "st25",
    }),
  ),
  ...([
    ["5kg", 4],
    ["10kg", 2],
    ["20kg", 1],
  ] as const).map(([size, upc]) =>
    make({
      id: `jasmine-${size}`,
      name: `Blue Silk Premium Jasmine Rice ${size}`,
      nameVi: `Gạo Thơm Jasmine Blue Silk ${size}`,
      brand: "Vilaconic",
      category: "rice",
      pack: `${size} bag`,
      origin: "Việt Nam",
      cartonSpec: `${upc} × ${size} / bao`,
      unitsPerCarton: upc,
      cartonDims: RICE_DIMS,
      shelfLife: "24 tháng / 24 months",
      image: "jasmine",
    }),
  ),

  // ── Fish sauce ─────────────────────────────────────────────────────────
  make({
    id: "fs-ngocbien",
    name: "Ngọc Biển Fish Sauce 32°N",
    nameVi: "Nước Mắm Ngọc Biển 32 Đạm",
    brand: "Ngọc Biển",
    category: "sauces",
    pack: "500 ml / chai",
    origin: "Việt Nam",
    cartonSpec: "6 chai / thùng",
    unitsPerCarton: 6,
    cartonDims: "Đạm tổng ≥ 32°N",
    shelfLife: "24 tháng / 24 months",
    image: "fs-ngocbien",
  }),
  make({
    id: "fs-cualo-48",
    name: "Cửa Lò 48 Fish Sauce 30°N",
    nameVi: "Nước Mắm Cửa Lò 48",
    brand: "Cửa Lò (OCOP)",
    category: "sauces",
    pack: "500 ml / chai",
    origin: "Cửa Lò, Nghệ An",
    cartonSpec: "6 chai / thùng",
    unitsPerCarton: 6,
    cartonDims: "Đạm tổng ≥ 30°N",
    shelfLife: "24 tháng / 24 months",
    image: "fs-cualo-48",
  }),
  make({
    id: "fs-cualo-38",
    name: "Cửa Lò 38 Fish Sauce 20°N",
    nameVi: "Nước Mắm Cửa Lò 38",
    brand: "Cửa Lò (OCOP)",
    category: "sauces",
    pack: "650 ml / chai",
    origin: "Cửa Lò, Nghệ An",
    cartonSpec: "6 chai / thùng",
    unitsPerCarton: 6,
    cartonDims: "Đạm tổng ≥ 20°N",
    shelfLife: "24 tháng / 24 months",
    image: "fs-cualo-38",
  }),

  // ── Uma Food cooking sauce bases ───────────────────────────────────────
  ...([
    ["bunbohue", "Hue Beef Noodle Soup Sauce", "Sốt Bún Bò Huế", "sauce-bunbohue"],
    ["canhchua", "Sour Soup Cooking Sauce", "Sốt Nấu Canh Chua", "sauce-canhchua"],
    ["bunrieu", "Crab Noodle Soup Sauce", "Sốt Bún Riêu", "sauce-bunrieu"],
    ["laumam", "Fermented Fish Hotpot Base", "Nước Cốt Lẩu Mắm", "sauce-laumam"],
    ["cakhotieu", "Braised Fish in Pepper Sauce", "Sốt Cá Kho Tiêu", "sauce-cakhotieu"],
  ] as const).map(([id, name, nameVi, image]) =>
    make({
      id: `sauce-${id}`,
      name,
      nameVi,
      brand: "Uma Food",
      category: "pastes",
      pack: "200 g / hũ",
      origin: "Việt Nam",
      cartonSpec: "12 hũ / thùng",
      unitsPerCarton: 12,
      cartonDims: "Hũ thuỷ tinh 200 g",
      shelfLife: "18 tháng / 18 months",
      image,
    }),
  ),

  // ── Ready meals (canned / tray) ────────────────────────────────────────
  ...([
    ["eel-pepper", "Braised Eel with Pepper", "Lươn Kho Tiêu", "eel-pepper"],
    ["eel-teriyaki", "Eel with Teriyaki Sauce", "Lươn Sốt Teriyaki", "eel-teriyaki"],
    ["mackerel-teriyaki", "Mackerel with Teriyaki Sauce", "Cá Saba Sốt Teriyaki", "mackerel-teriyaki"],
    ["climbing-pepper", "Braised Climbing Fish with Pepper", "Cá Rô Kho Tộ", "climbing-pepper"],
    ["snakehead-pepper", "Braised Snakehead Fish with Pepper", "Cá Lóc Kho Tiêu", "snakehead-pepper"],
    ["goby-pepper", "Braised Goby Fish with Pepper", "Cá Bống Kho Tiêu", "goby-pepper"],
  ] as const).map(([id, name, nameVi, image]) =>
    make({
      id,
      name,
      nameVi,
      brand: "Vilaconic",
      category: "frozen",
      pack: "200 g / khay",
      origin: "Việt Nam",
      cartonSpec: "12 khay / thùng",
      unitsPerCarton: 12,
      cartonDims: "Khay 200 g, hút chân không",
      shelfLife: "12 tháng / 12 months",
      image,
    }),
  ),

  // ── Tropi juice drinks ─────────────────────────────────────────────────
  ...([
    ["passion", "Passion Fruit Juice Drink", "Nước Chanh Dây", "drink-passion"],
    ["sugarcane", "Sugarcane Juice Drink", "Nước Mía", "drink-sugarcane"],
    ["durian", "Durian Juice Drink", "Nước Sầu Riêng", "drink-durian"],
    ["lychee", "Lychee Juice Drink", "Nước Vải", "drink-lychee"],
    ["mangosteen", "Mangosteen Juice Drink", "Nước Măng Cụt", "drink-mangosteen"],
    ["lemon", "Lemonade Juice Drink", "Nước Chanh", "drink-lemon"],
    ["cocktail", "Cocktail Juice Drink", "Nước Trái Cây Thập Cẩm", "drink-cocktail"],
    ["orange", "Orange Juice Drink", "Nước Cam", "drink-orange"],
    ["grape", "Grape Juice Drink", "Nước Nho", "drink-grape"],
    ["strawberry", "Strawberry Juice Drink", "Nước Dâu Tây", "drink-strawberry"],
    ["watermelon", "Watermelon Juice Drink", "Nước Dưa Hấu", "drink-watermelon"],
    ["peach", "Peach Juice Drink", "Nước Đào", "drink-peach"],
  ] as const).map(([id, name, nameVi, image]) =>
    make({
      id: `tropi-${id}`,
      name: `Tropi ${name} 330ml`,
      nameVi: `${nameVi} Tropi 330ml`,
      brand: "Tropi",
      category: "drinks",
      pack: "330 ml / lon",
      origin: "Việt Nam",
      cartonSpec: "24 lon / khay",
      unitsPerCarton: 24,
      cartonDims: "Lon nhôm 330 ml",
      shelfLife: "12 tháng / 12 months",
      image,
    }),
  ),

  // ── iChill freeze-dried beverages ──────────────────────────────────────
  ...([
    ["peach-tea", "Peach Orange Lemongrass Tea", "Trà Đào Cam Sả", "ichill-peach-tea"],
    ["longan", "Longan & Snow Fungus Chia Seeds Drink", "Sâm Long Nhãn Nấm Tuyết Hạt Chia", "ichill-longan"],
    ["strawberry", "Strawberry & Hibiscus Drink", "Dâu Tây Atiso Đỏ", "ichill-strawberry"],
  ] as const).map(([id, name, nameVi, image]) =>
    make({
      id: `ichill-${id}`,
      name,
      nameVi,
      brand: "iChill",
      category: "drinks",
      pack: "1 ly / cup",
      origin: "Việt Nam",
      cartonSpec: "24 ly / thùng",
      unitsPerCarton: 24,
      cartonDims: "Ly sấy thăng hoa, pha lạnh",
      shelfLife: "12 tháng / 12 months",
      image,
    }),
  ),

  // ── Dried fruit & nuts ─────────────────────────────────────────────────
  make({
    id: "mango-dried",
    name: "Dried Mango",
    nameVi: "Xoài Sấy",
    brand: "Vilaconic",
    category: "dried",
    pack: "250 g / gói",
    origin: "Việt Nam",
    cartonSpec: "20 gói / thùng",
    unitsPerCarton: 20,
    cartonDims: "Túi zip 250 g",
    shelfLife: "12 tháng / 12 months",
    image: "mango-dried",
  }),
  make({
    id: "mango-chilli",
    name: "Salted Chilli Mango",
    nameVi: "Xoài Sấy Muối Ớt",
    brand: "Vilaconic",
    category: "dried",
    pack: "250 g / gói",
    origin: "Việt Nam",
    cartonSpec: "20 gói / thùng",
    unitsPerCarton: 20,
    cartonDims: "Túi zip 250 g",
    shelfLife: "12 tháng / 12 months",
    image: "mango-chilli",
  }),
  ...([
    ["cashew-chilli", "Chilli & Garlic Coated Cashew", "Hạt Điều Tỏi Ớt", "250 g / hũ", "24 hũ / thùng", "cashew-chilli"],
    ["cashew-rustic", "Rustic Grilled Cashew", "Hạt Điều Nướng Mộc", "260 g / hũ", "24 hũ / thùng", "cashew-rustic"],
    ["cashew-skin-250", "Roasted Cashew With Skin", "Hạt Điều Rang Vỏ Lụa", "250 g / hũ", "24 hũ / thùng", "cashew-skin-250"],
    ["cashew-tray-320", "Roasted Cashew With Skin — Gift Tray", "Hạt Điều Rang Vỏ Lụa — Khay Tròn", "320 g / khay", "24 khay tròn / thùng", "cashew-tray-320"],
    ["peanut-chilli", "Chilli & Garlic Coated Peanuts", "Đậu Phộng Tỏi Ớt", "250 g / hũ", "24 hũ / thùng", "peanut-chilli"],
    ["peanut-honey", "Honey & Ginger Coated Peanuts", "Đậu Phộng Gừng Mật Ong", "250 g / hũ", "24 hũ / thùng", "peanut-honey"],
  ] as const).map(([id, name, nameVi, pack, cartonSpec, image]) =>
    make({
      id,
      name: `Grainoo ${name}`,
      nameVi,
      brand: "Grainoo",
      category: "dried",
      pack,
      origin: "Bình Phước, Việt Nam",
      cartonSpec,
      unitsPerCarton: 24,
      cartonDims: "Hũ nhựa PET",
      shelfLife: "12 tháng / 12 months",
      image,
    }),
  ),

  // ── Noodles & crackers ─────────────────────────────────────────────────
  make({
    id: "indomie-5",
    name: "Indomie Mi Goreng Special 5 Pack",
    nameVi: "Mì Xào Indomie Mi Goreng 5 Gói",
    brand: "Indomie",
    category: "noodles",
    pack: "85 g × 5",
    origin: "Indonesia",
    cartonSpec: "40 lốc / thùng",
    unitsPerCarton: 40,
    cartonDims: "Lốc 5 gói × 85 g",
    shelfLife: "12 tháng / 12 months",
    image: "indomie-5",
  }),
  make({
    id: "indomie-10",
    name: "Indomie Mi Goreng Special 10 Pack",
    nameVi: "Mì Xào Indomie Mi Goreng 10 Gói",
    brand: "Indomie",
    category: "noodles",
    pack: "85 g × 10",
    origin: "Indonesia",
    cartonSpec: "60 lốc / thùng",
    unitsPerCarton: 60,
    cartonDims: "Lốc 10 gói × 85 g",
    shelfLife: "12 tháng / 12 months",
    image: "indomie-10",
  }),
  make({
    id: "cracker-blacksesame",
    name: "Lương Sơn Black Sesame Rice Cracker",
    nameVi: "Bánh Đa Vừng Đen Lương Sơn",
    brand: "Bánh Đa Lương Sơn",
    category: "noodles",
    pack: "140 g / gói (5 chiếc)",
    origin: "Lương Sơn, Việt Nam",
    cartonSpec: "48 gói / thùng",
    unitsPerCarton: 48,
    cartonDims: "Gói 5 chiếc × 140 g",
    shelfLife: "6 tháng / 6 months",
    image: "cracker-blacksesame",
  }),
];

export const productCount = products.length;

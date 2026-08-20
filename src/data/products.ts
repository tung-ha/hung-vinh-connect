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
  category: Category;
  sku: string;
  pack: string;
  origin: string;
  unitsPerCarton: number;
  cartonDims: string;
  shelfLife: string;
};

export const categories: { id: Category; en: string; vi: string }[] = [
  { id: "rice", en: "Rice & Grains", vi: "Gạo & Ngũ cốc" },
  { id: "sauces", en: "Sauces", vi: "Nước chấm" },
  { id: "pastes", en: "Pastes & Seasoning", vi: "Gia vị & Sốt" },
  { id: "noodles", en: "Noodles", vi: "Bún & Mì" },
  { id: "dried", en: "Dried Goods", vi: "Hàng khô" },
  { id: "drinks", en: "Beverages", vi: "Đồ uống" },
  { id: "frozen", en: "Frozen", vi: "Hàng đông lạnh" },
];

const make = (
  id: string,
  name: string,
  nameVi: string,
  category: Category,
  pack: string,
  origin: string,
  unitsPerCarton: number,
  cartonDims: string,
  shelfLife: string,
): Product => ({
  id,
  name,
  nameVi,
  category,
  sku: `HV-${id.toUpperCase()}`,
  pack,
  origin,
  unitsPerCarton,
  cartonDims,
  shelfLife,
});

export const products: Product[] = [
  make("st25-18", "ST25 Vilaconic Rice 18kg", "Gạo ST25 Vilaconic 18kg", "rice", "18 kg bag", "Sóc Trăng, Vietnam", 1, "60 × 38 × 16 cm", "24 months"),
  make("st25-5", "ST25 Vilaconic Rice 5kg", "Gạo ST25 Vilaconic 5kg", "rice", "5 kg bag", "Sóc Trăng, Vietnam", 4, "42 × 30 × 24 cm", "24 months"),
  make("st25-2", "ST25 Vilaconic Rice 2kg", "Gạo ST25 Vilaconic 2kg", "rice", "2 kg bag", "Sóc Trăng, Vietnam", 10, "45 × 32 × 26 cm", "24 months"),
  make("jasmine-18", "Jasmine Long Grain Rice 18kg", "Gạo thơm Jasmine 18kg", "rice", "18 kg bag", "Mekong Delta, Vietnam", 1, "60 × 38 × 16 cm", "24 months"),
  make("broken-rice", "Com Tam Broken Rice 10kg", "Gạo tấm 10kg", "rice", "10 kg bag", "Vietnam", 2, "50 × 34 × 22 cm", "18 months"),
  make("glutinous", "Glutinous Sticky Rice 10kg", "Gạo nếp 10kg", "rice", "10 kg bag", "Vietnam", 2, "50 × 34 × 22 cm", "18 months"),
  make("rice-flour", "Rice Flour", "Bột gạo", "rice", "400 g", "Vietnam", 30, "40 × 30 × 22 cm", "18 months"),
  make("tapioca-starch", "Tapioca Starch", "Bột năng", "rice", "400 g", "Vietnam", 30, "40 × 30 × 22 cm", "18 months"),

  make("fs-40n", "Cửa Lò 40°N Fish Sauce", "Nước mắm Cửa Lò 40°N", "sauces", "650 ml", "Nghệ An, Vietnam", 12, "38 × 28 × 26 cm", "36 months"),
  make("fs-48n", "Cửa Lò 48°N Premium Fish Sauce", "Nước mắm Cửa Lò 48°N", "sauces", "500 ml", "Nghệ An, Vietnam", 12, "36 × 27 × 24 cm", "36 months"),
  make("fs-bulk", "Fish Sauce Catering 4.5L", "Nước mắm can 4.5L", "sauces", "4.5 L", "Vietnam", 4, "40 × 30 × 32 cm", "24 months"),
  make("soy-light", "Light Soy Sauce", "Nước tương", "sauces", "700 ml", "Vietnam", 12, "38 × 28 × 27 cm", "24 months"),
  make("soy-bulk", "Soy Sauce Catering 5L", "Nước tương can 5L", "sauces", "5 L", "Vietnam", 4, "40 × 30 × 33 cm", "24 months"),
  make("hoisin", "Hoisin Sauce", "Tương đen", "sauces", "500 g", "Vietnam", 24, "40 × 30 × 20 cm", "24 months"),
  make("chilli-sauce", "Chilli Garlic Sauce", "Tương ớt tỏi", "sauces", "700 g", "Vietnam", 12, "38 × 28 × 26 cm", "24 months"),
  make("sriracha", "Sriracha Hot Sauce", "Tương ớt Sriracha", "sauces", "500 ml", "Vietnam", 20, "40 × 30 × 24 cm", "24 months"),
  make("oyster", "Oyster Sauce", "Dầu hào", "sauces", "750 g", "Thailand", 12, "38 × 28 × 26 cm", "24 months"),
  make("sweet-chilli", "Sweet Chilli Dipping Sauce", "Tương ớt ngọt", "sauces", "730 ml", "Thailand", 12, "38 × 28 × 27 cm", "24 months"),

  make("bbh-paste", "Bún Bò Huế Broth Paste", "Sốt bún bò Huế", "pastes", "400 g", "Huế, Vietnam", 24, "40 × 30 × 20 cm", "24 months"),
  make("pho-paste", "Phở Broth Paste", "Sốt phở", "pastes", "400 g", "Vietnam", 24, "40 × 30 × 20 cm", "24 months"),
  make("satay", "Chilli Satay Paste", "Sa tế", "pastes", "300 g", "Vietnam", 24, "38 × 28 × 18 cm", "24 months"),
  make("shrimp-paste", "Fermented Shrimp Paste", "Mắm tôm", "pastes", "400 g", "Vietnam", 24, "38 × 28 × 20 cm", "24 months"),
  make("tamarind", "Tamarind Concentrate", "Me cô đặc", "pastes", "454 g", "Thailand", 24, "38 × 28 × 20 cm", "24 months"),
  make("curry-powder", "Vietnamese Curry Powder", "Bột cà ri", "pastes", "1 kg", "Vietnam", 10, "36 × 26 × 24 cm", "24 months"),
  make("msg", "Seasoning Powder", "Hạt nêm", "pastes", "900 g", "Vietnam", 12, "40 × 30 × 24 cm", "24 months"),
  make("coconut-cream", "Coconut Cream", "Nước cốt dừa", "pastes", "400 ml can", "Vietnam", 24, "40 × 27 × 12 cm", "36 months"),

  make("pho-noodle", "Dried Phở Rice Noodles", "Bánh phở khô", "noodles", "1 kg", "Vietnam", 20, "45 × 30 × 30 cm", "24 months"),
  make("bun-noodle", "Dried Bún Vermicelli", "Bún khô", "noodles", "1 kg", "Vietnam", 20, "45 × 30 × 30 cm", "24 months"),
  make("bbh-noodle", "Bún Bò Huế Thick Noodles", "Bún bò Huế sợi to", "noodles", "1 kg", "Vietnam", 20, "45 × 30 × 30 cm", "24 months"),
  make("rice-paper", "Rice Paper 22cm", "Bánh tráng 22cm", "noodles", "500 g", "Tây Ninh, Vietnam", 20, "40 × 30 × 30 cm", "18 months"),
  make("glass-noodle", "Mung Bean Glass Noodles", "Miến dong", "noodles", "500 g", "Vietnam", 30, "42 × 30 × 28 cm", "24 months"),
  make("egg-noodle", "Dried Egg Noodles", "Mì trứng khô", "noodles", "1 kg", "Vietnam", 20, "45 × 30 × 30 cm", "18 months"),
  make("instant-pho", "Instant Phở Bowl", "Phở ăn liền", "noodles", "70 g × 24", "Vietnam", 24, "44 × 30 × 26 cm", "12 months"),

  make("dried-shrimp", "Dried Shrimp", "Tôm khô", "dried", "200 g", "Vietnam", 40, "40 × 30 × 22 cm", "12 months"),
  make("wood-ear", "Dried Wood Ear Mushroom", "Nấm mèo khô", "dried", "500 g", "Vietnam", 20, "45 × 32 × 30 cm", "24 months"),
  make("shiitake", "Dried Shiitake Mushroom", "Nấm đông cô khô", "dried", "500 g", "Vietnam", 20, "45 × 32 × 30 cm", "24 months"),
  make("lotus-seed", "Dried Lotus Seeds", "Hạt sen khô", "dried", "500 g", "Vietnam", 20, "40 × 30 × 24 cm", "18 months"),
  make("cinnamon", "Cassia Cinnamon Sticks", "Quế thanh", "dried", "250 g", "Yên Bái, Vietnam", 30, "38 × 28 × 24 cm", "36 months"),
  make("star-anise", "Star Anise", "Hoa hồi", "dried", "250 g", "Lạng Sơn, Vietnam", 30, "38 × 28 × 24 cm", "36 months"),
  make("cashew", "Roasted Cashew Nuts", "Hạt điều rang", "dried", "1 kg", "Bình Phước, Vietnam", 10, "40 × 30 × 26 cm", "12 months"),

  make("lychee-juice", "Lychee Juice Drink", "Nước vải", "drinks", "330 ml × 24", "Vietnam", 24, "40 × 27 × 13 cm", "18 months"),
  make("coconut-water", "Coconut Water", "Nước dừa", "drinks", "330 ml × 24", "Bến Tre, Vietnam", 24, "40 × 27 × 13 cm", "18 months"),
  make("soymilk", "Soy Milk", "Sữa đậu nành", "drinks", "300 ml × 24", "Vietnam", 24, "40 × 27 × 15 cm", "12 months"),
  make("vn-coffee", "Vietnamese Robusta Coffee", "Cà phê Robusta", "drinks", "500 g", "Đắk Lắk, Vietnam", 20, "40 × 30 × 22 cm", "24 months"),
  make("jasmine-tea", "Jasmine Green Tea", "Trà xanh nhài", "drinks", "500 g", "Thái Nguyên, Vietnam", 20, "40 × 30 × 22 cm", "24 months"),

  make("spring-roll", "Frozen Spring Rolls", "Chả giò đông lạnh", "frozen", "1 kg", "Vietnam", 10, "40 × 30 × 24 cm", "18 months (-18°C)"),
  make("banh-mi-pate", "Frozen Pork Pâté", "Pate heo đông lạnh", "frozen", "500 g", "Vietnam", 20, "40 × 30 × 20 cm", "12 months (-18°C)"),
  make("gio-lua", "Frozen Vietnamese Pork Roll", "Giò lụa đông lạnh", "frozen", "500 g", "Vietnam", 20, "40 × 30 × 20 cm", "12 months (-18°C)"),
  make("banana-leaf", "Frozen Banana Leaves", "Lá chuối đông lạnh", "frozen", "400 g", "Vietnam", 30, "45 × 32 × 24 cm", "18 months (-18°C)"),
];

export const productCount = products.length;

export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  buyNowSection: { price: string; unit: string; processingParams: string[] };
}

export const products: Product[] = [
  {
    id: "mango",
    name: "Cream Mango",
    subName: "Liquid Sunshine.",
    price: "Rs. 120",
    folderPath: "/images/mango",
    themeColor: "#FFB74D",
    gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
    stats: [{ label: "Pulp", val: "100%" }, { label: "Sugar", val: "0g" }],
    section1: { title: "Cream Mango.", subtitle: "Pure Alphonso Gold." },
    section2: { title: "Sun-Ripened.", subtitle: "Hand-picked and cold-pressed within hours." },
    section3: { title: "Velvety Texture.", subtitle: "Rich, thick, and bursting with Vitamin C." },
    section4: { title: "No Concentrates.", subtitle: "Just 100% fruit." },
    buyNowSection: { price: "Rs. 120", unit: "370ml", processingParams: ["Cold Pressed", "HPP Treated"] }
  },
  {
    id: "soursop-coconut",
    name: "Soursop & King Coconut",
    subName: "Tropical Hydration.",
    price: "Rs. 150",
    folderPath: "/images/soursop",
    themeColor: "#26A69A",
    gradient: "linear-gradient(135deg, #26A69A 0%, #00897B 100%)",
    stats: [{ label: "Hydration", val: "High" }, { label: "Fiber", val: "Natural" }],
    section1: { title: "Island Bliss.", subtitle: "Soursop meets King Coconut." },
    section2: { title: "Electrolyte Rich.", subtitle: "The ultimate natural recovery drink." },
    section3: { title: "Exotic Fusion.", subtitle: "Creamy soursop pulp with crisp coconut water." },
    section4: { title: "Freshly Harvested.", subtitle: "Taste the tropics." },
    buyNowSection: { price: "Rs. 150", unit: "370ml", processingParams: ["Raw & Pure", "Never Heated"] }
  },
  {
    id: "strawberry",
    name: "Strawberry Milkshake",
    subName: "Creamy Indulgence.",
    price: "Rs. 140",
    folderPath: "/images/strawberry",
    themeColor: "#F48FB1",
    gradient: "linear-gradient(135deg, #F48FB1 0%, #F06292 100%)",
    stats: [{ label: "Dairy", val: "Fresh" }, { label: "Fruit", val: "Real" }],
    section1: { title: "Strawberry Fields.", subtitle: "Summer in a bottle." },
    section2: { title: "Real Berries.", subtitle: "Blended with farm-fresh dairy cream." },
    section3: { title: "Silky Smooth.", subtitle: "A nostalgic treat, redefined." },
    section4: { title: "Consume Immediately.", subtitle: "Freshness guaranteed." },
    buyNowSection: { price: "Rs. 140", unit: "370ml", processingParams: ["Real Fruit", "Chilled Delivery"] }
  },
  {
    id: "lime",
    name: "Fresh Lime",
    subName: "Zesty Revival.",
    price: "Rs. 90",
    folderPath: "/images/lime",
    themeColor: "#D4E157",
    gradient: "linear-gradient(135deg, #D4E157 0%, #AFB42B 100%)",
    stats: [{ label: "Zest", val: "100%" }, { label: "Detox", val: "Active" }],
    section1: { title: "Citrus Snap.", subtitle: "Instant refreshment." },
    section2: { title: "Cold-Pressed Lime.", subtitle: "Retaining all the essential oils and enzymes." },
    section3: { title: "The Cleanse.", subtitle: "Perfect for a morning detox or afternoon lift." },
    section4: { title: "Pure Spark.", subtitle: "Nothing but lime and life." },
    buyNowSection: { price: "Rs. 90", unit: "370ml", processingParams: ["High Vitamin C", "Zest Infused"] }
  }
];

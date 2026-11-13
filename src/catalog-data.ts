export interface CatalogVariant {
  id: number;
  a: boolean;
  o: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  type: string;
  category: string;
  price: number;
  image: string;
  sizes: string[];
  variants: CatalogVariant[];
}

export interface CatalogLook {
  name: string;
  description: string;
  image: string;
  products: string[];
}

export interface CatalogData {
  source: string;
  looks: CatalogLook[];
  items: CatalogItem[];
}

export const CATALOG_DATA: CatalogData = {
  source: "https://zeli-runway.studio/collections/ss26",
  looks: [
    {
      name: "The City Edit",
      description: "ZELI Forest Green Signature Hoodie, Boxy Tee, and Orbit 01 Low Sneakers.",
      image: "https://reel-ref-try-the-look.vercel.app/assets/original-look-1.webp",
      products: ["tatum-5-orbit-copy", "tshirt", "sweatshirt"]
    },
    {
      name: "Gallery Opening",
      description: "ZELI Onyx Heavyweight Hoodie, Relaxed Fleece Trousers, and Retro High Courts.",
      image: "https://reel-ref-try-the-look.vercel.app/assets/original-look-5.webp",
      products: ["tatum-5-orbit", "hoodie-black", "tshirt"]
    },
    {
      name: "Atelier Focus",
      description: "ZELI Forest Green Hoodie, Heavyweight Graphic Tee, and Orbit Lows.",
      image: "https://reel-ref-try-the-look.vercel.app/assets/original-look-4.webp",
      products: ["sweatshirt-plus", "tatum-5-orbit", "tshirt"]
    },
    {
      name: "Studio Day",
      description: "ZELI Onyx Heavyweight Hoodie, Tactical Cargo Pants, and Court Highs.",
      image: "https://reel-ref-try-the-look.vercel.app/assets/original-look-6.webp",
      products: ["hoodie-black", "tatum-5-orbit-copy", "tshirt"]
    },
    {
      name: "Nightline Movement",
      description: "ZELI Raw Oatmeal Knit Sweater, Orbit 01 Sneakers, and Boxy Graphic Tee.",
      image: "https://reel-ref-try-the-look.vercel.app/assets/original-look-3.webp",
      products: ["sweatshirt", "tatum-5-orbit", "tshirt"]
    },
    {
      name: "Pure Form",
      description: "ZELI Tactical Cargo Pants, Retro High Sneakers, and Heavyweight Tee.",
      image: "https://reel-ref-try-the-look.vercel.app/assets/original-look-2.webp",
      products: ["hoodie", "air-jordan-12-retro-copy", "tshirt"]
    }
  ],
  items: [
    // ==========================================
    // 1. T-SHIRTS & GRAPHIC TEES
    // ==========================================
    {
      id: "tshirt",
      name: "ZELI Boxy Heavyweight Washed Tee",
      type: "Vintage Washed 280GSM Cotton",
      category: "T-Shirts",
      price: 95.0,
      image: "/assets/products/zeli-graphic-tee.jpg",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 56836145316145, a: true, o: ["S"] },
        { id: 56836145348913, a: true, o: ["M"] },
        { id: 56836145381681, a: true, o: ["L"] },
        { id: 56836145414449, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-tee-bauhaus",
      name: "ZELI Bauhaus Atelier Graphic Tee",
      type: "Heavyweight 300GSM Combed Cotton",
      category: "T-Shirts",
      price: 110.0,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58010001, a: true, o: ["S"] },
        { id: 58010002, a: true, o: ["M"] },
        { id: 58010003, a: true, o: ["L"] },
        { id: 58010004, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-tee-acid-wash",
      name: "ZELI Acid Wash Vintage Oversized Tee",
      type: "Custom Distressed Pigment Dye",
      category: "T-Shirts",
      price: 105.0,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58010011, a: true, o: ["S"] },
        { id: 58010012, a: true, o: ["M"] },
        { id: 58010013, a: true, o: ["L"] },
        { id: 58010014, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-tee-supima-minimal",
      name: "ZELI Minimalist Supima Boxy Tee",
      type: "320GSM Heavyweight Luxury Jersey",
      category: "T-Shirts",
      price: 90.0,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58010021, a: true, o: ["S"] },
        { id: 58010022, a: true, o: ["M"] },
        { id: 58010023, a: true, o: ["L"] },
        { id: 58010024, a: true, o: ["XL"] }
      ]
    },

    // ==========================================
    // 2. LUXURY SHIRTS & OVERSHIRTS
    // ==========================================
    {
      id: "zeli-shirt-camp-poplin",
      name: "ZELI Relaxed Camp-Collar Poplin Shirt",
      type: "Crisp Italian Cotton Poplin",
      category: "Shirts",
      price: 165.0,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58020001, a: true, o: ["S"] },
        { id: 58020002, a: true, o: ["M"] },
        { id: 58020003, a: true, o: ["L"] },
        { id: 58020004, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-shirt-heavy-flannel",
      name: "ZELI Structured Heavy Flannel Overshirt",
      type: "Japanese Brushed Wool-Cotton Blend",
      category: "Shirts",
      price: 185.0,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58020011, a: true, o: ["S"] },
        { id: 58020012, a: true, o: ["M"] },
        { id: 58020013, a: true, o: ["L"] },
        { id: 58020014, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-shirt-oxford-atelier",
      name: "ZELI Minimalist Concealed-Placket Oxford Shirt",
      type: "Tailored Two-Ply Royal Oxford Cotton",
      category: "Shirts",
      price: 175.0,
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58020021, a: true, o: ["S"] },
        { id: 58020022, a: true, o: ["M"] },
        { id: 58020023, a: true, o: ["L"] },
        { id: 58020024, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-shirt-cuban-resort",
      name: "ZELI Cuban Resort Silk Overshirt",
      type: "Fluid Mulberry Silk-Tencel Draped Weave",
      category: "Shirts",
      price: 195.0,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58020031, a: true, o: ["S"] },
        { id: 58020032, a: true, o: ["M"] },
        { id: 58020033, a: true, o: ["L"] },
        { id: 58020034, a: true, o: ["XL"] }
      ]
    },

    // ==========================================
    // 3. HOODIES & FLEECE
    // ==========================================
    {
      id: "hoodie-black",
      name: "ZELI Onyx 480GSM Boxy Pullover Hoodie",
      type: "Heavyweight 480GSM Brushed Fleece",
      category: "Hoodies",
      price: 199.0,
      image: "/assets/products/zeli-black-hoodie.jpg",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 56836144529713, a: true, o: ["S"] },
        { id: 56836144562481, a: true, o: ["M"] },
        { id: 56836144595249, a: true, o: ["L"] },
        { id: 56836144628017, a: true, o: ["XL"] }
      ]
    },
    {
      id: "sweatshirt-plus",
      name: "ZELI Forest Green Signature Atelier Hoodie",
      type: "Heavyweight 480GSM Organic Fleece",
      category: "Hoodies",
      price: 199.0,
      image: "/assets/products/zeli-green-hoodie.webp",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 56836143743281, a: true, o: ["S"] },
        { id: 56836143776049, a: true, o: ["M"] },
        { id: 56836143808817, a: true, o: ["L"] },
        { id: 56836143841585, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-hoodie-thermal-zip",
      name: "ZELI Thermal Waffle-Lined Zip-Up Heavy Hoodie",
      type: "520GSM Double-Layer Waffle Cotton",
      category: "Hoodies",
      price: 225.0,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58030001, a: true, o: ["S"] },
        { id: 58030002, a: true, o: ["M"] },
        { id: 58030003, a: true, o: ["L"] },
        { id: 58030004, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-hoodie-slate-vintage",
      name: "ZELI Sun-Faded Slate Grey Vintage Hoodie",
      type: "Raw Edge Distressed Loopback Terry",
      category: "Hoodies",
      price: 210.0,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58030011, a: true, o: ["S"] },
        { id: 58030012, a: true, o: ["M"] },
        { id: 58030013, a: true, o: ["L"] },
        { id: 58030014, a: true, o: ["XL"] }
      ]
    },

    // ==========================================
    // 4. SWEATERS & KNITWEAR ("SWITERS")
    // ==========================================
    {
      id: "sweatshirt",
      name: "ZELI Raw Oatmeal Cashmere Crewneck Sweater",
      type: "Pure Ribbed Heavyweight Knit",
      category: "Sweaters",
      price: 285.0,
      image: "/assets/products/zeli-cream-sweater.jpg",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 56836146102577, a: true, o: ["S"] },
        { id: 56836146135345, a: true, o: ["M"] },
        { id: 56836146168113, a: true, o: ["L"] },
        { id: 56836146200881, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-sweater-chunky-ribbed",
      name: "ZELI Chunky Ribbed Fisherman Wool Sweater",
      type: "100% Extra-Spun Merino Wool",
      category: "Sweaters",
      price: 245.0,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58040001, a: true, o: ["S"] },
        { id: 58040002, a: true, o: ["M"] },
        { id: 58040003, a: true, o: ["L"] },
        { id: 58040004, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-sweater-mohair-cardigan",
      name: "ZELI Distressed Mohair Gradient Cardigan",
      type: "Brushed Kid Mohair Blend",
      category: "Sweaters",
      price: 260.0,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58040011, a: true, o: ["S"] },
        { id: 58040012, a: true, o: ["M"] },
        { id: 58040013, a: true, o: ["L"] },
        { id: 58040014, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-sweater-high-neck-rib",
      name: "ZELI High-Neck Architectural Ribbed Pullover",
      type: "Sculpted Heavyweight Merino Knit",
      category: "Sweaters",
      price: 235.0,
      image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58040021, a: true, o: ["S"] },
        { id: 58040022, a: true, o: ["M"] },
        { id: 58040023, a: true, o: ["L"] },
        { id: 58040024, a: true, o: ["XL"] }
      ]
    },

    // ==========================================
    // 5. COATS & OUTERWEAR ("COURT")
    // ==========================================
    {
      id: "zeli-coat-double-breasted",
      name: "ZELI Double-Breasted Tailored Wool Overcoat",
      type: "100% Virgin Wool & Full Silk Lining",
      category: "Coats",
      price: 420.0,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58050001, a: true, o: ["S"] },
        { id: 58050002, a: true, o: ["M"] },
        { id: 58050003, a: true, o: ["L"] },
        { id: 58050004, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-coat-belted-trench",
      name: "ZELI Minimalist Belted Trench Coat",
      type: "Water-Repellent Structured Cotton Gabardine",
      category: "Coats",
      price: 390.0,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58050011, a: true, o: ["S"] },
        { id: 58050012, a: true, o: ["M"] },
        { id: 58050013, a: true, o: ["L"] },
        { id: 58050014, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-coat-melton-longline",
      name: "ZELI Melton Wool Longline Studio Coat",
      type: "Architectural Heavy 820GSM Melton Wool",
      category: "Coats",
      price: 460.0,
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58050021, a: true, o: ["S"] },
        { id: 58050022, a: true, o: ["M"] },
        { id: 58050023, a: true, o: ["L"] },
        { id: 58050024, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-coat-puffer-bomber",
      name: "ZELI Technical Down Puffer Bomber Coat",
      type: "90/10 White Goose Down & Matte Tech Shell",
      category: "Coats",
      price: 345.0,
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58050031, a: true, o: ["S"] },
        { id: 58050032, a: true, o: ["M"] },
        { id: 58050033, a: true, o: ["L"] },
        { id: 58050034, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-coat-shearling-car",
      name: "ZELI Shearling-Collar Structured Car Coat",
      type: "Heavy Japanese Twill & Genuine Shearling",
      category: "Coats",
      price: 385.0,
      image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58050041, a: true, o: ["S"] },
        { id: 58050042, a: true, o: ["M"] },
        { id: 58050043, a: true, o: ["L"] },
        { id: 58050044, a: true, o: ["XL"] }
      ]
    },
    {
      id: "zeli-jacket-varsity-bomber",
      name: "ZELI Wool-Leather Architectural Varsity Bomber",
      type: "Melton Wool with Italian Calfskin Sleeves",
      category: "Coats",
      price: 365.0,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 58050051, a: true, o: ["S"] },
        { id: 58050052, a: true, o: ["M"] },
        { id: 58050053, a: true, o: ["L"] },
        { id: 58050054, a: true, o: ["XL"] }
      ]
    },

    // ==========================================
    // 6. PANTS & TROUSERS
    // ==========================================
    {
      id: "hoodie",
      name: "ZELI Tactical Relaxed Pants",
      type: "Reinforced Technical Ripstop Cotton",
      category: "Pants",
      price: 180.0,
      image: "/assets/products/zeli-cargo-pants.jpg",
      sizes: ["30", "32", "34", "36"],
      variants: [
        { id: 56836146889009, a: true, o: ["30"] },
        { id: 56836146921777, a: true, o: ["32"] },
        { id: 56836146954545, a: true, o: ["34"] },
        { id: 56836146987313, a: true, o: ["36"] }
      ]
    },
    {
      id: "zeli-pant-fleece-track",
      name: "ZELI Relaxed Fleece Loopback Trousers",
      type: "Heavyweight 420GSM Loopback Cotton",
      category: "Pants",
      price: 165.0,
      image: "/assets/products/zeli-track-trouser.jpg",
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 56836147675441, a: true, o: ["S"] },
        { id: 56836147708209, a: true, o: ["M"] },
        { id: 56836147740977, a: true, o: ["L"] },
        { id: 56836147773745, a: true, o: ["XL"] }
      ]
    },

    // ==========================================
    // 7. SHOES & FOOTWEAR (ORBIT & ATELIER)
    // ==========================================
    {
      id: "tatum-5-orbit-copy",
      name: "ZELI Orbit 01 Low Leather Sneakers",
      type: "Tumbled Calfskin & Sculpted Midsole",
      category: "Shoes",
      price: 149.0,
      image: "https://reel-ref-try-the-look.vercel.app/assets/source-tatum-5-orbit-copy.webp",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015167025457, a: true, o: ["40"] },
        { id: 57015167058225, a: true, o: ["41"] },
        { id: 57015167090993, a: true, o: ["42"] },
        { id: 57015167123761, a: true, o: ["43"] },
        { id: 57015167156529, a: true, o: ["44"] },
        { id: 57015167189297, a: true, o: ["45"] },
        { id: 57015167222065, a: true, o: ["46"] }
      ]
    },
    {
      id: "tatum-5-orbit",
      name: "ZELI Retro High Court Sneakers",
      type: "Full-Grain Leather High-Top",
      category: "Shoes",
      price: 149.0,
      image: "/assets/products/zeli-retro-sneakers.jpg",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015166730545, a: true, o: ["40"] },
        { id: 57015166763313, a: true, o: ["41"] },
        { id: 57015166796081, a: true, o: ["42"] },
        { id: 57015166828849, a: true, o: ["43"] },
        { id: 57015166861617, a: true, o: ["44"] },
        { id: 57015166894385, a: true, o: ["45"] },
        { id: 57015166927153, a: true, o: ["46"] }
      ]
    },
    {
      id: "zeli-air-pulse-90",
      name: "ZELI Air Pulse 90 Runners",
      type: "Technical Mesh & Responsive Cushioning",
      category: "Shoes",
      price: 165.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/7.png?v=1792493527&width=800",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015167025458, a: true, o: ["40"] },
        { id: 57015167058226, a: true, o: ["41"] },
        { id: 57015167090994, a: true, o: ["42"] },
        { id: 57015167123762, a: true, o: ["43"] },
        { id: 57015167156530, a: true, o: ["44"] },
        { id: 57015167189298, a: true, o: ["45"] },
        { id: 57015167222066, a: true, o: ["46"] }
      ]
    },
    {
      id: "zeli-phantom-dunk",
      name: "ZELI Phantom Dunk Low",
      type: "Premium Nubuck Paneling",
      category: "Shoes",
      price: 155.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/8.png?v=1792493527&width=800",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015167025459, a: true, o: ["40"] },
        { id: 57015167058227, a: true, o: ["41"] },
        { id: 57015167090995, a: true, o: ["42"] },
        { id: 57015167123763, a: true, o: ["43"] },
        { id: 57015167156531, a: true, o: ["44"] },
        { id: 57015167189299, a: true, o: ["45"] },
        { id: 57015167222067, a: true, o: ["46"] }
      ]
    },
    {
      id: "zeli-velocity-matrix",
      name: "ZELI Velocity Matrix Racer",
      type: "Carbon Propulsion & Featherweight Mesh",
      category: "Shoes",
      price: 180.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/9.png?v=1792493528&width=800",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015167025460, a: true, o: ["40"] },
        { id: 57015167058228, a: true, o: ["41"] },
        { id: 57015167090996, a: true, o: ["42"] },
        { id: 57015167123764, a: true, o: ["43"] },
        { id: 57015167156532, a: true, o: ["44"] },
        { id: 57015167189300, a: true, o: ["45"] },
        { id: 57015167222068, a: true, o: ["46"] }
      ]
    },
    {
      id: "zeli-monolith-high",
      name: "ZELI Monolith High Top Court",
      type: "Sculpted Platform & Italian Leather",
      category: "Shoes",
      price: 195.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/1.png?v=1792493527&width=800",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015167025461, a: true, o: ["40"] },
        { id: 57015167058229, a: true, o: ["41"] },
        { id: 57015167090997, a: true, o: ["42"] },
        { id: 57015167123765, a: true, o: ["43"] },
        { id: 57015167156533, a: true, o: ["44"] },
        { id: 57015167189301, a: true, o: ["45"] },
        { id: 57015167222069, a: true, o: ["46"] }
      ]
    },
    {
      id: "zeli-recovery-slide",
      name: "ZELI Hyper Foam Recovery Slide",
      type: "Zero-Gravity Molded Ergonomic EVA",
      category: "Shoes",
      price: 75.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/1_a7f51336-93eb-4078-b6c2-e14b721eaad0.png?v=1792493930&width=800",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      variants: [
        { id: 57015167025462, a: true, o: ["40"] },
        { id: 57015167058230, a: true, o: ["41"] },
        { id: 57015167090998, a: true, o: ["42"] },
        { id: 57015167123766, a: true, o: ["43"] },
        { id: 57015167156534, a: true, o: ["44"] },
        { id: 57015167189302, a: true, o: ["45"] },
        { id: 57015167222070, a: true, o: ["46"] }
      ]
    },

    // ==========================================
    // 8. HANDCRAFTED BAGS & ACCESSORIES
    // ==========================================
    {
      id: "zeli-bag-purse-mini",
      name: "ZELI Calfskin Architectural Mini Purse",
      type: "Handcrafted Milanese Full-Grain Leather",
      category: "Bags",
      price: 175.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/Untitled_design_-_14.png?height=800&v=1793468396",
      sizes: ["One Size"],
      variants: [
        { id: 58080001, a: true, o: ["One Size"] }
      ]
    },
    {
      id: "zeli-bag-tactical-crossbody",
      name: "ZELI Modular Tactical Crossbody Bag",
      type: "Cordura Ballistic Nylon & Fidlock Buckle",
      category: "Bags",
      price: 135.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/Untitled_design_-_13.png?height=800&v=1793468396",
      sizes: ["One Size"],
      variants: [
        { id: 58080011, a: true, o: ["One Size"] }
      ]
    },
    {
      id: "zeli-bag-weekend-duffle",
      name: "ZELI Ripstop Nylon Weekend Duffle",
      type: "Water-Resistant 45L Capacity & Taped Zips",
      category: "Bags",
      price: 160.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/Untitled_design_-_15.png?height=800&v=1793468396",
      sizes: ["One Size"],
      variants: [
        { id: 58080021, a: true, o: ["One Size"] }
      ]
    },
    {
      id: "zeli-bag-atelier-tote",
      name: "ZELI Heavy Cotton Atelier Tote",
      type: "24oz Structured Organic Duck Canvas",
      category: "Bags",
      price: 95.0,
      image: "https://nike-makknzjs.myshopify.com/cdn/shop/files/Untitled_design_-_16.png?height=800&v=1793468396",
      sizes: ["One Size"],
      variants: [
        { id: 58080031, a: true, o: ["One Size"] }
      ]
    }
  ]
};

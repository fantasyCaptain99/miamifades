export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  image: string;
  description?: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\./g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const products: Product[] = [
  {
    id: "1",
    name: "NIGHT.RIDER",
    slug: slugify("NIGHT.RIDER"),
    price: 49,
    originalPrice: 56,
    image: "/images/products.jpg",
    description:
      "Our signature styling cream for lasting hold and a natural finish. Perfect for textured looks and all-day control without the crunch.",
  },
  {
    id: "2",
    name: "KILLER.CURLS",
    slug: slugify("KILLER.CURLS"),
    price: 56,
    originalPrice: 63,
    image: "/images/products.jpg",
    description:
      "Define and enhance your curls with this lightweight, nourishing formula. Adds shine and bounce while taming frizz.",
  },
  {
    id: "3",
    name: "FREE.HOLD",
    slug: slugify("FREE.HOLD"),
    price: 49,
    originalPrice: 56,
    image: "/images/products.jpg",
    description:
      "A flexible hold that moves with you. Ideal for messy, lived-in styles that stay put without feeling stiff.",
  },
  {
    id: "4",
    name: "POWDER.PUFF",
    slug: slugify("POWDER.PUFF"),
    price: 56,
    originalPrice: 63,
    image: "/images/products.jpg",
    description:
      "Mattifying finishing powder that reduces shine and adds grip. Keeps your style locked in with a clean, natural look.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

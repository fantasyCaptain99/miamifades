import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { getProductBySlug } from "@/lib/products";

export async function generateStaticParams() {
  const { products } = await import("@/lib/products");
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}

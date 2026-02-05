import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Products } from "@/components/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 lg:pt-28">
        <Products />
      </div>
      <Footer />
    </main>
  );
}

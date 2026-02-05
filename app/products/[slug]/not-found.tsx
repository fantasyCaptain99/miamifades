import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Product not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/#products">Back to products</Link>
        </Button>
      </div>
      <Footer />
    </main>
  );
}

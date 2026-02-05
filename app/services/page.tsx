import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 lg:pt-28">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Products } from "@/components/products";
import { PromoSection } from "@/components/promo-section";
import { Testimonials } from "@/components/testimonials";
import { Locations } from "@/components/locations";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Products />
      <PromoSection />
      <Testimonials />
      <Locations />
      <Footer />
    </main>
  );
}

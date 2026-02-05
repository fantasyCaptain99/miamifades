import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Team } from "@/components/team";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 lg:pt-28">
        <Team />
      </div>
      <Footer />
    </main>
  );
}

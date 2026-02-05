import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide uppercase">
            About Us
          </h1>
          <div className="w-16 h-px bg-primary/60 mx-auto mt-6" />
        </div>
      </section>

      {/* Quote block */}
      <section className="py-8 md:py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          <blockquote className="border-l-4 border-primary pl-6 md:pl-8 py-2">
            <p className="font-serif text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
              &ldquo;We didn&apos;t build Miami Fades to be popular. We built it to be respected.&rdquo;
            </p>
            <cite className="not-italic text-sm tracking-[0.2em] uppercase text-muted-foreground mt-4 block">
              — Dwight Murray
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Main content + founder image */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3 space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide uppercase">
                Miami Fades
              </h2>

              <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                <p className="leading-relaxed">
                  We believe grooming is a discipline and a reflection of self. At Miami Fades, every cut is built on that belief.
                </p>
                <p className="leading-relaxed">
                  Our founder, Dwight Murray, brought his craft from Trinidad &amp; Tobago with a simple standard: respect the work. What started as a way to fund his aviation pilot training grew into a brand—and a community—that treats grooming as an art, not a side gig.
                </p>
                <p className="leading-relaxed">
                  We&apos;ve faced setbacks and came back stronger. Today, Miami Fades is recognized for premium grooming experiences: precision fades, beard work, hospitality, and health &amp; safety that set the bar. From Toronto and beyond, we&apos;ve made it clear that luxury is discipline, and discipline builds trust.
                </p>
                <p className="leading-relaxed">
                  This has never been &ldquo;just haircuts.&rdquo; We&apos;re committed to growth—for our clients, our team, and our industry.
                </p>
                <p className="leading-relaxed">
                  Through education and leadership, our academy is developing the next generation of elite barbers. As we expand internationally, we carry the same focus:{" "}
                  <strong className="text-foreground font-semibold">premium grooming, consistent excellence, and a culture built to last.</strong>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground font-semibold">Miami Fades isn&apos;t a trend.</strong>{" "}
                  <strong className="text-foreground font-semibold">It&apos;s a standard.</strong>
                </p>
                <p className="leading-relaxed text-foreground font-medium">
                  Welcome to Miami Fades.
                </p>
              </div>

              <Link
                href="/#services"
                className="inline-block text-sm tracking-[0.2em] uppercase text-primary hover:underline underline-offset-4 transition-colors"
              >
                Explore our services →
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/images/founder.jpg"
                    alt="Dwight Murray - Founder, Miami Fades"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Dwight Murray, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-medium tracking-[0.2em] uppercase mb-12 md:mb-16">
            Blog Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Dwight Murray: Today's Notable Young Entrepreneur",
                image: "/images/founder.jpg",
                href: "#",
              },
              {
                title: "Homegrown Business: Dwight Murray of Miami Fades",
                image: "/images/highlight.jpg",
                href: "#",
              },
              {
                title: "Miami Fades Celebrates 15 Years of Impact with Bold US Expansion",
                image: "/images/hero.jpg",
                href: "#",
              },
            ].map((post) => (
              <article key={post.title} className="group flex flex-col">
                <Link href={post.href} className="block overflow-hidden rounded-lg mb-4">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </Link>
                <h3 className="text-sm md:text-base font-medium tracking-wide uppercase leading-snug mb-3 line-clamp-3">
                  {post.title}
                </h3>
                <Link
                  href={post.href}
                  className="text-background/90 hover:text-background underline underline-offset-4 text-sm font-medium mt-auto"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="#"
              className="inline-flex items-center justify-center min-w-[180px] px-8 py-3 rounded-md border-2 border-background bg-background text-foreground font-medium text-sm tracking-[0.2em] uppercase hover:bg-background/90 transition-colors"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

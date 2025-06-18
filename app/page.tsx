import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
// Import the MainNav component
import { MainNav } from "@/components/main-nav"
import { ImageWithFallback } from "@/components/image-with-fallback"
import NewsUpdateList from "@/components/news-update-list"
import CTA from "@/components/call-to-action"
import InstagramFeed from "@/components/instagram-feed"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Use the MainNav component for the header */}
      <MainNav />

      <main className="flex-1">
        {/* Hero Section - Improved Responsiveness */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Persatuan Pedalangan Indonesia
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-sm md:text-base lg:text-xl">
                    Melestarikan dan mengembangkan seni pedalangan Indonesia melalui komunitas, pendidikan, dan
                    pertunjukan.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="lg" className="w-full sm:w-auto">
                    Jelajahi Acara
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Gabung Komunitas
                  </Button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <ImageWithFallback
                  src="/placeholder-heuxi.png"
                  alt="Seni Pedalangan"
                  width={550}
                  height={550}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=550&width=550&query=wayang+puppet+performance"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News & Updates - Improved Responsiveness */}
        <NewsUpdateList />

        {/* Call to Action Section - Improved Responsiveness */}
        <CTA />

        {/* Instagram Feed Section - Improved Responsiveness */}
        <InstagramFeed />
      </main>

      <footer className="w-full border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-7xl">
          <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 PEPADI. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
              Ketentuan
            </Link>
            <Link href="#" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
              Privasi
            </Link>
            <Link href="#" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
              Kontak
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

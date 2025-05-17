import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { Logo } from "@/components/logo"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl">
        {/* Top navbar - Logo and user actions */}
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="hidden md:inline-block text-sm font-medium hover:underline underline-offset-4"
            >
              Portal Admin
            </Link>
            <Button className="hidden md:inline-flex">Masuk</Button>
            <MobileNav />
          </div>
        </div>

        {/* Bottom navbar - Main navigation */}
        <div className="hidden md:flex h-12 items-center border-t">
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Pendopo
            </Link>
            <Link href="/acara" className="text-sm font-medium hover:text-primary transition-colors">
              Acara
            </Link>
            <Link href="/padepokan" className="text-sm font-medium hover:text-primary transition-colors">
              Padepokan
            </Link>
            <Link href="/berita" className="text-sm font-medium hover:text-primary transition-colors">
              Berita
            </Link>
            <Link href="/pasar-seni" className="text-sm font-medium hover:text-primary transition-colors">
              Pasar Seni
            </Link>
            <Link href="/tentang-kami" className="text-sm font-medium hover:text-primary transition-colors">
              Tentang Kami
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

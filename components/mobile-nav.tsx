"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0 w-10 h-10 rounded-full">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Buka menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="ml-2 text-lg font-semibold">Menu</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Tutup menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="/"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/acara"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Acara
            </Link>
            <Link
              href="/padepokan"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Padepokan
            </Link>
            <Link
              href="/anggota"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Anggota
            </Link>
            <Link
              href="/berita"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Berita
            </Link>
            <Link
              href="/pasar-seni"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Pasar Seni
            </Link>
            <Link
              href="/tentang-kami"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Tentang Kami
            </Link>
            <div className="border-t my-4"></div>
            <Link
              href="/admin"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Portal Admin
            </Link>
            <Link
              href="/login"
              className="px-2 py-1 text-lg hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Masuk
            </Link>
          </nav>
          <div className="mt-auto mb-8">
            <Button className="w-full" onClick={() => setOpen(false)}>
              Daftar
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

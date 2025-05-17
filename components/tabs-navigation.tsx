"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, GraduationCap, Palette, ShoppingBag, Users } from "lucide-react"

export function TabsNavigation() {
  const pathname = usePathname()

  const tabs = [
    {
      name: "Acara",
      href: "/acara",
      icon: Calendar,
      active: pathname === "/acara",
    },
    {
      name: "Padepokan",
      href: "/padepokan",
      icon: GraduationCap,
      active: pathname === "/padepokan",
    },
    {
      name: "Anggota",
      href: "/anggota",
      icon: Users,
      active: pathname === "/anggota",
    },
    {
      name: "Sanggar Seni",
      href: "/sanggar-seni",
      icon: Palette,
      active: pathname === "/sanggar-seni",
    },
    {
      name: "Pasar Seni",
      href: "/pasar-seni",
      icon: ShoppingBag,
      active: pathname === "/pasar-seni",
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <div className="flex overflow-x-auto bg-muted/30 rounded-lg p-1">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex-1 flex flex-col items-center justify-center py-3 px-1 text-sm font-medium rounded-md transition-colors ${
              tab.active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <tab.icon className="h-5 w-5 mb-1" />
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

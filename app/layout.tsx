import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./pepadi-theme.css"

export const metadata: Metadata = {
  title: "PEPADI - Persatuan Pedalangan Indonesia | Pelestari Seni Wayang Indonesia",
  description:
    "Portal resmi Persatuan Pedalangan Indonesia (PEPADI), organisasi yang melestarikan dan mengembangkan seni pedalangan dan wayang sebagai warisan budaya Indonesia. Temukan informasi tentang acara, padepokan, berita, dan pasar seni wayang.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo-pepadi.webp" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}

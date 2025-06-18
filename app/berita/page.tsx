import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ChevronRight, Search, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"

// Dummy data untuk berita
const featuredNews = {
  id: 1,
  title: "Festival Wayang Kulit Nasional 2024 Sukses Digelar di Jakarta",
  date: "10 Mei 2024",
  author: "Admin PEPADI",
  category: "Festival",
  image: "/placeholder-heuxi.png",
  excerpt:
    "Festival Wayang Kulit Nasional 2024 yang diselenggarakan oleh PEPADI telah sukses digelar di Taman Ismail Marzuki, Jakarta pada tanggal 5-9 Mei 2024. Acara ini dihadiri oleh ribuan pengunjung dan menampilkan pertunjukan dari dalang-dalang terbaik Indonesia.",
}

const latestNews = [
  {
    id: 2,
    title: "PEPADI Luncurkan Program Pelatihan Dalang Muda",
    date: "5 Mei 2024",
    author: "Tim Redaksi",
    category: "Pendidikan",
    image: "/placeholder-bn0kj.png",
    excerpt:
      "PEPADI meluncurkan program pelatihan dalang muda untuk melestarikan seni wayang di kalangan generasi muda. Program ini akan berlangsung selama 6 bulan dengan mentor dalang-dalang senior.",
  },
  {
    id: 3,
    title: "Kolaborasi Wayang dan Musik Kontemporer Menuai Pujian",
    date: "28 April 2024",
    author: "Budi Santoso",
    category: "Pertunjukan",
    image: "/placeholder-7ohh2.png",
    excerpt:
      "Pertunjukan kolaborasi antara wayang kulit tradisional dan musik kontemporer yang digelar di Yogyakarta menuai pujian dari kritikus seni dan penonton. Pertunjukan ini menggabungkan elemen tradisional dan modern.",
  },
  {
    id: 4,
    title: "Wayang Indonesia Diakui UNESCO sebagai Warisan Budaya Dunia",
    date: "20 April 2024",
    author: "Dian Kusuma",
    category: "Pengakuan",
    image: "/placeholder-woasx.png",
    excerpt:
      "UNESCO kembali menegaskan pengakuan wayang Indonesia sebagai Warisan Budaya Tak Benda dalam sidang tahunannya. Pengakuan ini memperkuat posisi wayang sebagai warisan budaya yang harus dilestarikan.",
  },
]

const popularNews = [
  {
    id: 5,
    title: "5 Jenis Wayang yang Perlu Anda Ketahui",
    date: "15 April 2024",
    views: 1250,
  },
  {
    id: 6,
    title: "Kisah Mahabharata dalam Pertunjukan Wayang Modern",
    date: "10 April 2024",
    views: 980,
  },
  {
    id: 7,
    title: "Profil Ki Manteb Soedharsono: Maestro Dalang Indonesia",
    date: "5 April 2024",
    views: 875,
  },
  {
    id: 8,
    title: "Teknik Pembuatan Wayang Kulit Tradisional",
    date: "1 April 2024",
    views: 760,
  },
  {
    id: 9,
    title: "Perkembangan Wayang di Era Digital",
    date: "25 Maret 2024",
    views: 650,
  },
]

const categories = [
  { name: "Festival", count: 15 },
  { name: "Pertunjukan", count: 23 },
  { name: "Pendidikan", count: 18 },
  { name: "Pengakuan", count: 7 },
  { name: "Teknologi", count: 12 },
  { name: "Profil", count: 9 },
]

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Use the MainNav component for the header */}
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Berita & Artikel</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Temukan berita terbaru, artikel, dan informasi seputar wayang dan seni pertunjukan tradisional Indonesia.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <Input placeholder="Cari berita..." className="w-full" />
            <Button className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" /> Cari
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[url('/placeholder-fecms.png')] bg-cover bg-center opacity-5"></div>
      </section>

      {/* Featured News */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Berita Utama</h2>
        <div className="overflow-hidden rounded-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-64 w-full md:h-auto">
              <Image
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <Badge className="mb-2 w-fit bg-primary">{featuredNews.category}</Badge>
              <h3 className="mb-2 text-2xl font-bold">{featuredNews.title}</h3>
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{featuredNews.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{featuredNews.author}</span>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">{featuredNews.excerpt}</p>
              <Button asChild className="w-fit">
                <Link href={`/berita/${featuredNews.id}`}>Baca Selengkapnya</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-8 text-3xl font-bold">Berita Terbaru</h2>
            <div className="grid gap-8">
              {latestNews.map((news) => (
                <Card key={news.id}>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="relative h-48 w-full md:h-full">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="rounded-l-lg object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 md:pr-4">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="w-fit bg-primary">{news.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            <span>{news.date}</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="text-base">{news.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/berita/${news.id}`}>
                            Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>

          <div>
            <div className="rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Berita Populer</h3>
              <div className="space-y-4">
                {popularNews.map((news, index) => (
                  <div key={news.id}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium hover:text-primary">
                          <Link href={`/berita/${news.id}`}>{news.title}</Link>
                        </h4>
                        <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{news.date}</span>
                          </div>
                          <span>{news.views} views</span>
                        </div>
                      </div>
                    </div>
                    {index < popularNews.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <Link href={`/berita/kategori/${category.name.toLowerCase()}`} className="hover:text-primary">
                      {category.name}
                    </Link>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Berlangganan</h3>
              <p className="mb-4 text-muted-foreground">Dapatkan berita dan artikel terbaru langsung ke email Anda.</p>
              <div className="space-y-4">
                <Input placeholder="Email Anda" type="email" />
                <Button className="w-full">Berlangganan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import { Filter, Search, ShoppingCart, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageWithFallback } from "@/components/image-with-fallback"

// Dummy data untuk produk
const featuredProducts = [
  {
    id: 1,
    name: "Wayang Kulit Arjuna",
    price: 1500000,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder-heuxi.png",
    category: "Wayang Kulit",
    description: "Wayang kulit Arjuna berkualitas tinggi, dibuat oleh pengrajin berpengalaman dari Yogyakarta.",
  },
  {
    id: 2,
    name: "Set Gamelan Mini",
    price: 3500000,
    rating: 4.7,
    reviews: 18,
    image: "/placeholder-bn0kj.png",
    category: "Alat Musik",
    description: "Set gamelan mini yang terdiri dari 7 instrumen utama, cocok untuk pembelajaran dan dekorasi.",
  },
  {
    id: 3,
    name: "Buku Panduan Dalang Pemula",
    price: 150000,
    rating: 4.9,
    reviews: 32,
    image: "/placeholder-7ohh2.png",
    category: "Buku",
    description: "Buku panduan lengkap untuk dalang pemula, berisi teknik dasar dan cerita wayang populer.",
  },
  {
    id: 4,
    name: "Kostum Wayang Orang - Gatotkaca",
    price: 2500000,
    rating: 4.6,
    reviews: 15,
    image: "/placeholder-woasx.png",
    category: "Kostum",
    description: "Kostum Gatotkaca lengkap untuk pertunjukan wayang orang, dibuat dengan bahan berkualitas.",
  },
]

const allProducts = [
  ...featuredProducts,
  {
    id: 5,
    name: "Wayang Kulit Bima",
    price: 1800000,
    rating: 4.7,
    reviews: 21,
    image: "/placeholder-qdvbb.png",
    category: "Wayang Kulit",
    description: "Wayang kulit Bima dengan detail ukiran yang halus, karya pengrajin senior dari Solo.",
  },
  {
    id: 6,
    name: "DVD Koleksi Pertunjukan Wayang",
    price: 250000,
    rating: 4.5,
    reviews: 28,
    image: "/placeholder-f5x4k.png",
    category: "Media",
    description: "Koleksi 10 DVD pertunjukan wayang kulit dari dalang-dalang terkenal Indonesia.",
  },
  {
    id: 7,
    name: "Kaos Motif Wayang",
    price: 150000,
    rating: 4.6,
    reviews: 45,
    image: "/placeholder-fecms.png",
    category: "Pakaian",
    description: "Kaos dengan motif wayang kontemporer, tersedia dalam berbagai ukuran dan warna.",
  },
  {
    id: 8,
    name: "Alat Pembuatan Wayang Kit",
    price: 750000,
    rating: 4.8,
    reviews: 19,
    image: "/placeholder-ngp9b.png",
    category: "Peralatan",
    description: "Kit lengkap untuk pembuatan wayang kulit, termasuk alat ukir dan bahan dasar.",
  },
]

const categories = [
  { name: "Wayang Kulit", count: 15 },
  { name: "Wayang Golek", count: 8 },
  { name: "Alat Musik", count: 12 },
  { name: "Buku", count: 20 },
  { name: "Kostum", count: 10 },
  { name: "Media", count: 14 },
  { name: "Pakaian", count: 18 },
  { name: "Peralatan", count: 9 },
  { name: "Souvenir", count: 25 },
]

export default function PasarSeniPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Pasar Seni PEPADI</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Temukan berbagai produk wayang, alat musik tradisional, buku, dan merchandise lainnya untuk mendukung
            pelestarian seni wayang Indonesia.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <Input placeholder="Cari produk..." className="w-full" />
            <Button className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" /> Cari
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[url('/placeholder-gyyv3.png')] bg-cover bg-center opacity-5"></div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Produk Unggulan</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <ImageWithFallback
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fallbackSrc="/placeholder-heuxi.png"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute right-2 top-2 bg-primary">{product.category}</Badge>
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">Rp {product.price.toLocaleString("id-ID")}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span>{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/pasar-seni/produk/${product.id}`}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Beli Sekarang
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Filter</h3>

              <div className="mb-6">
                <h4 className="mb-2 font-medium">Kategori</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        <span>{category.name}</span>
                      </label>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="mb-6">
                <h4 className="mb-2 font-medium">Rentang Harga</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="mb-6">
                <h4 className="mb-2 font-medium">Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <div className="flex items-center">
                        {Array(rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        {Array(5 - rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                          ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Terapkan Filter
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="mb-4 text-3xl font-bold">Semua Produk</h2>
              <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">Semua</TabsTrigger>
                    <TabsTrigger value="wayang">Wayang</TabsTrigger>
                    <TabsTrigger value="music">Musik</TabsTrigger>
                    <TabsTrigger value="books">Buku</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Terbaru</SelectItem>
                    <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
                    <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
                    <SelectItem value="popular">Popularitas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <ImageWithFallback
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fallbackSrc="/placeholder-heuxi.png"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute right-2 top-2 bg-primary">{product.category}</Badge>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">Rp {product.price.toLocaleString("id-ID")}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span>{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/pasar-seni/produk/${product.id}`}>
                        <ShoppingCart className="mr-2 h-4 w-4" /> Beli Sekarang
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Bergabunglah dengan Komunitas PEPADI</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Dapatkan akses ke produk eksklusif, diskon khusus anggota, dan informasi terbaru tentang acara dan workshop
            wayang.
          </p>
          <Button size="lg">Daftar Keanggotaan</Button>
        </div>
      </section>
    </main>
  )
}

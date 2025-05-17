import Link from "next/link"
import { ArrowRight, Calendar, BookOpen, Users, ShoppingBag, FileText, Video, BarChart, ImageIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import the MainNav component
import { MainNav } from "@/components/main-nav"
import { ImageWithFallback } from "@/components/image-with-fallback"

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

        {/* Featured Content Tabs - Improved Responsiveness */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
                  Jelajahi Platform Kami
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Temukan berbagai penawaran untuk komunitas seni pedalangan Indonesia.
                </p>
              </div>
            </div>

            <Tabs defaultValue="events" className="mt-8 md:mt-12">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2 sm:grid-cols-4">
                  <TabsTrigger value="events" className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2 hidden sm:inline-block" />
                    <span>Acara</span>
                  </TabsTrigger>
                  <TabsTrigger value="courses" className="flex items-center justify-center">
                    <BookOpen className="h-4 w-4 mr-2 hidden sm:inline-block" />
                    <span>Padepokan</span>
                  </TabsTrigger>
                  <TabsTrigger value="members" className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2 hidden sm:inline-block" />
                    <span>Sanggar Seni</span>
                  </TabsTrigger>
                  <TabsTrigger value="shop" className="flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 mr-2 hidden sm:inline-block" />
                    <span>Pasar Seni</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Events Tab */}
              <TabsContent value="events" className="mt-6 md:mt-8">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={`event-${i}`} className="h-full">
                      <CardHeader className="p-0">
                        <ImageWithFallback
                          src={`/placeholder-bn0kj.png?height=200&width=400&query=wayang performance ${i}`}
                          alt={`Acara ${i}`}
                          width={400}
                          height={200}
                          className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                          fallbackSrc={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=400&query=wayang performance ${i}`}
                        />
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6">
                        <CardTitle className="text-lg sm:text-xl mb-2">
                          {i === 1
                            ? "Festival Wayang Tahunan"
                            : i === 2
                              ? "Pagelaran Wayang Golek"
                              : "Workshop Pedalangan"}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                          {i === 1
                            ? "15 Juni 2025 • Gedung Kesenian Jakarta"
                            : i === 2
                              ? "22 Juni 2025 • Taman Ismail Marzuki"
                              : "28 Juni 2025 • Balai Budaya"}
                        </CardDescription>
                        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>19:00 - 22:00 WIB</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Lihat Detail
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <Button variant="outline" size="sm" className="sm:size-md">
                    Lihat Semua Acara
                  </Button>
                </div>
              </TabsContent>

              {/* Courses Tab - Updated for Educational Content */}
              <TabsContent value="courses" className="mt-6 md:mt-8">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Article */}
                  <Card className="h-full">
                    <CardHeader className="p-0">
                      <ImageWithFallback
                        src="/placeholder-article.png"
                        alt="Artikel Edukatif"
                        width={400}
                        height={200}
                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                        fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=400&query=educational+article"
                      />
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          <FileText className="h-3 w-3 mr-1" />
                          Artikel
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl mb-2">
                        Mengenal Jenis-jenis Wayang di Indonesia
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                        Pelajari berbagai jenis wayang dari seluruh Indonesia dan sejarah perkembangannya
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>10 Mei 2025</span>
                        </div>
                        <span className="text-muted-foreground">5 menit baca</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <Button variant="outline" className="w-full text-xs sm:text-sm">
                        Baca Artikel
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video */}
                  <Card className="h-full">
                    <CardHeader className="p-0 relative">
                      <ImageWithFallback
                        src="/placeholder-video.png"
                        alt="Video Edukatif"
                        width={400}
                        height={200}
                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                        fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=400&query=educational+video"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/50 p-3">
                          <Video className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          <Video className="h-3 w-3 mr-1" />
                          Video
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl mb-2">Tutorial Dasar Memainkan Gamelan</CardTitle>
                      <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                        Pelajari teknik dasar memainkan alat musik gamelan dengan panduan langkah demi langkah
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>15 Mei 2025</span>
                        </div>
                        <span className="text-muted-foreground">12:45 menit</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <Button variant="outline" className="w-full text-xs sm:text-sm">
                        Tonton Video
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Infographic */}
                  <Card className="h-full">
                    <CardHeader className="p-0">
                      <ImageWithFallback
                        src="/placeholder-infographic.png"
                        alt="Infografis Edukatif"
                        width={400}
                        height={200}
                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                        fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=400&query=educational+infographic"
                      />
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                          <BarChart className="h-3 w-3 mr-1" />
                          Infografis
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl mb-2">Ragam Motif Batik dan Maknanya</CardTitle>
                      <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                        Kenali berbagai motif batik dari berbagai daerah di Indonesia dan makna filosofisnya
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>20 Mei 2025</span>
                        </div>
                        <span className="text-muted-foreground">Infografis</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <Button variant="outline" className="w-full text-xs sm:text-sm">
                        Lihat Infografis
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Educational Image */}
                  <Card className="h-full">
                    <CardHeader className="p-0">
                      <ImageWithFallback
                        src="/placeholder-image.png"
                        alt="Gambar Edukatif"
                        width={400}
                        height={200}
                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                        fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=400&query=educational+image"
                      />
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          <ImageIcon className="h-3 w-3 mr-1" />
                          Gambar Edukatif
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl mb-2">Anatomi Wayang Kulit</CardTitle>
                      <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                        Pelajari bagian-bagian dari wayang kulit dan teknik pembuatannya secara detail
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>25 Mei 2025</span>
                        </div>
                        <span className="text-muted-foreground">Ilustrasi</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <Button variant="outline" className="w-full text-xs sm:text-sm">
                        Lihat Gambar
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <Button variant="outline" size="sm" className="sm:size-md">
                    Lihat Semua Konten Edukatif
                  </Button>
                </div>
              </TabsContent>

              {/* Members Tab */}
              <TabsContent value="members" className="mt-6 md:mt-8">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={`member-${i}`} className="h-full">
                      <CardContent className="p-4 sm:p-6 pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-4">
                            <ImageWithFallback
                              src={`/placeholder-woasx.png?height=96&width=96&query=indonesian puppeteer ${i}`}
                              alt={`Anggota ${i}`}
                              width={96}
                              height={96}
                              className="rounded-full object-cover"
                              fallbackSrc={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=96&width=96&query=indonesian puppeteer ${i}`}
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-background"></div>
                          </div>
                          <CardTitle className="text-base sm:text-lg mb-1">
                            {i === 1
                              ? "Budi Santoso"
                              : i === 2
                                ? "Dewi Kartika"
                                : i === 3
                                  ? "Agus Prasetyo"
                                  : "Siti Rahayu"}
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm mb-2 sm:mb-3">
                            {i === 1
                              ? "Dalang Senior"
                              : i === 2
                                ? "Pengajar Pedalangan"
                                : i === 3
                                  ? "Seniman Wayang"
                                  : "Pengrajin Wayang"}
                          </CardDescription>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                            {i === 1
                              ? "Dalang berpengalaman dengan lebih dari 25 tahun pengalaman dalam seni pedalangan tradisional"
                              : i === 2
                                ? "Pengajar pedalangan terkemuka dengan spesialisasi dalam wayang golek"
                                : i === 3
                                  ? "Seniman wayang inovatif yang menggabungkan teknik tradisional dengan pendekatan modern"
                                  : "Pengrajin wayang terampil dengan keahlian dalam pembuatan wayang kulit"}
                          </p>
                          <Button variant="outline" size="sm">
                            Lihat Profil
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <Button variant="outline" size="sm" className="sm:size-md">
                    Lihat Semua Anggota
                  </Button>
                </div>
              </TabsContent>

              {/* Shop Tab */}
              <TabsContent value="shop" className="mt-6 md:mt-8">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={`product-${i}`} className="h-full">
                      <CardHeader className="p-0">
                        <ImageWithFallback
                          src={`/placeholder-qdvbb.png?height=200&width=200&query=wayang puppet ${i}`}
                          alt={`Produk ${i}`}
                          width={200}
                          height={200}
                          className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                          fallbackSrc={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=200&query=wayang puppet ${i}`}
                        />
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6">
                        <CardTitle className="text-sm sm:text-base mb-2">
                          {i === 1
                            ? "Wayang Kulit Arjuna"
                            : i === 2
                              ? "Alat Musik Gamelan Mini"
                              : i === 3
                                ? "Set Kostum Pedalangan"
                                : "Buku Panduan Pedalangan"}
                        </CardTitle>
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <span className="font-bold text-sm sm:text-base">
                            Rp {(i * 250000 + 250000).toLocaleString("id-ID")}
                          </span>
                          {i === 2 && (
                            <span className="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">Diskon</span>
                          )}
                        </div>
                        <CardDescription className="text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                          {i === 1
                            ? "Wayang kulit Arjuna berkualitas tinggi dengan ukiran detail dan pewarnaan tradisional"
                            : i === 2
                              ? "Set gamelan mini untuk latihan dan pembelajaran di rumah"
                              : i === 3
                                ? "Set kostum lengkap untuk pertunjukan pedalangan"
                                : "Buku panduan komprehensif tentang seni pedalangan Indonesia"}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Tambah ke Keranjang
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <Button variant="outline" size="sm" className="sm:size-md">
                    Kunjungi Toko
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* News & Updates - Improved Responsiveness */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
                  Berita & Informasi Terbaru
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Dapatkan informasi terkini tentang perkembangan seni pedalangan di Indonesia.
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <article
                  key={`news-${i}`}
                  className="group relative flex flex-col space-y-3 sm:space-y-4 bg-background p-4 sm:p-6 rounded-lg shadow-sm"
                >
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold line-clamp-2">
                      {i === 1
                        ? "Pembukaan Sanggar Pedalangan Baru di Jakarta"
                        : i === 2
                          ? "Seri Workshop Pedalangan Musim Panas"
                          : "Hasil Kompetisi Pedalangan Nasional"}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {new Date(2025, 5, i * 5).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                    {i === 1
                      ? "Kami dengan bangga mengumumkan pembukaan sanggar pedalangan baru di Jakarta. Fasilitas ini dilengkapi dengan panggung modern, koleksi wayang, dan ruang latihan yang nyaman."
                      : i === 2
                        ? "Pendaftaran telah dibuka untuk seri workshop pedalangan musim panas dengan instruktur tamu dari berbagai daerah di Indonesia. Harga promo tersedia hingga 15 Mei."
                        : "Selamat kepada semua peserta kompetisi pedalangan nasional tahun ini. Penghargaan khusus diberikan kepada anggota komunitas kami yang berhasil meraih posisi teratas."}
                  </p>
                  <Link href="#" className="inline-flex items-center text-xs sm:text-sm font-medium text-primary">
                    Baca Selengkapnya
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <Button size="sm" className="sm:size-md">
                Lihat Semua Berita
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action - Improved Responsiveness */}
        <section className="w-full py-8 md:py-16 lg:py-24 border-t">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
                  Bergabunglah dengan Komunitas Pedalangan Kami
                </h2>
                <p className="max-w-[600px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Terhubung dengan sesama seniman, akses sumber daya eksklusif, dan kembangkan karir Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Daftar Sekarang
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </div>
        </section>
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

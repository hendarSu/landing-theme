import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { BarChart, BookOpen, Calendar, FileText, ImageIcon, ShoppingBag, Users, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ImageWithFallback } from "./image-with-fallback"
import { Button } from "./ui/button"

const FeatureContentTabs = () => {
    return (
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
    )
}

export default FeatureContentTabs;
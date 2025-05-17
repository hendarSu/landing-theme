"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Video, ImageIcon, BarChart, Search, Filter, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageWithFallback } from "@/components/image-with-fallback"

// Sample educational content data
const educationalContent = [
  {
    id: 1,
    title: "Mengenal Jenis-jenis Wayang di Indonesia",
    slug: "mengenal-jenis-wayang-indonesia",
    description: "Pelajari berbagai jenis wayang dari seluruh Indonesia dan sejarah perkembangannya.",
    creator: "Budi Santoso",
    content_type: "article",
    category: "wayang",
    created_at: "2025-05-10",
    published_at: "2025-05-12",
    status: "published",
    views: 1245,
    reading_time: "5 menit",
    featured_image: "/placeholder-lczp4.png",
  },
  {
    id: 2,
    title: "Tutorial Dasar Memainkan Gamelan",
    slug: "tutorial-dasar-gamelan",
    description: "Pelajari teknik dasar memainkan alat musik gamelan dengan panduan langkah demi langkah.",
    creator: "Dewi Kartika",
    content_type: "video",
    category: "gamelan",
    created_at: "2025-05-15",
    published_at: "2025-05-18",
    status: "published",
    views: 876,
    duration: "12:45",
    featured_image: "/placeholder-6xq0p.png",
  },
  {
    id: 3,
    title: "Ragam Motif Batik dan Maknanya",
    slug: "ragam-motif-batik",
    description: "Kenali berbagai motif batik dari berbagai daerah di Indonesia dan makna filosofisnya.",
    creator: "Siti Rahayu",
    content_type: "infographic",
    category: "batik",
    created_at: "2025-05-20",
    published_at: "2025-05-22",
    status: "published",
    views: 932,
    featured_image: "/placeholder-w916o.png",
  },
  {
    id: 4,
    title: "Anatomi Wayang Kulit",
    slug: "anatomi-wayang-kulit",
    description: "Pelajari bagian-bagian dari wayang kulit dan teknik pembuatannya secara detail.",
    creator: "Agus Prasetyo",
    content_type: "image",
    category: "wayang",
    created_at: "2025-05-25",
    published_at: "2025-05-27",
    status: "published",
    views: 654,
    featured_image: "/placeholder-9qthr.png",
  },
  {
    id: 5,
    title: "Sejarah Perkembangan Wayang di Jawa",
    slug: "sejarah-wayang-jawa",
    description: "Menyelami sejarah panjang perkembangan seni wayang di Pulau Jawa dari masa ke masa.",
    creator: "Budi Santoso",
    content_type: "article",
    category: "wayang",
    created_at: "2025-06-01",
    published_at: "2025-06-03",
    status: "published",
    views: 543,
    reading_time: "8 menit",
    featured_image: "/placeholder-2h9yz.png",
  },
  {
    id: 6,
    title: "Teknik Lanjutan Memainkan Gamelan",
    slug: "teknik-lanjutan-gamelan",
    description: "Pelajari teknik lanjutan dalam memainkan gamelan untuk pemain yang sudah menguasai dasar.",
    creator: "Dewi Kartika",
    content_type: "video",
    category: "gamelan",
    created_at: "2025-06-05",
    published_at: "2025-06-07",
    status: "published",
    views: 321,
    duration: "15:30",
    featured_image: "/placeholder-tqy1r.png",
  },
  {
    id: 7,
    title: "Proses Pembuatan Batik Tulis",
    slug: "proses-pembuatan-batik-tulis",
    description: "Melihat langkah demi langkah proses pembuatan batik tulis tradisional.",
    creator: "Siti Rahayu",
    content_type: "infographic",
    category: "batik",
    created_at: "2025-06-10",
    published_at: "2025-06-12",
    status: "published",
    views: 487,
    featured_image: "/placeholder-ieftg.png",
  },
  {
    id: 8,
    title: "Gerakan Dasar Tari Tradisional",
    slug: "gerakan-dasar-tari-tradisional",
    description: "Pelajari gerakan-gerakan dasar dalam tarian tradisional Indonesia.",
    creator: "Agus Prasetyo",
    content_type: "image",
    category: "tari",
    created_at: "2025-06-15",
    published_at: "2025-06-17",
    status: "published",
    views: 356,
    featured_image: "/placeholder-uk0h5.png",
  },
  {
    id: 9,
    title: "Filosofi di Balik Cerita Wayang",
    slug: "filosofi-cerita-wayang",
    description: "Memahami nilai-nilai filosofis yang terkandung dalam cerita wayang klasik.",
    creator: "Budi Santoso",
    content_type: "article",
    category: "wayang",
    created_at: "2025-06-20",
    published_at: "2025-06-22",
    status: "published",
    views: 412,
    reading_time: "10 menit",
    featured_image: "/placeholder-6xgo5.png",
  },
  {
    id: 10,
    title: "Kuliner Tradisional Jawa Tengah",
    slug: "kuliner-tradisional-jawa-tengah",
    description: "Mengenal berbagai makanan tradisional dari Jawa Tengah dan cara pembuatannya.",
    creator: "Siti Rahayu",
    content_type: "infographic",
    category: "kuliner",
    created_at: "2025-06-25",
    published_at: "2025-06-27",
    status: "published",
    views: 523,
    featured_image: "/placeholder-2ftax.png",
  },
  {
    id: 11,
    title: "Teknik Dasar Tari Topeng",
    slug: "teknik-dasar-tari-topeng",
    description: "Mempelajari gerakan dan teknik dasar dalam tarian topeng tradisional.",
    creator: "Agus Prasetyo",
    content_type: "video",
    category: "tari",
    created_at: "2025-07-01",
    published_at: "2025-07-03",
    status: "published",
    views: 298,
    duration: "18:20",
    featured_image: "/placeholder-oy2f9.png",
  },
  {
    id: 12,
    title: "Alat Musik Tradisional Indonesia",
    slug: "alat-musik-tradisional-indonesia",
    description: "Mengenal berbagai alat musik tradisional dari berbagai daerah di Indonesia.",
    creator: "Dewi Kartika",
    content_type: "image",
    category: "gamelan",
    created_at: "2025-07-05",
    published_at: "2025-07-07",
    status: "published",
    views: 367,
    featured_image: "/placeholder-5rmzk.png",
  },
]

export default function PadepokanPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contentType, setContentType] = useState("all")
  const [category, setCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter content based on search term, content type, category, and active tab
  const filteredContent = educationalContent.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.creator.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesContentType = contentType === "all" || content.content_type === contentType
    const matchesCategory = category === "all" || content.category === category
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "article" && content.content_type === "article") ||
      (activeTab === "video" && content.content_type === "video") ||
      (activeTab === "infographic" && content.content_type === "infographic") ||
      (activeTab === "image" && content.content_type === "image")

    return matchesSearch && matchesContentType && matchesCategory && matchesTab
  })

  // Get content type icon
  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText className="h-4 w-4 text-blue-600" />
      case "video":
        return <Video className="h-4 w-4 text-red-600" />
      case "infographic":
        return <BarChart className="h-4 w-4 text-purple-600" />
      case "image":
        return <ImageIcon className="h-4 w-4 text-green-600" />
      default:
        return null
    }
  }

  // Get content type badge
  const getContentTypeBadge = (type: string) => {
    switch (type) {
      case "article":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100 flex items-center gap-1">
            <FileText className="h-3 w-3" />
            <span>Artikel</span>
          </Badge>
        )
      case "video":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
            <Video className="h-3 w-3" />
            <span>Video</span>
          </Badge>
        )
      case "infographic":
        return (
          <Badge
            variant="outline"
            className="bg-purple-100 text-purple-800 hover:bg-purple-100 flex items-center gap-1"
          >
            <BarChart className="h-3 w-3" />
            <span>Infografis</span>
          </Badge>
        )
      case "image":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
            <ImageIcon className="h-3 w-3" />
            <span>Gambar</span>
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  // Get category badge
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "wayang":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Wayang</Badge>
      case "gamelan":
        return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Gamelan</Badge>
      case "batik":
        return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100">Batik</Badge>
      case "tari":
        return <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Tari</Badge>
      case "kuliner":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Kuliner</Badge>
      default:
        return <Badge>{category}</Badge>
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Padepokan PEPADI</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Jelajahi berbagai konten edukatif tentang seni dan budaya Indonesia. Dari artikel mendalam, video tutorial,
          infografis informatif, hingga gambar edukatif yang menarik.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari konten edukatif..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="wayang">Wayang</SelectItem>
                <SelectItem value="gamelan">Gamelan</SelectItem>
                <SelectItem value="batik">Batik</SelectItem>
                <SelectItem value="tari">Tari</SelectItem>
                <SelectItem value="kuliner">Kuliner</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="article" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Artikel</span>
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            <span>Video</span>
          </TabsTrigger>
          <TabsTrigger value="infographic" className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            <span>Infografis</span>
          </TabsTrigger>
          <TabsTrigger value="image" className="flex items-center gap-1">
            <ImageIcon className="h-4 w-4" />
            <span>Gambar</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Tidak ada konten yang sesuai dengan filter Anda</p>
              </div>
            ) : (
              filteredContent.map((content) => (
                <Card key={content.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={content.featured_image || "/placeholder.svg"}
                      alt={content.title}
                      fallbackSrc="/placeholder-heuxi.png"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">{getContentTypeBadge(content.content_type)}</div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{content.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-2">{content.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      {getCategoryBadge(content.category)}
                      <span className="text-xs text-muted-foreground">
                        {content.content_type === "article" && content.reading_time}
                        {content.content_type === "video" && content.duration}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-muted-foreground">Oleh: {content.creator}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/padepokan/${content.slug}`}>
                          <span className="flex items-center">
                            Lihat
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="article" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Tidak ada artikel yang sesuai dengan filter Anda</p>
              </div>
            ) : (
              filteredContent.map((content) => (
                <Card key={content.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={content.featured_image || "/placeholder.svg"}
                      alt={content.title}
                      fallbackSrc="/placeholder-heuxi.png"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{content.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-2">{content.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      {getCategoryBadge(content.category)}
                      <span className="text-xs text-muted-foreground">{content.reading_time}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-muted-foreground">Oleh: {content.creator}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/padepokan/${content.slug}`}>
                          <span className="flex items-center">
                            Baca
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="video" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Tidak ada video yang sesuai dengan filter Anda</p>
              </div>
            ) : (
              filteredContent.map((content) => (
                <Card key={content.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={content.featured_image || "/placeholder.svg"}
                      alt={content.title}
                      fallbackSrc="/placeholder-heuxi.png"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/70 p-3">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{content.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-2">{content.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      {getCategoryBadge(content.category)}
                      <span className="text-xs text-muted-foreground">{content.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-muted-foreground">Oleh: {content.creator}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/padepokan/${content.slug}`}>
                          <span className="flex items-center">
                            Tonton
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="infographic" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Tidak ada infografis yang sesuai dengan filter Anda</p>
              </div>
            ) : (
              filteredContent.map((content) => (
                <Card key={content.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={content.featured_image || "/placeholder.svg"}
                      alt={content.title}
                      fallbackSrc="/placeholder-heuxi.png"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{content.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-2">{content.description}</p>
                    <div className="flex items-center gap-2 mt-4">{getCategoryBadge(content.category)}</div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-muted-foreground">Oleh: {content.creator}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/padepokan/${content.slug}`}>
                          <span className="flex items-center">
                            Lihat
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="image" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Tidak ada gambar yang sesuai dengan filter Anda</p>
              </div>
            ) : (
              filteredContent.map((content) => (
                <Card key={content.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={content.featured_image || "/placeholder.svg"}
                      alt={content.title}
                      fallbackSrc="/placeholder-heuxi.png"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{content.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-2">{content.description}</p>
                    <div className="flex items-center gap-2 mt-4">{getCategoryBadge(content.category)}</div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-muted-foreground">Oleh: {content.creator}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/padepokan/${content.slug}`}>
                          <span className="flex items-center">
                            Lihat
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16 mb-8">
        <div className="rounded-xl bg-[#faf8f0] p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Belajar dengan Dalang Profesional</h2>
              <p className="text-muted-foreground mb-6">
                Tingkatkan pengetahuan dan keterampilan Anda dalam seni wayang dan pertunjukan tradisional bersama para
                dalang profesional yang berpengalaman. Daftar sekarang untuk sesi pembelajaran eksklusif.
              </p>
              <Button className="bg-[#d4b13b] hover:bg-[#c19f2e] text-white">Daftar Kelas Wayang</Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/placeholder-q1kq8.png"
                  alt="Belajar dengan dalang profesional"
                  fallbackSrc="/placeholder-heuxi.png"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  FileText,
  Video,
  ImageIcon,
  BarChart,
  CheckCircle,
  AlertCircle,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    published_at: null,
    status: "draft",
    views: 0,
    duration: "15:30",
    featured_image: "/placeholder.svg?height=100&width=200&query=advanced gamelan techniques",
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
    published_at: null,
    status: "draft",
    views: 0,
    featured_image: "/placeholder.svg?height=100&width=200&query=batik making process",
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
    published_at: null,
    status: "draft",
    views: 0,
    featured_image: "/placeholder.svg?height=100&width=200&query=traditional indonesian dance",
  },
]

export default function EducationalContentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contentType, setContentType] = useState("all")
  const [category, setCategory] = useState("all")
  const [status, setStatus] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter content based on search term, content type, category, status, and active tab
  const filteredContent = educationalContent.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.creator.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesContentType = contentType === "all" || content.content_type === contentType
    const matchesCategory = category === "all" || content.category === category
    const matchesStatus = status === "all" || content.status === status
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "published" && content.status === "published") ||
      (activeTab === "draft" && content.status === "draft")

    return matchesSearch && matchesContentType && matchesCategory && matchesStatus && matchesTab
  })

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—"
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
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

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>Dipublikasikan</span>
          </div>
        )
      case "draft":
        return (
          <div className="flex items-center gap-1 text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>Draft</span>
          </div>
        )
      default:
        return <span>{status}</span>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Konten Edukatif</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Buat Konten Baru
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Semua Konten</TabsTrigger>
            <TabsTrigger value="published">Dipublikasikan</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Ikhtisar Konten Edukatif</CardTitle>
              <CardDescription>
                Kelola semua konten edukatif dalam satu tempat. Filter, cari, dan edit konten pendidikan Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari konten..."
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
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Jenis Konten" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Jenis</SelectItem>
                      <SelectItem value="article">Artikel</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="infographic">Infografis</SelectItem>
                      <SelectItem value="image">Gambar</SelectItem>
                    </SelectContent>
                  </Select>
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Konten</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Publikasi
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Statistik</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        Tidak ada konten yang sesuai dengan filter Anda
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredContent.map((content) => (
                      <TableRow key={content.id}>
                        <TableCell className="font-medium">{content.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={content.featured_image || "/placeholder.svg"}
                              alt={content.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{content.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{content.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getContentTypeBadge(content.content_type)}</TableCell>
                        <TableCell>{getCategoryBadge(content.category)}</TableCell>
                        <TableCell>{formatDate(content.published_at)}</TableCell>
                        <TableCell>{getStatusBadge(content.status)}</TableCell>
                        <TableCell>
                          <div className="space-y-2">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-muted-foreground" />
                              <span>{content.views} tayangan</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {content.content_type === "article" && (
                                <span className="text-xs text-muted-foreground">{content.reading_time} baca</span>
                              )}
                              {content.content_type === "video" && (
                                <span className="text-xs text-muted-foreground">{content.duration}</span>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Aksi</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Lihat Konten
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Konten
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {content.status === "draft" && (
                                <DropdownMenuItem>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Publikasikan
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Konten
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Menampilkan {filteredContent.length} dari {educationalContent.length} konten
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Sebelumnya
                  </Button>
                  <Button variant="outline" size="sm">
                    Selanjutnya
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published" className="space-y-4">
          {/* Similar structure for published content */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Konten Terpublikasi</CardTitle>
              <CardDescription>Lihat dan kelola konten edukatif yang telah dipublikasikan.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari konten terpublikasi..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Konten</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Publikasi</TableHead>
                    <TableHead>Tayangan</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Tidak ada konten terpublikasi yang ditemukan
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredContent.map((content) => (
                      <TableRow key={content.id}>
                        <TableCell className="font-medium">{content.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={content.featured_image || "/placeholder.svg"}
                              alt={content.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{content.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{content.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getContentTypeBadge(content.content_type)}</TableCell>
                        <TableCell>{getCategoryBadge(content.category)}</TableCell>
                        <TableCell>{formatDate(content.published_at)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{content.views}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Aksi</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Lihat Konten
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Konten
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Konten
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          {/* Similar structure for draft content */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Konten Draft</CardTitle>
              <CardDescription>
                Kelola konten edukatif yang masih dalam pengembangan dan belum dipublikasikan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari konten draft..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Konten</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Dibuat</TableHead>
                    <TableHead>Penulis</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Tidak ada konten draft yang ditemukan
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredContent.map((content) => (
                      <TableRow key={content.id}>
                        <TableCell className="font-medium">{content.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={content.featured_image || "/placeholder.svg"}
                              alt={content.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{content.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{content.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getContentTypeBadge(content.content_type)}</TableCell>
                        <TableCell>{getCategoryBadge(content.category)}</TableCell>
                        <TableCell>{formatDate(content.created_at)}</TableCell>
                        <TableCell>{content.creator}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Aksi</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Pratinjau
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Konten
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Publikasikan
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Konten
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

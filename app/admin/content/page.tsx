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
  BookOpen,
  Calendar,
  MessageSquare,
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

// Sample content data
const contentData = [
  {
    id: 1,
    title: "Pengenalan Wayang Kulit Purwa",
    type: "educational",
    status: "published",
    author: "Budi Santoso",
    published: "2025-05-01",
    views: 1245,
  },
  {
    id: 2,
    title: "Festival Wayang Nasional 2025",
    type: "news",
    status: "published",
    author: "Admin",
    published: "2025-05-10",
    views: 856,
  },
  {
    id: 3,
    title: "Teknik Dasar Mendalang untuk Pemula",
    type: "educational",
    status: "published",
    author: "Ki Anom Suroto",
    published: "2025-04-15",
    views: 712,
  },
  {
    id: 4,
    title: "Jadwal Pertunjukan Wayang Bulan Juni",
    type: "event",
    status: "draft",
    author: "Darmawan Prakoso",
    published: null,
    views: 0,
  },
  {
    id: 5,
    title: "Filosofi Karakter Punakawan dalam Wayang",
    type: "educational",
    status: "published",
    author: "Prof. Sutarno",
    published: "2025-05-05",
    views: 598,
  },
  {
    id: 6,
    title: "Workshop Pembuatan Wayang",
    type: "event",
    status: "scheduled",
    author: "Darmawan Prakoso",
    published: "2025-05-20",
    views: 0,
  },
  {
    id: 7,
    title: "Koleksi Wayang Baru Museum PEPADI",
    type: "news",
    status: "published",
    author: "Admin",
    published: "2025-05-12",
    views: 324,
  },
  {
    id: 8,
    title: "Perkembangan Wayang Golek di Jawa Barat",
    type: "educational",
    status: "draft",
    author: "Ki Anom Suroto",
    published: null,
    views: 0,
  },
]

export default function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contentType, setContentType] = useState("all")
  const [status, setStatus] = useState("all")

  // Filter content based on search term, content type, and status
  const filteredContent = contentData.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = contentType === "all" || content.type === contentType
    const matchesStatus = status === "all" || content.status === status

    return matchesSearch && matchesType && matchesStatus
  })

  // Get content type icon
  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "educational":
        return <BookOpen className="h-4 w-4" />
      case "news":
        return <FileText className="h-4 w-4" />
      case "event":
        return <Calendar className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge variant="default">Published</Badge>
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      case "scheduled":
        return <Badge variant="secondary">Scheduled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Konten</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Konten Baru
        </Button>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Ikhtisar Konten</CardTitle>
            <CardDescription>
              Kelola semua konten dalam satu tempat. Filter, cari, dan edit konten Anda.
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
                    <SelectItem value="educational">Edukatif</SelectItem>
                    <SelectItem value="news">Berita</SelectItem>
                    <SelectItem value="event">Acara</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="published">Dipublikasikan</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Terjadwal</SelectItem>
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
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Judul
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Jenis</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Penulis</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Dipublikasikan
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Dilihat
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
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
                        <div className="font-medium">{content.title}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getContentTypeIcon(content.type)}
                          <span className="capitalize">{content.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(content.status)}</TableCell>
                      <TableCell>{content.author}</TableCell>
                      <TableCell>{formatDate(content.published)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-muted-foreground" />
                          {content.views.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Lihat
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {content.status !== "published" && <DropdownMenuItem>Publikasikan</DropdownMenuItem>}
                            {content.status === "published" && <DropdownMenuItem>Batalkan Publikasi</DropdownMenuItem>}
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Komentar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Hapus
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
                Menampilkan {filteredContent.length} dari {contentData.length} item
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
      </div>
    </div>
  )
}

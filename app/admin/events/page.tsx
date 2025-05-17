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
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  AlertCircle,
  Clock3,
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

// Update the sample event data with wayang-themed events

// Replace the eventData array with the following:
const eventData = [
  {
    id: 1,
    title: "Festival Wayang Nusantara",
    description: "Festival tahunan yang menampilkan berbagai jenis wayang dari seluruh Indonesia.",
    start_date: "2025-06-15",
    end_date: "2025-06-20",
    location: "Gedung Pertunjukan PEPADI, Jakarta",
    event_type: "festival",
    status: "upcoming",
    organizer: "PEPADI Pusat",
    participants: 24,
    featured_image: "/placeholder-2h9yz.png",
  },
  {
    id: 2,
    title: "Pertunjukan Wayang Kulit: Bharatayudha",
    description: "Pertunjukan wayang kulit semalam suntuk dengan lakon Bharatayudha.",
    start_date: "2025-06-22",
    end_date: "2025-06-22",
    location: "Taman Budaya Yogyakarta",
    event_type: "performance",
    status: "upcoming",
    organizer: "Ki Manteb Soedharsono",
    participants: 12,
    featured_image: "/placeholder-9qthr.png",
  },
  {
    id: 3,
    title: "Audisi Dalang Muda",
    description: "Audisi untuk mencari bakat dalang muda berbakat dari seluruh Indonesia.",
    start_date: "2025-06-28",
    end_date: "2025-06-29",
    location: "Balai PEPADI Surakarta",
    event_type: "audition",
    status: "upcoming",
    organizer: "Paguyuban Dalang Indonesia",
    participants: 35,
    featured_image: "/placeholder-6xq0p.png",
  },
  {
    id: 4,
    title: "Wayang untuk Anak: Pengenalan Tokoh Punakawan",
    description: "Pertunjukan wayang khusus anak-anak dengan tokoh Punakawan sebagai fokus utama.",
    start_date: "2025-07-05",
    end_date: "2025-07-05",
    location: "Taman Mini Indonesia Indah",
    event_type: "performance",
    status: "upcoming",
    organizer: "PEPADI Muda",
    participants: 18,
    featured_image: "/placeholder-lczp4.png",
  },
  {
    id: 5,
    title: "Wayang Wong: Ramayana",
    description: "Pertunjukan wayang wong dengan cerita Ramayana yang dipentaskan oleh penari profesional.",
    start_date: "2025-04-15",
    end_date: "2025-04-15",
    location: "Gedung Kesenian Jakarta",
    event_type: "performance",
    status: "completed",
    organizer: "Sanggar Sekar Budaya",
    participants: 42,
    featured_image: "/placeholder-w916o.png",
  },
  {
    id: 6,
    title: "Workshop Tatah Sungging Wayang",
    description: "Pelatihan teknik menatah dan menyungging (mewarnai) wayang kulit.",
    start_date: "2025-05-10",
    end_date: "2025-05-10",
    location: "Sanggar Wayang Setia Darma",
    event_type: "workshop",
    status: "completed",
    organizer: "Maestro Tatah Sungging",
    participants: 15,
    featured_image: "/placeholder-tqy1r.png",
  },
  {
    id: 7,
    title: "Wayang Inovasi: Perpaduan Tradisi dan Modern",
    description: "Workshop intensif tentang inovasi dalam seni wayang dengan teknologi modern.",
    start_date: "2025-08-12",
    end_date: "2025-08-14",
    location: "Institut Seni Indonesia Surakarta",
    event_type: "workshop",
    status: "draft",
    organizer: "Komunitas Wayang Digital",
    participants: 0,
    featured_image: "/placeholder-uk0h5.png",
  },
  {
    id: 8,
    title: "Gala Malam Pelestarian Wayang",
    description: "Acara formal untuk penggalangan dana program pelestarian wayang Indonesia.",
    start_date: "2025-09-20",
    end_date: "2025-09-20",
    location: "Hotel Mulia Senayan, Jakarta",
    event_type: "gala",
    status: "draft",
    organizer: "Yayasan Wayang Indonesia",
    participants: 0,
    featured_image: "/placeholder-6xgo5.png",
  },
]

export default function EventsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [eventType, setEventType] = useState("all")
  const [status, setStatus] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter events based on search term, event type, status, and active tab
  const filteredEvents = eventData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = eventType === "all" || event.event_type === eventType
    const matchesStatus = status === "all" || event.status === status
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "upcoming" && event.status === "upcoming") ||
      (activeTab === "completed" && event.status === "completed") ||
      (activeTab === "draft" && event.status === "draft")

    return matchesSearch && matchesType && matchesStatus && matchesTab
  })

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Format date range
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    if (start.toDateString() === end.toDateString()) {
      return formatDate(startDate)
    }

    return `${formatDate(startDate)} - ${formatDate(endDate)}`
  }

  // Update event type badge function
  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case "workshop":
        return <Badge variant="secondary">Workshop</Badge>
      case "performance":
        return <Badge variant="default">Pertunjukan</Badge>
      case "audition":
        return <Badge variant="outline">Audisi</Badge>
      case "gala":
        return <Badge className="bg-purple-500">Gala</Badge>
      case "festival":
        return <Badge className="bg-green-500">Festival</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <div className="flex items-center gap-1 text-blue-600">
            <Clock3 className="h-4 w-4" />
            <span>Akan Datang</span>
          </div>
        )
      case "completed":
        return (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>Selesai</span>
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
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Acara</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Buat Acara
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Semua Acara</TabsTrigger>
            <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
            <TabsTrigger value="completed">Selesai</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Ikhtisar Acara</CardTitle>
              <CardDescription>
                Kelola semua acara dalam satu tempat. Filter, cari, dan edit acara Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari acara..."
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
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Jenis Acara" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Jenis</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="performance">Pertunjukan</SelectItem>
                      <SelectItem value="audition">Audisi</SelectItem>
                      <SelectItem value="gala">Gala</SelectItem>
                      <SelectItem value="festival">Festival</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Status</SelectItem>
                      <SelectItem value="upcoming">Akan Datang</SelectItem>
                      <SelectItem value="completed">Selesai</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
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
                    <TableHead>Acara</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Tanggal
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Peserta</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        Tidak ada acara yang sesuai dengan filter Anda
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={event.featured_image || "/placeholder.svg"}
                              alt={event.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{event.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getEventTypeBadge(event.event_type)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDateRange(event.start_date, event.end_date)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(event.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{event.participants}</span>
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
                                Lihat Detail
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Acara
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                Kelola Peserta
                              </DropdownMenuItem>
                              {event.status === "draft" && (
                                <DropdownMenuItem>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Publikasikan Acara
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Acara
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
                  Menampilkan {filteredEvents.length} dari {eventData.length} acara
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

        <TabsContent value="upcoming" className="space-y-4">
          {/* Same content as "all" tab but filtered for upcoming events */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Acara Akan Datang</CardTitle>
              <CardDescription>
                Kelola acara yang akan datang. Acara ini sudah dijadwalkan dan terlihat oleh pengguna.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Same filtering UI as above */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari acara yang akan datang..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Same table as above but filtered for upcoming events */}
          <Card>
            <CardContent className="pt-6">
              <Table>
                {/* Same table structure as above */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Acara</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Tanggal
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Peserta</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Filtered for upcoming events */}
                  {filteredEvents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Tidak ada acara yang akan datang
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={event.featured_image || "/placeholder.svg"}
                              alt={event.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{event.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getEventTypeBadge(event.event_type)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDateRange(event.start_date, event.end_date)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{event.participants}</span>
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
                                Lihat Detail
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Acara
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                Kelola Peserta
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Acara
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

        <TabsContent value="completed" className="space-y-4">
          {/* Similar structure for completed events */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Acara Selesai</CardTitle>
              <CardDescription>Lihat dan kelola acara yang telah selesai.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari acara selesai..."
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
                    <TableHead>Acara</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Peserta</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Tidak ada acara selesai yang ditemukan
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredEvents.map((event) => (
                      <TableRow key={event.id}>
                        {/* Similar row structure as above */}
                        <TableCell className="font-medium">{event.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={event.featured_image || "/placeholder.svg"}
                              alt={event.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{event.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getEventTypeBadge(event.event_type)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDateRange(event.start_date, event.end_date)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{event.participants}</span>
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
                                Lihat Detail
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Acara
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                Lihat Participants
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Acara
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
          {/* Similar structure for draft events */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Draft Acara</CardTitle>
              <CardDescription>
                Kelola draft acara Anda. Acara ini belum dipublikasikan dan hanya terlihat oleh administrator.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari draft acara..."
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
                    <TableHead>Acara</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Planned Date</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Organizer</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Tidak ada draft acara yang ditemukan
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={event.featured_image || "/placeholder.svg"}
                              alt={event.title}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{event.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getEventTypeBadge(event.event_type)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDateRange(event.start_date, event.end_date)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </TableCell>
                        <TableCell>{event.organizer}</TableCell>
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
                                Preview
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Acara
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Publikasikan Acara
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Acara
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

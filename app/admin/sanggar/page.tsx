"use client"

import { useState } from "react"
import { Search, Plus, MoreHorizontal, Eye, Pencil, Trash2, Download, MapPin, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "@/components/image-with-fallback"

// Data dummy untuk sanggar seni
const sanggarData = [
  {
    id: 1,
    nama: "Sanggar Wayang Sasana Hinggil",
    pimpinan: "Ki Hadi Santoso",
    alamat: "Jl. Malioboro No. 12, Yogyakarta",
    kontak: "+62812345678",
    jenisSeni: ["Wayang Kulit", "Wayang Golek"],
    jumlahAnggota: 45,
    jadwalLatihan: "Selasa & Jumat, 16.00-20.00",
    foto: "/placeholder-tqy1r.png",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Padepokan Seni Bagong Kussudiardja",
    pimpinan: "Drs. Bagong Pujiono",
    alamat: "Jl. Kaliurang Km 8.5, Sleman, Yogyakarta",
    kontak: "+62823456789",
    jenisSeni: ["Wayang Kontemporer", "Tari"],
    jumlahAnggota: 78,
    jadwalLatihan: "Senin-Kamis, 15.00-19.00",
    foto: "/placeholder-ieftg.png",
    status: "Aktif",
  },
  {
    id: 3,
    nama: "Sanggar Wayang Orang Bharata",
    pimpinan: "Drs. Suparman",
    alamat: "Jl. Kalilio No. 15, Jakarta Pusat",
    kontak: "+62834567890",
    jenisSeni: ["Wayang Orang", "Tari Klasik"],
    jumlahAnggota: 60,
    jadwalLatihan: "Rabu & Sabtu, 16.00-21.00",
    foto: "/placeholder-uk0h5.png",
    status: "Aktif",
  },
  {
    id: 4,
    nama: "Sanggar Wayang Golek Giriharja",
    pimpinan: "Ki Asep Sunandar",
    alamat: "Jl. Pasirjati No. 5, Bandung, Jawa Barat",
    kontak: "+62845678901",
    jenisSeni: ["Wayang Golek Sunda"],
    jumlahAnggota: 35,
    jadwalLatihan: "Jumat-Minggu, 15.00-18.00",
    foto: "/placeholder-6xgo5.png",
    status: "Aktif",
  },
  {
    id: 5,
    nama: "Sanggar Seni Soerya Soemirat",
    pimpinan: "GPH Dipokusumo",
    alamat: "Jl. Slamet Riyadi No. 275, Solo, Jawa Tengah",
    kontak: "+62856789012",
    jenisSeni: ["Wayang Kulit", "Tari Klasik", "Karawitan"],
    jumlahAnggota: 90,
    jadwalLatihan: "Senin, Rabu, Jumat, 16.00-20.00",
    foto: "/placeholder-2ftax.png",
    status: "Aktif",
  },
  {
    id: 6,
    nama: "Sanggar Wayang Kancil",
    pimpinan: "Ki Ledjar Subroto",
    alamat: "Jl. Parangtritis Km 6.5, Bantul, Yogyakarta",
    kontak: "+62867890123",
    jenisSeni: ["Wayang Kancil", "Wayang Anak"],
    jumlahAnggota: 25,
    jadwalLatihan: "Sabtu & Minggu, 09.00-12.00",
    foto: "/placeholder-oy2f9.png",
    status: "Aktif",
  },
  {
    id: 7,
    nama: "Sanggar Wayang Suket Puspasari",
    pimpinan: "Ki Slamet Gundono (Alm)",
    alamat: "Jl. Diponegoro No. 8, Tegal, Jawa Tengah",
    kontak: "+62878901234",
    jenisSeni: ["Wayang Suket", "Wayang Kontemporer"],
    jumlahAnggota: 15,
    jadwalLatihan: "Tidak Rutin",
    foto: "/placeholder-5rmzk.png",
    status: "Tidak Aktif",
  },
  {
    id: 8,
    nama: "Sanggar Wayang Wong Sriwedari",
    pimpinan: "Drs. Sutrisno",
    alamat: "Jl. Slamet Riyadi No. 275, Solo, Jawa Tengah",
    kontak: "+62889012345",
    jenisSeni: ["Wayang Orang", "Tari Klasik"],
    jumlahAnggota: 50,
    jadwalLatihan: "Selasa & Jumat, 16.00-20.00",
    foto: "/placeholder-q1kq8.png",
    status: "Aktif",
  },
]

export default function SanggarPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [jenisSeniFilter, setJenisSeniFilter] = useState("all")

  // Filter data berdasarkan pencarian, status, dan jenis seni
  const filteredData = sanggarData.filter((sanggar) => {
    const matchesSearch =
      sanggar.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sanggar.pimpinan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sanggar.alamat.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || sanggar.status === statusFilter

    const matchesJenisSeni =
      jenisSeniFilter === "all" || sanggar.jenisSeni.some((jenis) => jenis.includes(jenisSeniFilter))

    return matchesSearch && matchesStatus && matchesJenisSeni
  })

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Data Sanggar Seni</h2>
          <p className="text-muted-foreground">Kelola informasi sanggar seni yang aktif di bidang pewayangan</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Sanggar Baru
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Daftar Sanggar Seni</CardTitle>
          <CardDescription>Total {filteredData.length} sanggar seni terdaftar dalam sistem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari sanggar..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={jenisSeniFilter} onValueChange={setJenisSeniFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter Jenis Seni" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Jenis Seni</SelectItem>
                <SelectItem value="Wayang Kulit">Wayang Kulit</SelectItem>
                <SelectItem value="Wayang Golek">Wayang Golek</SelectItem>
                <SelectItem value="Wayang Orang">Wayang Orang</SelectItem>
                <SelectItem value="Wayang Kontemporer">Wayang Kontemporer</SelectItem>
                <SelectItem value="Tari">Tari</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="Aktif">Aktif</SelectItem>
                <SelectItem value="Tidak Aktif">Tidak Aktif</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full md:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Ekspor Data
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">No.</TableHead>
                  <TableHead className="w-[80px]">Foto</TableHead>
                  <TableHead>Nama Sanggar</TableHead>
                  <TableHead className="hidden md:table-cell">Pimpinan</TableHead>
                  <TableHead className="hidden lg:table-cell">Lokasi</TableHead>
                  <TableHead className="hidden md:table-cell">Jenis Seni</TableHead>
                  <TableHead className="hidden lg:table-cell">Anggota</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                      Tidak ada data sanggar yang sesuai dengan pencarian
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((sanggar, index) => (
                    <TableRow key={sanggar.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={sanggar.foto || "/placeholder.svg"}
                            alt={sanggar.nama}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{sanggar.nama}</TableCell>
                      <TableCell className="hidden md:table-cell">{sanggar.pimpinan}</TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="truncate max-w-[200px]">{sanggar.alamat}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {sanggar.jenisSeni.map((jenis, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {jenis}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1 text-muted-foreground" />
                          {sanggar.jumlahAnggota}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={sanggar.status === "Aktif" ? "success" : "destructive"}>{sanggar.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Lihat Detail
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Phone className="mr-2 h-4 w-4" />
                              Hubungi
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
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
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Menampilkan {filteredData.length} dari {sanggarData.length} sanggar
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Sebelumnya
              </Button>
              <Button variant="outline" size="sm" disabled>
                Selanjutnya
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

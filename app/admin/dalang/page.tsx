"use client"

import { useState } from "react"
import { Search, Plus, MoreHorizontal, Eye, Pencil, Trash2, Download } from "lucide-react"
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

// Data dummy untuk dalang
const dalangData = [
  {
    id: 1,
    nama: "Ki Manteb Soedharsono",
    noAnggota: "PD-001-JTG",
    domisili: "Solo, Jawa Tengah",
    kontak: "+62812345678",
    keahlian: "Wayang Kulit Gaya Surakarta",
    pengalaman: "45 tahun",
    foto: "/placeholder-tqy1r.png",
    status: "Senior",
  },
  {
    id: 2,
    nama: "Ki Anom Suroto",
    noAnggota: "PD-002-JTG",
    domisili: "Sukoharjo, Jawa Tengah",
    kontak: "+62823456789",
    keahlian: "Wayang Kulit Gaya Surakarta",
    pengalaman: "40 tahun",
    foto: "/placeholder-ieftg.png",
    status: "Senior",
  },
  {
    id: 3,
    nama: "Ki Seno Nugroho",
    noAnggota: "PD-003-DIY",
    domisili: "Yogyakarta",
    kontak: "+62834567890",
    keahlian: "Wayang Kulit Gaya Yogyakarta",
    pengalaman: "25 tahun",
    foto: "/placeholder-uk0h5.png",
    status: "Senior",
  },
  {
    id: 4,
    nama: "Ki Cahyo Kuntadi",
    noAnggota: "PD-004-JKT",
    domisili: "Jakarta",
    kontak: "+62845678901",
    keahlian: "Wayang Golek & Wayang Kulit",
    pengalaman: "20 tahun",
    foto: "/placeholder-6xgo5.png",
    status: "Aktif",
  },
  {
    id: 5,
    nama: "Nyi Wulan Sri Panjang Mas",
    noAnggota: "PD-005-BDG",
    domisili: "Bandung, Jawa Barat",
    kontak: "+62856789012",
    keahlian: "Wayang Golek Sunda",
    pengalaman: "15 tahun",
    foto: "/placeholder-2ftax.png",
    status: "Aktif",
  },
  {
    id: 6,
    nama: "Ki Bayu Aji Pamungkas",
    noAnggota: "PD-006-SMG",
    domisili: "Semarang, Jawa Tengah",
    kontak: "+62867890123",
    keahlian: "Wayang Kulit Kontemporer",
    pengalaman: "10 tahun",
    foto: "/placeholder-oy2f9.png",
    status: "Junior",
  },
  {
    id: 7,
    nama: "Ki Sigit Ariyanto",
    noAnggota: "PD-007-MLG",
    domisili: "Malang, Jawa Timur",
    kontak: "+62878901234",
    keahlian: "Wayang Kulit Gaya Jawa Timuran",
    pengalaman: "18 tahun",
    foto: "/placeholder-5rmzk.png",
    status: "Aktif",
  },
  {
    id: 8,
    nama: "Ki Enthus Susmono (Alm)",
    noAnggota: "PD-008-TGL",
    domisili: "Tegal, Jawa Tengah",
    kontak: "-",
    keahlian: "Wayang Santri",
    pengalaman: "30 tahun",
    foto: "/placeholder-q1kq8.png",
    status: "Almarhum",
  },
]

export default function DalangPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter data berdasarkan pencarian dan status
  const filteredData = dalangData.filter((dalang) => {
    const matchesSearch =
      dalang.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dalang.keahlian.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dalang.domisili.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || dalang.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Data Dalang</h2>
          <p className="text-muted-foreground">Kelola informasi dalang yang tergabung dalam komunitas PEPADI</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Dalang Baru
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Daftar Dalang</CardTitle>
          <CardDescription>Total {filteredData.length} dalang terdaftar dalam sistem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari dalang..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="Senior">Senior</SelectItem>
                <SelectItem value="Aktif">Aktif</SelectItem>
                <SelectItem value="Junior">Junior</SelectItem>
                <SelectItem value="Almarhum">Almarhum</SelectItem>
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
                  <TableHead>Nama Dalang</TableHead>
                  <TableHead className="hidden md:table-cell">No. Anggota</TableHead>
                  <TableHead className="hidden md:table-cell">Domisili</TableHead>
                  <TableHead className="hidden lg:table-cell">Keahlian</TableHead>
                  <TableHead className="hidden lg:table-cell">Pengalaman</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                      Tidak ada data dalang yang sesuai dengan pencarian
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((dalang, index) => (
                    <TableRow key={dalang.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={dalang.foto || "/placeholder.svg"}
                            alt={dalang.nama}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{dalang.nama}</TableCell>
                      <TableCell className="hidden md:table-cell">{dalang.noAnggota}</TableCell>
                      <TableCell className="hidden md:table-cell">{dalang.domisili}</TableCell>
                      <TableCell className="hidden lg:table-cell">{dalang.keahlian}</TableCell>
                      <TableCell className="hidden lg:table-cell">{dalang.pengalaman}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            dalang.status === "Senior"
                              ? "default"
                              : dalang.status === "Aktif"
                                ? "success"
                                : dalang.status === "Junior"
                                  ? "warning"
                                  : "destructive"
                          }
                        >
                          {dalang.status}
                        </Badge>
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
              Menampilkan {filteredData.length} dari {dalangData.length} dalang
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

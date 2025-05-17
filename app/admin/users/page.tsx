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
  UserCog,
  Mail,
  CheckCircle,
  XCircle,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample user data
const userData = [
  {
    id: 1,
    username: "budisantoso",
    email: "budi.santoso@example.com",
    full_name: "Budi Santoso",
    role: "instructor",
    created_at: "2024-01-15",
    is_active: true,
    profile_image: "/placeholder-q1kq8.png",
  },
  {
    id: 2,
    username: "kianomsuryono",
    email: "ki.anom@example.com",
    full_name: "Ki Anom Suryono",
    role: "instructor",
    created_at: "2024-02-10",
    is_active: true,
    profile_image: "/placeholder-uk0h5.png",
  },
  {
    id: 3,
    username: "dewikartika",
    email: "dewi.kartika@example.com",
    full_name: "Dewi Kartika",
    role: "instructor",
    created_at: "2024-03-05",
    is_active: true,
    profile_image: "/placeholder-tqy1r.png",
  },
  {
    id: 4,
    username: "darmawanp",
    email: "darmawan.prakoso@example.com",
    full_name: "Darmawan Prakoso",
    role: "admin",
    created_at: "2023-11-20",
    is_active: true,
    profile_image: "/placeholder-6xgo5.png",
  },
  {
    id: 5,
    username: "sitirahayu",
    email: "siti.rahayu@example.com",
    full_name: "Siti Rahayu",
    role: "member",
    created_at: "2024-04-12",
    is_active: true,
    profile_image: "/placeholder-2ftax.png",
  },
  {
    id: 6,
    username: "agusprasetyo",
    email: "agus.prasetyo@example.com",
    full_name: "Agus Prasetyo",
    role: "member",
    created_at: "2024-04-18",
    is_active: false,
    profile_image: "/placeholder-oy2f9.png",
  },
  {
    id: 7,
    username: "ratnapermata",
    email: "ratna.permata@example.com",
    full_name: "Ratna Permata",
    role: "member",
    created_at: "2024-05-01",
    is_active: true,
    profile_image: "/placeholder-5rmzk.png",
  },
  {
    id: 8,
    username: "gandhijaya",
    email: "gandhi.jaya@example.com",
    full_name: "Gandhi Jaya",
    role: "instructor",
    created_at: "2024-05-05",
    is_active: true,
    profile_image: "/placeholder-lczp4.png",
  },
]

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [role, setRole] = useState("all")
  const [status, setStatus] = useState("all")

  // Filter users based on search term, role, and status
  const filteredUsers = userData.filter((user) => {
    const matchesSearch =
      user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = role === "all" || user.role === role
    const matchesStatus =
      status === "all" || (status === "active" && user.is_active) || (status === "inactive" && !user.is_active)

    return matchesSearch && matchesRole && matchesStatus
  })

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Get role badge
  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-purple-500">Admin</Badge>
      case "instructor":
        return <Badge variant="secondary">Pengajar</Badge>
      case "member":
        return <Badge variant="outline">Anggota</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Pengguna</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Pengguna Baru
        </Button>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Ikhtisar Pengguna</CardTitle>
            <CardDescription>
              Kelola semua pengguna dalam satu tempat. Filter, cari, dan edit akun pengguna.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari pengguna..."
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
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Peran" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Peran</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="instructor">Pengajar</SelectItem>
                    <SelectItem value="member">Anggota</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="inactive">Tidak Aktif</SelectItem>
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
                  <TableHead>Pengguna</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Peran</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Bergabung
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      Tidak ada pengguna yang sesuai dengan filter Anda
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={user.profile_image || "/placeholder.svg"} alt={user.full_name} />
                            <AvatarFallback>
                              {user.full_name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.full_name}</div>
                            <div className="text-sm text-muted-foreground">@{user.username}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{getRoleBadge(user.role)}</TableCell>
                      <TableCell>
                        {user.is_active ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span>Aktif</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <XCircle className="h-4 w-4" />
                            <span>Tidak Aktif</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{formatDate(user.created_at)}</TableCell>
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
                              Lihat Profil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit Pengguna
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <UserCog className="mr-2 h-4 w-4" />
                              Kelola Izin
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Kirim Email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {user.is_active ? (
                              <DropdownMenuItem>
                                <XCircle className="mr-2 h-4 w-4" />
                                Nonaktifkan
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Aktifkan
                              </DropdownMenuItem>
                            )}
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
                Menampilkan {filteredUsers.length} dari {userData.length} pengguna
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

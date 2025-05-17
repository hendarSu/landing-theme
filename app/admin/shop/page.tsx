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
  ShoppingBag,
  Tag,
  Package,
  DollarSign,
  Layers,
  CheckCircle,
  AlertCircle,
  ImageIcon,
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

// Update the sample product data with wayang-themed products

// Replace the productData array with the following:
const productData = [
  {
    id: 1,
    name: "Wayang Kulit Arjuna",
    description: "Wayang kulit asli dari Yogyakarta dengan tokoh Arjuna, dibuat oleh pengrajin terkenal.",
    price: 499.99,
    stock_quantity: 5,
    product_type: "wayang",
    seller: "PEPADI Store",
    status: "in_stock",
    tags: ["wayang kulit", "arjuna", "koleksi"],
    product_image: "/placeholder-lczp4.png",
  },
  {
    id: 2,
    name: "Kelir (Layar Wayang) Ukuran Standar",
    description: "Layar putih berkualitas tinggi untuk pertunjukan wayang kulit dengan ukuran standar.",
    price: 129.99,
    stock_quantity: 12,
    product_type: "peralatan",
    seller: "PEPADI Store",
    status: "in_stock",
    tags: ["kelir", "layar", "pertunjukan"],
    product_image: "/placeholder-9qthr.png",
  },
  {
    id: 3,
    name: "Set Kostum Dalang",
    description: "Pakaian lengkap untuk dalang, termasuk blangkon, beskap, dan kain jarik.",
    price: 299.99,
    stock_quantity: 8,
    product_type: "pakaian",
    seller: "Batik & Costume",
    status: "in_stock",
    tags: ["kostum", "dalang", "tradisional"],
    product_image: "/placeholder-ieftg.png",
  },
  {
    id: 4,
    name: "Gamelan Mini Set",
    description: "Set gamelan mini untuk pengiring pertunjukan wayang skala kecil.",
    price: 899.99,
    stock_quantity: 3,
    product_type: "alat musik",
    seller: "Gamelan Handcraft",
    status: "in_stock",
    tags: ["gamelan", "musik", "pengiring"],
    product_image: "/placeholder-6xq0p.png",
  },
  {
    id: 5,
    name: "Cempala (Pemukul Kotak Wayang)",
    description: "Cempala kayu berkualitas tinggi untuk mengiringi pertunjukan wayang.",
    price: 45.99,
    stock_quantity: 20,
    product_type: "peralatan",
    seller: "PEPADI Store",
    status: "in_stock",
    tags: ["cempala", "alat", "pertunjukan"],
    product_image: "/placeholder-w916o.png",
  },
  {
    id: 6,
    name: "Buku Panduan Mendalang",
    description: "Buku lengkap berisi teknik dan panduan menjadi dalang wayang kulit.",
    price: 35.99,
    stock_quantity: 0,
    product_type: "buku",
    seller: "Pustaka Wayang",
    status: "out_of_stock",
    tags: ["buku", "panduan", "dalang"],
    product_image: "/placeholder-2h9yz.png",
  },
  {
    id: 7,
    name: "Kotak Wayang Ukir",
    description: "Kotak wayang dari kayu jati dengan ukiran tradisional untuk menyimpan wayang.",
    price: 259.99,
    stock_quantity: 4,
    product_type: "peralatan",
    seller: "Ukir Jepara",
    status: "low_stock",
    tags: ["kotak", "penyimpanan", "ukir"],
    product_image: "/placeholder-oy2f9.png",
  },
  {
    id: 8,
    name: "Lampu Blencong Tradisional",
    description: "Lampu minyak tradisional (blencong) untuk pertunjukan wayang kulit.",
    price: 89.99,
    stock_quantity: 7,
    product_type: "peralatan",
    seller: "PEPADI Store",
    status: "in_stock",
    tags: ["blencong", "lampu", "tradisional"],
    product_image: "/placeholder-5rmzk.png",
  },
]

// Sample order data
const orderData = [
  {
    id: 1001,
    user: "Emma Wilson",
    order_status: "completed",
    total_amount: 129.99,
    payment_method: "credit_card",
    order_date: "2025-05-10",
    payment_date: "2025-05-10",
    items: 2,
  },
  {
    id: 1002,
    user: "Michael Chen",
    order_status: "processing",
    total_amount: 249.99,
    payment_method: "paypal",
    order_date: "2025-05-12",
    payment_date: "2025-05-12",
    items: 1,
  },
  {
    id: 1003,
    user: "Aisha Patel",
    order_status: "shipped",
    total_amount: 85.5,
    payment_method: "credit_card",
    order_date: "2025-05-08",
    payment_date: "2025-05-08",
    items: 3,
  },
  {
    id: 1004,
    user: "David Rodriguez",
    order_status: "completed",
    total_amount: 210.75,
    payment_method: "credit_card",
    order_date: "2025-05-05",
    payment_date: "2025-05-05",
    items: 2,
  },
  {
    id: 1005,
    user: "Sarah Johnson",
    order_status: "processing",
    total_amount: 159.99,
    payment_method: "paypal",
    order_date: "2025-05-14",
    payment_date: "2025-05-14",
    items: 1,
  },
  {
    id: 1006,
    user: "James Lee",
    order_status: "cancelled",
    total_amount: 49.99,
    payment_method: "credit_card",
    order_date: "2025-05-07",
    payment_date: "2025-05-07",
    items: 1,
  },
]

export default function ShopManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [productType, setProductType] = useState("all")
  const [status, setStatus] = useState("all")
  const [activeTab, setActiveTab] = useState("products")
  const [orderStatus, setOrderStatus] = useState("all")

  // Filter products based on search term, product type, and status
  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = productType === "all" || product.product_type === productType
    const matchesStatus = status === "all" || product.status === status

    return matchesSearch && matchesType && matchesStatus
  })

  // Filter orders based on search term and order status
  const filteredOrders = orderData.filter((order) => {
    const matchesSearch =
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.toString().includes(searchTerm)
    const matchesStatus = orderStatus === "all" || order.order_status === orderStatus

    return matchesSearch && matchesStatus
  })

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Format price
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  // Get product status badge
  const getProductStatusBadge = (status: string) => {
    switch (status) {
      case "in_stock":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Tersedia
          </Badge>
        )
      case "low_stock":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Stok Menipis
          </Badge>
        )
      case "out_of_stock":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Habis
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get order status badge
  const getOrderStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>Selesai</span>
          </div>
        )
      case "processing":
        return (
          <div className="flex items-center gap-1 text-blue-600">
            <Package className="h-4 w-4" />
            <span>Diproses</span>
          </div>
        )
      case "shipped":
        return (
          <div className="flex items-center gap-1 text-purple-600">
            <ShoppingBag className="h-4 w-4" />
            <span>Dikirim</span>
          </div>
        )
      case "cancelled":
        return (
          <div className="flex items-center gap-1 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span>Dibatalkan</span>
          </div>
        )
      default:
        return <span>{status}</span>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Toko</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Produk
        </Button>
      </div>

      <Tabs defaultValue="products" onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="products">Produk</TabsTrigger>
            <TabsTrigger value="orders">Pesanan</TabsTrigger>
            <TabsTrigger value="categories">Kategori</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Ikhtisar Produk</CardTitle>
              <CardDescription>
                Kelola semua produk dalam satu tempat. Filter, cari, dan edit inventaris Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari produk..."
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
                  <Select value={productType} onValueChange={setProductType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Jenis Produk" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Jenis</SelectItem>
                      <SelectItem value="wayang">Wayang</SelectItem>
                      <SelectItem value="peralatan">Peralatan</SelectItem>
                      <SelectItem value="pakaian">Pakaian</SelectItem>
                      <SelectItem value="alat musik">Alat Musik</SelectItem>
                      <SelectItem value="buku">Buku</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Status</SelectItem>
                      <SelectItem value="in_stock">Tersedia</SelectItem>
                      <SelectItem value="low_stock">Stok Menipis</SelectItem>
                      <SelectItem value="out_of_stock">Habis</SelectItem>
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
                    <TableHead>Produk</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Harga
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Stok</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Penjual</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        Tidak ada produk yang sesuai dengan filter Anda
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={product.product_image || "/placeholder.svg"}
                              alt={product.name}
                              className="h-10 w-16 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{product.name}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{product.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {product.product_type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 font-medium">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>{product.price.toFixed(2)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Layers className="h-4 w-4 text-muted-foreground" />
                            <span>{product.stock_quantity}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getProductStatusBadge(product.status)}</TableCell>
                        <TableCell>{product.seller}</TableCell>
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
                                Lihat Produk
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Produk
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <ImageIcon className="mr-2 h-4 w-4" />
                                Kelola Gambar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Tag className="mr-2 h-4 w-4" />
                                Kelola Tag
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Layers className="mr-2 h-4 w-4" />
                                Perbarui Stok
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Produk
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
                  Menampilkan {filteredProducts.length} dari {productData.length} produk
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

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Ikhtisar Pesanan</CardTitle>
              <CardDescription>
                Kelola semua pesanan dalam satu tempat. Filter, cari, dan proses pesanan pelanggan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari pesanan..."
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
                  <Select value={orderStatus} onValueChange={setOrderStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status Pesanan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Status</SelectItem>
                      <SelectItem value="processing">Diproses</SelectItem>
                      <SelectItem value="shipped">Dikirim</SelectItem>
                      <SelectItem value="completed">Selesai</SelectItem>
                      <SelectItem value="cancelled">Dibatalkan</SelectItem>
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
                    <TableHead className="w-[80px]">ID Pesanan</TableHead>
                    <TableHead>Pelanggan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Tanggal
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Total
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Pembayaran</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        Tidak ada pesanan yang sesuai dengan filter Anda
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{order.user}</TableCell>
                        <TableCell>{getOrderStatusBadge(order.order_status)}</TableCell>
                        <TableCell>{formatDate(order.order_date)}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell className="font-medium">{formatPrice(order.total_amount)}</TableCell>
                        <TableCell className="capitalize">{order.payment_method.replace("_", " ")}</TableCell>
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
                                Lihat Pesanan
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Perbarui Status
                              </DropdownMenuItem>
                              {order.order_status === "processing" && (
                                <DropdownMenuItem>
                                  <ShoppingBag className="mr-2 h-4 w-4" />
                                  Tandai Sebagai Dikirim
                                </DropdownMenuItem>
                              )}
                              {order.order_status === "shipped" && (
                                <DropdownMenuItem>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Tandai Sebagai Selesai
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              {order.order_status !== "cancelled" && order.order_status !== "completed" && (
                                <DropdownMenuItem className="text-red-600">
                                  <AlertCircle className="mr-2 h-4 w-4" />
                                  Batalkan Pesanan
                                </DropdownMenuItem>
                              )}
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
                  Menampilkan {filteredOrders.length} dari {orderData.length} pesanan
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

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Kategori Produk</CardTitle>
              <CardDescription>
                Kelola kategori produk dan tag untuk mengorganisir inventaris toko Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Cari kategori..." className="pl-8" />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Kategori
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Footwear", count: 12, slug: "footwear", description: "Dance and performance shoes" },
                  {
                    name: "Equipment",
                    count: 18,
                    slug: "equipment",
                    description: "Practice and performance equipment",
                  },
                  { name: "Apparel", count: 24, slug: "apparel", description: "Performance and practice clothing" },
                  { name: "Audio", count: 8, slug: "audio", description: "Sound and recording equipment" },
                  { name: "Makeup", count: 6, slug: "makeup", description: "Stage and performance makeup" },
                  { name: "Accessories", count: 15, slug: "accessories", description: "Performance accessories" },
                ].map((category, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{category.count} products</Badge>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Tag Populer</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "ballet", count: 24 },
                    { name: "dance", count: 42 },
                    { name: "performance", count: 36 },
                    { name: "shoes", count: 18 },
                    { name: "practice", count: 22 },
                    { name: "costume", count: 15 },
                    { name: "audio", count: 12 },
                    { name: "stage", count: 28 },
                    { name: "accessories", count: 20 },
                    { name: "professional", count: 16 },
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm">
                      <span>{tag.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {tag.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

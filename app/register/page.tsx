"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Logo } from "@/components/logo"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically handle the actual registration logic
    console.log("Registration attempt:", formData)

    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pepadi-gold/10 via-white to-pepadi-brown/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-pepadi-brown transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center">
              <Logo showText={false} className="mb-2" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-pepadi-black">Daftar ke PEPADI</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Bergabunglah dengan komunitas pelestari seni wayang Indonesia
              </CardDescription>
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-pepadi-black">
                  Nama Lengkap
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-gray-200 focus:border-pepadi-gold focus:ring-pepadi-gold/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-pepadi-black">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-gray-200 focus:border-pepadi-gold focus:ring-pepadi-gold/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-pepadi-black">
                  Nomor Telepon
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-gray-200 focus:border-pepadi-gold focus:ring-pepadi-gold/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-pepadi-black">
                  Peran
                </Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger className="h-11 border-gray-200 focus:border-pepadi-gold focus:ring-pepadi-gold/20">
                    <SelectValue placeholder="Pilih peran Anda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dalang">Dalang</SelectItem>
                    <SelectItem value="pengrajin">Pengrajin Wayang</SelectItem>
                    <SelectItem value="seniman">Seniman</SelectItem>
                    <SelectItem value="pengajar">Pengajar</SelectItem>
                    <SelectItem value="peminat">Peminat Wayang</SelectItem>
                    <SelectItem value="peneliti">Peneliti</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-pepadi-black">
                  Kata Sandi
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimal 8 karakter"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    className="h-11 pr-10 border-gray-200 focus:border-pepadi-gold focus:ring-pepadi-gold/20"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-pepadi-black">
                  Konfirmasi Kata Sandi
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ulangi kata sandi"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="h-11 pr-10 border-gray-200 focus:border-pepadi-gold focus:ring-pepadi-gold/20"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="relative">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    required
                    className="sr-only"
                  />
                  <div
                    className={`h-4 w-4 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
                      formData.agreeTerms
                        ? "bg-pepadi-gold border-pepadi-gold"
                        : "border-gray-300 hover:border-pepadi-gold"
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, agreeTerms: !prev.agreeTerms }))}
                  >
                    {formData.agreeTerms && <Check className="h-3 w-3 text-white" />}
                  </div>
                </div>
                <Label htmlFor="agreeTerms" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                  Saya menyetujui{" "}
                  <Link href="/terms" className="text-pepadi-brown hover:underline">
                    Syarat & Ketentuan
                  </Link>{" "}
                  dan{" "}
                  <Link href="/privacy" className="text-pepadi-brown hover:underline">
                    Kebijakan Privasi
                  </Link>{" "}
                  PEPADI
                </Label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full h-11 bg-pepadi-gold hover:bg-pepadi-gold/90 text-white font-medium"
                disabled={isLoading || !formData.agreeTerms}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Mendaftar...</span>
                  </div>
                ) : (
                  "Daftar Sekarang"
                )}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Sudah memiliki akun?{" "}
                <Link href="/login" className="text-pepadi-brown hover:text-pepadi-gold font-medium transition-colors">
                  Masuk di sini
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

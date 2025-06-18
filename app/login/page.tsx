"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically handle the actual login logic
    console.log("Login attempt:", formData)

    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
              <CardTitle className="text-2xl font-bold text-pepadi-black">Masuk ke PEPADI</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Masukkan kredensial Anda untuk mengakses portal PEPADI
              </CardDescription>
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
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
                <Label htmlFor="password" className="text-sm font-medium text-pepadi-black">
                  Kata Sandi
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-pepadi-gold focus:ring-pepadi-gold/20"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600">
                    Ingat saya
                  </Label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-pepadi-brown hover:text-pepadi-gold transition-colors"
                >
                  Lupa kata sandi?
                </Link>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full h-11 bg-pepadi-gold hover:bg-pepadi-gold/90 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Memproses...</span>
                  </div>
                ) : (
                  "Masuk"
                )}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Belum memiliki akun?{" "}
                <Link
                  href="/register"
                  className="text-pepadi-brown hover:text-pepadi-gold font-medium transition-colors"
                >
                  Daftar sekarang
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Dengan masuk, Anda menyetujui{" "}
            <Link href="/terms" className="text-pepadi-brown hover:underline">
              Syarat & Ketentuan
            </Link>{" "}
            dan{" "}
            <Link href="/privacy" className="text-pepadi-brown hover:underline">
              Kebijakan Privasi
            </Link>{" "}
            PEPADI
          </p>
        </div>
      </div>
    </div>
  )
}

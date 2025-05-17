import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart,
  FileText,
  Users,
  ShoppingBag,
  Calendar,
  BookOpen,
  Settings,
  LogOut,
  Menu,
  Bell,
  Palette,
  Theater,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Image src="/logo-pepadi.webp" alt="PEPADI Logo" width={48} height={48} className="h-8 w-auto" />
              <span className="hidden font-bold sm:inline-block">PEPADI Admin</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/admin" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Dashboard
              </Link>
              <Link href="/admin/content" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Content
              </Link>
              <Link href="/admin/users" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Users
              </Link>
              <Link href="/admin/events" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Events
              </Link>
              <Link href="/admin/courses" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Padepokan
              </Link>
              <Link href="/admin/shop" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Pasar Seni
              </Link>
              <Link href="/admin/dalang" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Data Dalang
              </Link>
              <Link href="/admin/sanggar" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Data Sanggar Seni
              </Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center gap-2 mb-8">
                <Image src="/logo-pepadi.webp" alt="PEPADI Logo" width={48} height={48} className="h-8 w-auto" />
                <span className="font-bold">PEPADI Admin</span>
              </Link>
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="/admin" className="flex items-center gap-2 py-2 hover:underline">
                  <BarChart className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="/admin/content" className="flex items-center gap-2 py-2 hover:underline">
                  <FileText className="h-5 w-5" />
                  Content
                </Link>
                <Link href="/admin/users" className="flex items-center gap-2 py-2 hover:underline">
                  <Users className="h-5 w-5" />
                  Users
                </Link>
                <Link href="/admin/events" className="flex items-center gap-2 py-2 hover:underline">
                  <Calendar className="h-5 w-5" />
                  Events
                </Link>
                <Link href="/admin/courses" className="flex items-center gap-2 py-2 hover:underline">
                  <BookOpen className="h-5 w-5" />
                  Padepokan
                </Link>
                <Link href="/admin/shop" className="flex items-center gap-2 py-2 hover:underline">
                  <ShoppingBag className="h-5 w-5" />
                  Pasar Seni
                </Link>
                <Link href="/admin/dalang" className="flex items-center gap-2 py-2 hover:underline">
                  <Theater className="h-5 w-5" />
                  Data Dalang
                </Link>
                <Link href="/admin/sanggar" className="flex items-center gap-2 py-2 hover:underline">
                  <Palette className="h-5 w-5" />
                  Data Sanggar Seni
                </Link>
                <Link href="/admin/settings" className="flex items-center gap-2 py-2 hover:underline">
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="sm" className="ml-auto hidden h-8 md:flex">
                <Link href="/" className="flex items-center">
                  View Site
                </Link>
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="mr-1">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Image src="/admin-user-interface.png" alt="Avatar" width={32} height={32} className="rounded-full" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/admin/profile" className="flex w-full items-center">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/admin/settings" className="flex w-full items-center">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/logout" className="flex w-full items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex-1 flex">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  href="/admin"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BarChart className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/admin/content"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <FileText className="h-4 w-4" />
                  Content Management
                </Link>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  User Management
                </Link>
                <Link
                  href="/admin/events"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Calendar className="h-4 w-4" />
                  Events
                </Link>
                <Link
                  href="/admin/courses"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BookOpen className="h-4 w-4" />
                  Padepokan
                </Link>
                <Link
                  href="/admin/shop"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Pasar Seni
                </Link>
                <Link
                  href="/admin/dalang"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Theater className="h-4 w-4" />
                  Data Dalang
                </Link>
                <Link
                  href="/admin/sanggar"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Palette className="h-4 w-4" />
                  Data Sanggar Seni
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

"use client";

import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ChevronRight, Search, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"
import { useNews, useCategories } from "@/lib/client/news"
import { useMemo } from "react"

export default function NewsPage() {
  const { news, loading: newsLoading } = useNews(10)
  const { categories, loading: catLoading } = useCategories()

  // Featured news: berita pertama
  const featuredNews = useMemo(() => news[0], [news])
  const latestNews = useMemo(() => news.slice(1, 6), [news])
  const popularNews = useMemo(() => news.slice(6, 11).map((n, i) => ({ ...n, views: 1000 - i * 100 })), [news])

  return (
    <main className="flex min-h-screen flex-col">
      <MainNav />
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Berita & Artikel</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Temukan berita terbaru, artikel, dan informasi seputar wayang dan seni pertunjukan tradisional Indonesia.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <Input placeholder="Cari berita..." className="w-full" />
            <Button className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" /> Cari
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[url('/placeholder-fecms.png')] bg-cover bg-center opacity-5"></div>
      </section>

      {/* Featured News */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Berita Utama</h2>
        {newsLoading || !featuredNews ? (
          <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
        ) : (
          <div className="overflow-hidden rounded-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-64 w-full md:h-auto">
                <Image
                  src={featuredNews.coverImageUrl || "/placeholder.svg"}
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <Badge className="mb-2 w-fit bg-primary">
                   {categories.find((cat) => cat.id === featuredNews.categoryId)?.name || "-"}
                  </Badge>
                <h3 className="mb-2 text-2xl font-bold">{featuredNews.title}</h3>
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(featuredNews.publishedAt).toLocaleDateString("id-ID")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{featuredNews.authorName}</span>
                  </div>
                </div>
                <p className="mb-6 text-muted-foreground">{featuredNews.excerpt}</p>
                <Button asChild className="w-fit">
                  <Link href={`/berita/${featuredNews.slug}`}>Baca Selengkapnya</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-8 text-3xl font-bold">Berita Terbaru</h2>
            <div className="grid gap-8">
              {newsLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="animate-pulse h-48" />
                  ))
                : latestNews.map((news) => (
                    <Card key={news.id}>
                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="relative h-48 w-full md:h-full">
                          <Image
                            src={news.coverImageUrl || "/placeholder.svg"}
                            alt={news.title}
                            fill
                            className="rounded-l-lg object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 md:pr-4">
                          <CardHeader className="p-4 pb-2">
                            <div className="flex items-center justify-between">
                              <Badge className="w-fit bg-primary">
                               {categories.find((cat) => cat.id === featuredNews.categoryId)?.name || "-"}
                                </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <CalendarDays className="h-4 w-4" />
                                <span>{new Date(news.publishedAt).toLocaleDateString("id-ID")}</span>
                              </div>
                            </div>
                            <CardTitle className="mt-2">{news.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <CardDescription className="text-base">{news.excerpt}</CardDescription>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Button asChild variant="outline" size="sm">
                              <Link href={`/berita/${news.slug}`}>
                                Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>

          <div>
            <div className="rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Berita Populer</h3>
              <div className="space-y-4">
                {newsLoading
                  ? Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
                    ))
                  : popularNews.map((news, index) => (
                      <div key={news.id}>
                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium hover:text-primary">
                              <Link href={`/berita/${news.slug}`}>{news.title}</Link>
                            </h4>
                            <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <CalendarDays className="h-4 w-4" />
                                <span>{new Date(news.publishedAt).toLocaleDateString("id-ID")}</span>
                              </div>
                              <span>{news.views} views</span>
                            </div>
                          </div>
                        </div>
                        {index < popularNews.length - 1 && <Separator className="my-4" />}
                      </div>
                    ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Kategori</h3>
              <div className="space-y-2">
                {catLoading
                  ? Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-6 bg-gray-200 rounded animate-pulse" />
                    ))
                  : categories.map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <Link href={`/berita/kategori/${category.slug}`} className="hover:text-primary">
                          {category.icon} {category.name}
                        </Link>
                        <Badge variant="outline">{category.isActive ? "Aktif" : "Nonaktif"}</Badge>
                      </div>
                    ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-bold">Berlangganan</h3>
              <p className="mb-4 text-muted-foreground">Dapatkan berita dan artikel terbaru langsung ke email Anda.</p>
              <div className="space-y-4">
                <Input placeholder="Email Anda" type="email" />
                <Button className="w-full">Berlangganan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

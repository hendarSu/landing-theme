"use client"

import { ArrowRight } from "lucide-react";
import { useNews } from "@/lib/client/news";
import { ImageWithFallback } from "./image-with-fallback";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";

const NewsUpdateList = () => {
  const { news, loading, error } = useNews(3);

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
              Berita & Informasi Terbaru
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-xl">
              Dapatkan informasi terkini tentang perkembangan seni pedalangan di
              Indonesia.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={`skeleton-${i}`} className="h-full animate-pulse">
                <CardHeader className="p-0">
                  <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-3 sm:mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-1" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="h-8 bg-gray-200 rounded w-full" />
                </CardFooter>
              </Card>
            ))}
          {error && <div className="col-span-3 text-red-500">{error}</div>}
          {!loading && !error && news.map((item) => (
            <Card key={item.id} className="h-full">
              <CardHeader className="p-0">
                <ImageWithFallback
                  src={item.coverImageUrl}
                  alt={item.coverImageAlt || item.title}
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                  fallbackSrc="/placeholder-bn0kj.png"
                />
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                  {new Date(item.publishedAt).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                <Button
                  variant="outline"
                  className="w-full text-xs sm:text-sm"
                  asChild
                >
                  <a href={`/berita/${item.slug}`}>Baca Selengkapnya <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" /></a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button size="sm" className="sm:size-md" asChild>
            <a href="/berita">Lihat Semua Berita</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdateList;

"use client";

import { MainNav } from "@/components/main-nav";
import { getNewsDetail } from "@/lib/client/news";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getNewsDetail(params.slug).then((data) => {
      if (!data) {
        router.replace("/404");
      } else {
        setNews(data);
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);

  if (loading) {
    return (
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-6 animate-pulse">
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4" />
            <div className="h-8 bg-gray-200 rounded w-2/3 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          </div>
          <div className="prose max-w-none">
            <div className="h-4 bg-gray-200 rounded w-full mb-2" />
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>
      </section>
    );
  }

  if (!news) return null;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Use the MainNav component for the header */}
      <MainNav />
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-6">
            <img
              src={news.coverImageUrl}
              alt={news.coverImageAlt || news.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
            <div className="text-muted-foreground text-sm mb-2">
              {new Date(news.publishedAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" • "}Oleh {news.authorName}
            </div>
            <div className="text-base text-muted-foreground mb-4">
              {news.excerpt}
            </div>
          </div>
          <article
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
      </section>
    </main>
  );
}

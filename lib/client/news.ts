"use client"

import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_LANDING || "https://api.sudosu.web.id/api";
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_ORGANIZATION_ID || "6f0b7714-b1cb-4009-8223-313341e2a143";
const API_URL = `${API_BASE_URL}/v1/articles/public/organization/${ORGANIZATION_ID}`;

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  coverImageAlt: string;
  publishedAt: string;
  authorName: string;
  slug: string;
  categoryId: string;
};

export function useNews(limit = 3) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data?.slice(0, limit) || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat berita");
        setLoading(false);
      });
  }, [limit]);

  return { news, loading, error };
}

export async function getNewsDetail(slug: string) {
  const res = await fetch(
    `${API_BASE_URL}/v1/articles/public/detail/slug/${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json.data;
}

export type Category = {
  id: string;
  organizationId: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/v1/articles/public/category/organization/${ORGANIZATION_ID}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat kategori");
        setLoading(false);
      });
  }, []);

  return { categories, loading, error };
}

export async function getCategories() {
  const res = await fetch(
    `${API_BASE_URL}/v1/articles/public/category/organization/${ORGANIZATION_ID}`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}

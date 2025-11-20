"use client";

import { useState, useEffect, use } from "react";
import ArticleList from "@/components/ArticleList";
import ArticleListLoadingSkeleton from "@/components/ArticleListLoadingSkeleton";
import LoadMoreBtn from "@/components/LoadMoreBtn";

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_KEY;

export default function CategoryPage({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    setError(false);

    fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((json) => setData(json))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Hottest {category} News</h2>
        <ArticleListLoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-10 text-center">
        <img
          src="/error.jpg"
          alt="No Data!"
          className="w-40 h-40 object-contain mx-auto"
        />
        <p className="text-red-600 text-lg font-semibold mt-4">
          Something went wrong!
        </p>
      </div>
    );
  }

  const articles = data?.articles ?? [];

  return (
    <div className="py-10 flex flex-col gap-4 mt-5">
      <h2 className="px-4 sm:px-8 lg:px-24 text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">
        Hottest {category} News
      </h2>
      <ArticleList articles={articles} />
      <LoadMoreBtn category={category} />
    </div>
  );
}

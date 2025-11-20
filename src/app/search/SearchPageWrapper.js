"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ArticleList from "@/components/ArticleList";
import ArticleListLoadingSkeleton from "@/components/ArticleListLoadingSkeleton";

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_KEY;

export default function SearchPageWrapper() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(false);

    fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&apikey=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((json) => setData(json))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query]);

  if (!query) {
    return <p className="px-4 py-10">Please enter a search term.</p>;
  }

  if (loading) {
    return (
      <div className="px-4 py-10">
        <h2 className="text-xl font-semibold mb-6">
          Search results for: <span className="text-orange-700">{query}</span>
        </h2>
        <ArticleListLoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-10 text-center">
        <img src="/error.jpg" alt="No Data!" className="w-40 h-40 object-contain mx-auto" />
        <p className="text-red-600 text-lg font-semibold mt-4">Something went wrong!</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Search results for: <span className="text-orange-700">{query}</span>
      </h2>
      <ArticleList articles={data?.articles ?? []} />
    </div>
  );
}

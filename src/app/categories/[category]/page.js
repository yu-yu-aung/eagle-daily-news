"use client";

import ArticleList from "@/components/ArticleList";
import ArticleListLoadingSkeleton from "@/components/ArticleListLoadingSkeleton";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import useGNews from "@/hooks/useGNews";
import { use } from "react";

export default function Page({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const { data, error, isLoading } = useGNews("top-headlines", {
    category: category,
    lang: "en",
    country: "us",
    max: 10,
  });

  if (isLoading) {
    return (
      <>
        <h2 className="text-2xl px-24 py-10 font-semibold mb-6">
          Search results for:{" "}
          <span className="text-orange-700">
            {category}
          </span>
        </h2>
        <ArticleListLoadingSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <>
        <img
          src="/error.jpg"
          alt="No Data!"
          className="w-40 h-40 object-contain"
        />
        <p className="text-xl font-semibold text-gray-700">
          Something went wrong!
        </p>
      </>
    );
  }

  const articles = data?.articles || [];

  return (
    <div className="py-10 flex flex-col gap-4 mt-5">
      <h2 className="px-24 text-3xl font-bold text-orange-600">
        Hottest {category} News
      </h2>
      <ArticleList articles={articles} />
      <LoadMoreBtn category={category} />
    </div>
  );
}

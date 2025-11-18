"use client";

import ArticleList from "@/components/ArticleList";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import useGNews from "@/hooks/useGNews";
import { use } from "react";

export default function Page({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const { data, error, isLoading } = useGNews("top-headlines", {
    category,
    lang: "en",
    country: "us",
    max: 10,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading articles</p>;

  const articles = data?.articles || [];

  return (
    <div className="py-10 flex flex-col gap-4 mt-5">
        <h2 className="px-24 text-3xl font-bold text-orange-600">
          Hottest {category} News
        </h2>
        <ArticleList articles={articles} />
        <LoadMoreBtn category={category}/>
      </div>
  );
}

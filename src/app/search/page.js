"use client"

import ArticleList from "@/components/ArticleList";
import useGNews from "@/hooks/useGNews";
import { useSearchParams } from "next/navigation"

const Page = () => {
  const searchParams = useSearchParams(); 
  const query = searchParams.get("query"); 

  const { data, isLoading, error } = useGNews("search", {
    q: query, 
    lang: "en", 
    max: 10,
  }); 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error while searching.</p>;

  return (
    <div className="px-10 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Search results for: <span className="text-orange-700">{query}</span>
      </h2>
      <ArticleList articles={data?.articles ?? []}/>
    </div>
  )
}

export default Page
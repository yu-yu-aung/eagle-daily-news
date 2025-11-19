"use client";

import ArticleList from "@/components/ArticleList";
import ArticleListLoadingSkeleton from "@/components/ArticleListLoadingSkeleton";
import useGNews from "@/hooks/useGNews";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading, error } = useGNews("search", {
    q: query,
    lang: "en",
    max: 10,
  });

  if (isLoading){
    return (
      <>
        <h2 className="text-lg sm:text-xl lg:text-2xl px-4 sm:px-8 lg:px-24 py-10 font-semibold mb-6">
          Search results for: <span className="text-orange-700">{query}</span>
        </h2>
        <ArticleListLoadingSkeleton/>
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
        <p className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-700">Something went wrong!</p>
      </>  
    );
  }
    
  return (
    <div className="px-10 py-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6">
        Search results for: <span className="text-orange-700">{query}</span>
      </h2>
      <ArticleList articles={data?.articles ?? []} />
    </div>
  );
};

export default Page;

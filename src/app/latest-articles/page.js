"use client";

import ArticleCard from "@/components/ArticleCard";
import useGNews from "@/hooks/useGNews";

const Page = () => {
  const { data, error, isLoading } = useGNews();

  if (isLoading) {
    console.log("Loading news...");
    return <p>Loading...</p>;
  }

  if (error) {
    console.error("Error fetching news:", error);
    return <p>Failed to load news</p>;
  }

  console.log("API Response:", data);

  return (
    <div className="grid grid-cols-4 gap-2">
      {data?.articles?.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          description={article.description}
          image={article.image}
          url={article.url}
        />
      ))}
    </div>
  );
};

export default Page;

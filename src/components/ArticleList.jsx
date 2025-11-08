"use client";

import ArticleCard from "@/components/ArticleCard";
import useGNews from "@/hooks/useGNews";

const ArticleList = () => {
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

  const articles = data?.articles || [];

  console.log("articles: ", data?.articles);
  console.log("first article: ", articles[0]);

  return (
    <div className="grid grid-cols-5 px-24 gap-4">
      {articles?.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;

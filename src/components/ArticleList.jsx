"use client";

import ArticleCard from "@/components/ArticleCard";
import useGNews from "@/hooks/useGNews";
import useArticleStore from "@/store/useArticleStore";
import { useEffect } from "react";

import { articles } from "@/data/articles";

const ArticleList = () => {
  const { data, error, isLoading } = useGNews();
  // const { fetchedArticles, setFetchedArticles } = useArticleStore(); 

  //   useEffect(() => {
  //   if (articles) {
  //   setFetchedArticles(articles);
  // }
  // }, [data, setFetchedArticles]);

  
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

  // useEffect(() => {
  //   if (articles) {
  //   setFetchedArticles(articles);
    
  // }
  // }, []);
  // console.log("Fetched Articles: ", fetchedArticles);

  if (!articles.length) return <p>No Articles Found!</p>

  return (
    
    <div className="px-24 py-10 space-y-16">
    {/* Top Section */}
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-7 flex flex-col gap-6">
        <ArticleCard article={articles[9]} big />
        <div className="flex gap-6">
          <ArticleCard article={articles[8]} small />
          <ArticleCard article={articles[7]} small />
        </div>
      </div>
      <div className="col-span-5 flex flex-col gap-6 justify-between">
        <ArticleCard article={articles[6]} />
        <ArticleCard article={articles[5]} />
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-5 flex flex-col gap-6 justify-between">
        <ArticleCard article={articles[4]} />
        <ArticleCard article={articles[0]} />
      </div>
      <div className="col-span-7 flex flex-col gap-6">
        <ArticleCard article={articles[3]} big />
        <div className="flex gap-6">
          <ArticleCard article={articles[1]} small />
          <ArticleCard article={articles[2]} small />
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default ArticleList;

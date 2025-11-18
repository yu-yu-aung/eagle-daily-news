"use client";
import { useState } from "react";
import ArticleList from "./ArticleList";
import ArticleListLoadingSkeleton from "./ArticleListLoadingSkeleton";

const LoadMoreBtn = ({category = "general"}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClickLoadMoreBtn = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_GNEWS_KEY}`
      );

      if (!res.ok) throw new Error("Failed to fetch articles");

      const data = await res.json();
      setArticles(data?.articles || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 flex flex-col items-center">
      {loading && 
        <ArticleListLoadingSkeleton />
      }
      {error && 
      <>
        <img 
          src="/error.jpg" 
          alt="No Data!" 
          className="w-40 h-40 object-contain"
        />
        <p className="text-xl font-semibold text-gray-700">Something went wrong!</p>
      </>  
      }
      {articles.length > 0 && <ArticleList articles={articles} />}

      <button
        onClick={handleClickLoadMoreBtn}
        className="mt-4 px-4 py-2 bg-orange-700 text-white rounded-lg"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

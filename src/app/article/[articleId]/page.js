"use client";

import ArticleDisplay from "@/components/ArticleDisplay";
import useArticleStore from "@/store/useArticleStore";

export default function Page({ params }) {
  const { selectedArticle } = useArticleStore();

  if (!selectedArticle) {
    return (
      <>
        <img
          src="/error.jpg"
          alt="No Data!"
          className="w-40 h-40 object-contain"
        />
        <p className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-700">
          Something went wrong!
        </p>
      </>
    );
  }

  return <ArticleDisplay article={selectedArticle} />;
}

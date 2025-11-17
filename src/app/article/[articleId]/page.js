"use client";

import ArticleDisplay from "@/components/ArticleDisplay";
import useArticleStore from "@/store/useArticleStore";

export default function Page({ params }) {
  const { selectedArticle } = useArticleStore();

  if (!selectedArticle) {
    return <p>Error! Article not found!</p>;
  }

  return <ArticleDisplay article={selectedArticle} />;
}

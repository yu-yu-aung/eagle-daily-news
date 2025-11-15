'use client'

import ArticleDisplay from "@/components/ArticleDisplay";
import useGNews from "@/hooks/useGNews";

export default function Page({ params }) {
  const { articleId } = params;

  const { data } = useGNews(); 

  const article = (data?.articles.id === articleId) || {}; 

  if (article = {}){
    return <p>Error! Article not found!</p>
  }
  
  return <ArticleDisplay articleId={articleId} />;
}

"use client"

import useGNews from '@/hooks/useGNews'
import React, { useState } from 'react'
import ArticleList from './ArticleList';

const LoadMoreBtn = () => {

  const [maxArticles, setMaxArticles] = useState(10); 
  const [addArticleList, setAddArticleList] = useState([]); 

  const {data, isLoading, error, mutate, url} = useGNews("top-headlines", {
    category: "general", 
    lang: "en", 
    country: "us", 
    max: maxArticles,
  }); 

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading articles</p>

  const articles = data?.articles || []; 

  async function handleClickLoadMoreBtn (){
    setMaxArticles(maxArticles + 10); 
    setAddArticleList(true);
    const updatedArticles = await mutate(); 

    setAddArticleList(updatedArticles?.articles || []);
  } 

  console.log(addArticleList);

  return (
    <div className="px-24 py-10 space-y-16">
      <button 
        onClick={handleClickLoadMoreBtn}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
      Load More 
      </button>
      
    </div>
    
  )
}

export default LoadMoreBtn
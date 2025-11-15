'use client'

import { MessagesSquare, SaveIcon, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const ArticleDisplay = ({article}) => {

  if (!article) {
    return <p>Article Not Found!</p>;
  }

  const handleClickLikeBtn = () => {
    console.log("You clicked Like!");
  };

  const handleClickCommentBtn = () => {
    console.log("You clicked comment!");
  };

  const handleClickShareBtn = () => {
    console.log("You clicked share!");
  };

  const handleClickSaveBtn = () => {
    console.log("You clicked save!");
  };
  return (
    <div className="max-w-3xl mx-24 py-10 px-6">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{article.title}</h1>
      <div>
        <button onClick={handleClickLikeBtn}>
          <ThumbsUp /> Like
        </button>
        <button onClick={handleClickCommentBtn}>
          <MessagesSquare /> Comment
        </button>
        <button onClick={handleClickSaveBtn}>
          <SaveIcon /> Save
        </button>
        <button onClick={handleClickShareBtn}>
          <Share /> Share
        </button>
      </div>
      <p className="text-gray-500 mt-2">{article.description}</p>
      <p className="mt-4 text-lg leading-relaxed whitespace-pre-line">
        {article.content}
      </p>
      <Link
        href={article.url}
        target="_blank"
        className="text-blue-600 hover:underline mt-6 block"
      >
        View original source
      </Link>
    </div>
  );
}

export default ArticleDisplay
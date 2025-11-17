"use client";

import useAuthStore from "@/store/useAuthStore";
import { BookMarked, MessagesSquare, Send, Share2, ThumbsUp, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ArticleDisplay = ({ article }) => {
  const { isLoggedIn, user } = useAuthStore();

  const [liked, setLiked]  = useState(false); 

  const [showComment, setShowComment ] = useState(false); 
  const [commentText, setCommentText] = useState(""); 
  const [comments, setComments] = useState([]); 

  const [saved, setSaved]  = useState(false); 

  //----check the article first-----
  if (!article) {
    return <p>Article Not Found!</p>;
  }

  // --- handlers ---
  const handleClickLikeBtn = () => {
    if (!isLoggedIn) {
      console.log("Please Log In or Sign Up to like");
    } else {
      setLiked(!liked); 
    }
  };

  const handleClickCommentBtn = () => {
    if (!isLoggedIn) {
      console.log("Please Log In or Sign Up to comment");
    } else {
      setShowComment(!showComment); 
    }
  };

  const handleClickShareBtn = () => {
    if (!isLoggedIn) {
      console.log("Please Log In or Sign Up to share");
    } else {
      console.log("You clicked share!");
    }
  };

  const handleClickSaveBtn = () => {
    if (!isLoggedIn) {
      console.log("Please Log In or Sign Up to save");
    } else {
      setSaved(!saved); 
    }
  };

  const handleSendComment = () => {
    if (!commentText.trim()) return; 

    //console.log("name: ", user.userName);
    const newComment = {
      text: commentText, 
      userName: user.userName || "Anonymous",
    }

    //console.log("new comment: ", newComment);

    setComments([...comments, newComment]); 
    setCommentText(""); 
    //console.log("total comment: ", comments);
  }

  // ----------------------UI Return----------------------------

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      
      <h1 className="text-4xl font-extrabold leading-tight mb-6">
        {article.title}
      </h1>

      
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="flex flex-wrap gap-4 justify-end mt-6">
        <button
          onClick={handleClickLikeBtn}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 
          px-4 py-2 rounded-full transition shadow-sm active:scale-95"
        >
          <ThumbsUp className= {`size-5 ${liked ? 'text-blue-700' : ''}`} />
          <span className={`font-medium ${liked ? 'hidden' : ''}`}>Like</span>
          <span className={`font-medium ${!liked ? 'hidden' : 'text-blue-700'}`}>Liked</span>
        </button>

        <button
          onClick={handleClickCommentBtn}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 
          px-4 py-2 rounded-full transition shadow-sm active:scale-95"
        >
          <MessagesSquare className="size-5" />
          <span className="font-medium">Comment</span>
        </button>

        <button
          onClick={handleClickSaveBtn}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 
          px-4 py-2 rounded-full transition shadow-sm active:scale-95"
        >
          <BookMarked className={`size-5 ${saved ? 'text-blue-700' : ''}`} />
          <span className={`font-medium ${saved ? 'hidden' : ''}`}>Save</span>
          <span className={`font-medium ${!saved ? 'hidden' : 'text-blue-700'}`}>Saved</span>
        </button>

        <button
          onClick={handleClickShareBtn}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 
          px-4 py-2 rounded-full transition shadow-sm active:scale-95"
        >
          <Share2 className="size-5" />
          <span className="font-medium">Share</span>
        </button>
      </div>

      
      <p className="mt-8 text-lg text-gray-700 leading-relaxed">
        {article.description}
      </p>

      
      <p className="mt-4 text-[17px] leading-loose whitespace-pre-line text-gray-800">
        {article.content}
      </p>

      <Link
        href={article.url}
        target="_blank"
        className="text-blue-600 hover:text-blue-800 hover:underline 
        mt-8 block font-semibold"
      >
        View original source →
      </Link>

      {/* Comment Input Section */}
      <div className={`flex justify-evenly items-center mt-10 border p-4 border-blue-800 ${!showComment ? "hidden" : ""}`}>
        <div className="flex gap-2 items-center">
          <User className="border-2 rounded-full"/>
          <input 
            className="border-b border-gray-800 p-2 focus:border-0" 
            placeholder="Write your comment" 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <button
          onClick={handleSendComment}
        >
          <Send />
        </button>
      </div>

      {/* All Comments Section */}
      {comments.length > 0 && (
        <div className="mt-6 space-y-4 border border-gray-700 p-4">
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          {comments.map((comment, index) => (
            <div key={index} className="p-3 bg-gray-50 gap-2">
              <div className="flex gap-2">
                <User className="border-2 rounded-full"/>
                <p>{comment.userName}</p>
              </div>
              {comment.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleDisplay;

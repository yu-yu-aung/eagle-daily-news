"use client";

import { saveArticlestoDB } from "@/lib/articles";
import useArticleStore from "@/store/useArticleStore";
import useAuthStore from "@/store/useAuthStore";
import { ArrowRight, BookMarked, Copy, Facebook, Mail, MessagesSquare, Send, Share2, ThumbsUp, Twitter, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ArticleDisplay = ({ article }) => {
  const { isLoggedIn, user } = useAuthStore();
  const { savedArticles, addSavedArticle } = useArticleStore(); 

  const [liked, setLiked]  = useState(false); 

  const [showComment, setShowComment ] = useState(false); 
  const [commentText, setCommentText] = useState(""); 
  const [comments, setComments] = useState([]); 

  const [saved, setSaved]  = useState(false); 

  const [share, setShare] = useState(false); 

  //check article first
  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center gap-4">
        <img 
          src="/nodata.jpg" 
          alt="No Data!" 
          className="w-40 h-40 object-contain"
        />
        <p className="text-xl font-semibold text-gray-700">
          No article found!
        </p>
        <p className="text-gray-500">
          Try checking back later or explore other categories.
        </p>
      </div>
    );
  }

  // --- handlers ---
  const handleClickLikeBtn = () => {
    if (!isLoggedIn) {
      toast.error("Please log in or sign up to like");
    } else {
      setLiked(!liked); 
    }
  };

  const handleClickCommentBtn = () => {
    if (!isLoggedIn) {
      toast.error("Please log in or sign up to share");
    } else {
      setShowComment(!showComment); 
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

  const handleClickSaveBtn = async () => {
    if (!isLoggedIn) {
      toast.error("Please log in or sign up to save");
      return;
    }
    
    const { error } = await saveArticlestoDB(user.id, article); 

    if (error) {
      toast.error("Failed to save the article");
      return; 
    } 

    setSaved(true); 
    addSavedArticle(article);

    console.log("saved articles: " , savedArticles);
    toast.success("Article saved successfully");
  };

  const handleClickShareBtn = () => {
    if (!isLoggedIn) {
      toast.error("Please log in or sign up to share");
    } else {
      setShare(true);
      if (navigator.share){
        navigator.share({
          title: article.title, 
          text: "Check out this article!", 
          url: window.location.href,
        })
      }
    }
  };

  // ----------------------UI Return----------------------------

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 relative">
      
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
          disabled={saved}
          className={`flex items-center gap-2 bg-gray-100 hover:bg-gray-200 
          px-4 py-2 rounded-full transition shadow-sm active:scale-95`}
        >
          <BookMarked className={`size-5 ${saved ? 'text-blue-800' : ''}`} />
          <span className={`font-medium ${saved ? 'hidden' : ''}`}>Save</span>
          <span className={`font-medium ${!saved ? 'hidden' : 'text-blue-800'}`}>Saved</span>
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
        View original source <ArrowRight />
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

      {/* Modal for sharing the article */}
      <div className={`absolute z-30 top-80 right-30 ${!share ? "hidden" : ""} bg-white rounded-xl shadow-lg p-6 w-[500px] border border-gray-200 flex flex-col items-center`}>
        <h3 className="text-lg font-semibold mb-4 text-gray-800 line-clamp-2">{article.title}</h3>

        <div className="flex w-full items-center justify-between bg-gray-100 p-2 rounded mb-4">
          <p className="truncate text-gray-700 w-[300px] line-clamp-2 h-auto text-sm">{window.location.href}</p>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("Link copied to clipboard")
              setShare(false); 
              }
            }
            className="text-blue-600 hover:text-blue-800 border-l-2 border-gray-600 pl-2 flex items-center gap-1"
          >
            <Copy className="size-5" />
            Copy
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm uppercase">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-4">
          <button 
            onClick={() => {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, 
                "_blank"
              )
              setShare(false); 
            }}
            className="flex items-center justify-center gap-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <Facebook className="size-5" />
            Facebook
          </button>
          <button 
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`, 
                "_blank"
              )
              setShare(false); 
            }}
            className="flex items-center justify-center gap-2 p-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
          >
            <Twitter className="size-5" />
            Twitter
          </button>
          <button 
            onClick={() => {
              window.open(
                `https://mail.googlt.com/mail/?view=cm&fs=1&su=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`, 
                "_blank"
              )
              setShare(false); 
            }}
            className="flex items-center justify-center gap-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            <Mail className="size-5" />
            Mail
          </button>
          <button 
            onClick={() => {
              window.open(
                `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`, 
                "_blank"
              )
            setShare(false); 
            }}
            className="flex items-center justify-center gap-2 p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
          >
            <Send className="size-5" />
            Telegram
          </button>
        </div>

        {/* Cancel Button */}
        <button
          onClick={() => setShare(false)}
          className="w-full py-2 mt-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 transition"
        >
          Cancel
        </button>
      </div>

    </div>
  );
};

export default ArticleDisplay;

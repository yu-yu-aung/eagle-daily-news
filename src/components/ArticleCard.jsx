import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ArticleCard = ({ article, big = false, small = true }) => {
  if (!article) return null;

  const imageHeight = big ? "h-96" : small ? "h-40" : "h-48";
  const titleSize = big ? "text-3xl" : small ? "text-xl" : "text-2xl";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition 
        ${big ? "w-full" : "w-full max-w-sm"}`}
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className={`rounded-t-lg object-cover w-full ${imageHeight}`}
        />
      )}

      <div className={`p-5 flex flex-col ${big ? "h-[350px]" : small ? "h-[200px]" : "h-[250px]"}`}>
        <div className='flex-1'>
          <h2 className={`mb-2 ${titleSize} font-bold tracking-tight text-gray-900`}>
            {article.title}
          </h2>
          <p className={`mb-3 font-normal text-gray-700 ${big ? "line-clamp-4" : small ? "line-clamp-1" : "line-clamp-3"} `}>
            {article.description}
          </p>
        </div>

        <div className="mt-auto">
          <Link
            href={article.url || "#"}
            target="_blank"
            className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Read more
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
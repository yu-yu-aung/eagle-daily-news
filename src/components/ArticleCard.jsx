import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ article, big = false, small = false }) => {
  if (!article) return null;

  const base =
    "bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col";
  const imageHeight = big ? "h-72" : small ? "h-40" : "h-56";
  const padding = big ? "p-6" : small ? "p-4" : "p-5";
  const titleSize = big ? "text-3xl" : small ? "text-lg" : "text-2xl";
  const descSize = big ? "text-lg" : small ? "text-sm" : "text-base";
  const buttonSize = big ? "text-lg" : small ? "text-sm" : "text-base";

  const contentHeight = big
    ? "min-h-[220px]"
    : small
    ? "min-h-[160px]"
    : "min-h-[180px]";

  return (
    <div className={base}>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${imageHeight}`}
        />
      )}

      <div className={`flex flex-col justify-between flex-1 ${padding}`}>
        <div className={`${contentHeight}`}>
          <h2
            className={`${titleSize} font-semibold text-gray-900 line-clamp-2 mb-2`}
          >
            {article.title}
          </h2>
          <p className={`${descSize} text-gray-600 line-clamp-3`}>
            {article.description}
          </p>
        </div>

        <div className="mt-4">
          <Link
            href={article.url || "#"}
            target="_blank"
            className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ${buttonSize}`}
          >
            Read more <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

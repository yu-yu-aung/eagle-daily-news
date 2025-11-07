import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ArticleCard = ({article}) => {

  if (!article) return null;
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
    {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="rounded-t-lg object-cover w-full h-48"
        />
      )}

    <div className="p-5">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{article.title}</h2>
      <p className="mb-3 font-normal text-gray-700 ">{article.description}
      </p>
      <Link href={article.url || "#"} 
        target='_blank' 
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Read more 
        <ArrowRight/>
      </Link>
    </div>
  </div>


  )
}

export default ArticleCard
"use client";

import ArticleCard from "@/components/ArticleCard";

const ArticleList = ({articles}) => {

  return (
    
    <div className="px-24 py-10 space-y-16">
    {/* Top Section */}
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-7 flex flex-col gap-6">
        <ArticleCard article={articles[0]} big />
        <div className="flex gap-6">
          <ArticleCard article={articles[1]} small />
          <ArticleCard article={articles[2]} small />
        </div>
      </div>
      <div className="col-span-5 flex flex-col gap-6 justify-between">
        <ArticleCard article={articles[3]} />
        <ArticleCard article={articles[4]} />
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-5 flex flex-col gap-6 justify-between">
        <ArticleCard article={articles[5]} />
        <ArticleCard article={articles[6]} />
      </div>
      <div className="col-span-7 flex flex-col gap-6">
        <ArticleCard article={articles[7]} big />
        <div className="flex gap-6">
          <ArticleCard article={articles[8]} small />
          <ArticleCard article={articles[9]} small />
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default ArticleList;

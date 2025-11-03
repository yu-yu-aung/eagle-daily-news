"use client";

import ArticleCard from "@/components/ArticleCard";
import useGNews from "@/hooks/useGNews";

const Page = () => {
  const { data } = useGNews();
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-2">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default Page;

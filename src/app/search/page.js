"use client";

import ArticleList from "@/components/ArticleList";
import useGNews from "@/hooks/useGNews";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading, error } = useGNews("search", {
    q: query,
    lang: "en",
    max: 10,
  });

  if (isLoading)
    return (
      <div className="px-24 py-16 space-y-16 animate-pulse">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7 flex flex-col gap-6">
            {/* Big Article */}
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="flex gap-6">
              {/* Small Articles */}
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-gray-300 h-40 rounded-lg"></div>
            <div className="bg-gray-300 h-40 rounded-lg"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-gray-300 h-40 rounded-lg"></div>
            <div className="bg-gray-300 h-40 rounded-lg"></div>
          </div>
          <div className="col-span-7 flex flex-col gap-6">
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="flex gap-6">
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );

  if (error) return toast.error("Error searching articles");

  return (
    <div className="px-10 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Search results for: <span className="text-orange-700">{query}</span>
      </h2>
      <ArticleList articles={data?.articles ?? []} />
    </div>
  );
};

export default Page;

"use client";

import ArticleList from "@/components/ArticleList";
import ArticleListLoadingSkeleton from "@/components/ArticleListLoadingSkeleton";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import useGNews from "@/hooks/useGNews";
import { use } from "react";

// export async function generateMetadata({params}){
//   const res = await fetch(
//     `https://gnews.io/api/v4/top-headlines?apikey=${process.env.NEXT_PUBLIC_GNEWS_KEY}&category=${params.slug}`,
//     { cache: "no-cache" }
//   );

//   const data = await res.json();
//   const article = data.articles?.[0];

//   if (!article) {
//     return {
//       title: `${params.slug.toUpperCase()} News`,
//       description: `Latest ${params.slug} news and updates.`,
//       openGraph: {
//         title: `${params.slug} News`,
//         description: `Latest ${params.slug} news and updates.`,
//         type: "website",
//       },
//     };
//   }

//   const ogImage = article.image || "/og-default.jpg";

//   return {
//     title: `${params.slug.toUpperCase()} – ${article.title}`,
//     description: article.description || `Latest ${params.slug} news.`,

//     openGraph: {
//       title: `${params.slug.toUpperCase()} – ${article.title}`,
//       description: article.description,
//       type: "website",             // FIXED
//       url: `https://your-domain.com/category/${params.slug}`, // FIXED
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.description,
//       images: [ogImage],
//     },
//   };
// }

export default function Page({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const { data, error, isLoading } = useGNews("top-headlines", {
    category: category,
    lang: "en",
    country: "us",
    max: 10,
  });

  if (isLoading) {
    return (
      <>
        <h2 className="text-2xl px-24 py-10 font-semibold mb-6">
          Search results for:{" "}
          <span className="text-orange-700">{category}</span>
        </h2>
        <ArticleListLoadingSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <>
        <img
          src="/error.jpg"
          alt="No Data!"
          className="w-40 h-40 object-contain"
        />
        <p className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-700">
          Something went wrong!
        </p>
      </>
    );
  }

  const articles = data?.articles || [];

  return (
    <div className="py-10 flex flex-col gap-4 mt-5">
      <h2 className="px-4 sm:px-8 lg:px-24 text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">
        Hottest {category} News
      </h2>
      <ArticleList articles={articles} />
      <LoadMoreBtn category={category} />
    </div>
  );
}

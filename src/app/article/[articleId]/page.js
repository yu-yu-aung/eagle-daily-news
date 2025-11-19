"use client";

import ArticleDisplay from "@/components/ArticleDisplay";
import useArticleStore from "@/store/useArticleStore";

// export async function generateMetadata({ params }) {
//   const res = await fetch(
//     `https://gnews.io/api/v4/top-headlines?apikey=${process.env.NEXT_PUBLIC_GNEWS_KEY}&q=${params.slug}`,
//     { cache: "no-cache" }
//   );

//   const data = await res.json();
//   const article = data.articles?.[0];

//   if (!article) {
//     return {
//       title: "Article Not Found",
//       description: "This article does not exist.",
//     };
//   }

//   return {
//     title: article.title,
//     description: article.description,
//     openGraph: {
//       title: article.title,
//       description: article.description,
//       type: "article",
//       publishedTime: article.publishedAt,
//       url: `https://example.com/articles/${params.slug}`,
//       images: [
//         {
//           url: article.image,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.description,
//       images: [article.image],
//     },
//   };
// }

export default function Page({ params }) {
  const { selectedArticle } = useArticleStore();

  if (!selectedArticle) {
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

  // const res = await fetch(
  //   `https://gnews.io/api/v4/top-headlines?apikey=${process.env.NEXT_PUBLIC_GNEWS_KEY}&q=${params.slug}`,
  //   { cache: "no-cache" }
  // );
  // const data = await res.json();
  // const article = data.articles?.[0];

  // if (!article) {
  //   return (
  //     <>
  //       <img
  //         src="/error.jpg"
  //         alt="No Data!"
  //         className="w-40 h-40 object-contain"
  //       />
  //       <p className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-700">
  //         Article not found!
  //       </p>
  //     </>
  //   );
  // }

  return <ArticleDisplay article={selectedArticle} />;
}

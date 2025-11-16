import { articles } from "@/data/articles";

export function getInitialArticles() {
  // const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_GNEWS_KEY}`;

  // console.log("url", url);
  // const res = await fetch(url, { cache: "no-store" });

  // const data = await res.json();

  // console.log("fetched articles: ", data?.articles);

  // return data?.articles || [];
  return articles;
}

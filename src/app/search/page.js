import { Suspense } from "react";
import SearchPageWrapper from "./SearchPageWrapper";

export async function generateMetadata({searchParams}){
  const query = searchParams.q || ""; 

  return {
    title: query 
      ? `Search results for "${query}" | Eagle's Daily News`
      : "Search | Eagle's Daily News", 
    
    description: query 
      ? `Discover the latest news and stories related to "${query}".`
      : "Search news articles from around the world.",
      
    robots: {
      index: false, 
      follow: true, 
    }, 

    openGraph: {
      title: query
        ? `Search: ${query}`
        : "Search" , 
      
      description: "Browse news search results.", 
      url: `https://example.com/search?q=${query}`,
      type: "website", 
    },
  }
}

const Page = () => {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageWrapper/>
    </Suspense>
  );
};

export default Page;

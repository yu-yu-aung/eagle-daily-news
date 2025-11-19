import ArticleList from "@/components/ArticleList";
import Carousel from "@/components/Carousel";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import { getInitialArticles } from "@/lib/getInitialArticles";

export default async function Home() {
  const initialArticles = await getInitialArticles();
  const image = {
    id: 1,
    imageUrls: [
      "/carousel/carousel1.png",
      "/carousel/carousel2.png",
      "/carousel/carousel3.png",
      "/carousel/carousel4.png",
      "/carousel/carousel5.png",
    ],
  };
  return (
    <>
      <Carousel imageUrls={image.imageUrls} autoSlide={true} key={image.id} />
      <div className="mt-5 flex flex-col gap-4 items-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold italic text-black">
          Eagle's Daily News
        </h1>
        <p className="text-lg sm:text-xl lg:text-3xl font-bold text-orange-700">
          Stay Updated to World's Daily Events!
        </p>
        <hr className="text-orange-900 w-xs sm:w-lg lg:w-xl border mt-2" />
      </div>
      <div className="py-10 flex flex-col gap-4 mt-5">
        <h2 className="px-4 sm:px-8 lg:px-24 text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">
          Explore by Categories
        </h2>
        <CategoryList />
      </div>
      <div className="py-10 flex flex-col gap-4 mt-5">
        <h2 className="px-4 sm:px-8 lg:px-24 text-lg sm:text-xl lg:text-3xl font-bold text-orange-600">
          Today's Latest News
        </h2>
        <ArticleList articles={initialArticles} />
        <LoadMoreBtn/>
      </div>
    </>
  );
}

import ArticleList from "@/components/ArticleList";
import Carousel from "@/components/Carousel";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";

export default function Home() {
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
        <h1 className="text-4xl font-bold italic text-black">
          Eagle's Daily News
        </h1>
        <p className="text-3xl font-bold text-orange-700">
          Stay Updated to World's Daily Events!
        </p>
        <hr className="text-orange-900 w-xl border mt-2" />
      </div>
      <div className="py-10 flex flex-col gap-4 mt-5">
        <h2 className="px-24 text-3xl font-bold text-orange-600">
          Explore by Categories
        </h2>
        <CategoryList />
      </div>
      <div className="py-10 flex flex-col gap-4 mt-5">
        <h2 className="px-24 text-3xl font-bold text-orange-600">
          Today's Latest News
        </h2>
        <ArticleList />
      </div>
    </>
  );
}

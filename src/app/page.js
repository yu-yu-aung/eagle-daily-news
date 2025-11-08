import ArticleCard from "@/components/ArticleCard";
import Carousel from "@/components/Carousel";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";

export default function Home() {
  const imageUrls = [
    "/carousel/carousel1.png",
    "/carousel/carousel2.png",
    "/carousel/carousel3.png",
    "/carousel/carousel4.png",
    "/carousel/carousel5.png",
  ];
  return (
    <>
      <Header />
      <Carousel imageUrls={imageUrls} autoSlide={true} />
      <div className="mt-5 flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold italic text-black">
          Eagle's Daily News
        </h1>
        <p className="text-3xl font-bold text-black">
          Stay Updated to World's Daily Events!
        </p>
      </div>
      <CategoryList />
    </>
  );
}

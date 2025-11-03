import ArticleCard from "@/components/ArticleCard";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Image
          src="/logo.png"
          alt="The Eagle Logo of Website"
          width={50}
          height={50}
        />
        <h1>Eagle's Daily News</h1>
        <CategoryList />
      </div>
      <div>
        <h2>Recently Hot News</h2>
        <div>
          <ArticleCard />
        </div>
      </div>
    </>
  );
}

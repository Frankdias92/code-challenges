import { TheBestOnCountry } from "@/components/TheBestOnCountry";
import { FeaturedProduct } from "@/components/featured";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HomeMain from "@/components/homeMain";
import { SectionProducts } from "@/components/sectionProducts";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col w-full h-full bg-yellow-400">
      <Header />
      <HomeMain />
      <FeaturedProduct />
      <TheBestOnCountry />
      <SectionProducts />
      <Footer />
    </div>
  )
}

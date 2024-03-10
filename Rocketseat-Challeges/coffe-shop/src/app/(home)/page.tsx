
import HomeMain from "@/components/homeMain";

import { TheBestOnCountry } from "@/components/TheBestOnCountry";
import { FeaturedProduct } from "@/components/featured";
import { SectionProducts } from "@/components/sectionProducts";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-yellow-400">
      <HomeMain />
      <FeaturedProduct />
      <TheBestOnCountry />
      <SectionProducts />
    </div>
  )
}

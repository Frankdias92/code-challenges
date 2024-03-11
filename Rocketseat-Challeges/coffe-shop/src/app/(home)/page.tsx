
import HomeMain from "@/components/homeMain";

import { TheBestOnCountry } from "@/components/TheBestOnCountry";
import { FeaturedProduct } from "@/components/featured";
import { SectionProducts } from "@/components/sectionProducts";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-pure-yellow">
      <HomeMain />
      <FeaturedProduct />
      <TheBestOnCountry />
      <SectionProducts />
    </div>
  )
}

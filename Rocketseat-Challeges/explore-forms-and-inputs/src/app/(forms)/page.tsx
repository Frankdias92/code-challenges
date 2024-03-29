'use client'

import { Footer } from "@/components/footer";
import { Forms } from "@/components/forms";
import { Menu } from "@/components/menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-[160px] w-full min-h-full bg-explore-color-bg-primary text-explore-color-text-second">
      <Menu />
      <Forms />
      <Footer />
    </div>
  );
}

'use client'

import { Footer } from "@/components/footer";
import { Forms } from "@/components/forms";
import { Menu } from "@/components/menu";

import {NextUIProvider} from "@nextui-org/react"

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col antialiased items-center justify-between gap-[160px] w-full min-h-full bg-explore-color-bg-primary text-explore-color-text-second">
        <Menu />
        <Forms />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

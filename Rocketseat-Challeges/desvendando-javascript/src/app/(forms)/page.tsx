'use client'

import {NextUIProvider} from "@nextui-org/react"
export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col antialiased items-center justify-between gap-[160px] w-full min-h-full bg-explore-color-bg-primary text-explore-color-text-second overflow-hidden">
        <h1>updata this page later</h1>
      </div>
    </NextUIProvider>
  );
}

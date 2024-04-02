'use client'

import Image from "next/image"
import { useState } from "react"
import babyBoss from '../assets/bossBaby.png'
import { Footer } from "@/components/footer"


export default function Home() {
  const [quote, setQuote] = useState('')

  async function handleClickQuote() {
    const res = await fetch('https://api.kanye.rest')
    const data = await res.json()
    setQuote(data.quote)
  }

  function handleShareQuoteLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
  }

  return (
    <section className="flex flex-col items-center justify-between min-h-screen bg-bug-darkBlue text-bug-blue overflow-hidden">
      <div className="flex w-3/4 flex-col items-center gap-y-20 relative">
        <div className="flex flex-col w-full h-full justify-center items-center ">
          <h1 className="font-salsa mt-[90px] text-5xl mb-16">Bug Zappers!</h1>

          {quote ? (
            <div className="flex w-[60%] py-20 justify-end md:justify-center flex-col border-0 outline-none md:ring-4 md:ring-bug-blue rounded-xl relative">

              <div className="flex flex-col w-full items-center px-6">
                <span className="break-words italic font-medium antialiased text-end md:text-center">
                  {quote}
                </span>
              </div>

              {/* 
              // feature - shared with Linkdin
              <button 
                onClick={handleShareQuoteLinkedIn}
                className="flex absolute right-4 bottom-4"
              >
                compartilhar
              </button>
              
              */}

            </div>
          ) : (
            <span className="flex justify-center py-20 w-full pointer-events-none">
              {`123`}
            </span>
          )}
        </div>

        <button
          onClick={handleClickQuote}
          className="flex py-3 px-20 bg-bug-orange rounded-xl text-bug-pale font-nunito font-bold"
        >
          {`LET'S GO`}
        </button>

        <span className="py-20 flex w-full absolute pointer-events-none -translate-x-36 md:-translate-x-24 lg:translate-x-5 drop-shadow-xl transition-transform duration-150">
          <Image src={babyBoss} alt="the Boss Baby photo point to you" width={249} height={425} quality={100}
            className="relative z-20"
          />
          <div className="flex w-[150px] h-32 bg-black/10  absolute bottom-8 left-20 rounded-full scale-y-50 scale-x-150 z-10 drop-shadow-2xl"/>
        </span>
      </div>

      <Footer />
    </section>
  )
}

'use client'

import { useState } from "react"

export default function Home() {
  const [quote, setQuote] = useState()

  

  async function handleClickQuot() {
    const res = await fetch('https://api.kanye.rest')
    const data = await res.json()
    setQuote(data)
    console.log(data)
  }


  return (
    <section className="flex flex-col w-full h-lvh justify-around items-center">
      <div className="flex w-3/4 flex-col items-center justify-center">
        <h1 className="font-salsa">bugZappers</h1>

        <div>
          <span>{quote}</span>

          <button onClick={handleClickQuot}>enviar</button>
        </div>

      </div>
    </section>
  )
}

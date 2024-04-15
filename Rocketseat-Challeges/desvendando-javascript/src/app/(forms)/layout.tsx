'use client'

import { Footer } from "@/components/footer"
import { Menu } from "@/components/menu"
import NavForms from "@/components/navForms"


export default function FormsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {



    return (
      <section className="flex flex-col gap-y-20 bg-explore-color-bg-primary">
        <Menu />

        <section className="flex flex-col gap-y-4 w-full">
          <NavForms />
          {children}
        </section>
        
        <Footer />
      </section>
    )
  }
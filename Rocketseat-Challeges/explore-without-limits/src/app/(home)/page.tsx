'use client'

import { Feature } from "@/components/feature"
import { Footer } from "@/components/footer"
import { Form } from "@/components/form"
import { Menu } from "@/components/main"

export default function Home() {

    return (
        <section className="flex w-full min-h-full flex-col justify-between
        bg-primary-bg  overflow-hidden">
            <Menu />
            <Feature />
            <Form />
            <Footer />
        </section>
    )
}
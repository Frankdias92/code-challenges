

import { Feature } from "@/components/feature"
import { Form } from "@/components/form"
import { Menu } from "@/components/main"

export default function Home() {

    return (
        <section className="flex w-full min-h-full flex-col items-center justify-between
        bg-primary-bg gap-8">
            <Menu />
            <Feature />
            <Form />
        </section>
    )
}
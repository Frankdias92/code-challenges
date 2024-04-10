'use client'

import { CustomKanban } from "@/components/todo/testTodo"


export default function TodoApp() {

    return (
        <section className="flex w-full overflow-hidden overscroll-y-none">
            <CustomKanban />
        </section>
    )
}
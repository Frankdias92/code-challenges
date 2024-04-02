'use client'

import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react"
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";



export default function NavForms() {
    const [currentPage, setCurrentPage] = React.useState<React.Key>('/')
    const pathname = usePathname()

    return (
        <section className="flex flex-col w-full justify-between min-h-full">
           <nav className="flex w-3/4 m-auto">
                <Breadcrumbs
                    hideSeparator
                    onAction={(key) => setCurrentPage(key)}
                    classNames={{
                        list: "gap-2",
                    }}
                    itemClasses={{
                        item: [
                        "px-2 py-0.5 border-small border-default-400 rounded-small",
                        "data-[current=true]:border-default-800 data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
                        "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
                        ],
                    }}
                >
                <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
                    <Link className={`link ${pathname === '/home' ? 'active' : ''}`} href={'/home'}>
                        Home
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem key="imc" isCurrent={currentPage === "imc"}>
                    <Link className={`link ${pathname === '/imc' ? 'active' : ''}`} href={'/imc'}>
                        Imc
                    </Link>
                </BreadcrumbItem>
                </Breadcrumbs>

                <div className="flex gap-4">
                </div>
            </nav>
        </section>
    )
}
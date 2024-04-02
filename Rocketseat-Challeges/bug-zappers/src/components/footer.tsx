import { IconGigHub, IconLinkedin } from "@/lib/icons";
import Link from "next/link";


export function Footer() {

    return (
        <footer className="flex flex-col w-4/5  mt-20 items-center justify-center rounded-t-3xl bg-bug-blue/5 text-bug-pale/30">
            <div className="flex sm:w-3/4 flex-col justify-between py-6">
                <div className="flex w-full flex-col items-center">
                    <p className="text-sm antialiased">Letss chat</p>
                    <span className="flex gap-x-3">
                        <Link href={'https://www.linkedin.com/in/franklinmacedodias/'} target="_blank">
                            <IconLinkedin />
                        </Link>
                        <Link href={'https://github.com/Frankdias92'} target="_blank">
                            <IconGigHub />
                        </Link>
                    </span>
                </div>

                <div className="w-full h-0.5 bg-explore-color-text-first"/>

                <div className="flex justify-center">
                    <p className="text-sm antialiased font-normal">
                        © 2024 Franklin Macedo, Brazil. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
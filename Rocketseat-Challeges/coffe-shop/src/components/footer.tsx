import Link from "next/link";
import { LogoFooterIcon } from "./icons/icons";


export function Footer() {

    return (
        <footer className="flex items-center w-full bg-dark-orange h-[257px] relative">

            <div className="flex flex-col w-3/4 m-auto">
                <div className="grid grid-cols-2 lg:grid-cols-6 grid-rows-1 w-full">
                    <LogoFooterIcon />
                    <ul className="flex flex-col lg:flex-row items-end lg:items-center lg:col-span-4 justify-center w-full gap-x-4
                        font-bold lg:text-3xl">
                            <li className="flex flex-row-reverse lg:flex-row gap-4 items-center text-white
                                hover:underline decoration-4 underline-offset-8 decoration-pure-yellow border-0"
                            >
                                <div className="size-1 lg:size-2 bg-yellow-400 rounded-full"/>
                                <Link
                                    href={'/'}
                                    className="flex py-2 border-0 focus:ring-4 focus:ring-pure-yellow rounded-xl"
                                >
                                    INICIO
                                </Link>
                            </li>

                            <li className="flex flex-row-reverse lg:flex-row gap-4 items-center text-white
                                hover:underline decoration-4 underline-offset-8 decoration-pure-yellow"
                            >
                                <div className="size-1 lg:size-2 bg-yellow-400 rounded-full"/>
                                <Link 
                                    href={'/about'}
                                    className="flex py-2 border-0 focus:ring-4 focus:ring-pure-yellow rounded-xl"
                                >
                                    SOBRE
                                </Link>
                            </li>

                            <li className="flex flex-row-reverse lg:flex-row gap-4 items-center text-white
                                hover:underline decoration-4 underline-offset-8 decoration-pure-yellow"
                            >
                                <div className="size-1 lg:size-2 bg-yellow-400 rounded-full"/>
                                <Link 
                                    href={'/contact'}
                                    className="flex py-2 border-0 focus:ring-4 focus:ring-pure-yellow rounded-xl"
                                >
                                    CONTATO
                                </Link>
                            </li>

                            <li className="flex flex-row-reverse lg:flex-row gap-4 items-center text-white
                                hover:underline decoration-4 underline-offset-8 decoration-pure-yellow"
                            >
                                <div className="size-1 lg:size-2 bg-yellow-400 rounded-full"/>
                                <Link
                                    href={'/shop'}
                                    className="flex py-2 border-0 focus:ring-4 focus:ring-pure-yellow rounded-xl"
                                >
                                    SHOP
                                </Link>
                            </li>
                    </ul>
                </div>
                <div className="bg-pale-yellow h-[0.5px] w-full mt-10"/>

                <p className="flex text-pale text-xs lg:text-base absolute bottom-4 self-center">
                    Desenvolvido por Franklin Macedo © 2024
                </p>

            </div>
             
        </footer>
    )
}
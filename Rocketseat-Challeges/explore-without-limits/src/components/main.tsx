

import Image from "next/image";
import SpaceMan from '../assets/image 11970.png'
import Arrow from '../assets/arrow.png'

import Link from "next/link";
import { useRef } from "react";


export function Menu() {
    const featureSectionArrow = useRef<HTMLDivElement>(null)

    const scrollFeature = () => {
        if (featureSectionArrow.current) {
            featureSectionArrow.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }



    return (
        <div className="flex flex-col xl:flex-row-reverse w-full min-h-full m-auto justify-center items-center relative
        px-8 mb-[93px]">
            <div className="flex  bg-cover">
                <Image src={SpaceMan} alt="" width={719} height={732} quality={100} className="flex"/>
            </div>

            <div className="flex flex-col items-center xl:items-start">
                <div className="flex flex-col items-center gap-1 xl:items-start">
                    <h1 className="text-font-primary-color font-extrabold text-4xl xl:text-5xl">Explore sem limites</h1>
                    <p className="text-font-base-color font-semibold text-xl xl:text-2xl">Porque o aprendizado é contínuo</p>
                </div>

                <Link 
                    href='#Feature' passHref
                    className="flex mt-9"
                >
                    <button onClick={scrollFeature} className="flex justify-center items-center w-[58px] h-[105px] rounded-full border-none ring-2 ring-primary">
                        <div className="flex justify-center items-center overflow-hidden w-full h-12 relative">
                            <Image src={Arrow} alt="Seta apontando para baixo" 
                                className="flex"
                            />
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}
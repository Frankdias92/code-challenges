import Image from "next/image";
import SpaceMan from '../assets/image 11970.png'
import Arrow from '../assets/arrow.png'


export function Menu() {

    return (
        <div className="flex flex-col w-full min-h-full m-auto  items-center relative
        px-8 mb-[93px]">
            <div className="flex sm:w-[364px] sm:h-[387px] bg-cover">
                <Image src={SpaceMan} alt="" width={719} height={732} quality={100} className="flex"/>
            </div>
            <div className="flex flex-col items-center gap-1 ">
                <h1 className="text-font-primary-color font-bold text-4xl">Explore sem limites</h1>
                <p className="text-font-base-color font-normal text-xl">Porque o aprendizado é contínuo</p>
            </div>
            <div className="flex mt-9">
                <span className="flex justify-center items-center w-[58px] h-[105px] rounded-full border-none ring-2 ring-primary">
                    <div className="flex justify-center items-center overflow-hidden w-full h-12 relative">
                        <Image src={Arrow} alt="" 
                            className="flex"
                        />
                    </div>
                </span>
            </div>
        </div>
    )
}
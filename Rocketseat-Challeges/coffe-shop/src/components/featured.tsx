import Image from "next/image";
import { ArrowIcon, StarsIcon } from "./icons/icons";
import frameCafe from '../assets/imgs/Cafe Frame.png'


export function FeaturedProduct() {

    return (
        <section className="flex justify-center py-20 w-full bg-slate-200">
            <div className="flex flex-col items-center gap-y-12 w-3/4">
                <span className="font-bold text-3xl">MAIS VENDIDOS</span>

                {/* COFFE SECTION */}
                <div className="flex-1">
                    <div className="flex flex-col items-center gap-y-2">
                        <div className="flex flex-1 w-[370px] h-[230px] bg-cover">
                            <Image src={frameCafe} alt="" width={370} height={230}
                                className="flex"
                            />
                        </div>
                        <StarsIcon />

                        <div className="flex flex-col gap-2 text-start">
                            <h2 className="leading-6 text-3xl font-bold">Café Tradicional</h2>
                            <span className="text-base">R$ 9,90</span>
                            <div className="flex flex-row space-x-2">
                                <span className="text-lg font-bold text-red-600">ADICIONAR</span>
                                <span className="flex items-center">
                                    <ArrowIcon />
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}
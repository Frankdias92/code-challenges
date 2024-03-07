import Image from "next/image";
import delivery from '../assets/imgs/delivery1.png'


export function TheBestOnCountry() {

    return (
        <div className="flex justify-center w-full bg-orange-950 py-20 overflow-hidden">
            <div className="w-3/4">

                <div className="flex flex-col lg:flex-row w-full">
                    <div className="w-full sm:w-3/5 self-center m-auto">
                        <div className="w-[320px] lg:w-[640px] lg:h-[496px]">
                            <Image src={delivery} alt="" width={640} height={496}
                                
                            />
                        </div>
                    </div>

                    <div className="text-white w-full lg:w-2/5">
                        <div className="flex flex-col gap-y-8 sm:pl-10 pt-10">
                            <h2 className="leading-relaxed sm:leading-6 text-3xl font-bold">O MELHOR CAFÉ DA CIDADE!</h2>

                            <p className="text-base font-bold">ENTREGA MAIS RAPIDA DA REGIÃO</p>
                            <p className="text-base font-bold">PEDIDOS AUTOMATIZADOS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
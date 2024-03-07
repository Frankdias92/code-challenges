import Image from "next/image";
import imageBanner from '../assets/imgs/Banner.png'
import { CardWhiteIcon, ClockIcon, CoffeIcon, PackagerIcon } from "./icons/icons";

export default function HomeMain() {

    return (
        <main className="flex justify-center flex-col w-full overflow-hidden">
            <div className="flex m-auto w-3/4 h-full py-28 relative">
                <section className="space-y-12 z-10">
                    <div className="space-y-4 max-w-[580px] text-dark-orange">
                        <h1 className="font-bold text-5xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <p className="text-xl font-semibold">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </p>
                    </div>

                    <ul className="flex flex-col sm:grid grid-cols-2 grid-rows-2 space-y-5 w-full text-dark-orange font-poppins font-semibold">
                        <li className="flex flex-1 self-baseline items-center gap-3">
                            <span className="flex size-[32px] bg-dark-orange rounded-full justify-center items-center"><CardWhiteIcon /></span> 
                            Compra simples e segura
                        </li>
                        <li className="flex self-baseline items-center gap-3">
                            <span className="flex size-[32px] bg-dark-orange rounded-full justify-center items-center"><PackagerIcon /></span>
                             Embalagem mantém o café intacto
                        </li>
                        <li className="flex self-baseline items-center gap-3">
                            <span className="flex size-[32px] bg-darkModerateYello rounded-full justify-center items-center"><ClockIcon /></span>
                             Entrega rápida e rastreada
                        </li>
                        <li className="flex self-baseline items-center gap-3">
                            <span className="flex size-[32px] bg-strongRed rounded-full justify-center items-center"><CoffeIcon /></span>
                             O café chega fresquinho até você
                        </li>
                    </ul>
                </section>
                <div className="flex flex-1 absolute items-center min-w-[476px] h-[360px] z-0 right-10 translate-x-40">
                    <Image src={imageBanner} alt="" width={476} height={360}
                        className="flex flex-1 w-full opacity-10 lg:opacity-100 transition-opacity duration-200"
                    />
                </div>
            </div>
        </main>
    )
}
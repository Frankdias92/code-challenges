import Image from "next/image";
import Link from "next/link";
import coffeContact from '@/assets/imgs/coffee-contact.jpg'
import coffeBg from '@/assets/imgs/coffe-banner.jpg'



export default function About() {

    return (
        <section className="flex flex-col w-full h-full justify-between py-20">
            <div className="flex w-full min-h-full flex-col justify-between relative">
                <div className="grid grid-cols-2 m-auto w-3/4 items-center">
                    
                    <div className="flex flex-col col-span-2 lg:col-span-1 w-full text-dark-orange gap-4 text-pretty pr-4 z-10">
                        <h1 className="font-extrabold text-3xl">
                            Sobre   <span className="underline decoration-darkModerateYello decoration-4 underline-offset-4 ">
                                        Nós
                                    </span>
                        </h1>

                        <div className="flex flex-col w-full">
                            <div className="flex flex-col break-words text-xl leading-snug">
                                <h3 className="font-bold text-xl">
                                    Experimente a Excelência do Café
                                </h3>
                                <span>
                                    Somos apaixonados por entregar café da mais alta qualidade, torra perfeita. Nosso café não é apenas uma bebida, é um impulsionador de produtividade e um elevador de humor.
                                </span>
                                <span>
                                    Prove a diferença: este não é qualquer café, é uma experiência inesquecível que supera qualquer coisa que você já tenha provado antes.
                                </span>
                            </div>
                        </div>

                        <Link
                            href={'/shop'}
                            className="mt-6 px-10 py-3 mr-auto bg-darkModerateYello rounded-full font-bold text-lg text-pale-yellow"
                        >
                            Faça seu pedido
                        </Link>
                    </div>
                    
                    <div
                        className="flex flex-1 overflow-hidden
                            absolute lg:relative opacity-50 lg:opacity-100 z-0 -top-20 right-0 lg:top-0"
                        >
                        <Image 
                            src={coffeContact}
                            alt=""
                            width={578}
                            height={385}
                            quality={100}
                            className="flex object-cover"
                        />
                    </div>
                </div>
     
                    
                <div className="flex w-full h-full overflow-hidden relative ">
                    <div className="flex w-3/4 justify-center py-20 m-auto lg:justify-end mt-10 z-0 overflow-hidden ">
                        <div className="flex absolute inset-0 top-20 w-full h-full ">
                            <Image 
                                src={coffeBg} 
                                alt=""
                                width={1440}
                                height={959}
                                className="flex object-cover"
                            />
                        </div>
                        <div className="w-full top-20 right-0 h-full bg-black/75 absolute"/>

                        <div className="flex flex-col  font-bold space-y-8 text-pale-yellow z-10 md:w-2/3 break-words text-xl leading-snug">
                            <h2 className="text-5xl ">
                                Comece bem o seu dia com a gente!
                            </h2>

                            <p className="text-xl">
                                Um delicioso café é a melhor forma de começar sua manhã. Descubra os melhores sabores que você já experimentou. Nós oferecemos o que há de melhor para os nossos clientes.
                            </p>

                            <Link
                                href={'/shop'}
                                className="flex mt-20  px-10 py-3 m-auto mr-16 bg-darkModerateYello rounded-full font-bold text-lg text-pale-yellow"
                            >
                                Faça seu pedido
                            </Link>
                        </div>

                
                    </div>
                </div>
            </div>
        </section>
    )
}
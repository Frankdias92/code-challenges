import Image from "next/image";
import iconProfile from '../assets/Vector.png'
import bgForm from '../assets/bgForm.png'


export function Form() {

    return (
        <section className="flex justify-center h-[612px]">
            <div className="flex relative w-3/4 h-full items-center">

                    <div className="flex flex-col w-[592px] gap-y-6">

                        <div className="flex flex-col flex-1 gap-y-6">
                            <div className="flex flex-col justify-center relative">
                                    <Image src={iconProfile} alt="" width={20} height={21}
                                        className="flex absolute left-4 z-10"
                                    />
                                    <input type="text" placeholder="Seu nome"
                                        className="flex w-full pl-14 rounded-2xl text-font-base-color placeholder:text-font-base-color/80
                                            border-0 focus:ring-2 focus:ring-font-primary-color ring-1 ring-secondary-bg"
                                    />
                            </div>
                            
                            <div className="flex flex-col justify-center w-full relative">
                                    <span className="flex absolute left-4 z-10 text-font-primary-color text-xl"
                                    >@</span>
                                    <input type="text" placeholder="Seu e-mail"
                                        className="flex w-full rounded-2xl pl-14 text-font-base-color placeholder:text-font-base-color/80
                                        border-0 focus:ring-2 focus:ring-font-primary-color ring-1 ring-secondary-bg"
                                    />
                            </div>
                        </div>
                
                    
                        <div className="flex flex-col">
                            <textarea name="message"
                                className="flex h-[126px] rounded-2xl pl-4 text-font-base-color placeholder:text-font-base-color/80
                                border-0 focus:ring-2 focus:ring-font-primary-color ring-1 ring-secondary-bg"
                                placeholder="Digite sua mensagem"
                            />

                            <div>
                                <button 
                                    className="justify-self-start mt-6 m-auto rounded-2xl text-primary-bg bg-secondary-bg px-6 py-3 border-0 focus:ring-2 focus:ring-font-primary-color"
                                >
                                    Enviar Mensagem
                                </button>
                            </div>
                        </div>
                    </div>



            </div>
                <div className="flex absolute right-0 z-0">
                    <Image 
                        src={bgForm}
                        alt=""
                        width={644}
                        height={612}
                        quality={100}
                        className="flex opacity-0 xl:opacity-100 transition-opacity duration-300"
                    />
                </div>
        </section>
    )
}
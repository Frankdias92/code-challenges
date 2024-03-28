import Image from "next/image";
import iconProfile from '../assets/Vector.png'


export function Form() {

    return (
        <section className="flex justify-center w-full min-h-full">
            <div className="flex flex-col py-14 w-3/4 ">
                
                <div className="flex flex-col w-full ">
                    <span className="flex w-full items-center justify-center relative">
                        <Image src={iconProfile} alt="" width={20} height={21}
                            className="flex -translate-x-36 absolute z-10"
                        />
                        <input type="text" placeholder="Seu nome"
                            className="flex w-[352px] absolute rounded-2xl pl-14 text-font-base-color placeholder:text-font-base-color/80
                                border-0 focus:ring-2 focus:ring-font-primary-color ring-1 ring-secondary-bg"
                        />
                    </span>
                </div>
                
                <div className="flex flex-col w-full items-center mt-14 mb-10">
                    <span className="flex relative w-full items-center justify-center ">
                        <span className="flex -translate-x-36 absolute z-10 text-font-primary-color text-xl"
                        >@</span>
                        <input type="text" placeholder="Seu nome"
                            className="flex w-[352px] absolute rounded-2xl pl-14 text-font-base-color placeholder:text-font-base-color/80
                            border-0 focus:ring-2 focus:ring-font-primary-color ring-1 ring-secondary-bg"
                        />
                    </span>
                </div>

                <div className="flex w-full justify-center">
                    <textarea name="message"
                        className=" w-[352px] h-[126px] rounded-2xl pl-4 text-font-base-color placeholder:text-font-base-color/80
                        border-0 focus:ring-2 focus:ring-font-primary-color ring-1 ring-secondary-bg"
                        placeholder="Digite sua mensagem"
                    />
                </div>

                <div>
                    <button 
                        className="justify-self-start mt-6 m-auto rounded-2xl text-primary-bg bg-secondary-bg px-6 py-3 border-0 focus:ring-2 focus:ring-font-primary-color"
                    >
                        Enviar Mensagem
                    </button>
                </div>

            </div>
        </section>
    )
}
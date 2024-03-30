
import { useState } from "react"
import { Result } from "./result"


export function Forms() {
    const [content, setContent] = useState(false)

    const handleClickContent = () => {
        setContent(!content)
    }


    return (
        <section className="flex w-full justify-center h-lvh">
            {content ? 
            ( 
                <Result handleClickContent={handleClickContent}/>
            ) : 
            (
                <div className="flex flex-col items-center w-3/4 bg-explore-color-bg-secondary py-8 px-16
                    rounded-3xl gap-20"
                >
                    <h2 className="text-4xl tracking-widest">Aprendendo de forma criativa e eficaz!</h2>

                    <div className="flex w-full justify-center font-poppins leading-6 break-words gap-11 tracking-wider antialiased">
                        <div className="flex flex-col w-[30%] space-y-3">
                            <p>
                                Domine os fundamentos do JavaScript de forma divertida e envolvente com este desafio interativo.
                            </p>
                            <p>
                                Explore conceitos básicos como variáveis, tipos de dados, operadores e muito mais através de uma interface dinâmica e intuitiva construída com Next.js.
                            </p>
                        </div>
                        <div className="flex flex-col w-[30%] space-y-3">
                            <span>Aprimore seu aprendizado com:</span>
                            <p className="flex flex-col pl-6 gap-y-2 italic">
                                <span>
                                    Formulários interativos com validação em tempo real
                                    Explicações detalhadas e exemplos práticos
                                </span>
                                <span>
                                    Feedback visual e mensagens informativas
                                </span>
                                <span>
                                    Recursos de aprendizado adicionais
                                </span>
                            </p>
                        </div>
                    </div>


                    <h3 className="text-xl font-poppins w-3/5 text-center antialiased">
                        Desbloqueie seu potencial em JavaScript e junte-se à mim nesta jornada de aprendizado!
                    </h3>

                    <input 
                        type="submit" 
                        value='Vamos começar?' 
                        onClick={handleClickContent}
                        className="flex px-12 py-5 bg-explore-color-offShore rounded-xl antialiased"
                    />
                </div>
            )}

            

            
        </section>
    )
}
import { useState } from "react"


export function Forms() {
    const [content, setContent] = useState(false)

    const handleClickContent = () => {
        setContent(!content)
    }


    return (
        <section className="flex w-full justify-center">
            {content ? 
            ( 
                <form action="/"  >
                    <div className="flex w-full">
                        <fieldset className="flex w-full justify-center text-3xl">
                            <legend>Aprendendo de forma criativa e eficaz!</legend>
                        </fieldset>
                    </div>

                    <input type="text" name="teste" required
                        className="border-0 ring-0 focus:right-2 focus:ring-red-600 invalid:ring-red-500 rounded-lg"
                    />
                    <input type="submit" value='Search' onClick={handleClickContent}/>
                </form> 
            ) : 
            (
                <div className="flex flex-col items-center w-3/4 bg-explore-color-bg-secondary py-8 px-16
                    rounded-3xl gap-20"
                >
                    <h2 className="text-4xl tracking-widest">Aprendendo de forma criativa e eficaz!</h2>

                    <div className="flex w-full justify-center leading-5 break-words gap-11">
                        <div className="flex flex-col w-[25%] space-y-3">
                            <p>
                                Domine os fundamentos do JavaScript de forma divertida e envolvente com este desafio interativo.
                            </p>
                            <p>
                                Explore conceitos básicos como variáveis, tipos de dados, operadores e muito mais através de uma interface dinâmica e intuitiva construída com Next.js.
                            </p>
                        </div>
                        <div className="flex flex-col w-[25%] space-y-3">
                            <span>Aprimore seu aprendizado com:</span>
                            <p className="font-poppins pl-6">
                                Formulários interativos com validação em tempo real
                                Explicações detalhadas e exemplos práticos
                                Feedback visual e mensagens informativas
                                Recursos de aprendizado adicionais
                            </p>
                        </div>
                    </div>


                    <h3 className="text-xl font-poppins w-3/5 text-center">
                        Desbloqueie seu potencial em JavaScript e junte-se à mim nesta jornada de aprendizado!
                    </h3>

                    <input 
                        type="submit" 
                        value='Vamos começar?' 
                        onClick={handleClickContent}
                        className="flex px-12 py-5 bg-explore-color-offShore rounded-xl"
                    />
                </div>
            )}

            

            
        </section>
    )
}
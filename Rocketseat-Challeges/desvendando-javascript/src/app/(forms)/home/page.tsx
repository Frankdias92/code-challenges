'use client'

import { useState } from "react"
import { Result } from "../../../components/result"
import { Button } from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"


import { motion } from "framer-motion";

export default function Forms() {
    let { isFocusVisible, focusProps } = useFocusRing()
    const [content, setContent] = useState(false)

    const handleClickContent = () => {
        setContent(!content)
    }


    return (
        <section className="flex flex-col w-full justify-between min-h-full">
            <div className="flex w-full justify-center m-auto">

                <div className="flex m-auto w-3/4 justify-between">

                    {content ? 
                    ( 
                        <motion.div
                            initial={{ opacity: 0 }} // Define o estado inicial da animação
                            animate={{ opacity: content ? 1 : 0 }} // Define o estado final da animação
                            transition={{ duration: 1 }} // Define a duração da transição
                        >
                            <Result handleClickContent={handleClickContent}/>
                        </motion.div>
                    ) : 
                    (

                        <div className="flex flex-col w-full items-center lg:bg-explore-color-bg-secondary py-8 lg:px-16
                            rounded-3xl gap-20 drop-shadow-2xl"
                        >
                            <h2 className="text-4xl tracking-widest">Aprendendo de forma criativa e eficaz!</h2>

                            <div className="flex w-full flex-col lg:flex-row justify-center font-poppins leading-6 break-words gap-11 tracking-wider antialiased">
                                <div className="flex flex-col lg:w-[35%] space-y-3">
                                    <p>
                                        Domine os fundamentos do JavaScript de forma divertida e envolvente com este desafio interativo.
                                    </p>
                                    <p>
                                        Explore conceitos básicos como variáveis, tipos de dados, operadores e muito mais através de uma interface dinâmica e intuitiva construída com Next.js.
                                    </p>
                                </div>

                                <div className="flex flex-col lg:w-[35%] space-y-3">
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


                            <h3 className="text-xl font-poppins lg:w-3/5 text-center antialiased">
                                Desbloqueie seu potencial em JavaScript e junte-se à mim nesta jornada de aprendizado!
                            </h3>

                            {/* <input type="button" value="Enviar"/>   */}
                            <Button

                                type="submit"
                                onClick={handleClickContent}
                                className="flex text-xl h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                                outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second "
                                style={{
                                    outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                                }}
                            
                            >
                                MOSTRAR DADOS
                            </Button>
                        </div>
                    
                    )}

                </div>
               
                
                  
                


            </div>
        </section>
    )
}
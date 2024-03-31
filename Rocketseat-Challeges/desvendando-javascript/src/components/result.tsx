'use cliente'

import React, { FormEvent, FormEventHandler, Suspense, useState } from "react"
import {Button, Tooltip} from "@nextui-org/react"

import { useFocusRing } from "@react-aria/focus"


interface handleClickContentProps {
    handleClickContent: () => void,
}



export function Result({ handleClickContent }: handleClickContentProps) {
    let { isFocusVisible, focusProps } = useFocusRing()

    const [nameUser, setNameUser] = useState<string>('')
    const [value1, setvalue1] = useState<number>()
    const [value2, setvalue2] = useState<number>()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch("http://localhost:3333/response", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });
    
            if (!response.ok) {
                throw new Error("Falha na requisição");
            }
    
            const responseData = await response.json();
            const { name, firstNumber, secondNumber } = responseData;
    
            if (!name || !firstNumber || !secondNumber) {
                throw new Error("Dados inválidos recebidos do servidor");
            }
    
            setNameUser(name);
            setvalue1(firstNumber);
            setvalue2(secondNumber);
    
            console.log("Dados recebidos:", responseData);
        } catch (error) {
            console.error("Erro ao processar a requisição:", error);
        }
    
    }

    const sum = (Number(value1) + Number(value2))
    const subtraction = (Number(value1) - Number(value2))
    const multiply = (Number(value1) * Number(value2))
    const division = (subtraction / sum)
    const divisionVsMultiply = (division * multiply)
    


    function strongColorConvert(props: any, res: any){
        return (
            <Tooltip
                content={
                    <div className="px-1 py-2 font-poppins">
                        <div className="text-small font-bold">{props}</div>
                        <div className="text-tiny">{typeof(res)}</div>
                    </div>
                }
            >
                <span className="text-explore-color-offShore">
                    {props}
                </span>
            </Tooltip>
        )
    }
    
    

    return (
        <section className="flex w-full h-full ">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full m-auto font-poppins relative">
                <div className="flex lg:w-[90%] justify-center w-full mb-20 top-0 left-0">
                    <form 
                        method="POST"
                        onSubmit={onSubmit}
                        className="flex flex-col w-full lg:w-[90%]"
                    >

                        <label className="mb-2 text-lg">
                            Como posso te chamar?
                        </label>
                        <input 
                            name="name"  
                            type="text"
                            required
                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                            invalid:text-red-600 rounded-lg outline-none"
                        />

                        <label className="mb-2 text-lg">
                            Como posso te chamar?
                        </label>
                        <div className="flex justify-between items-center">
                            <input 
                                name="value1"  
                                type="number"
                                required
                                className="flex w-1/3 h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                                invalid:text-red-600 rounded-lg outline-none"
                            />
                            <span className="text-3xl font-bold">
                                + 
                            </span>
                            <input 
                                name="value2"  
                                type="number"
                                required
                                className="flex w-1/3 h-14 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                                invalid:text-red-600 rounded-lg outline-none"
                            />
                        </div>




                        {/* <input type="button" value="Enviar"/>   */}
                        <Button
                            type="submit"
                            className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                            outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
                                style={{
                                    outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                                }}
                        >
                            MOSTRAR DADOS
                        </Button>
                    </form>
                </div>


                {/* result goes here */}
                
                    <div className="flex flex-1 flex-col">
                        
                        {nameUser
                            ? (
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-normal">{nameUser}, Muito obrigado por sua visita!</h2>
                                    <p>Resultado da soma foi = {strongColorConvert(sum, sum)}</p>
                                    <p>O calculo da sua operação resultou em um typeof {strongColorConvert('Number', sum)}</p>
                                    <p>{nameUser}, seu nome resulta em um typeof {strongColorConvert('String', nameUser)}</p>
                                    <p>A subtração da sua operação é {strongColorConvert(subtraction, subtraction)}</p>
                                    <p>A multiplicação da operação é {strongColorConvert(multiply, multiply)}</p>
                                    <p>Dividindo o valor da subtração e o da multiplicação temos o resultado = {strongColorConvert(division, division)}</p>
                                    <p>E o resultado da divizão resulta em um {strongColorConvert('Number', division)}</p>
                                    <p>A multiplicação da operação entre {division} e {multiply} = {strongColorConvert(divisionVsMultiply, divisionVsMultiply)}</p>
                                </div>
                            ) : ( '' )
                        }
                        

                    </div> 
                

                {/* buttton switch */}
                <Button 
                    type="submit" 
                    value='<' 
                    onClick={handleClickContent}
                    className="flex size-10 justify-center items-center bg-explore-color-bg-secondary  antialiased
                        absolute top-0 left-0 -translate-y-12 outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
                    style={{
                        outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                    }}
                >{'<'}</Button>   
            </div>
        </section>
    )
}
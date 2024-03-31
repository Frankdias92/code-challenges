'use cliente'

import React, { FormEvent, FormEventHandler, Suspense, useState } from "react"


interface handleClickContentProps {
    handleClickContent: () => void,
}

interface responseDataProps {
    data: string
}

export function Result({ handleClickContent }: handleClickContentProps) {
    const [nameUser, setNameUser] = useState<string>('')
    const [value1, setvalue1] = useState<number>()
    const [value2, setvalue2] = useState<number>()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        // console.log(formData.get('name')) // this is another way to use
        const response = await fetch('http://localhost:3333/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })

        const responseData = await response.json()
        const data = responseData
        const firstNumber = data.firstNumber
        const secondNumber = data.secondNumber
        
        if (data) {
            setNameUser(data.name)
            setvalue1(firstNumber)
            setvalue2(secondNumber)

            console.log('Dados recebido:', data);
        } else {
            console.log('Dados inválidos recebidos do servidor:', responseData);
        }
    
    }

    const sum = (Number(value1) + Number(value2))
    const subtraction = (Number(value1) - Number(value2))
    const multiply = (Number(value1) * Number(value2))
    const division = (subtraction / sum)
    const divisionVsMultiply = (division * multiply)
    


    function strongColorConvert(props: any){
        return (
            <span className="text-explore-color-offShore">
                {props}
            </span>
        )
    }
    
    

    return (
        <section className="flex w-full h-full justify-center">
            <div className="grid grid-cols-2 w-3/4 font-poppins relative">
                <form 
                    method="POST"
                    onSubmit={onSubmit}
                    className="flex flex-col w-[70%]"
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
                    <button 
                        type="submit"
                        className="flex text-xl tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 antialiased"
                    >
                        MOSTRAR DADOS
                    </button>
                </form>


                {/* result goes here */}
                <Suspense>
                    <div className="flex flex-col w-full">
                        
                        {nameUser
                            ? (
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-normal">{nameUser}, Muito obrigado por sua visita!</h2>
                                    <p>Resultado da soma foi = <span className="text-explore-color-offShore">{sum}</span></p>
                                    <p>O calculo da sua operação resultou em um {strongColorConvert('Number')}</p>
                                    <p>{nameUser}, seu nome resulta em uma {strongColorConvert('String')}</p>
                                    <p>A subtração da sua operação é {strongColorConvert(subtraction)}</p>
                                    <p>A multiplicação da operação é {strongColorConvert(multiply)}</p>
                                    <p>Dividindo o valor da subtração e o da multiplicação temos o resultado = {strongColorConvert(division)}</p>
                                    <p>E o resultado da divizão resulta em um {strongColorConvert('Number')}</p>
                                    <p>A multiplicação da operação entre {strongColorConvert(division)} e {strongColorConvert(multiply)} = {strongColorConvert(divisionVsMultiply)}</p>
                                </div>
                            ) : (``)
                        }
                        

                    </div> 
                </Suspense>

                {/* buttton switch */}
                <input 
                    type="submit" 
                    value='<' 
                    onClick={handleClickContent}
                    className="flex size-10 justify-center items-center bg-explore-color-bg-secondary rounded-full antialiased
                        absolute top-0 left-0 -translate-y-12"
                />   
            </div>
        </section>
    )
}
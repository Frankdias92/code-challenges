'use client'

import {Button} from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"
import { FormEvent, useState } from "react"

export default function ImcPage() {
    let { isFocusVisible, focusProps } = useFocusRing()
    const [resultImc, setResultImc] = useState<number>()
    const [messageIMC, setMessageIMC] = useState('')

    
    function handleImc(event:FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const dataForm = new FormData(event.currentTarget)
        const weight = Number(dataForm.get('weight'))
        const height = Number(dataForm.get('height'))

        
        setResultImc(handleCalcIMC(weight, height))
    }
    
    function handleCalcIMC(weight: number,height: number) {
        const imc = (weight / ((height / 100) ** 2))
        handleShowIMC(imc)

        return imc
    }
    
    function handleShowIMC(resultImc: number) {
        if (resultImc <= 18.5) {
            return setMessageIMC('tu vai sumir')
        } else if ( resultImc > 18.5 && resultImc <= 24.9) {
            return setMessageIMC('Você esta dentro do peso normal')
        } else if ( resultImc > 25 && resultImc <= 29.9) {
            return setMessageIMC('Você passou um pouco do peso')
        } else if ( resultImc > 30 && resultImc <= 39.9 ) {
            return setMessageIMC('Ok, você está obeso!')
        } else if ( resultImc > 40 ) {
            return setMessageIMC('Voce deveria procurar se cuidar, você está em nivel critico!')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex w-3/4">

                <div className="flex w-1/3">
                    
                    <form 
                        method="POST"
                        onSubmit={handleImc}
                        className="flex flex-col w-full"
                    >

                        <label className="mb-2 text-lg">
                            Altura
                        </label>
                        <input 
                            name="height"  
                            type="number"
                            required
                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                            invalid:text-red-600 rounded-lg outline-none"
                        />

                        <label className="mb-2 text-lg">
                            Peso
                        </label>
                        <input 
                            name="weight"  
                            type="number"
                            required
                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                            invalid:text-red-600 rounded-lg outline-none"
                        />


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

                {resultImc ? (
                    <div className="flex flex-col w-full ml-8 py-2 font-poppins">
                        <span>
                            Seu IMC: <span className="text-2xl  text-explore-color-offShore">{resultImc.toFixed(2)}</span>
                        </span>

                        <span className="italic">{messageIMC}</span>
                    </div>
                ) : ( '' )}
            </div>
        </div>
    )
}
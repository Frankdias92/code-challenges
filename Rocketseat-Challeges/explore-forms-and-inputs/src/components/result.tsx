'use cliente'

import React, { FormEvent, FormEventHandler, useState } from "react"


interface handleClickContentProps {
    handleClickContent: () => void,
}

interface responseDataProps {
    data: string
}

export function Result({ handleClickContent }: handleClickContentProps) {

    const names = 'Franklin test'

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('http://localhost:3333/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })

        const responseData: responseDataProps = await response.json()
        const data = responseData.data
        
        if (data && data) {
            console.log('Nome recebido:', data);
        } else {
            console.log('Dados inválidos recebidos do servidor:', responseData);
        }
    }

 
    
    
    

    return (
        <section className="flex w-full h-full justify-center">
            <div className="grid grid-cols-2 w-3/4 font-poppins relative">
                <form 
                    method="POST"
                    onSubmit={onSubmit}
                    className="flex flex-col w-full"
                >
                    <label className="mb-2 text-lg">
                        Como posso te chamar?
                    </label>
                    <input 
                        type="text"
                        name="name"  
                        required
                        className="flex h-14 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                        invalid:text-red-600 rounded-lg outline-none"
                    />
                    <input 
                        type="submit" 
                        value='<' 
                        onClick={handleClickContent}
                        className="flex size-10 justify-center items-center bg-explore-color-bg-secondary rounded-full antialiased
                            absolute top-0 left-0 -translate-y-12"
                    />   
                    {/* <input type="button" value="Enviar"/>   */}
                    <button type="submit">Enviar</button>
                </form>

                <div>
                   
                </div> 
            </div>
        </section>
    )
}
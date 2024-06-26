import { GitHub, Linkedin, LogoHeadIcon } from "@/components/icons/icons"
import axios from "axios"
import Link from "next/link"
import { FormEvent } from "react"
// import { FormEvent, FormEventHandler, useState } from "react"





export default async function Contact() {
    // const [formData, setFormData] = useState({ email: '', name: '', message: ''})

    async function handleForm(formData: FormData) {
        'use server'

        const rawFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        }
        

        // const testF = 'test click'
        // console.log(rawFormData)

        const response = await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rawFormData)
        })
        // const data = response.json()
        // console.log(data)
    }
    


    return (
        <section className="flex flex-col w-full min-h-full py-20 bg-pale-yellow">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-4 m-auto w-3/4 items-center text-dark-orange rounded-3xl overflow-clip">
                <div className="flex lg:flex-col p-10 w-full h-full bg-pure-yellow gap-4 justify-between">
                        <LogoHeadIcon />


                    <div className="flex flex-col-reverse lg:flex-col w-full gap-2 text-dark-orange items-end lg:items-start">
                        <div className="py-2">
                            <p className="font-bold text-xl">
                                Franklin Macedo
                            </p>

                            <p className="text-lg">
                                Brazil - BR
                            </p>
                        </div>

                        <div className="flex flex-col w-full border-0 items-end lg:items-start">
                            <h3 className="text-lg font-semibold">Acompanhe</h3>

                            <div className="flex">
                                <Link 
                                    href={'https://www.linkedin.com/in/franklinmacedodias/'}
                                    className="flex p-1 focus:ring-2 focus:ring-darkModerateYello rounded-xl "
                                >
                                    <Linkedin />
                                </Link>
                                <Link 
                                    href={'https://github.com/Frankdias92'}
                                    className="flex p-1 focus:ring-2 focus:ring-darkModerateYello rounded-xl "
                                >
                                    <GitHub />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col w-full h-full col-span-3 p-10 text-pale-yellow bg-dark-orange">
                    <form 
                        action={handleForm}
                        className="flex flex-col w h-full group-rounded-3xl gap-4"
                    >
                        <h1 className="text-3xl font-bold">Contato</h1>

                        <input 
                            className="flex bg-black/10 rounded-md border-transparent placeholder-darkModerateYello/50 border-0 focus:ring-2 focus:ring-pure-yellow"
                            name="email"
                            type="email"
                            placeholder="Endereço de E-mail"
                            required
                        />

                        <input
                            className="flex bg-black/10 rounded-md border-transparent placeholder-darkModerateYello/50 border-0 focus:ring-2 focus:ring-pure-yellow" 
                            name="name"
                            type="text"
                            placeholder="Nome"
                            required
                        />

                        <textarea 
                            className="flex bg-black/10 rounded-md border-transparent placeholder-darkModerateYello/50 border-0 focus:ring-2 focus:ring-pure-yellow"
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Ensira sua mensage"
                            required
                        >

                        </textarea>

                        

                        <button 
                            className="flex bg-black/10 rounded-md mr-0 m-auto px-5 p-3 border-0 focus:ring-2 focus:ring-pure-yellow"
                            
                        >
                            ENVIAR
                        </button>
                        
                    </form>    
                </div>
            </div>
        </section>
    )
}
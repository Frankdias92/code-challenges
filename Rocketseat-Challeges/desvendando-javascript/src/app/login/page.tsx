'use client'


import { LogginAccount } from '@/components/login/formLoggin'
import login from '../../assets/imgs/login1.jpeg'
import Image from "next/image"
import { useState } from 'react'
import { CreateAccount } from '@/components/login/formCreateAccount'


export default function Login() {
    const [newAccount, setNewAccount] = useState(false)

    function handleNewAccount() {
        if (newAccount == true) {
            setNewAccount(!true)
        } else {
            setNewAccount(true)
        }
    }
    

    return (
        <section className="flex w-full min-h-full flex-col justify-between ">
            <div className="grid grid-cols-2 w-3/4 h-[754px] justify-center items-center m-auto my-[120px]">
                <div className="flex flex-col w-full px-10 gap-y-8 items-start">
                    {newAccount ? 
                    ( 
                    <>
                        <LogginAccount />
                        <span className='flex flex-col gap-5 items-center justify-center w-[90%]'>
                            <div className='w-full h-0.5 bg-explore-color-text-second/20'/>
                            <span className='text-sm'>or</span>
                            <button className='m-auto' onClick={handleNewAccount}>Create a new account</button>
                        </span>
                    </> 
                    ) : (
                    <>
                        <CreateAccount />
                        <span className='flex flex-col gap-5 items-center justify-center w-[90%]'>
                            <div className='w-full h-0.5 bg-explore-color-text-second/20'/>
                            <span className='text-sm'>or</span>
                            <button className='m-auto' onClick={handleNewAccount}>Log - in</button>
                        </span>
                    </>
                    )}
                </div>


                <div className="flex flex-col min-w-[545px] min-h-[628px] p-10 items-center justify-between relative bg-cover bg-center overflow-hidden rounded-xl">
                    <div className="flex flex-col justify-between items-center z-10">
                        <div className="flex justify-between items-center">
                            <h2 className="w-[40%] text-5xl">journey through the code!</h2>
                            <p className="font-poppins w-[30%]">Start your coding journey here. Login to unleash your creativity.</p>
                        </div>

                    </div>

                        <div className="flex z-10 w-full justify-end font-poppins absolute bottom-5 mr-20">
                            <p>Photo by <span className="font-bold italic">@author</span></p>
                        </div>

                    <div className="min-w-[754px] min-h-[754px] absolute">
                        <Image src={login} alt="" width={754} height={754} quality={100}
                            className="flex z-0 m-auto bg-center -translate-y-20"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
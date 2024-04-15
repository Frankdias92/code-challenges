'use client'


import { Button } from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"

import login from '../../assets/imgs/login1.jpeg'
import Image from "next/image"
import { CreateAccount } from "@/components/login/formLoggin"


export default function Login() {
    let { isFocusVisible, focusProps } = useFocusRing()
    

    return (
        <section className="flex w-full min-h-full flex-col justify-between">
            <div className="grid grid-cols-2 w-3/4 h-[754px] justify-center items-center m-auto">
                <div className="flex flex-col w-full h-4/5l px-10 gap-y-8 items-start justify-center">
                    <CreateAccount />
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
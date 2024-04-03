'use client'

import { ButtonProps } from "@nextui-org/react";
import { eventNames } from "process";
import { ButtonHTMLAttributes } from "react";


export default function Timer() {

    function handleClick(event: ButtonHTMLAttributes<HTMLButtonElement>) {
        
        console.log(event.datatype)
    }

    return (
        <section className="flex flex-col w-full h-screen bg">
            <div className="flex">
                <span>00</span>
                <span>:</span>
                <span>00</span>
            </div>
            <div className="space-x-4">
                <button datatype="play">play</button>
                <button>timer</button>
                <button>mute</button>
            </div>
        </section>
    )
}
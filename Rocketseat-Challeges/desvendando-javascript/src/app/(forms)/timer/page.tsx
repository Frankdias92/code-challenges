'use client'

import { TimerTask } from "@/components/timerTask";
import { TimerView } from "@/components/timerView";
import { ButtonHTMLAttributes } from "react";


export default function Timer() {

    function handleClick(event: ButtonHTMLAttributes<HTMLButtonElement>) {
        
        console.log(event.datatype)
    }

    return (
        <section className="flex flex-col w-full h-[708px] bg">
            <div className="grid grid-cols-2 w-full items-start h-full m-auto">
                <TimerView />
                <TimerTask />
            </div>
        </section>
    )
}
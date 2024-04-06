'use client'

import { TimerTask } from "@/components/timer/timerTask";
import { TimerView } from "@/components/timer/timerView";


export default function Timer() {


    return (
        <section className="flex flex-col w-full h-[708px] bg">
            <div className="grid grid-cols-2 w-full items-start h-full m-auto">
                    <TimerView />
                    <TimerTask />
            </div>
        </section>
    )
}
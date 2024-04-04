import { caveat } from '@/app/fonts'
import {Button} from "@nextui-org/react"
import { useFocusRing } from '@react-aria/focus'
import { differenceInSeconds } from 'date-fns'
import { Span } from 'next/dist/trace'
import { FormEvent, useEffect, useState } from 'react'



interface NewCycleTimer {
    id: string
    taskName: string
    taskMinutes: number
    startData: Date
}

export function TimerTask() {
    let { isFocusVisible, focusProps } = useFocusRing()
    const [ isSubmitDisabled, setIsSubmitDisabled ] = useState<string>('')
    const [newCyletimer, setNewCycleTimer] = useState<NewCycleTimer[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [secondsPassed, setSecondsPassed] = useState(0)


    const activeCycle = newCyletimer.find((item) => item.id === activeCycleId)
    
    useEffect(() => {
        if (activeCycle) {
            setInterval(() => {
                setSecondsPassed(differenceInSeconds(new Date(), activeCycle.startData))
            }, 1000)
        }
        console.log(activeCycle)
    }, [activeCycle])

    
    function handleTaskSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = event.target as HTMLFormElement
        const data = new FormData(form)

        const taskData: NewCycleTimer = {
            id: String(new Date().getTime()),
            taskName: String(data.get('taskName')),
            taskMinutes: Number(data.get('taskMinutes')),
            startData: new Date()
        }

        setNewCycleTimer((state) => [...state, taskData])
        setActiveCycleId(taskData.id)
    }
    

    const totalSecods = activeCycle ? activeCycle.taskMinutes * 60 : 0
    const currentSeconds = activeCycle ? totalSecods - secondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 5)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')


    return (
        <div className="flex w-full flex-col h-full bg-explore-color-text-second text-explore-color-text-first relative">
            <div className="flex flex-col w-[240px] absolute top-[240px] left-[224px]">
                <form 
                    method='POST'
                    onSubmit={handleTaskSubmit}
                    className="flex flex-col w-full"
                >
                    <label className="text-2xl font-bold">
                        What’s your task?
                    </label>
                    <input 
                        type="text" 
                        name="taskName"
                        list='task-suggestions'
                        onChange={(e) => setIsSubmitDisabled(e.target.value)}
                        placeholder="Make plans..."
                        className="text-explore-color-offShore pl-2 bg-transparent border-0 border-b-2 placeholder:italic placeholder:text-explore-color-text-first/20
                            outline-none focus:ring-2 focus:ring-explore-color-offShore rounded-md"
                    />

                    <datalist id='task-suggestions'>
                        <option value="Projeto1"/>
                        <option value="Projeto2"/>
                        <option value="Projeto3"/>
                    </datalist>
                    

                    <div className="flex w-full relative">
                        <label className="flex w-full text-2xl font-bold">
                            How long do you need?
                        </label>
                        <input 
                            type="number" 
                            name="taskMinutes"
                            placeholder="00"
                            step={5}
                            min={0}
                            max={60}
                            className="flex w-[40%] text-explore-color-offShore pl-2 bg-transparent border-0 border-b-2 placeholder:italic placeholder:text-explore-color-text-first/20
                                outline-none focus:ring-2 focus:ring-explore-color-offShore rounded-md"
                        />
                    </div>

                    <Button
                        type='submit'
                        className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                        outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second disabled:bg-explore-color-offShore/80"
                        style={{
                            outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                        }}
                        disabled={!isSubmitDisabled}
                    >
                        SEND
                    </Button>
                </form>

                <div className="flex flex-col mt-[86px]">
                    <span className="text-4xl">TASKS</span>
                    <div className={`${caveat.className} text-2xl`}>Time to study</div>
                    <div className={`${caveat.className} text-2xl`}>Take the trash out</div>
                    <div className={`${caveat.className} text-2xl`}>Take a break</div>
                </div>
            </div>

            <div className='flex flex-col leading-[180px] absolute text-[160px] top-0 left-0 translate-y-1/2 -translate-x-1/2'>
                <span>{`${minutes[0]} ${minutes[1]}` }</span>
                <span>{`${seconds[0]} ${seconds[1]}`}</span>
            </div>
        </div>
    )
}
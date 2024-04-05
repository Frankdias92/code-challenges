import { caveat } from '@/app/fonts'
import {Button} from "@nextui-org/react"
import { useFocusRing } from '@react-aria/focus'
import { differenceInSeconds } from 'date-fns'
import { FormEvent, useEffect, useState } from 'react'




interface NewCycleTimer {
    id: string
    taskName: string
    taskMinutes: number
    startData: Date
    interruptedDate?: Date
}

export function TimerTask() {
    let { isFocusVisible, focusProps } = useFocusRing()
    const [ isSubmitDisabled, setIsSubmitDisabled ] = useState<string>('')

    const [newCyletimer, setNewCycleTimer] = useState<NewCycleTimer[]>([])
    const [isActive, setIsActive] = useState<string | null>(null)
    const [seconds, setSeconds] = useState(0)

    let handleIsActive: NodeJS.Timeout | null = null
    const [startTime, setStartTime] = useState<Date | null>(null);



    
    const activeCycle = newCyletimer.find((item) => item.id === isActive)
    const totalSecods = activeCycle ? activeCycle.taskMinutes * 60 : 0



    useEffect(() => {
      let interval: NodeJS.Timeout | null = null;
  
      if (activeCycle) {
        interval = setInterval(() => {
            setSeconds(differenceInSeconds(new Date(), activeCycle.startData))
        }, 1000);
      }
  
      return () => {
        if (interval) clearInterval(interval);
      };
    }, [activeCycle]);



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
        setIsActive(taskData.id)
        setSeconds(0)
    }

    function handleStopCycleTask() {
        setNewCycleTimer(
            newCyletimer.map((item) => {
                if (item.id === isActive) {
                    return {...item, interruptedDate: new Date()}
                } else {
                    return item
                }
            })
        )
        setIsActive(null)
    }
 
    console.log(newCyletimer)

    const currentSeconds = isActive ? totalSecods - seconds : 0

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const secondsTask = String(secondsAmount).padStart(2, '0')
  
 
    // useEffect(() => {
    //     if (activeCycle) {
    //         document.title = `${minutes}:${seconds}`
    //     }
    // }, [minutes, seconds, activeCycle])
    

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
                        disabled={!!isActive}
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
                            disabled={!!isActive}
                            step={5}
                            min={0}
                            max={60}
                            className="flex w-[40%] text-explore-color-offShore pl-2 bg-transparent border-0 border-b-2 placeholder:italic placeholder:text-explore-color-text-first/20
                                outline-none focus:ring-2 focus:ring-explore-color-offShore rounded-md"
                        />
                    </div>

                    {isActive ? (
                        <Button
                            type='button'
                            onClick={handleStopCycleTask}
                            className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-red-700 rounded-xl mt-6 shadow-lg antialiased
                            outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
                            style={{
                                outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                            }}
                        >
                            DESATIVAR
                        </Button>
                    ) : (
                    <Button
                        type='submit'
                        className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                        outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second disabled:bg-explore-color-offShore/80"
                        style={{
                            outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                        }}
                        disabled={!isActive}
                    >
                        SEND
                    </Button> 
                    )}

                    
                </form>

                <div className="flex flex-col mt-[86px]">
                    <span className="text-4xl">TASKS</span>
                    <div className={`${caveat.className} text-2xl`}>Time to study</div>
                    <div className={`${caveat.className} text-2xl`}>Take the trash out</div>
                    <div className={`${caveat.className} text-2xl`}>Take a break</div>
                </div>
            </div>

            <div className='flex flex-col leading-[180px] absolute text-[160px] top-1/4 place-self-center left-10'>
                <div className='flex flex-col w-full text-center relative '>
                   <div className='flex flex-col w-full h-full absolute gap-y-10'>
                        <div className='flex w-full relative'>
                            <span className='flex w-full absolute -translate-x-40'>{`${minutes[0]}` }</span>
                            <span className='flex w-full '>{`${minutes[1]}` }</span>
                        </div>

                        <div className='flex w-full relative'>
                            <span className='flex w-full absolute -translate-x-40'>{`${secondsTask[0]}` }</span>
                            <span className='flex w-full absolute'>{`${secondsTask[1]}` }</span>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
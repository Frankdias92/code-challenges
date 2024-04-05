import { caveat } from '@/app/fonts';
import { Button } from "@nextui-org/react";
import { useFocusRing } from '@react-aria/focus';
import { differenceInSeconds } from 'date-fns';
import { stat } from 'fs';
import { FormEvent, useEffect, useState } from 'react';

interface CycleTimer {
    id: number;
    taskName: string;
    taskMinutes: number;
    startData: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

export function TimerTask() {
    let { isFocusVisible, focusProps } = useFocusRing();
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<string>('');

    const [newCycleTimer, setNewCycleTimer] = useState<CycleTimer[]>([]);
    const [isActive, setIsActive] = useState<number | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);

    const [seconds, setSeconds] = useState(0);
    const [activeId, setActiveId] = useState<number | null>(null)
    const [timerActive, setTimerActive] = useState<boolean>(false)
    const [btnSwitch, setBtnSwitch] = useState<boolean>(false)
    


    const activeCycle = newCycleTimer.find((item) => item.id && isActive);
    const totalSeconds = activeCycle ? activeCycle.taskMinutes * 60 : 0;

    // console.log(isActive, 'activeCycle', activeCycle?.id, activeId)
 
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (activeCycle && timerActive) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), activeCycle.startData)
                setSeconds(secondsDifference)

                if (secondsDifference >= totalSeconds) {
                    setNewCycleTimer(state => state.map((item) => {
                        if (item.id === activeId) {
                            return { ...item, interruptedDate: new Date() }
                        } else {
                            return item;
                        }
                    }));

                    setSeconds(0);
                } else {
                    setSeconds(secondsDifference);

                }

            }, 1000);
        }


        return () => clearInterval(interval!)

    }, [activeCycle, totalSeconds, activeId, timerActive]);




    function handleTaskSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
    
        const taskData: CycleTimer = {
            id: Number(new Date().getTime()),
            taskName: String(data.get('taskName')),
            taskMinutes: Number(data.get('taskMinutes')),
            startData: new Date()
        };
    
        // Limpa o temporizador anterior se houver
        setNewCycleTimer((state) => state.map((item) => {
            if (item.id === activeId && isActive) {
                return { ...item, interruptedDate: new Date() };
            }
            return item;
        }));
    
        // Inicia um novo temporizador
        setNewCycleTimer([taskData]);
        setActiveId(taskData.id);
        setIsActive(taskData.id);
        setSeconds(0)
        setTimerActive(true)
    }

    function handleActiveState() {
        if (activeId !== null) {
            setIsActive(activeId);
            setSeconds(0);
        }
    }

    function handleStopCycleTask() {
        if (activeId !== null) {
            setNewCycleTimer((state) => state.map((item) => {
                if (item.id === activeId) {
                    setIsActive(null);
                    setSeconds(0);
                    return { ...item, interruptedDate: new Date() };
                }
                return item;
            }));
            setIsActive(null); // Limpa a tarefa ativa
            setTimerActive(false)
        }
    }

    console.log(newCycleTimer);

    const currentSeconds = isActive ? totalSeconds - seconds : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const secondsTask = String(secondsAmount).padStart(2, '0');

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
                        disabled={isActive !== null}
                        onChange={(e) => setIsSubmitDisabled(e.target.value)}
                        placeholder="Make plans..."
                        className="text-explore-color-offShore pl-2 bg-transparent border-0 border-b-2 placeholder:italic placeholder:text-explore-color-text-first/20
                            outline-none focus:ring-2 focus:ring-explore-color-offShore rounded-md"
                    />

                    <datalist id='task-suggestions'>
                        <option value="Projeto1" />
                        <option value="Projeto2" />
                        <option value="Projeto3" />
                    </datalist>


                    <div className="flex w-full relative">
                        <label className="flex w-full text-2xl font-bold">
                            How long do you need?
                        </label>
                        <input
                            type="number"
                            name="taskMinutes"
                            placeholder="00"
                            disabled={isActive !== null}
                            step={5}
                            min={5}
                            max={60}
                            className="flex w-[40%] text-explore-color-offShore pl-2 bg-transparent border-0 border-b-2 placeholder:italic placeholder:text-explore-color-text-first/20
                                outline-none focus:ring-2 focus:ring-explore-color-offShore rounded-md"
                        />
                    </div>

                    {isActive ? (
                        <div>
                           

                            <button 
                                disabled={isActive == null}
                                onClick={handleStopCycleTask}
                                className='flex w-full justify-center items-center h-[62px] mt-7 text-4xl text-explore-color-offShore'
                            > 
                                DESATIVAR?
                            </button>
                        </div>
                    ) : (
                            <Button
                                type='submit'
                                // onClick={handleActiveState}
                                className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                        outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second disabled:bg-explore-color-offShore/80"
                                style={{
                                    outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                                }}
                                disabled={isActive !== null}
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
                            <span className='flex w-full absolute -translate-x-40'>{`${minutes[0]}`}</span>
                            <span className='flex w-full '>{`${minutes[1]}`}</span>
                        </div>

                        <div className='flex w-full relative'>
                            <span className='flex w-full absolute -translate-x-40'>{`${secondsTask[0]}`}</span>
                            <span className='flex w-full absolute'>{`${secondsTask[1]}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import * as Dialog from '@radix-ui/react-dialog'
import { CheckCircle, Circle, Trash2, X } from 'lucide-react'
import { useState } from 'react'



export interface Task {
    id: string
    title: string
    content?: string
    finished?: boolean
}

interface NoteTaskProps {
    task: Task

    onTaskDeleted: (id: string) => void
    onTaskFinished: (id: string, finished: boolean) => void
}



export function NoteTask({ task, onTaskDeleted, onTaskFinished }: NoteTaskProps) {
    const [isChecked, setIsChecked] = useState(task.finished || false)

    const handleCheckChange = () => {
        const newCheckedState = !isChecked
        setIsChecked(newCheckedState)
        onTaskFinished(task.id, !isChecked)
    }

    return (

        <Dialog.Root>

            <div className='flex flex-row w-full justify-between items-start
                rounded-md bg-stone-700 h-20 relative overflow-hidden
                hover:ring-2 hover:ring-stone-500 text-left p-2
                '>
                <button 
                    type='button' 
                    onClick={handleCheckChange} 
                    className='z-20 absolute left-8 top-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-lime-500'
                    >

                    {task.finished ? (
                            <CheckCircle size={22} className='text-green-400'/>
                        ) : (
                            <Circle size={22} className='text-green-400'/>
                    )}
                </button>

                <Dialog.Trigger className="flex flex-1 flex-row text-left h-full w-full justify-between
                rounded-md outline-none focus-visible:ring-2 focus-visible:ring-lime-500
                ">
                    <div className="flex flex-col w-[90%] h-full pl-14">
                            <p className="flex overflow-hidden text-2xl h-16 relative sm:w-4/5">
                                {task.title}
                            </p>

                            <p className="text-stone-500 flex flex-col w-full overflow-hidden 
                            pt-1 text-sm font-medium leading-4 break-words h-full mb-1">
                                {task.content}
                            </p>
                    </div>

                    <button
                        onClick={() => onTaskDeleted(task.id)}
                        className="text-red-500 rounded-md absolute right-8 top-4
                    outline-none focus-visible:ring-2 focus-visible:ring-red-400
                    hover:text-red-400 duration-75">
                        <Trash2 />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/45 to-black/0 pointer-events-none"/>
                </Dialog.Trigger>

            </div>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60'/> 
                
                <Dialog.Content
                    className='z-50 left-1/2 top-1/2 absolute
                    -translate-x-1/2 -translate-y-1/2
                    sm:max-w-[640px] w-full sm:h-[45vh] h-full sm:rounded-md 
                    bg-stone-700 rounded-md flex flex-col outline-none overflow-hidden duration-200'>

                    <Dialog.Close className='absolute right-2 top-2 bg-stone-800 rounded-full p-1 text-stone-400 hover:text-red-400'>
                        <X size={20}/>
                    </Dialog.Close>

                    <div className='flex flex-1 flex-col gap-3 p-5'>
                        <div className='flex gap-4'>

                            <button 
                                type='button' 
                                onClick={() => handleCheckChange()} 
                                className='z-20'
                            >
                
                                {task.finished ? (
                                        <CheckCircle size={22} className='text-green-400'/>
                                    ) : (
                                        <Circle size={22} className='text-green-400'/>
                                )}
                            </button>
                            
                            <span className='text-xl w-3/4 overflow-hidden'>{task.title}</span>
                        </div>
                        <div className="h-px bg-stone-600"/>
                        <span className='texstone w-11/12 overflow-hidden'>{task.content}</span>
                    </div>
                        

                    <button
                        type='button'
                        className='w-full bg-stone-800 py-4 font-medium text-center to-stone-500 outline-none group'
                    >
                        Deseja <span onClick={() => onTaskDeleted(task.id)} className='text-red-500 group-hover:underline'>apagar tarefa</span>?
                    </button>
                </Dialog.Content>
                
            </Dialog.Portal>
            
        </Dialog.Root>

    )
}
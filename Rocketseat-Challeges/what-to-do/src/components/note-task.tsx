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
                rounded-md bg-stone-700 py-5 px-8 h-20 relative overflow-hidden
                hover:ring-2 hover:ring-stone-500 text-left
                outline-none focus-visible:ring-2 focus-visible:ring-lime-500'>
                <button 
                    type='button' 
                    onClick={handleCheckChange} 
                    className='z-20 relative'
                    >

                    {task.finished ? (
                            <CheckCircle size={22} className='text-green-400'/>
                        ) : (
                            <Circle size={22} className='text-green-400'/>
                    )}
                </button>

                <Dialog.Trigger className="flex flex-1 flex-row text-left h-full w-full justify-between">
                    <div className="flex flex-col w-4/5 h-full">
                        <div className="flex items-start">
                            <p className="overflow-hidden relative sm:w-4/5 pl-10">
                                {task.title}
                            </p>
                        </div>

                        <div className="h-full overflow-hidden relative">
                            <p className="text-stone-500 relative pl-10 text-sm font-medium leading-6">
                                {task.content}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => onTaskDeleted(task.id)}
                        className="text-red-500 rounded-md absolute right-8
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
import * as Dialog from '@radix-ui/react-dialog'
import { Circle, Trash2, X } from 'lucide-react'

interface NoteTaskProps {
    task: {
        title: string
        content: string
    }
}

export function NoteTask({ task }: NoteTaskProps) {
    return (

        <Dialog.Root>
            <Dialog.Trigger className="flex flex-row w-full justify-between items-start
            rounded-md bg-stone-700 py-5 px-7 h-20 relative overflow-hidden
            hover:ring-2 hover:ring-stone-500 text-left
            outline-none focus-visible:ring-2 focus-visible:ring-lime-500">
                <div className="flex flex-col pb-2">
                    <div className="flex items-start gap-8 pr-4">
                        <Circle size={22} className='text-green-400'/>

                        <p className="w-[450px]">
                            {task.title}
                        </p>
                    </div>

                    <div className="h-8 overflow-hidden">
                        <p className="text-stone-500 w-[450px] pl-10 text-sm font-medium leading-6">
                            {task.content}
                        </p>
                    </div>
                </div>

                <button className="text-red-500 rounded-md
                outline-none focus-visible:ring-2 focus-visible:ring-red-400
                hover:text-red-400 duration-75">
                    <Trash2 />
                </button>

                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/45 to-black/0 pointer-events-none"/>
            </Dialog.Trigger>


            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60'/> 
                
                <Dialog.Content
                    className='z-10 left-1/2 top-1/2 absolute
                    -translate-x-1/2 -translate-y-1/2 max-w-[734px] w-full h-[45vh]
                    bg-stone-700 rounded-md flex flex-col outline-none overflow-hidden'>

                    <Dialog.Close className='absolute right-2 top-2 bg-stone-800 rounded-full p-1 text-stone-400 hover:text-red-400'>
                        <X size={20}/>
                    </Dialog.Close>
                    
                    <div className='flex flex-1 flex-col gap-3 p-5'>
                        <span>{task.title}</span>
                    </div>
                        

                    <button
                        type='button'
                        className='w-full bg-stone-800 py-4 font-medium text-center to-stone-500 outline-none group'
                    >
                        Deseja <span className='text-red-500 group-hover:underline'>apagar tarefa</span>?
                    </button>
                </Dialog.Content>
                
            </Dialog.Portal>
            
        </Dialog.Root>

    )
}
import * as Dialog from "@radix-ui/react-dialog";
import { PlusCircle, X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export function NewNoteTask() {
    const [showShouldShowOnBoarding, setShouldOnBoarding] = useState(true)
    const [task, setTask] = useState('')
    
    
    function handleStartEditor() {
        setShouldOnBoarding(false)
    }

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setTask(event.target.value)
        
        if (event.target.value === '') {
            setShouldOnBoarding(true)
        }
    }

    function handleSaveTask(event: FormEvent) {
        event.preventDefault()

        console.log(task)
        toast.success('Tarefa criada com sucesso!')
    }
    
    
    
    return (

        <Dialog.Root>
            <div className="flex flex-1 -translate-y-1/2 gap-x-8
             hover:text-stone-200">

                <input 
                type="text" 
                placeholder="Busque por suas taresfas" 
                className="w-[736px] bg-stone-700 text-3xl font-semibold tracking-tight
                placeholder:text-stone-500
                rounded-md p-2 items-center outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
                />

                <Dialog.Trigger
                    className="flex flex-1 items-center bg-green-600 px-4 rounded-md
                    font-bold text-stone-50 outline-none hover:bg-green-700 duration-75 gap-4
                    focus-visible:ring-2 focus-visible:ring-lime-500"
                >
                    <PlusCircle />
                    Criar task?
                </Dialog.Trigger>
            </div>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60'/>     
                <Dialog.Content
                    className='absolute  left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2 max-w-[734px] w-full h-[45vh]
                    bg-stone-700 rounded-md flex flex-1 flex-col outline-none overflow-hidden'>

                    <Dialog.Close className='fixed right-2 top-2 bg-stone-800 rounded-full p-1 text-stone-400 hover:text-red-400'>
                        <X size={20}/>
                    </Dialog.Close>
                    
                    <div className='flex flex-1 flex-col gap-3 p-5'>
                        <span className="text-sm font-medium text-stone-300">Adicione sua tarefa</span>

                        {showShouldShowOnBoarding ? (
                            
                            <p className="text-sm leading-6 text-stone-400">Comece <button className="font-medium text-green-500 hover:underline">gravando uma tarefa</button> em áudio ou se preferir <button onClick={handleStartEditor} className="font-medium text-green-500 hover:underline">utilize apenas texto</button>.</p>
                            ) : (
                                <textarea 
                                    autoFocus
                                    className="text-sm leading-6 text-stone-400 bg-transparent resize-none flex-1 outline-none"
                                    onChange={handleContentChange}
                                />
                            )}

                    </div>


                    <button
                        type='button'
                        className='w-full bg-green-600 py-4 font-medium text-center text-green-950 outline-none hover:bg-green-700 hover:text-stone-200 duration-75'
                        onClick={handleSaveTask}
                    >
                        Criar task!
                    </button>
                </Dialog.Content>
                
            </Dialog.Portal>
            
        </Dialog.Root>
    )
}
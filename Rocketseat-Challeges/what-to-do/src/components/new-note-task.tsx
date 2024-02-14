import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle, Circle, PlusCircle, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { Task } from "./note-task";


interface NewNoteTaskProps {
    onTaskCreated: (title: string, content: string, finished: boolean) => void
}   



let speechRecognition: SpeechRecognition | null = null


export function NewNoteTask({ onTaskCreated }: NewNoteTaskProps) {
    const [showShouldShowOnBoarding, setShouldOnBoarding] = useState(true)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isRecording, setIsRecording] = useState(false)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        const storeState = localStorage.getItem('tasks')

        if (storeState !== null) {
            try {
                const storedTasks = JSON.parse(storeState)

                if (Array.isArray(storedTasks)) {

                // need to verify if was at least one task true
                const isAtLeastOneTaskFinished = storedTasks.some((storedTask: Task) => storedTask.finished)
                setFinished(isAtLeastOneTaskFinished)

                } else {
                console.error('Data is incorrect')
                }
            } catch (error) {
                console.error('erro to read the data', error)
            }
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(finished))
    }, [finished])

    function handleFinishedTaskChange() {
        setFinished(!finished)
    }
    
    function handleStartEditor() {
        setShouldOnBoarding(false)
    }

    function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
        
        if (event.target.value === '') {
            setShouldOnBoarding(true)
        }
    }


    function handleContentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
    }

    function handleSaveTask(event: FormEvent) {
        event.preventDefault()

        if (title === '') {
            return
        }

        onTaskCreated(title, content, finished)

        setTitle('')
        setContent('')
        setShouldOnBoarding(true)
        
        toast.success('Tarefa criada com sucesso!')
    }
    
    function handleStartRecording() {
        
        if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in  window))
        
        setIsRecording(true)

        setIsRecording(true)
        setShouldOnBoarding(false)
        
        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
        
        speechRecognition = new SpeechRecognitionAPI()

        speechRecognition.lang = 'pt-BR'
        speechRecognition.continuous = true
        speechRecognition.maxAlternatives = 1
        speechRecognition.interimResults = true

        speechRecognition.onresult = (event) => {
            const transcription = Array.from(event.results).reduce((text, result) => {
                return text.concat(result[0].transcript)
            }, '')

            setTitle(transcription)
        }

        speechRecognition.onerror = (event) => {
            console.log(event)
        }

        speechRecognition.start()
    }
    
    function handleStopRecording() {
        setIsRecording(false)

        if (speechRecognition != null) {
            speechRecognition.stop()
        }
    }
    

    return (

        <Dialog.Root>
            <Dialog.Trigger
                className="flex flex-1 p-3 items-center gap-2 sm:gap-4 bg-green-600 rounded-md
                font-bold text-stone-50 outline-none hover:bg-green-700 sm:duration-75
                sm:text-3xl focus-visible:ring-2 focus-visible:ring-lime-500 duration-200"
            >
                <PlusCircle className="size-8 sm:size-10"/>
                Task?
            </Dialog.Trigger>   

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60'/>     
                <Dialog.Content
                    className='absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    sm:max-w-[640px] w-full sm:h-[45vh] h-full sm:rounded-md 
                    bg-stone-700 flex flex-1 flex-col outline-none overflow-hidden duration-200'>

                    <Dialog.Close className='fixed right-2 top-2 bg-stone-800 rounded-full p-1 text-stone-400 hover:text-red-400 outline-none focus-visible:ring-2 focus-visible:ring-lime-500'>
                        <X size={20}/>
                    </Dialog.Close>
                    
                    <div className='flex flex-1 flex-col gap-3 p-5'>
                        <span className="text-sm font-medium text-stone-300">Adicione sua tarefa</span>

                        {showShouldShowOnBoarding ? (
                            
                            <p className="text-sm leading-6 text-stone-400">Comece <button onClick={handleStartRecording} className="font-medium text-green-500 hover:underline">gravando uma tarefa</button> em áudio ou se preferir <button onClick={handleStartEditor} className="font-medium text-green-500 hover:underline">utilize apenas texto</button>.</p>
                            ) : (
                                <div className="flex flex-col space-y-4 h-full">
                                    <div className="flex flex-row w-full space-x-4">
                                        <button 
                                            type='button' 
                                            onClick={() => handleFinishedTaskChange()} 
                                            className='z-20'
                                        >
                            
                                            {finished ? (
                                                <CheckCircle size={22} className='text-green-400'/>
                                                ) : (
                                                <Circle size={22} className='text-green-400'/>
                                            )}
                                        </button>

                                        <input 
                                            autoFocus
                                            type="text" 
                                            placeholder="Defina sua task"
                                            onChange={handleTitleChange}
                                            value={title}
                                            className="bg-black/5 w-full rounded-md p-4 outline-none
                                            focus-visible:ring-2 focus-visible:ring-lime-500"
                                        />
                                    </div>

                                    <div className="flex w-full  h-1/3">
                                        <textarea 
                                            className="text-sm leading-6 text-stone-400 bg-black/5 flex-1 p-4 rounded-md
                                            outline-none focus-visible:ring-2 focus-visible:ring-lime-500 resize-none overflow-hidden"
                                            onChange={handleContentTextChange}
                                            value={content}
                                        />
                                    </div>
                                </div>
                            )}

                    </div>

                    {isRecording ? (
                        <button
                            type='button'
                            onClick={handleStopRecording}
                            className='flex w-full bg-stone-900 py-4 font-medium text-center text-slate-300 outline-none hover:bg-stone-900 hover:text-stone-200 duration-75
                            items-center justify-center gap-2'
                        >
                            <div className="size-3 rounded-full bg-red-500  animate-pulse"/>
                            Gravando! (clique para finalizar)
                        </button>
                    ) : (
                        <button
                            type='button'
                            className='w-full bg-green-600 py-4 font-medium text-center text-green-950 hover:bg-green-700 hover:text-stone-200 duration-75
                            outline-none focus-visible:ring-2 focus-visible:ring-green-400 group focus:scale-105'
                            onClick={handleSaveTask}
                        >
                            <span className="group-focus:text-stone-100 group-focus:animate-spin ">
                            Criar task!
                            </span>
                        </button>
                    )}

                </Dialog.Content>
                
            </Dialog.Portal>
            
        </Dialog.Root>
    )
}
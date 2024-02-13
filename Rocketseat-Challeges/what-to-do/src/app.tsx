import { ChangeEvent, useState } from "react";
import { NewNoteTask } from "./components/new-note-task";
import { NoteTask } from "./components/note-task";


interface Task {
  id: string
  title: string
  content: string
  finished?: boolean
}

export function App() {
  const [search, setSearch] = useState('')
  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksOnStorage = localStorage.getItem('tasks')

    if (tasksOnStorage) {
      return JSON.parse(tasksOnStorage)
    }
    
    return []
  })




  function onTaskCreated(title: string, content: string, finished: boolean) {
    const newTask = {
        id: crypto.randomUUID(),
        title,
        content,
        finished,
    }

    const tasksArray = [newTask, ...tasks]

    
    setTasks(tasksArray)

    
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
  }

  function onTaskDeleted(id: string) {
    const newTaskArray = tasks.filter((task) => {
      return task.id != id
    })

    setTasks(newTaskArray)
    
    localStorage.setItem('tasks', JSON.stringify(newTaskArray))
  } 

  function onTaskFinished(id: string, finished: boolean) {
    const updatedTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, finished}
      }

      return task
    })

    setTasks(updatedTask)
    localStorage.setItem('tasks', JSON.stringify(updatedTask))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredTasks = search != ''
    ? tasks.filter(task => task.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : tasks || []
  

  return (
    <section className="m-auto max-w-6xl gap-y-4 flex flex-col md:w-[732px] px-5 md:px-0">

      <div className="flex sm:flex-row mx-auto items-center -translate-y-1/2
      gap-4">
        <input 
          type="text" 
          placeholder="Busque por suas taresfas" 
          className="bg-stone-700 text-3xl font-semibold tracking-tight
          placeholder:text-stone-500 p-3 w-3/4
          rounded-md items-center outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
          onChange={handleSearch}
        />

        
        <NewNoteTask onTaskCreated={onTaskCreated} />
      </div>
      
      <div className="flex flex-col gap-4">


        <div className="h-px bg-stone-700"/>

        {Array.isArray(filteredTasks) && filteredTasks.map((task) => {
          return (
            <NoteTask 
              key={task.id}
              task={task}
              onTaskDeleted={onTaskDeleted} 
              onTaskFinished={(id, finished) => onTaskFinished(id, finished)}
            />
          )
        })}
        
      </div>
    </section>
  )
}

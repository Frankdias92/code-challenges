import { Header } from "./components/header";
import { NewNoteTask } from "./components/new-note-task";
import { NoteTask } from "./components/note-task";


const task = {
  title: 'Task title',
  content: 'task comment'
}


export function App() {
  return (
    <section className="flex flex-col h-[100vh]">
      <Header />

      <div className="mx-auto max-w-6xl gap-y-4 flex flex-col">
        <NewNoteTask />

        <div className="h-px bg-stone-700"/>

        <NoteTask task={task} />
      </div>
    </section>
  )
}

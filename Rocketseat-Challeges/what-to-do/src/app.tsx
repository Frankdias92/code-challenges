import { Header } from "./components/header";
import { NewNoteTask } from "./components/new-note-task";
import { NoteTask } from "./components/note-task";


export function App() {
  return (
    <section className="flex flex-col">
      <Header />

      <div className="mx-auto max-w-6xl space-y-4 flex flex-col">
        <NewNoteTask />

        <div className="h-px bg-stone-700"/>

        <NoteTask />
        <NoteTask />
      </div>
    </section>
  )
}

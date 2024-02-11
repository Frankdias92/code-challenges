import { Header } from "./components/header";


export function App() {
  return (
    <section className="mx-auto flex flex-col">
      <Header />

      <div className="mx-auto max-w-6xl -my-7 space-y-4">
        <form className="w-full">
          <input 
            type="text" 
            placeholder="Busque por suas taresfas" 
            className="w-full bg-stone-700 text-3xl font-semibold tracking-tight
            placeholder:text-stone-500
            rounded-md p-2 items-center"
            />
        </form>

        <div className="h-px bg-stone-700"/>

        <div className="flex flex-1">

          <div className="rounded-md bg-stone-700">

          </div>
          
        </div>
      </div>
    </section>
  )
}

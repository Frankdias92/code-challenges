export function NewNoteTask() {
    return (
    <form className="flex flex-1 -translate-y-1/2">
        <input 
          type="text" 
          placeholder="Busque por suas taresfas" 
          className="w-[736px] bg-stone-700 text-3xl font-semibold tracking-tight
          placeholder:text-stone-500
          rounded-md p-2 items-center"
          />
     </form>
    )
}
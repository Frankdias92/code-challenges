

export function NoteTask() {
    return (

        <button className="flex flex-row w-full justify-between items-start
        rounded-md bg-stone-700 py-5 px-7 h-20 relative overflow-hidden
        hover:ring-2 hover:ring-stone-500 text-left
        outline-none focus-visible:ring-2 focus-visible:ring-lime-500">
            <div className="flex flex-col pb-2">
              <div className="flex items-start gap-8 pr-4">
                <h1>x</h1>

                <p className="w-[450px] ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>

              <div className="h-8 overflow-hidden">
              <p className="text-stone-500 w-[450px] pl-10 text-sm font-medium leading-6">test coment - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repudiandae sit ipsam. Totam, autem amet nostrum sapiente neque fugit nisi ullam recusandae, ad doloribus consequuntur doloremque ex libero. Enim, et.</p>
              </div>
            </div>

            <button className="text-red-500 rounded-md
            outline-none focus-visible:ring-2 focus-visible:ring-red-400">
                empty
            </button>

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/45 to-black/0 pointer-events-none"/>
        </button>

    )
}
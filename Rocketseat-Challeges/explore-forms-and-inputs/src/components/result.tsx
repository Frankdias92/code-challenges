

interface handleClickContentProps {
    handleClickContent: () => void
}


export function Result({ handleClickContent }: handleClickContentProps) {

    return (
        <section className="flex w-full h-full justify-center">
            <div className="grid grid-cols-2 w-3/4 font-poppins relative">
                <form 
                    action="/" 
                    className="flex flex-col w-"
                >
                    <label className="mb-2 text-lg">
                        Como posso te chamar?
                    </label>
                    <input 
                        type="text" 
                        name="name"  
                        required
                        className="flex h-14 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                        invalid:text-red-600 rounded-lg outline-none"
                    />
                    <input 
                        type="submit" 
                        value='<' 
                        onClick={handleClickContent}
                        className="flex size-10 justify-center items-center bg-explore-color-bg-secondary rounded-full antialiased
                            absolute top-0 left-0 -translate-y-12"
                    />   
                    <button>send</button>    
                </form>

                <div>
                    <span>result</span>
                </div> 
            </div>
        </section>
    )
}
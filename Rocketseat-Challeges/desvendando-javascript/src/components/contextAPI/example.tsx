import { createContext, useContext, useState } from 'react'

const NewExempleOfContext = createContext({} as any) // as any just for study

function NewForm() {
    const { exampleTest, setExampleTest } = useContext(NewExempleOfContext)


    return (
        <div>
            <h1>New Form: { exampleTest }</h1>
            <button
                onClick={() => setExampleTest(2)}
            >
                Alterar valor
            </button>
        </div>
    )
}

function Countdown() {
    const { exampleTest } = useContext(NewExempleOfContext)

    return <h1>Countdown: { exampleTest }</h1>
}

export function Home() {
    const [exampleTest, setExampleTest] = useState(0)

    return  (
        <NewExempleOfContext.Provider
            value={{ exampleTest, setExampleTest }}
        >
            <div>
                <NewForm />
                <Countdown />
            </div>
        </NewExempleOfContext.Provider>
    )
}
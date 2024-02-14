import { Rocket, Terminal } from "lucide-react";


export function Header() {
    return (
        <header
            className="grid grid-cols-3 gap-4 place-items-center
            p-20 bg-stone-950">
            <div className="flex flex-row space-x-2 items-center">
                <Terminal className="size-10 text-stone-800 animate-pulse" />
                <h2 className="text-stone-900 text-4xl font-bold">CodeJourney</h2>
            </div>
            <div className="flex flex-row space-x-2 items-center">
                <Rocket className="flex size-10 -rotate-45 text-stone-500"/>
                <h2 className="text-stone-600 self-stretch text-4xl">do<span className="font-bold text-stone-500">What</span></h2>
            </div>
        </header>
    )
}
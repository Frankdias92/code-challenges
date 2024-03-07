import { LogoFooterIcon } from "./icons/icons";


export function Footer() {

    return (
        <footer className="flex items-center w-full bg-gray-950 h-[257px] relative">

            <div className="flex flex-col w-3/4 m-auto">
                <div className="grid grid-cols-6 grid-rows-1 w-full">
                    <LogoFooterIcon />
                    <ul className="flex flex-row items-center col-span-4 justify-center w-full gap-6">
                        <li className="flex gap-8 items-center text-white"><div className="size-2 bg-yellow-400 rounded-full"/>INICION</li>
                        <li className="flex gap-8 items-center text-white"><div className="size-2 bg-yellow-400 rounded-full"/>CONTATO</li>
                        <li className="flex gap-8 items-center text-white"><div className="size-2 bg-yellow-400 rounded-full"/>LOCALIZAÇÃO</li>
                        <li className="flex gap-8 items-center text-white"><div className="size-2 bg-yellow-400 rounded-full"/>MENU</li>
                    </ul>
                </div>
                <div className="bg-white h-[0.5px] w-full mt-10"/>

            </div>
             
            <p className="flex text-white text-sm absolute bottom-4 w-full justify-center m-auto">
                Desenvolvido por Franklin Macedo © 2024  todos os direitos reservados
            </p>
        </footer>
    )
}
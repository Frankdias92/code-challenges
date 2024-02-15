import git from '../assets/github.svg'



export function Footer() {


    return (
        <div className="flex flex-1 py-5 justify-center bottom-0 bg-stone-950 ring-1 ring-stone-800 gap-2 px-4 items-start sm:items-center">
            <p className="text-stone-500">Developer by Franklin Macedo - © 2024 Todos os direitos reservados.</p>
            <a href="https://github.com/Frankdias92" target='_blank' className='p-2 bg-stone-800 rounded-xl sm:bg-transparent sm:rounded-none'><img src={git} className='ring-stone-50 fill-red-50 size-14 sm:size-8' alt="logo do gitHub encaminhando para o respositorio desse projeto"/></a>

        </div>
    )
}
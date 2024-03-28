import Link from "next/link";


export function Footer() {

    return(
        <footer className="flex w-full h-[78px] bg-secondary-bg
        justify-center items-center font-medium text-primary-bg z-10">
            <Link href={'https://www.linkedin.com/in/franklinmacedodias/'} target="_blank">© 2024 - Franklin Macedo</Link>
        </footer>
    )
}
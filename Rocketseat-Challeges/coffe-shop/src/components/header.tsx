import Link from "next/link";
import { CardDarkIcon, LogoHeadIcon, PinMapIcon } from "./icons/icons";
import Image from "next/image";


export function Header() {

    return (
        <header className="flex justify-center items-center w-full h-[104px]">
            <ul className="flex w-3/4 justify-between">
                <li>
                    <LogoHeadIcon />
                </li>

                <li className="flex items-center font-poppins tracking-wider">
                    <div className="flex flex-row items-center gap-4">
                        <span className="flex  items-center justify-center gap-3
                        w-[140px] h-[38px] rounded-md bg-pale">
                            <PinMapIcon />
                            <p>Brasil, BR</p>
                        </span>

                        <span className="flex justify-center items-center rounded-md bg-pale size-[38px]">
                            <CardDarkIcon />
                        </span>

                        <div className="w-px h-[38px] bg-dark-orange"/>

                        <Link href={'/'} className="flex items-center gap-2">
                            
                            <Image src={'https://github.com/frankdias92.png'} alt=""
                                className="size-9 p-[.75px] rounded-full ring-2 ring-pale"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>
                </li>
            </ul>
        </header>
    )
}
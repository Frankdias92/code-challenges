import Link from "next/link";
import { CardDarkIcon, LogoHeadIcon, PinMapIcon } from "./icons/icons";
import Image from "next/image";


export function Header() {

    return (
        <header className="flex absolute justify-center items-center w-full h-[104px] bg-pure-yellow z-10">
            <ul className="flex w-3/4 justify-between">
                <li>
                    <Link href={'/'} >
                        <LogoHeadIcon />
                    </Link>
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

                        <Link href={'/'} className="flex items-center gap-2 p-1 focus:ring-2 focus:ring-darkModerateYello rounded-xl ">
                            
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
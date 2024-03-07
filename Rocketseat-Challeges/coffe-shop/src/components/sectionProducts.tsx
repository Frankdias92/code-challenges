
import Image from 'next/image'
import coffe from '../assets/imgs/Cafe Frame.png'
import { CardWhiteIcon } from './icons/icons'



export function SectionProducts() {

    return (
        <div className="flex justify-center w-full bg-slate-200 py-20 overflow-hidden">
        <div className="w-3/4">

            <div className="flex flex-col w-full text-white gap-y-24">
                <h2 className='text-black font-bold text-3xl'>Nossos cafés</h2>

                <div className="flex flex-col items-center w-[256px] h-[310px] bg-neutral-900 rounded-xl rounded-tr-[36px] rounded-bl-[36px] pt-[70px] relative">
                    <div className="w-[200px] h-[155px] absolute self-center top-0 -translate-y-[45%]">
                        <Image src={coffe} alt="" width={640} height={496}
                            className=''
                        />
                    </div>
                    
                    <div className='flex flex-col items-center gap-y-2 px-4'>
                        <span className='flex flex-1 py-1 px-3
                         text-black bg-white rounded-full'>
                            Expresso Tradicional
                        </span>

                        <p>
                            O tradicional café feito com água quente e grãos moídos
                        </p>

                        <div className='flex flex-row w-full justify-between items-center absolute bottom-5 px-10'>
                            <span className=''>
                                9,90
                            </span>
                            <span className='flex justify-center items-center w-[72px] h-[38px] bg-yellow-300 rounded-md'>
                                - 0 +
                            </span>
                            <span className='flex justify-center items-center size-[38px] bg-green-600 rounded-md'>
                                <CardWhiteIcon />
                            </span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
    )
}
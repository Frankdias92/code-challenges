
import Image from 'next/image'
import coffe from '../assets/imgs/Cafe Frame.png'
import { CardWhiteIcon } from './icons/icons'



export function SectionProducts() {

    return (
        <div className="flex justify-center w-full bg-pale py-20 overflow-hidden">
        <div className="w-3/4">

            <div className="flex flex-col w-full text-pale-yellow gap-y-24">
                <h2 className='text-black font-bold text-3xl'>Nossos cafés</h2>

                <div className="flex flex-col items-center w-[256px] h-[310px] bg-dark-orange  rounded-xl rounded-tr-[36px] rounded-bl-[36px] pt-[70px] relative">
                    <div className="w-[200px] h-[155px] absolute self-center top-0 -translate-y-[45%]">
                        <Image src={coffe} alt="" width={640} height={496}
                            className='hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    
                    <div className='flex flex-col items-center gap-y-2 px-4'>
                        <span className='flex py-1 px-3 items-center m-auto
                         text-dark-orange bg-pale font-extrabold rounded-full'>
                            Tradicional
                        </span>

                        <h3 className='font-bold text-xl'>
                            Expresso Tradicional
                        </h3>

                        <div className='flex justify-center h-[80px] relative overflow-hidden'>
                            <p className='text-wrap font-poppins text-sm'>
                            O tradicional café feito com água quente e grãos moídos
                            </p>
                        </div>

                        <div className='flex flex-row w-full justify-between items-center absolute bottom-5 px-10'>
                            <span className='font-bold text-sm'>
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
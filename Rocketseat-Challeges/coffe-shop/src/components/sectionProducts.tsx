
import Image from 'next/image'
import { CardWhiteIcon } from './icons/icons'
import { listProducts } from '@/stripe/renderProducts'
import Link from 'next/link'
import SplashCoffee from '../assets/imgs/splash-coffee.png'





export async function SectionProducts() {
    const { products } = await listProducts()


    return (
        <div className="flex justify-center w-full bg-pale-yellow py-20 overflow-hidden">
        <div className="w-3/4 ">

            <div className="flex flex-col w-full text-pale-yellow gap-y-4">
                <h2 className='text-black font-bold text-3xl'>Nossos Menu</h2>

                        <section className='grid w-full h-[420px] grid-flow-col m-auto items-end
                            overflow-x-scroll overflow-hidden
                        '>
                            <div className='flex flex-row gap-x-8 pb-4'>

                            
                                {products.map(product => {
                                    return (
                                            <div key={product.id} className="flex flex-col items-center w-[256px] h-[310px] bg-dark-orange  rounded-xl rounded-tr-[36px] rounded-bl-[36px] pt-[70px] relative drop-shadow">
                                                <div className="w-[200px] h-[155px] absolute self-center top-0 -translate-y-[45%] group">
                                                    <Image src={SplashCoffee} alt="" width={640} height={496} quality={100}
                                                        className='group-hover:opacity-100 opacity-0 transition-all  duration-300
                                                        absolute top-5 translate-x-5 z-10 scale-90 group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-2'
                                                    />
                                                    <Image src={product.imageUrl} alt="" width={640} height={496} quality={100}
                                                        className='group-hover:scale-105 transition-transform duration-500 absolute z-20 group-hover:-translate-x-5 group-hover:-translate-y-2 group-hover:-rotate-[25deg]'
                                                    />
                                                </div>
                                                
                                                <div className='flex flex-col items-center gap-y-2 px-4'>
                                                    <span className='flex py-1 px-3 items-center m-auto
                                                    text-dark-orange bg-pale font-extrabold rounded-full'>
                                                        Tradicional
                                                    </span>
                            
                                                    <h3 className='font-bold text-xl'>
                                                        {product.name}
                                                    </h3>
                            
                                                    <div className='flex justify-center h-[80px] relative overflow-hidden'>
                                                        <p className='text-wrap font-poppins text-sm'>
                                                            {product.description}
                                                        </p>
                                                    </div>
                            
                                                    <div className='flex flex-row w-full justify-between items-center absolute bottom-5 px-10'>
                                                        <span className='font-bold text-sm'>
                                                            {product.price}
                                                        </span>
                            
                                                        {/* feature implemation */}
                                                        {/* <span className='flex justify-center items-center w-[72px] h-[38px] bg-yellow-300 rounded-md'>
                                                            - 0 +
                                                        </span> */}
                                                        
                            
                                                        <Link 
                                                            href={`/product/${product.id}`}
                                                            className='flex flex-row items-center gap-2 right-2 ring-darkModerateYello'
                                                        >
                                                            <span className='text-pure-yellow font-bold hover:underline'>adicionar</span>
                                                            <span className='flex justify-center items-center size-[38px] bg-green-600 rounded-md'>
                                                                <CardWhiteIcon />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                            
                                            </div>
                                            )
                                        })}
                            </div>
                        </section>
            </div>

        </div>
    </div>
    )
}

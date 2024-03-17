import { listProducts } from "@/stripe/renderProducts"
import { ArrowIcon, StarsIcon } from "./icons/icons"
import Link from "next/link"
import Image from "next/image"


export async function ShopProducts() {
    const { products } = await listProducts()

    
    return (
        <section className="flex ">
            
            <div className="grid grid-cols-4 m-auto gap-8">
                {products.map(product => (
                    <Link key={product.id} href={`/product/${product.id}`} className="flex flex-col items-center gap-y-2">

                    <div className="flex flex-1 w-[320px] h-[230px] bg-cover group">
                        <Image src={product.imageUrl} alt="" width={370} height={230} quality={100}
                            className="hover:scale-105 transition-transform duration-300 group-hover:-rotate-6 "
                        />
                    </div>

                    <StarsIcon />
        
                    <div className="flex flex-col text-center mt-4 items-center">
                        <h2 className="leading-6 text-3xl font-extrabold text-dark-orange">
                            {product.name}
                        </h2>
                        <div className="flex flex-row mt-4 gap-4">
                            <p className=" text-xl font-bold">
                                {product.price} 
                            </p>
                            <div className="flex flex-row space-x-2">
                                <span className="text-lg font-extrabold text-darkModerateYello hover:underline decoration-2 underline-offset-4">ADICIONAR</span>
                            </div>
                        </div>
                    </div>
                    
                </Link>
                ))}
            </div>
        </section>
    )
}
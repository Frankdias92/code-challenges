'use server'

import { ArrowIcon, StarsIcon } from "@/components/icons/icons"
import { stripe } from "@/lib/stripe"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"




export async function RenderProducts() {
    const { products } = await listProducts()
    
    
    return (
        <div className="flex flex-row">
            {products.map(product => (
                <Link key={product.id} href={`/product/${product.id}`} className="flex flex-col items-center gap-y-2">
                <div className="flex flex-1 w-[320px] h-[230px] bg-cover">
                    <Image src={product.imageUrl} alt="" width={370} height={230} quality={100}
                        className="hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <StarsIcon />
    
                <div className="flex flex-col text-start mt-4">
                    <h2 className="leading-6 text-3xl font-extrabold text-dark-orange">
                        {product.name}
                    </h2>
                    <div className="mt-4">
                        <p className=" text-xl font-bold">
                            {product.price} 
                        </p>
                        <div className="flex flex-row space-x-2">
                            <span className="text-lg font-extrabold text-red-600">ADICIONAR</span>
                            <span className="flex items-center">
                                <ArrowIcon />
                            </span>
                        </div>
                    </div>
                </div>
                
            </Link>
            ))}
        </div>
    )
}

export async function listProducts() {
    const response = await stripe.products.list({
        limit: 1,
        expand: ['data.default_price']
    })

    let formattedPrice = 'indisponivel'
    // console.log('test server', response)

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;
    
        let formattedPrice = 'indisponivel'; // Valor padrão se o preço não estiver disponível
    
        if (price && price.unit_amount !== null) {
            formattedPrice = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price.unit_amount / 100);
        }
    
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            imageUrl: product.images[0],
            url: product.url,
            price: formattedPrice
        };
    });

    return { products }
}
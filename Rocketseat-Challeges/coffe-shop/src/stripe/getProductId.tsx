'use server'

import { stripe } from "@/lib/stripe"
import { useSearchParams } from "next/navigation"


interface ProductProps {
    id: string
}


export async function GetProductId({id}: ProductProps) {

    console.log('test server')
    
    const response = await stripe.products.retrieve(id)
    const product = response
    
    return (
        <div>
            {JSON.stringify(product)}
        </div>
    )
}
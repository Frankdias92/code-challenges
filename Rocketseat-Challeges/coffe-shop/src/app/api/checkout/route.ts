'use server'
require('dotenv').config()

import { stripe } from "@/lib/stripe";
// import { NextApiRequest, NextApiResponse } from "next";


export async function POST(request: Response) {
    
    const priceId = 'price_1OmjLDAs0n97V7scIbvwRoeQ'

    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl =  `${process.env.NEXT_URL}/`

    try {
        const checkoutSession = await stripe.checkout.sessions.create({
            success_url: successUrl,
            cancel_url: cancelUrl,
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                }
            ],
            mode: 'payment',
        })

        return Response.json({ checkoutUrl: checkoutSession.url });
        
    } catch (error) {
        return Response.json({ error: 'Erro ao criar a sessão de checkout!' });
    }
}

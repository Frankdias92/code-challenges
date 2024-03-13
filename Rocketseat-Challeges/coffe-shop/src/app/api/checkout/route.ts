'use server'

require('dotenv').config()

import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';



export async function GET(req: Request) {

    return NextResponse.json({ message: 'priceId' })
}

export async function POST(req: Request) {
    // try {
        const {data}  = await req.json()
        console.log('REQUEST : ', data);
        const priceId = data.data


        const successUrl = `${process.env.NEXT_URL}/success`;
        const cancelUrl = `${process.env.NEXT_URL}/`;


        const create = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,    
                }
            ],
            mode: 'payment',
            success_url: successUrl,
            cancel_url: cancelUrl,
        });

        console.log('Create session response:', create);

        return NextResponse.json({ checkoutUrl: create.url });
    // } catch (error) {
    //     console.error('Erro ao criar a sessão de checkout:', error);
    //     return NextResponse.json({ error: 'Erro ao criar a sessão de checkout' });
    // }
}

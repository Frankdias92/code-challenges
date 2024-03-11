require('dotenv').config()

import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body
    
    if (req.method === 'POST') {
        return res.status(400).json({  error: 'Method not allowed' })


        res.status(200).json({ message: 'checkout' })
    } else {
        res.status(405).end()
    }

    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ]
    })

    console.log('checkout: ' + checkoutSession)

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}
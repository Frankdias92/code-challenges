'use server'

import Stripe from "stripe"


export async function SessionSuccess( sessionId: string ) {
    console.log('servidor: ', sessionId)


    //
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16',
        appInfo: {
            name: 'Coffe Shop'
        }
    })
    

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const custumerName = session.customer_details?.name
    const productName = session.line_items?.data[0].price?.product as Stripe.Product
 

    return { custumerName, productName }
}
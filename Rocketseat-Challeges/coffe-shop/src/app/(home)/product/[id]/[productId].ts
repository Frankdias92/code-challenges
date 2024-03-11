

import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { productId } = req.query;

  try {
    const product = await stripe.products.retrieve(productId as string);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

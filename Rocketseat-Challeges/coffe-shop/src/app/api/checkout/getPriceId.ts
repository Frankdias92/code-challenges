import { NextApiRequest } from 'next';

export function getPriceId(req: NextApiRequest): string | null {
    // Implemente a lógica para obter o priceId da requisição
    
    
    const { priceId } = req.body;
    return priceId || null;
}
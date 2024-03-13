'use client'

import axios from 'axios';
import { useState } from 'react';


interface BtnBuyProductProps {
    priceId: string
}

export default function BtnBuyProduct({ priceId }: BtnBuyProductProps) {
    const [loading, setLoading] = useState(false);
    

    // console.log('recebendo price: ', priceId)
    async function handleBuyProduct() {
        setLoading(true);
        try {
            const response = await axios.post(`/api/checkout`,
            {
                data: priceId
            })
            
            console.log('teste btn: ', response)

            const data = await response.data

            window.location.href = data.checkoutUrl

            console.log('TESTE BTN: ', data)
        } catch (err) {
          alert('Erro ao redirecionar');
        } finally {
          setLoading(false);
        }
    }
    
  return (

        <button
            onClick={handleBuyProduct}
              disabled={loading}
            className="flex justify-center items-center w-[180px] py-2 bg-darkModerateYello text-pale font-semibold translate-y-4"
        >
            {loading ? 'Carregando...' : 'Fazer pedido'}
            Fazer Pedido
        </button>

  )
}


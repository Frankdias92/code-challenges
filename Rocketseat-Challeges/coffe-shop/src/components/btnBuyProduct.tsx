'use client'

import { buyProduct } from '@/lib/buyProduct';
import { useState } from 'react';

interface BtnBuyProductProps {
  price: string;
  product: string;
}

export function BtnBuyProduct({ price, product }: BtnBuyProductProps) {
  const [loading, setLoading] = useState(false);
  // console.log('price: ', price)

  const handleBuyProduct = async () => {
    setLoading(true);

    try {
      const checkoutUrl = await buyProduct(price, product);
      
      // console.log('CHECK: ', checkoutUrl)

      window.location.href = checkoutUrl;
    } catch (error) {
      alert(error);

    } finally {
      setLoading(false);
    }
  };



  return (
    <button
      onClick={handleBuyProduct}
      disabled={loading}
      className="flex justify-center items-center w-[180px] py-2 bg-darkModerateYello text-pale font-semibold translate-y-4"
    >
      {loading ? 'Carregando...' : 'Fazer pedido'}
    </button>
  );
};

export default BtnBuyProduct;

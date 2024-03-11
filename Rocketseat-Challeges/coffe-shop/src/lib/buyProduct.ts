'use server'

import axios  from 'axios';

export async function buyProduct(price: string, product: string) {

  // console.log('servidor price: ', price)


  try {
    
    const response = await axios.post(`http://localhost:3000/api/checkout`, { price: product });
    
    console.log('CHECK: ', response.data  )
    const { checkoutUrl } = response.data;
   
   
    return checkoutUrl;

  } catch (err) {
    console.error(err);
    throw new Error('Erro ao redirecionar para a página de compra!');
  }
}

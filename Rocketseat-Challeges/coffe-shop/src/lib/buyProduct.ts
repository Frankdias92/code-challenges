// 'use client'

// require('dotenv').config()

// export async function buyProduct(params: string) {

//   // try {
//     const response = await axios.post(`${process.env.NEXT_URL}/api/checkout`, {
//                 priceId: productId.id,
//             })

//             const { checkoutUrl } = response.data

//             window.location.href = checkoutUrl

//     // return Response.json({ params: response.json })
    
//     if (!response.ok) {
//       throw new Error('Erro na solicitação');
//     }
    
//     const data = await response.json();
//     const { checkoutUrl } = data;
    
//     console.log('BUY PRODUCT: ', data)
//     return checkoutUrl;
    
//   // } catch (error) {
//   //   console.error('Erro na solicitação:', error);
//   //   throw new Error('Erro na solicitação');
//   // }
  
//   // return Response.json({ priceId : response.json })
// }

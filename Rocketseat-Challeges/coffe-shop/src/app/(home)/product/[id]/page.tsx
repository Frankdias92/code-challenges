

import { GetProductId } from "@/stripe/getProductId"

interface ProductIdProps {
    product: {
        name: string
        description: string
        id: string
        imageUrl: string
        price: string
        defaultPriceId: string

    }
    id: string
    params: string
}

export default async function Page({ params }: { params: { id: string }, product: ProductIdProps }) {
  
  
  
  // console.log('test product', params)
    
  return (
    <div className="flex flex-col h-max justify-between">
      <div className="flex flex-row m-auto justify-between w-3/4">
        <GetProductId productId={params.id as string} />

        {/* <BtnBuyProduct productId={params.id}/>         */}
      </div>
    </div>
  );
}

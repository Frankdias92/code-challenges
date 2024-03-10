
import { GetProductId } from "@/stripe/getProductId"

interface ProductIdProps {
    product: {
        name: string
        description: string
        id: string
        imageUrl: string
        price: string

    }
    id: string
    params: string
}

export default async function Page({ params }: { params: { id: string } }) {


    console.log('test page', JSON.stringify(params.id))

    
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-row m-auto justify-between w-3/4">
        <GetProductId id={params.id as string}/>
        
      </div>
    </div>
  );
}

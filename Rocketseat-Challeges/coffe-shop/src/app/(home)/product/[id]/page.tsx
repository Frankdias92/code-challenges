
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
    <div>
      <pre>{params.id}</pre>


        <GetProductId id={params.id as string}/>
    </div>
  );
}

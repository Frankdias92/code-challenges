'use server'

import { CardWhiteIcon, HandDeslike, HandLike } from "@/components/icons/icons"
import Image from "next/image"

import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

import BtnBuyProduct from "@/components/btnBuyProduct"




export default async function Page({ params }: { params: {id: string}}) {
    
    
  const res = await stripe.products.retrieve(params.id, {
    expand: ['default_price']
  })
  
  const productId = res
  const priceId = res.default_price as Stripe.Price
  
  
  // console.log('###########################', priceId)


  // console.log('GET PRICE priceId: ', priceId)


  
  return (
    <div className="flex flex-col h-max justify-between">
      <div className="flex flex-row m-auto justify-between w-3/4">
        

        <section className="flex w-full h-full flex-col py-20 justify-between">
            <div className="grid grid-cols-4 w-full m-auto items-center">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-extrabold text-dark-orange leading-relaxed">{productId.name}</h1>
                        <p className="text-base font-bold text-dark-orange leading-tight">{productId.description}</p>
                    </div>

                    <div className="flex flex-col w-[180px] space-y-2 mt-8">
                        <h3 className=" font-bold text-xl text-black">Escolhar o tamanho</h3>
                        {/* // adicionar botoes */}
                        
                        <div className="flex flex-row justify-between mb-2">
                            <span className="flex w-10 h-10 ring-[3px] justify-center items-center ring-pure-yellow
                                rounded-full text-xl font-semibold text-dark-orange">
                                S
                            </span>
                            <span className="flex w-10 h-10 ring-[3px] justify-center items-center ring-pure-yellow
                                rounded-full text-xl font-semibold text-dark-orange">
                                M
                            </span>
                            <span className="flex w-10 h-10 ring-[3px] justify-center items-center ring-pure-yellow
                                rounded-full text-xl font-semibold text-dark-orange">
                                G
                            </span>
                        </div>

                        <BtnBuyProduct priceId={String(priceId.id)}  />
                    


                    </div>
                </div>

                <div className="flex col-span-2 justify-self-center items-center w-[400px] h-[600px] bg-contain">
                    <Image src={productId.images[0]} alt="" width={370} height={230}
                        className="flex w-[370px] h-[230px] scale-[180%]"
                    />
                </div>

                {/* widget */}
                <div className="flex flex-1 flex-col w-full justify-around relative gap-9">
                    <div className="relative flex drop-shadow-2xl text-dark-orange">
                        <h3 className="font-bold text-3xl -rotate-90 leading-3 absolute top-1/2 -left-20">
                            COFFE
                        </h3>
                        <div className="flex flex-col text-xl font-bold p-4 w-[160px] h-[150px] bg-pale-yellow rounded-tr-[50%] justify-between relative">
                            <div className="flex flex-col">
                                <span className="flex size-10 justify-center items-center rounded-full bg-pale">5.0</span>
                                <span>Americano</span>
                            </div>
                            <div className="flex justify-start scale-[75%]">
                                        <span className="absolute scale-50 -left-4 -bottom-3"><HandLike /></span>
                                        <span className="absolute text-xs -bottom-1 w-[50px] scale-50">320 likes</span>
                                        <span className="absolute scale-50 left-10 -bottom-3"><HandDeslike /></span>
                                <span className="flex w-7 h-7 p-1 scale-75 bg-pure-yellow rounded-full items-center justify-center absolute -right-5 -bottom-2"><CardWhiteIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex drop-shadow-2xl text-dark-orange">
                        <h3 className="font-bold text-3xl -rotate-90 leading-3 absolute top-1/2 -left-20">
                            COFFE
                        </h3>
                        <div className="flex flex-col text-xl font-bold p-4 w-[160px] h-[150px] bg-pale-yellow rounded-tr-[50%] justify-between relative">
                            <div className="flex flex-col">
                                <span className="flex size-10 justify-center items-center rounded-full bg-pale">5.0</span>
                                <span>Americano</span>
                            </div>
                            <div className="flex justify-start scale-[75%]">
                                        <span className="absolute scale-50 -left-4 -bottom-3"><HandLike /></span>
                                        <span className="absolute text-xs -bottom-1 w-[50px] scale-50">320 likes</span>
                                        <span className="absolute scale-50 left-10 -bottom-3"><HandDeslike /></span>
                                <span className="flex w-7 h-7 p-1 scale-75 bg-pure-yellow rounded-full items-center justify-center absolute -right-5 -bottom-2"><CardWhiteIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex drop-shadow-2xl text-dark-orange">
                        <h3 className="font-bold text-3xl -rotate-90 leading-3 absolute top-1/2 -left-20">
                            COFFE
                        </h3>
                        <div className="flex flex-col text-xl font-bold p-4 w-[160px] h-[150px] bg-pale-yellow rounded-tr-[50%] justify-between relative">
                            <div className="flex flex-col">
                                <span className="flex size-10 justify-center items-center rounded-full bg-pale">5.0</span>
                                <span>Americano</span>
                            </div>
                            <div className="flex justify-start scale-[75%]">
                                        <span className="absolute scale-50 -left-4 -bottom-3"><HandLike /></span>
                                        <span className="absolute text-xs -bottom-1 w-[50px] scale-50">320 likes</span>
                                        <span className="absolute scale-50 left-10 -bottom-3"><HandDeslike /></span>
                                <span className="flex w-7 h-7 p-1 scale-75 bg-pure-yellow rounded-full items-center justify-center absolute -right-5 -bottom-2"><CardWhiteIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end widget */}

                

            </div>
        </section>

        
      </div>
    </div>
  );
}


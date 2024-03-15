'use client'
require('dotenv').config()


import { useSearchParams } from "next/navigation";
import { SessionSuccess } from "@/stripe/successParams";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ClockIcon, PinMapIcon } from "@/components/icons/icons";
import Head from "next/head";

function Fallback() {
    return <>Loading...</>
}

export default function Success() {
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')

    const [customerName, setCustomerName] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        async function fetchData() {
            if (sessionId) {
                const res = await SessionSuccess(sessionId);
                setCustomerName(res.custumerName!);
                setProductName(res.productName.name);
                setImageUrl(res.productName.images[0]);
            }
        }
        fetchData();
    }, [sessionId]);

    if (!sessionId) {
        return <Fallback />;
    }

    const address = 'ip_adress: 198.168.0.1'
    const location = 'Brasil, BR'
    return (
        <>
            <Head>
                <title>Compra efetuada | Coffe Shop</title>

                <meta name="robots" content="noindex"/>
            </Head>
        
        
            <section className="flex flex-col w-full h-full min-h-screen justify-between bg-pure-yellow py-20 overflow-hidden">
                <div className="flex flex-col w-3/4 m-auto gap-y-8">

                    <div className="flex flex-col">
                        <h2 className="text-2xl font-extrabold">Uhu! Pedido confirmado, {customerName}.</h2>
                        <p className="text-pale">Agora é só aguardar pelo seu {productName}</p>
                    </div>

                    <div className="grid grid-cols-2  text-dark-orange w-max">
                        <div className="flex flex-col border-2 border-dark-orange/40 p-10 w-full rounded-xl rounded-tr-[36px] rounded-bl-[36px]">

                            <div className="">
                                <ul className="flex flex-col m-auto items-start gap-3 w-full">
                                    <li className="flex flex-row gap-3">
                                        <div className="flex flex-row items-center">
                                            <span className="flex size-[32px] rounded-full justify-center items-center">
                                                <PinMapIcon />
                                            </span>
                                            <div>
                                                <p>
                                                    Iremos entregar = <span className="font-bold text-pale">via post(endereço web: '{address}')</span> 
                                                </p>
                                                {location}
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="flex flex-row gap-3 items-center">
                                        <div className="flex flex-row items-center">
                                            <span className="flex size-[32px] rounded-full justify-center items-center">
                                                <ClockIcon />
                                            </span>
                                            <div className="flex flex-col">
                                                <p>
                                                    Previsão de entrega:
                                                </p>
                                                <span className="text-pale font-bold">Math.ceil(timedata * 60)</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="flex flex-row gap-3 ">
                                        <div className="flex flex-row items-center">
                                            <span className="flex size-[32px] rounded-full justify-center items-center text-darkModerateYello font-extrabold">
                                                $
                                            </span>
                                            <p>Pagamenta efetuado com <span className="font-bold text-pale">SUCESSO!</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <Image 
                                src={imageUrl} 
                                alt={`image do producto da sua compra café ${productName}`}
                                width={370} height={230} quality={100}
                                className="hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            
            </section>
        </>
    );
}


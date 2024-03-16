import { ShopProducts } from "@/components/shopProducts";


export default function Shop() {


    
    return (
        <section className="flex flex-col w-full justify-between items-center overflow-hidden py-20">

            <main className="w-3/4">
                <div className="flex flex-row justify-between">
                    <h1 className="font-extrabold text-dark-orange text-3xl">Nosso Menu</h1>

                    <ul className="flex flex-row gap-8 font-bold text-dark-orange">
                        <li className="hover:underline">Todos cafés</li>
                        <li className="hover:underline">Gourmet</li>
                        <li className="hover:underline">Especiais</li>
                    </ul>
                </div>

                <ShopProducts />
            </main>
        </section>
    )
}

import { RenderProducts } from "@/stripe/renderProducts";


export function FeaturedProduct() {

    return (
        <section className="flex justify-center py-20 w-full bg-pale-yellow">
            <div className="flex flex-col items-center gap-y-12 w-3/4">
                <span className="font-extrabold text-5xl text-dark-orange">MAIS VENDIDOS</span>

                {/* COFFE SECTION */}
                <div className="flex flex-row">
                    <RenderProducts />
                </div>

            </div>
        </section>
    )
}
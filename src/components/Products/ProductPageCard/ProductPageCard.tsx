import {ProductCardProps} from "@/components/Products/ProductCard/ProductCard.types";
import MediaCarousel from "@/components/Products/MediaCarousel/MediaCarousel/MediaCarousel";
import usePricingText from "@/hooks/usePricingText";
import useWeightText from "@/hooks/useWeightText";
import {FormEvent, useCallback, useState} from "react";



export default function ProductPageCard({product: {media, pricing, name, weight, category, description}}: ProductCardProps) {
    const [quantity, setQuantity] = useState(1)
    const weightText = useWeightText(weight, 'G')
    const pricingText = usePricingText(pricing.priceRange)
    const pricingQuantityText = usePricingText(pricing.priceRange, quantity)
    const decreaseQuantity = useCallback(() => {
        setQuantity(prev => prev-1)
    }, [])
    const increaseQuantity = useCallback(() => {
        setQuantity(prev => prev+1)
    }, [])

    const onChangeQuantity = useCallback((e: FormEvent<HTMLInputElement>) => {

        const num = Number(e.currentTarget.value);
        if (!isNaN(num) && num > 0) {
            setQuantity(Number(e.currentTarget.value))
        }
    }, [])
    return (
        <div className="w-full max-w-6xl p-6 flex" style={{minWidth: '300px'}}>
            <div className="w-3/5">
                <MediaCarousel media={media} />
            </div>
            <div className="w-2/5 px-4">
                <h6 className="text-title-font text-2xl">{name}</h6>
                <span className="text-sm mr-3 font-bold">{pricingText}</span>
                <span className="text-sm">{weightText}</span>
                <div className="flex py-6">
                    <button className="py-4 px-2 bg-gray-100 hover:bg-gray-200 w-1/3" disabled={quantity === 1} onClick={decreaseQuantity}>-</button>
                    <input className="mx-2 py-4 px-2 rounded bg-gray-50 outline-amber-300 w-1/3 text-center" value={quantity} onChange={onChangeQuantity} />
                    <button className="px-2 py-4 bg-gray-100 hover:bg-gray-200 w-1/3" onClick={increaseQuantity}>+</button>
                </div>
                <div className="py-6">
                    <button className="w-full py-4 bg-black hover:bg-gray-800 text-white text-center ">Add to Bag - {pricingQuantityText}</button>
                </div>
            </div>
        </div>
    )
}



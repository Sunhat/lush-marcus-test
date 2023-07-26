import {ProductCardProps} from "@/components/Products/ProductCard/ProductCard.types";
import {memo, useMemo} from "react";
import Link from "next/link";

const CURRENCIES = {
    GBP: '£',
}

function ProductCard({product: {media, pricing, name, slug}}: ProductCardProps) {
    const firstMedia = useMemo(() => media.find(media => media.type === "IMAGE"), [media])

    const pricingText = useMemo(() => {
        const prefix = (pricing.priceRange.start.gross.amount === pricing.priceRange.stop.gross.amount) ?
            'From ' : ''
        return prefix + `${CURRENCIES[pricing.priceRange.start.gross.currency]}${pricing.priceRange.start.gross.amount}`
    }, [pricing])

    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center p-6" style={{minWidth: '300px'}}>
            <Link href={`/product/${slug}`} className="mt-24 rounded bg-gray-100 shadow p-6 transition-all hover:bg-gray-200">
                {firstMedia ? <img decoding="async" className="-mt-24" src={media[0].url} alt={media[0].alt} width={'300px'} height={'300px'} style={{aspectRatio: 3/2, objectFit: 'contain'}} /> : <div className="-mt-24" style={{maxWidth: '300px', width: '100%', aspectRatio: 3/2, objectFit: 'contain'}} />}
                <h6 className="text-title-font text-2xl">{name}</h6>
                <span className="text-sm">{pricingText}</span><span>{}</span>
            </Link>
        </div>
    )
}


export default memo(ProductCard)

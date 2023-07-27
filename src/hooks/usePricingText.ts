import {PriceRange} from "@/types/Products";
import {useMemo} from "react";

const CURRENCIES = {
    GBP: '£',
}
export default function usePricingText(priceRange: PriceRange, quantity: number = 1) {
    return useMemo(() => {
        const prefix = (priceRange.start.gross.amount !== priceRange.stop.gross.amount) ?
            'From ' : ''
        return prefix + `${CURRENCIES[priceRange.start.gross.currency]}${priceRange.start.gross.amount * quantity}`
    }, [priceRange, quantity])
}

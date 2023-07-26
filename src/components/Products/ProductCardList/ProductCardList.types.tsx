import {ProductCardProps} from "@/components/Products/ProductCard/ProductCard.types";
import {memo} from "react";


function ProductCardList({products}: ProductCardListProps) {
    console.log('yup')
    return (
        <div>{product.node.name}</div>
    )
}


export default memo(ProductCard)

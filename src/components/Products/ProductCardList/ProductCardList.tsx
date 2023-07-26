import {ProductCardProps} from "@/components/Products/ProductCard/ProductCard.types";
import React, {memo} from "react";
import {ProductCardListProps} from "@/components/Products/ProductCardList/ProductCardList.types";
import ProductCard from "@/components/Products/ProductCard/ProductCard";


function ProductCardList({products}: ProductCardListProps) {
    return (
        <div className="w-full flex flex-wrap">
            {products.edges.map(product => <ProductCard key={product.node.id} product={product.node}></ProductCard>)}
        </div>
    )
}


export default memo(ProductCardList)

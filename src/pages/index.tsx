import GraphClient from "@/services/Api/GraphClient";
import {
    ProductCardListControlPayload,
    ProductOrder,
    ProductOrderDirection,
    ProductOrderField,
    Products
} from "@/types/Products";
import React, {useCallback, useReducer} from "react";
import {Simulate} from "react-dom/test-utils";
import ProductCardList from "@/components/Products/ProductCardList/ProductCardList";
import useProducts from "@/hooks/useProducts";
import ProductCardListControls from "@/components/Products/ProductCardListControls/ProductCardListControls";

const defaultControls = {
    direction: ProductOrderDirection.ASC,
    field: ProductOrderField.NAME,
}

export async function getServerSideProps() {

    const { products } = await GraphClient.productsPaginated(undefined, 50, {sortBy: defaultControls})

    return {
        props: {
            initialProducts: products
        },
    };
}

type HomeProps = {
    initialProducts: Products
}

function controlReducer(state: ProductOrder, payload: ProductCardListControlPayload): ProductOrder {

    switch (payload.type) {
        case "TOGGLE_DIRECTION":
            return {
                ...state,
                direction: state.direction === ProductOrderDirection.ASC ? ProductOrderDirection.DESC : ProductOrderDirection.ASC
            }
    }
    return {
        direction: ProductOrderDirection.ASC,
        field: ProductOrderField.NAME
    }
}

export default function Home({initialProducts}: HomeProps) {
    const [controlState, controlDispatch] = useReducer(controlReducer, defaultControls)
    const { products, loadMore, canLoadMore, loading } = useProducts(initialProducts, {
        sortBy: controlState,
    })

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-2 md:px-6 py-24">
            <h1 className="text-title-font text-6xl">Marcus&apos; Lush Test</h1>
            <ProductCardListControls dispatch={controlDispatch} state={controlState} />
            <ProductCardList products={products} />
            {canLoadMore ? <button className="bg-black text-white my-12 px-12 py-4 hover:bg-white hover:text-black transition-all border-black border-solid border" onClick={loadMore} disabled={loading}>{!loading ? 'Load more' : 'Loading'}</button> : null }
        </main>
    )
}

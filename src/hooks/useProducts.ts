import {ProductOrder, Products} from "@/types/Products";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import GraphClient from "@/services/Api/GraphClient";


const useProducts = (initialProducts: Products, options: {sortBy?: ProductOrder} = { }) => {
    const [products, setProducts] = useState<Products>(() => initialProducts)
    const [loading, setLoading] = useState<boolean>(false)
    const canLoadMore = useMemo(() => Boolean(products.pageInfo.endCursor), [products.pageInfo.endCursor])

    const appendProducts = useCallback((newProducts: Products) => {
        setProducts((prev): Products => {
            return {
                ...newProducts,
                edges: [
                    ...prev.edges,
                    ...newProducts.edges
                ],
            }
        })
    }, [])

    const firstLoad = useRef(true)
    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false
            return
        }
        reset()
    }, [options.sortBy])

    const reset = useCallback(async () => {
        const data = await GraphClient
            .productsPaginated(undefined, 50, options)
        setProducts(data.products)
    }, [options])

    const loadMore = useCallback(async () => {
        if (!canLoadMore || loading) {
            return
        }
        setLoading(true)
        try {
            const data = await GraphClient
                .productsPaginated(products.pageInfo.endCursor, 50, options)
            appendProducts(data.products)
        } finally {
            setLoading(false)
        }
    }, [canLoadMore, loading, appendProducts, products.pageInfo.endCursor, options])

    useEffect(() => {

        },
        [options])

    return {
        loadMore,
        products,
        canLoadMore,
        loading,
        reset,
    }
}

export default useProducts

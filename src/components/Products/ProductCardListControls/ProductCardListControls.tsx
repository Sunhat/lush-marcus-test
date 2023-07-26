import {
    ProductCardListControlDispatchTypes,
    ProductCardListControlPayload,
    ProductOrder,
    ProductOrderDirection
} from "@/types/Products";
import {Dispatch, DispatchWithoutAction, useCallback} from "react";

const ProductOrderText: { [key in ProductOrderDirection]: string} = {
    [ProductOrderDirection.ASC]: 'Ascending',
    [ProductOrderDirection.DESC]: 'Descending',
}

export default function ProductCardListControls({state, dispatch}: {state: ProductOrder, dispatch: Dispatch<ProductCardListControlPayload>}) {

    const onChangeDirection = useCallback(() => {
        dispatch({type: "TOGGLE_DIRECTION"})
    }, [dispatch])

    return <div>
        <select onChange={onChangeDirection} value={state.direction}>
            {Object.keys(ProductOrderDirection).map((key) => <option key={key} value={key}>{ProductOrderText[key as ProductOrderDirection]}</option>)}
        </select>
    </div>
}

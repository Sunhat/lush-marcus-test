export type ProductMedia = {
    id: string
    type: "IMAGE" | "VIDEO"
    url: string
    alt: string

}
type Price = {
    gross: {
        currency: "GBP"
        amount: number
    }
}
export type PriceRange = {
    start: Price
    stop: Price
}
export type Pricing = {
    onSale: boolean
    priceRange: PriceRange
}

export type ProductEdgeNode = {
    id: string
    slug: string

    name: string
    media: ProductMedia[]
    seoTitle: string
    seoDescription: string
    isAvailableForPurchase: boolean

    pricing: Pricing
    description: string
    weight: ProductWeight | null
    category: {
        name: string
    } | null
}
export type ProductWeight = {
    unit: 'KG' | 'G'
    value: number
}
export type ProductEdge = {
    cursor: string
    node: ProductEdgeNode
}

export type ProductPageInfo = {
    startCursor: string
    endCursor: string
}

export type Products = {
    edges: ProductEdge[]
    pageInfo: ProductPageInfo
    totalCount: number
}


export type ProductOrder = {
    direction: ProductOrderDirection
    field: ProductOrderField
}

export enum ProductOrderDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}
export enum ProductOrderField {
    NAME = 'NAME',
}

export type ProductCardListControlDispatchTypes = 'TOGGLE_DIRECTION'
export type ProductCardListControlPayload = {
    type: ProductCardListControlDispatchTypes
}

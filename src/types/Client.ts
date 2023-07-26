import {ApolloClient, NormalizedCacheObject} from "@apollo/client";
import {ProductEdgeNode, Products} from "@/types/Products";

export type ProductResult = { product: ProductEdgeNode }
export type ProductsPaginatedResults = { products: Products }

export abstract class Client {

    constructor(client: ApolloClient<NormalizedCacheObject>) {
    }

    abstract productsPaginated(after?: string|null): Promise<ProductsPaginatedResults>;
}

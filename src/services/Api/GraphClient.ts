
import client from "../../apollo-client"
import {Client, ProductResult, ProductsPaginatedResults} from "@/types/Client"
import ProductsPagination from "@/graph/queries/ProductsPagination.gql";
import Product from "@/graph/queries/Product.gql";
import {ProductOrder} from "@/types/Products";


const GraphClient = new (class extends Client {

    async productsPaginated(after?: string, perPage: number = 50, {sortBy}: {sortBy?: ProductOrder} = {}): Promise<ProductsPaginatedResults> {
        const response = await client.query({
            query: ProductsPagination,
            variables: {
                after,
                perPage,
                sortBy,
            }
        });
        return {
            products: response.data.products
        };
    }
    async product(slug: string): Promise<ProductResult> {
        const response = await client.query({
            query: Product,
            variables: {
                slug,
            }
        });
        return {
            product: response.data.product
        };
    }

})(client)

export default GraphClient

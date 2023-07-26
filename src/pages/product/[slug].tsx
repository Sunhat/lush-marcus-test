import GraphClient from "@/services/Api/GraphClient";
import {ProductEdgeNode} from "@/types/Products";
import ProductPageCard from "@/components/Products/ProductPageCard/ProductPageCard";
export async function getServerSideProps(context: {query: { slug: string }}) {
    const { slug } = context.query
    const { product } = await GraphClient.product(slug)
    if (!product) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            product,
        },
    };
}
export default function ProductBySlug({product}: { product: ProductEdgeNode }) {
    return <main className="flex min-h-screen flex-col items-center justify-between px-2 md:px-6 py-24">
        <ProductPageCard product={product} />
    </main>
}

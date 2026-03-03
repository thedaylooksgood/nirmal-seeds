import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { ProductsContent } from "@/features/products-page/components/ProductsContent"
import { productsHeroData } from "@/features/products-page/data"

export const metadata = {
    title: "Products - Nirmal Seeds",
    description: "Explore 177+ seed products across 35+ crops including field crops, vegetables, biofortified seeds, and bio-organic inputs.",
}

export default function ProductsPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={productsHeroData.breadcrumb}
                backgroundImage={productsHeroData.backgroundImage}
            />
            <ProductsContent />
        </main>
    )
}

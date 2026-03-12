import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { MainCategoryContent } from "@/features/products-page/components/MainCategoryContent";

export const metadata = {
    title: "Bio Products - Nirmal Seeds",
    description: "Nutritionally enriched and biofortified crop solutions.",
};

const dummyCrops = [
    { name: "Bio-fertilizers", image: "/products/products-mixfieldcrops/image 141.png", href: "/products/bio-products/bio-fertilizers" },
    { name: "Bio-pesticides", image: "/products/products-mixfieldcrops/image 143.png", href: "/products/bio-products/bio-pesticides" },
    { name: "Mycorrhiza", image: "/products/products-mixfieldcrops/image 145.png", href: "/products/bio-products/mycorrhiza" },
    { name: "Soil Conditioners", image: "/products/products-mixfieldcrops/image 146.png", href: "/products/bio-products/soil-conditioners" },
];

export default function BioProductsPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Bio Products", href: "/products/bio-products" }
                ]}
                backgroundImage="/images/home-page/hero-banner.png"
            />
            <MainCategoryContent
                title="BIO"
                titleHighlight="PRODUCTS"
                description="Beyond seeds, Nirmal offers 22+ bio-organic products including bio-fertilizers, bio-pesticides, and soil conditioners. We also operate one of India's largest Mycorrhiza production facilities using advanced Root Organ Culture (ROC) technology."
                crops={dummyCrops}
            />
        </main>
    );
}

import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { MainCategoryContent } from "@/features/products-page/components/MainCategoryContent";

export const metadata = {
    title: "Vegetable Seeds - Nirmal Seeds",
    description: "Premium hybrid and improved vegetable varieties from Nirmal Seeds.",
};

const dummyCrops = [
    { name: "Tomato", image: "/products/product-mixfields-crops/image 132.png", href: "/products/vegetable-seeds/tomato" },
    { name: "Chilli", image: "/products/product-mixfields-crops/image 128.png", href: "/products/vegetable-seeds/chilli" },
    { name: "Okra", image: "/products/product-mixfields-crops/image 136.png", href: "/products/vegetable-seeds/okra" },
    { name: "Brinjal", image: "/products/products-mixfieldcrops/image 139.png", href: "/products/vegetable-seeds/brinjal" },
    { name: "Watermelon", image: "/products/product-mixfields-crops/image 135.png", href: "/products/vegetable-seeds/watermelon" },
    { name: "Bottle Gourd", image: "/products/product-mixfields-crops/image 137.png", href: "/products/vegetable-seeds/bottle-gourd" },
    { name: "Onion", image: "/products/product-mixfields-crops/image 134.png", href: "/products/vegetable-seeds/onion" },
    { name: "Cabbage", image: "/products/products-mixfieldcrops/image 140.png", href: "/products/vegetable-seeds/cabbage" }
];

export default function VegetableSeedsPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Vegetable Seeds", href: "/products/vegetable-seeds" }
                ]}
                backgroundImage="/images/home-page/hero-banner.png"
            />
            <MainCategoryContent
                title="VEGETABLE"
                titleHighlight="SEEDS"
                description="A rapidly growing segment supported by advanced breeding programs targeting global distribution and high-yield disease resistance. We offer high-quality vegetable seeds targeting both domestic and global markets."
                crops={dummyCrops}
            />
        </main>
    );
}

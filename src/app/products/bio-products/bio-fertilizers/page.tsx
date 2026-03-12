import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { bpbioFertilizersHeroData, bpbioFertilizersContentData } from "@/features/products-page/bio-products-bio-fertilizers-data";

export const metadata = {
    title: "Bio-fertilizers - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Bio-fertilizers.",
};

export default function BiofertilizersPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={bpbioFertilizersHeroData.breadcrumb}
                backgroundImage={bpbioFertilizersHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={bpbioFertilizersContentData.title}
                titleHighlight={bpbioFertilizersContentData.titleHighlight}
                sections={bpbioFertilizersContentData.sections as ProductSection[]}
            />
        </main>
    );
}

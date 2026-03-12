import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { bpsoilConditionersHeroData, bpsoilConditionersContentData } from "@/features/products-page/bio-products-soil-conditioners-data";

export const metadata = {
    title: "Soil Conditioners - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Soil Conditioners.",
};

export default function SoilConditionersPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={bpsoilConditionersHeroData.breadcrumb}
                backgroundImage={bpsoilConditionersHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={bpsoilConditionersContentData.title}
                titleHighlight={bpsoilConditionersContentData.titleHighlight}
                sections={bpsoilConditionersContentData.sections as ProductSection[]}
            />
        </main>
    );
}

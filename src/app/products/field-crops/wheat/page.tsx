import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { wheatHeroData, wheatContentData } from "@/features/products-page/wheat-data";

export const metadata = {
    title: "Wheat Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Wheat crop seed varieties.",
};

export default function WheatPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={wheatHeroData.breadcrumb}
                backgroundImage={wheatHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={wheatContentData.title}
                titleHighlight={wheatContentData.titleHighlight}
                sections={wheatContentData.sections as ProductSection[]}
            />
        </main>
    );
}

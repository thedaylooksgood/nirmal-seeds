import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { gramHeroData, gramContentData } from "@/features/products-page/gram-data";

export const metadata = {
    title: "Gram Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Gram crop seed varieties.",
};

export default function GramPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={gramHeroData.breadcrumb}
                backgroundImage={gramHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={gramContentData.title}
                titleHighlight={gramContentData.titleHighlight}
                sections={gramContentData.sections as ProductSection[]}
            />
        </main>
    );
}

import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { paddyHeroData, paddyContentData } from "@/features/products-page/paddy-data";

export const metadata = {
    title: "Paddy Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Paddy crop seed varieties.",
};

export default function PaddyPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={paddyHeroData.breadcrumb}
                backgroundImage={paddyHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={paddyContentData.title}
                titleHighlight={paddyContentData.titleHighlight}
                sections={paddyContentData.sections as ProductSection[]}
            />
        </main>
    );
}

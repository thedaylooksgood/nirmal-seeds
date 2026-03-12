import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vsonionHeroData, vsonionContentData } from "@/features/products-page/vegetable-seeds-onion-data";

export const metadata = {
    title: "Onion Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Onion seed varieties.",
};

export default function OnionPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vsonionHeroData.breadcrumb}
                backgroundImage={vsonionHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vsonionContentData.title}
                titleHighlight={vsonionContentData.titleHighlight}
                sections={vsonionContentData.sections as ProductSection[]}
            />
        </main>
    );
}

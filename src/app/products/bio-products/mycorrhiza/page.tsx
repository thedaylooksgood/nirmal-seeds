import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { bpmycorrhizaHeroData, bpmycorrhizaContentData } from "@/features/products-page/bio-products-mycorrhiza-data";

export const metadata = {
    title: "Mycorrhiza - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Mycorrhiza.",
};

export default function MycorrhizaPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={bpmycorrhizaHeroData.breadcrumb}
                backgroundImage={bpmycorrhizaHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={bpmycorrhizaContentData.title}
                titleHighlight={bpmycorrhizaContentData.titleHighlight}
                sections={bpmycorrhizaContentData.sections as ProductSection[]}
            />
        </main>
    );
}

import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vscabbageHeroData, vscabbageContentData } from "@/features/products-page/vegetable-seeds-cabbage-data";

export const metadata = {
    title: "Cabbage Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Cabbage seed varieties.",
};

export default function CabbagePage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vscabbageHeroData.breadcrumb}
                backgroundImage={vscabbageHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vscabbageContentData.title}
                titleHighlight={vscabbageContentData.titleHighlight}
                sections={vscabbageContentData.sections as ProductSection[]}
            />
        </main>
    );
}

import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vswatermelonHeroData, vswatermelonContentData } from "@/features/products-page/vegetable-seeds-watermelon-data";

export const metadata = {
    title: "Watermelon Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Watermelon seed varieties.",
};

export default function WatermelonPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vswatermelonHeroData.breadcrumb}
                backgroundImage={vswatermelonHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vswatermelonContentData.title}
                titleHighlight={vswatermelonContentData.titleHighlight}
                sections={vswatermelonContentData.sections as ProductSection[]}
            />
        </main>
    );
}

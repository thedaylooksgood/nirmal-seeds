import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vsbrinjalHeroData, vsbrinjalContentData } from "@/features/products-page/vegetable-seeds-brinjal-data";

export const metadata = {
    title: "Brinjal Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Brinjal seed varieties.",
};

export default function BrinjalPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vsbrinjalHeroData.breadcrumb}
                backgroundImage={vsbrinjalHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vsbrinjalContentData.title}
                titleHighlight={vsbrinjalContentData.titleHighlight}
                sections={vsbrinjalContentData.sections as ProductSection[]}
            />
        </main>
    );
}

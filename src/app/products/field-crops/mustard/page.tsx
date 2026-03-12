import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { mustardHeroData, mustardContentData } from "@/features/products-page/mustard-data";

export const metadata = {
    title: "Mustard Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Mustard crop seed varieties.",
};

export default function MustardPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={mustardHeroData.breadcrumb}
                backgroundImage={mustardHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={mustardContentData.title}
                titleHighlight={mustardContentData.titleHighlight}
                sections={mustardContentData.sections as ProductSection[]}
            />
        </main>
    );
}

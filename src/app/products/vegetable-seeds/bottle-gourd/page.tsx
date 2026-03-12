import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vsbottleGourdHeroData, vsbottleGourdContentData } from "@/features/products-page/vegetable-seeds-bottle-gourd-data";

export const metadata = {
    title: "Bottle Gourd Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Bottle Gourd seed varieties.",
};

export default function BottleGourdPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vsbottleGourdHeroData.breadcrumb}
                backgroundImage={vsbottleGourdHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vsbottleGourdContentData.title}
                titleHighlight={vsbottleGourdContentData.titleHighlight}
                sections={vsbottleGourdContentData.sections as ProductSection[]}
            />
        </main>
    );
}

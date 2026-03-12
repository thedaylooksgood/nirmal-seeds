import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { pearlMilletHeroData, pearlMilletContentData } from "@/features/products-page/pearl-millet-data";

export const metadata = {
    title: "Pearl Millet Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Pearl Millet crop seed varieties.",
};

export default function PearlMilletPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={pearlMilletHeroData.breadcrumb}
                backgroundImage={pearlMilletHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={pearlMilletContentData.title}
                titleHighlight={pearlMilletContentData.titleHighlight}
                sections={pearlMilletContentData.sections as ProductSection[]}
            />
        </main>
    );
}

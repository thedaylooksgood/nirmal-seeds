import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { sorghumHeroData, sorghumContentData } from "@/features/products-page/sorghum-data";

export const metadata = {
    title: "Sorghum Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Sorghum crop seed varieties.",
};

export default function SorghumPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={sorghumHeroData.breadcrumb}
                backgroundImage={sorghumHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={sorghumContentData.title}
                titleHighlight={sorghumContentData.titleHighlight}
                sections={sorghumContentData.sections as ProductSection[]}
            />
        </main>
    );
}

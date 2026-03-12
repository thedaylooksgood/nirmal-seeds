import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { soybeanHeroData, soybeanContentData } from "@/features/products-page/soybean-data";

export const metadata = {
    title: "Soybean Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Soybean crop seed varieties.",
};

export default function SoybeanPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={soybeanHeroData.breadcrumb}
                backgroundImage={soybeanHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={soybeanContentData.title}
                titleHighlight={soybeanContentData.titleHighlight}
                sections={soybeanContentData.sections as ProductSection[]}
            />
        </main>
    );
}

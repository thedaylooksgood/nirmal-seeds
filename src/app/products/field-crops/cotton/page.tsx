import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { cottonHeroData, cottonContentData } from "@/features/products-page/cotton-data";

export const metadata = {
    title: "Cotton Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Cotton crop seed varieties.",
};

export default function CottonPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={cottonHeroData.breadcrumb}
                backgroundImage={cottonHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={cottonContentData.title}
                titleHighlight={cottonContentData.titleHighlight}
                sections={cottonContentData.sections as ProductSection[]}
            />
        </main>
    );
}

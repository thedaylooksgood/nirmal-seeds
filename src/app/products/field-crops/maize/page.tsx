import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { maizeHeroData, maizeContentData } from "@/features/products-page/maize-data";

export const metadata = {
    title: "Maize Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Maize crop seed varieties.",
};

export default function MaizePage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={maizeHeroData.breadcrumb}
                backgroundImage={maizeHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={maizeContentData.title}
                titleHighlight={maizeContentData.titleHighlight}
                sections={maizeContentData.sections as ProductSection[]}
            />
        </main>
    );
}

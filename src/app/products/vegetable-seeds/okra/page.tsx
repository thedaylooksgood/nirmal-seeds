import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vsokraHeroData, vsokraContentData } from "@/features/products-page/vegetable-seeds-okra-data";

export const metadata = {
    title: "Okra Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Okra seed varieties.",
};

export default function OkraPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vsokraHeroData.breadcrumb}
                backgroundImage={vsokraHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vsokraContentData.title}
                titleHighlight={vsokraContentData.titleHighlight}
                sections={vsokraContentData.sections as ProductSection[]}
            />
        </main>
    );
}

import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { bpbioPesticidesHeroData, bpbioPesticidesContentData } from "@/features/products-page/bio-products-bio-pesticides-data";

export const metadata = {
    title: "Bio-pesticides - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Bio-pesticides.",
};

export default function BiopesticidesPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={bpbioPesticidesHeroData.breadcrumb}
                backgroundImage={bpbioPesticidesHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={bpbioPesticidesContentData.title}
                titleHighlight={bpbioPesticidesContentData.titleHighlight}
                sections={bpbioPesticidesContentData.sections as ProductSection[]}
            />
        </main>
    );
}

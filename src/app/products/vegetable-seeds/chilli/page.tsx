import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vschilliHeroData, vschilliContentData } from "@/features/products-page/vegetable-seeds-chilli-data";

export const metadata = {
    title: "Chilli Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Chilli seed varieties.",
};

export default function ChilliPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vschilliHeroData.breadcrumb}
                backgroundImage={vschilliHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vschilliContentData.title}
                titleHighlight={vschilliContentData.titleHighlight}
                sections={vschilliContentData.sections as ProductSection[]}
            />
        </main>
    );
}

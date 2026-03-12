import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { pigeonpeaHeroData, pigeonpeaContentData } from "@/features/products-page/pigeonpea-data";

export const metadata = {
    title: "Pigeonpea Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Pigeonpea crop seed varieties.",
};

export default function PigeonpeaPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={pigeonpeaHeroData.breadcrumb}
                backgroundImage={pigeonpeaHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={pigeonpeaContentData.title}
                titleHighlight={pigeonpeaContentData.titleHighlight}
                sections={pigeonpeaContentData.sections as ProductSection[]}
            />
        </main>
    );
}

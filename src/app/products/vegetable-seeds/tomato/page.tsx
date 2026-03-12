import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { vstomatoHeroData, vstomatoContentData } from "@/features/products-page/vegetable-seeds-tomato-data";

export const metadata = {
    title: "Tomato Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium Tomato seed varieties.",
};

export default function TomatoPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={vstomatoHeroData.breadcrumb}
                backgroundImage={vstomatoHeroData.backgroundImage}
            />
            <SubCategoryContent
                title={vstomatoContentData.title}
                titleHighlight={vstomatoContentData.titleHighlight}
                sections={vstomatoContentData.sections as ProductSection[]}
            />
        </main>
    );
}

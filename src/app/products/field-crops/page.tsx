import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { MainCategoryContent } from "@/features/products-page/components/MainCategoryContent"
import { fieldCropsHeroData, fieldCropsContentData } from "@/features/products-page/field-crops-data"

export const metadata = {
    title: "Field Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' field crop seed varieties including Cotton, Sorghum, Pearl Millet, Maize, Wheat, Paddy, Soybean, Mustard, Pigeonpea, and Gram.",
}

export default function FieldCropsPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={fieldCropsHeroData.breadcrumb}
                backgroundImage={fieldCropsHeroData.backgroundImage}
            />
            <MainCategoryContent
                title={fieldCropsContentData.title}
                titleHighlight={fieldCropsContentData.titleHighlight}
                description={fieldCropsContentData.description}
                crops={fieldCropsContentData.crops}
            />
        </main>
    )
}

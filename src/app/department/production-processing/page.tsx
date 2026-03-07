import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { ProductionProcessingContent } from "@/features/department-page/components/ProductionProcessingContent"
import { productionProcessingHeroData } from "@/features/department-page/production-processing-data"

export const metadata = {
    title: "Production & Processing - Nirmal Seeds",
    description:
        "Discover Nirmal Seeds' production and processing departments — 76 production centres, 64,000+ hectares, and 5 automated seed-processing plants delivering reliable seeds.",
}

export default function ProductionProcessingPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={productionProcessingHeroData.breadcrumb}
                backgroundImage={productionProcessingHeroData.backgroundImage}
            />
            <ProductionProcessingContent />
        </main>
    )
}

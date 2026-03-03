import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { LegacySection } from "@/features/management-page/components/LegacySection"
import { ManagementSection } from "@/features/management-page/components/ManagementSection"
import { managementHeroData } from "@/features/management-page/data"

export const metadata = {
    title: "Management - Nirmal Seeds",
    description: "Meet the founders and Board of Directors guiding Nirmal Seeds.",
}

export default function ManagementPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={managementHeroData.breadcrumb}
                backgroundImage={managementHeroData.backgroundImage}
            />
            <LegacySection />
            <ManagementSection />
        </main>
    )
}

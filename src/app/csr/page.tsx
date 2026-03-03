import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { CsrContent } from "@/features/csr-page/components/CsrContent"
import { CommunitySection } from "@/features/csr-page/components/CommunitySection"
import { EnvironmentSection } from "@/features/csr-page/components/EnvironmentSection"
import { csrHeroData } from "@/features/csr-page/data"

export const metadata = {
    title: "CSR @ Nirmal - Nirmal Seeds",
    description: "Explore Nirmal Seeds' CSR initiatives — farmer education, rural healthcare, scholarships, and environmental sustainability programs.",
}

export default function CsrPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={csrHeroData.breadcrumb}
                backgroundImage={csrHeroData.backgroundImage}
            />
            <CsrContent />
            <CommunitySection />
            <EnvironmentSection />
        </main>
    )
}

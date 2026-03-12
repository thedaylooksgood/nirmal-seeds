import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { CsrContent } from "@/features/csr-page/components/CsrContent"
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
        </main>
    )
}

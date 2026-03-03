import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { PatentContent } from "@/features/patent-page/components/PatentContent"
import { patentHeroData } from "@/features/patent-page/data"

export const metadata = {
    title: "Patents & Intellectual Property - Nirmal Seeds",
    description: "Explore Nirmal Seeds' robust intellectual property portfolio including plant variety protection, process patents, and research collaborations.",
}

export default function PatentPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={patentHeroData.breadcrumb}
                backgroundImage={patentHeroData.backgroundImage}
            />
            <PatentContent />
        </main>
    )
}

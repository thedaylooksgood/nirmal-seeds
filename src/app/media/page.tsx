import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { MediaContent } from "@/features/media-page/components/MediaContent"
import { mediaHeroData } from "@/features/media-page/data"

export const metadata = {
    title: "Media & News - Nirmal Seeds",
    description: "Latest news, events, product launches, and media coverage from Nirmal Seeds.",
}

export default function MediaPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={mediaHeroData.breadcrumb}
                backgroundImage={mediaHeroData.backgroundImage}
            />
            <MediaContent />
        </main>
    )
}

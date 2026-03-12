import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { RDContent } from "@/features/department-page/components/RDContent";
import { rdHeroData } from "@/features/department-page/r-d-data";

export const metadata = {
    title: "Research & Development - Nirmal Seeds",
    description: "The R&D ecosystem at Nirmal Seeds driving agricultural innovation.",
};

export default function RDPage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={rdHeroData.breadcrumb}
                backgroundImage={rdHeroData.backgroundImage}
            />
            <RDContent />
        </main>
    );
}

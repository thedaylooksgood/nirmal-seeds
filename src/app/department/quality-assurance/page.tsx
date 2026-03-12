import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { QualityAssuranceContent } from "@/features/department-page/components/QualityAssuranceContent";
import { qaHeroData } from "@/features/department-page/quality-assurance-data";

export const metadata = {
    title: "Quality Assurance - Nirmal Seeds",
    description: "Quality control and seed testing excellence at Nirmal Seeds.",
};

export default function QualityAssurancePage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={qaHeroData.breadcrumb}
                backgroundImage={qaHeroData.backgroundImage}
            />
            <QualityAssuranceContent />
        </main>
    );
}

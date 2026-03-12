import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { AccreditationContent } from "@/features/about-page/components/AccreditationContent";
import { accreditationHeroData } from "@/features/about-page/accreditation-data";

export const metadata = {
    title: "Accreditation - Nirmal Seeds",
    description: "Nirmal Seeds' formal recognitions and quality certifications.",
};

export default function AccreditationPage() {
    return (
        <main className="min-h-screen bg-white">
            <InnerPageHeroBanner
                breadcrumb={accreditationHeroData.breadcrumb}
                backgroundImage={accreditationHeroData.backgroundImage}
            />
            <AccreditationContent />
        </main>
    );
}

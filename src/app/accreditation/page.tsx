import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";

export const metadata = {
    title: "Accreditation - Nirmal Seeds",
    description: "Nirmal Seeds' formal recognitions and quality certifications.",
};

export default function AccreditationPage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "ACCREDITATION", href: "/accreditation" }
                ]}
                backgroundImage="/images/home-page/hero-banner.png"
            />
            <div className="section-container py-20">
                <h1 className="text-4xl font-bold text-nirmal-green mb-6 uppercase tracking-tight">Accreditation & Certifications</h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                    Our commitment to quality and excellence is backed by rigorous standards and formal recognitions from the industry's leading bodies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "DSIR Recognition",
                        "ISO 9001:2015",
                        "NABL Accreditation",
                        "ICAR Partnership",
                        "Seed Association Membership",
                        "Environmental Excellence"
                    ].map((title, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-nirmal-green font-bold text-xl mb-4">{title}</div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Formal certification details and compliance standards maintained by Nirmal Seeds for sustainable agricultural development.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

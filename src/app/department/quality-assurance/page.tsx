import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";

export const metadata = {
    title: "Quality Assurance - Nirmal Seeds",
    description: "Quality control and seed testing excellence at Nirmal Seeds.",
};

export default function QualityAssurancePage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "DEPARTMENTS", href: "/department" },
                    { label: "QUALITY ASSURANCE", href: "/department/quality-assurance" }
                ]}
                backgroundImage="/images/home-page/hero-banner.png"
            />
            <div className="section-container py-20">
                <h1 className="text-4xl font-bold text-nirmal-green mb-6 uppercase tracking-tight">Quality Assurance</h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                    Our Quality Assurance department ensures that every seed that reaches the farmer meets the highest standards of genetic purity and physical vigor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { title: "Physical Purity", desc: "Ensuring 99%+ pure seeds with no inert matter." },
                        { title: "Genetic Purity", desc: "Rigorous Grow-Out Tests for variety authenticity." },
                        { title: "Germination", desc: "Highest vigor testing for robust crop stand." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-16 h-16 bg-nirmal-lightgreen/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-nirmal-green font-bold text-xl">{i + 1}</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

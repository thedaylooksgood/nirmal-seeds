import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";

export const metadata = {
    title: "Bio Tech & Input Division - Nirmal Seeds",
    description: "Advanced biotechnology and specialized inputs for modern agriculture.",
};

export default function BiotechInputPage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "DEPARTMENTS", href: "/department" },
                    { label: "BIOTECH & INPUT", href: "" }
                ]}
                backgroundImage="/images/home-page/hero-banner.png"
            />
            <div className="section-container py-20">
                <h1 className="text-4xl font-bold text-nirmal-green mb-6 uppercase tracking-tight">Bio Tech & Input Division</h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                    Our Biotech division utilizes molecular marker-assisted breeding and advanced lab facilities to accelerate our research programs and provide specialized agricultural inputs.
                </p>
                <div className="relative p-12 bg-gray-900 rounded-[3rem] overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-nirmal-green/20 blur-[100px]" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Molecular Research</h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Identifying key traits at the genetic level to deliver predictable results for farmers across India.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="text-nirmal-yellow text-2xl font-bold">DNA</div>
                                    <div className="text-xs uppercase opacity-60">Fingerprinting</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="text-nirmal-yellow text-2xl font-bold">MABC</div>
                                    <div className="text-xs uppercase opacity-60">Breeding</div>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/20 font-bold uppercase tracking-widest">
                            Biotech Lab View
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

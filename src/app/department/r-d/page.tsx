import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";

export const metadata = {
    title: "Research & Development - Nirmal Seeds",
    description: "The R&D ecosystem at Nirmal Seeds driving agricultural innovation.",
};

export default function RDPage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "DEPARTMENTS", href: "/department" },
                    { label: "R & D", href: "/department/r-d" }
                ]}
                backgroundImage="/images/home-page/hero-banner.png"
            />
            <div className="section-container py-20">
                <h1 className="text-4xl font-bold text-nirmal-green mb-6 uppercase tracking-tight">Research & Development</h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                    Our DSIR-recognized R&D center is the heart of Nirmal Seeds, where science meets the soil to create next-generation agricultural solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Infrastructure</h2>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span className="text-gray-600">Research Farms</span>
                                <span className="font-bold text-nirmal-green text-xl">80+ Hectares</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span className="text-gray-600">Scientists</span>
                                <span className="font-bold text-nirmal-green text-xl">45+ Experts</span>
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span className="text-gray-600">Research Crops</span>
                                <span className="font-bold text-nirmal-green text-xl">32+ Major Crops</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-nirmal-darkgreen mb-4">Scientific Innovation</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Combining classical breeding with advanced biotechnology to develop crops with higher yields, disease resistance, and climate resilience for Indian agro-climatic zones.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

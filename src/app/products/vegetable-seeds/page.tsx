import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";

export const metadata = {
    title: "Vegetable Seeds - Nirmal Seeds",
    description: "Premium hybrid and improved vegetable varieties from Nirmal Seeds.",
};

export default function VegetableSeedsPage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "PRODUCTS", href: "/products" },
                    { label: "VEGETABLE SEEDS", href: "/products/vegetable-seeds" }
                ]}
                backgroundImage="/images/home-page/product-categories-vegetable-seeds.png"
            />
            <div className="section-container py-20">
                <h1 className="text-4xl font-bold text-nirmal-green mb-6 uppercase tracking-tight">Vegetable Seeds</h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                    A rapidly growing segment supported by advanced breeding programs targeting global distribution and high-yield disease resistance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {["Tomato", "Chilli", "Okra", "Brinjal", "Gourds", "Cucumber", "Cabbage", "Onion"].map((crop, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-nirmal-green/0 group-hover:bg-nirmal-green/10 transition-colors" />
                                <div className="flex h-full items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-xs">
                                    {crop} Image
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg group-hover:text-nirmal-green transition-colors">{crop}</h3>
                            <p className="text-gray-500 text-sm">Hybrid & Improved Varieties</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

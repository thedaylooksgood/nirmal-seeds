import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";

export const metadata = {
    title: "Bio Products - Nirmal Seeds",
    description: "Nutritionally enriched and biofortified crop solutions.",
};

export default function BioProductsPage() {
    return (
        <main className="min-h-screen">
            <InnerPageHeroBanner
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "PRODUCTS", href: "/products" },
                    { label: "BIO PRODUCTS", href: "/products/bio-products" }
                ]}
                backgroundImage="/images/home-page/product-categories-biofortified-crops.png"
            />
            <div className="section-container py-20">
                <h1 className="text-4xl font-bold text-nirmal-green mb-6 uppercase tracking-tight">Bio Products & Biofortified Crops</h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                    Nirmal Seeds is deeply invested in the biofortified ecosystem globally, partnering with ICAR to provide nutritionally enriched solutions.
                </p>
                <div className="bg-nirmal-lightgreen/20 p-10 rounded-3xl border border-nirmal-lightgreen/50">
                    <h2 className="text-2xl font-bold text-nirmal-darkgreen mb-6">Our Focus on Nutrition</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Biofortification is the process of increasing the nutritional value of food crops by increasing the concentration of vitamins and minerals.
                            </p>
                            <ul className="space-y-3">
                                {["Iron-enriched varieties", "Zinc-fortified seeds", "Vitamin A rich crops"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                                        <div className="w-2 h-2 rounded-full bg-nirmal-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="font-bold text-nirmal-green mb-2">ICAR Partnership</h3>
                            <p className="text-gray-500 text-sm italic">
                                "Solving the hidden hunger through science and localized agricultural innovation."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

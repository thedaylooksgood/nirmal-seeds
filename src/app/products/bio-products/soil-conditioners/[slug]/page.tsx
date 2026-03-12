import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { bpsoilConditionersHeroData, bpsoilConditionersContentData, bpsoilConditionersProducts } from "@/features/products-page/bio-products-soil-conditioners-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = bpsoilConditionersProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = bpsoilConditionersProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? bpsoilConditionersProducts[productIndex - 1] : null;
    const nextProduct = productIndex < bpsoilConditionersProducts.length - 1 ? bpsoilConditionersProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = bpsoilConditionersContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...bpsoilConditionersHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={bpsoilConditionersHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Soil Conditioners"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return bpsoilConditionersProducts.map((product) => ({
        slug: product.slug,
    }));
}

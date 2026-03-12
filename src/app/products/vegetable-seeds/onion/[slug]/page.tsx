import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vsonionHeroData, vsonionContentData, vsonionProducts } from "@/features/products-page/vegetable-seeds-onion-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vsonionProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vsonionProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vsonionProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vsonionProducts.length - 1 ? vsonionProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vsonionContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vsonionHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vsonionHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Onion"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vsonionProducts.map((product) => ({
        slug: product.slug,
    }));
}

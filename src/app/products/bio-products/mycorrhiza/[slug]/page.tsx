import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { bpmycorrhizaHeroData, bpmycorrhizaContentData, bpmycorrhizaProducts } from "@/features/products-page/bio-products-mycorrhiza-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = bpmycorrhizaProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = bpmycorrhizaProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? bpmycorrhizaProducts[productIndex - 1] : null;
    const nextProduct = productIndex < bpmycorrhizaProducts.length - 1 ? bpmycorrhizaProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = bpmycorrhizaContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...bpmycorrhizaHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={bpmycorrhizaHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Mycorrhiza"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return bpmycorrhizaProducts.map((product) => ({
        slug: product.slug,
    }));
}

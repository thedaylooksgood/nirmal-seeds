import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { pigeonpeaHeroData, pigeonpeaContentData, pigeonpeaProducts } from "@/features/products-page/pigeonpea-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = pigeonpeaProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = pigeonpeaProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? pigeonpeaProducts[productIndex - 1] : null;
    const nextProduct = productIndex < pigeonpeaProducts.length - 1 ? pigeonpeaProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = pigeonpeaContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...pigeonpeaHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={pigeonpeaHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Pigeonpea"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return pigeonpeaProducts.map((product) => ({
        slug: product.slug,
    }));
}

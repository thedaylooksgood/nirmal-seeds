import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { pearlMilletHeroData, pearlMilletContentData, pearlMilletProducts } from "@/features/products-page/pearl-millet-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = pearlMilletProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = pearlMilletProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? pearlMilletProducts[productIndex - 1] : null;
    const nextProduct = productIndex < pearlMilletProducts.length - 1 ? pearlMilletProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = pearlMilletContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...pearlMilletHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={pearlMilletHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Pearl Millet"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return pearlMilletProducts.map((product) => ({
        slug: product.slug,
    }));
}

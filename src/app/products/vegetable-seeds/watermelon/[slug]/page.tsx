import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vswatermelonHeroData, vswatermelonContentData, vswatermelonProducts } from "@/features/products-page/vegetable-seeds-watermelon-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vswatermelonProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vswatermelonProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vswatermelonProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vswatermelonProducts.length - 1 ? vswatermelonProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vswatermelonContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vswatermelonHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vswatermelonHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Watermelon"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vswatermelonProducts.map((product) => ({
        slug: product.slug,
    }));
}

import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vsokraHeroData, vsokraContentData, vsokraProducts } from "@/features/products-page/vegetable-seeds-okra-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vsokraProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vsokraProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vsokraProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vsokraProducts.length - 1 ? vsokraProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vsokraContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vsokraHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vsokraHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Okra"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vsokraProducts.map((product) => ({
        slug: product.slug,
    }));
}

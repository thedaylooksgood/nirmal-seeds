import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { paddyHeroData, paddyContentData, paddyProducts } from "@/features/products-page/paddy-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = paddyProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = paddyProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? paddyProducts[productIndex - 1] : null;
    const nextProduct = productIndex < paddyProducts.length - 1 ? paddyProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = paddyContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...paddyHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={paddyHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Paddy"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return paddyProducts.map((product) => ({
        slug: product.slug,
    }));
}

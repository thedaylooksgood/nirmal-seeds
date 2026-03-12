import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { mustardHeroData, mustardContentData, mustardProducts } from "@/features/products-page/mustard-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = mustardProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = mustardProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? mustardProducts[productIndex - 1] : null;
    const nextProduct = productIndex < mustardProducts.length - 1 ? mustardProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = mustardContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...mustardHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={mustardHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Mustard"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return mustardProducts.map((product) => ({
        slug: product.slug,
    }));
}

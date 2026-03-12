import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vscabbageHeroData, vscabbageContentData, vscabbageProducts } from "@/features/products-page/vegetable-seeds-cabbage-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vscabbageProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vscabbageProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vscabbageProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vscabbageProducts.length - 1 ? vscabbageProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vscabbageContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vscabbageHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vscabbageHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Cabbage"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vscabbageProducts.map((product) => ({
        slug: product.slug,
    }));
}

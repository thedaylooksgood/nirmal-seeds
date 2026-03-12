import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vsbottleGourdHeroData, vsbottleGourdContentData, vsbottleGourdProducts } from "@/features/products-page/vegetable-seeds-bottle-gourd-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vsbottleGourdProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vsbottleGourdProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vsbottleGourdProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vsbottleGourdProducts.length - 1 ? vsbottleGourdProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vsbottleGourdContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vsbottleGourdHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vsbottleGourdHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Bottle Gourd"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vsbottleGourdProducts.map((product) => ({
        slug: product.slug,
    }));
}

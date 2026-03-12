import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { sorghumHeroData, sorghumContentData, sorghumProducts } from "@/features/products-page/sorghum-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = sorghumProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = sorghumProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? sorghumProducts[productIndex - 1] : null;
    const nextProduct = productIndex < sorghumProducts.length - 1 ? sorghumProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = sorghumContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...sorghumHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={sorghumHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Sorghum"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return sorghumProducts.map((product) => ({
        slug: product.slug,
    }));
}

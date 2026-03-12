import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vschilliHeroData, vschilliContentData, vschilliProducts } from "@/features/products-page/vegetable-seeds-chilli-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vschilliProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vschilliProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vschilliProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vschilliProducts.length - 1 ? vschilliProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vschilliContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vschilliHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vschilliHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Chilli"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vschilliProducts.map((product) => ({
        slug: product.slug,
    }));
}

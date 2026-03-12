import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { vsbrinjalHeroData, vsbrinjalContentData, vsbrinjalProducts } from "@/features/products-page/vegetable-seeds-brinjal-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = vsbrinjalProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = vsbrinjalProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? vsbrinjalProducts[productIndex - 1] : null;
    const nextProduct = productIndex < vsbrinjalProducts.length - 1 ? vsbrinjalProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = vsbrinjalContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...vsbrinjalHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={vsbrinjalHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Brinjal"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return vsbrinjalProducts.map((product) => ({
        slug: product.slug,
    }));
}

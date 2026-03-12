import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { soybeanHeroData, soybeanContentData, soybeanProducts } from "@/features/products-page/soybean-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = soybeanProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = soybeanProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? soybeanProducts[productIndex - 1] : null;
    const nextProduct = productIndex < soybeanProducts.length - 1 ? soybeanProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = soybeanContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...soybeanHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={soybeanHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Soybean"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return soybeanProducts.map((product) => ({
        slug: product.slug,
    }));
}

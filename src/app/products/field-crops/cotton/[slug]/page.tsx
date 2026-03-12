import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { cottonHeroData, cottonContentData, cottonProducts } from "@/features/products-page/cotton-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = cottonProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = cottonProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? cottonProducts[productIndex - 1] : null;
    const nextProduct = productIndex < cottonProducts.length - 1 ? cottonProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = cottonContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...cottonHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={cottonHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Cotton"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return cottonProducts.map((product) => ({
        slug: product.slug,
    }));
}

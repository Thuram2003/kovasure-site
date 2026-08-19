import { blogArticles } from "../blogData";
import { getBlogPostBySlug, isContentfulConfigured } from "@/lib/contentful";
import BlogArticleClient from "./BlogArticleClient";

export const revalidate = 60; // Revalidate dynamic content every 60 seconds

export async function generateStaticParams() {
    // Generate static params for both locales
    const locales = ['en', 'fr'];
    const params = [];
    
    for (const locale of locales) {
        for (const article of blogArticles) {
            params.push({ locale, id: article.slug });
        }
    }
    
    return params;
}

export default async function BlogArticlePage({ params }: { params: Promise<{ locale: string; id: string }> }) {
    const { id } = await params;
    
    let initialPost = null;
    if (isContentfulConfigured) {
        initialPost = await getBlogPostBySlug(id);
    }
    
    return <BlogArticleClient slug={id} initialPost={initialPost} />;
}

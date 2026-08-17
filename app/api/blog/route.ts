import { NextResponse } from "next/server";
import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { blogArticles } from "@/app/blog/blogData";

export async function GET() {
  // If Contentful is not configured, return static fallback data
  if (!isContentfulConfigured) {
    return NextResponse.json({ posts: blogArticles });
  }
  
  // Try to fetch from Contentful
  const contentfulPosts = await getBlogPosts();
  
  // If Contentful returns empty (content type doesn't exist yet), use static fallback
  if (contentfulPosts.length === 0) {
    return NextResponse.json({ posts: blogArticles });
  }
  
  // Map Contentful posts to the expected format
  const posts = contentfulPosts.map((post: any) => {
    const fields = post.fields;
    return {
      slug: fields.slug,
      title: fields.title,
      excerpt: fields.excerpt,
      category: fields.category,
      date: fields.date ? fields.date.split("T")[0] : "",
      readTime: fields.readTime,
      image: fields.coverImage?.fields?.file?.url 
        ? `https:${fields.coverImage.fields.file.url}` 
        : "/kovasure.svg",
      tags: fields.tags || [],
      content: fields.content,
      author: fields.author || "Kovasure Team",
    };
  });
  
  return NextResponse.json({ posts });
}

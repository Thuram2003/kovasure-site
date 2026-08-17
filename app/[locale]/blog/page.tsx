import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListingClient, { UnifiedBlogPost } from "./BlogListingClient";
import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { blogArticles } from "./blogData";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  let posts: UnifiedBlogPost[] = [];

  // Try to fetch from Contentful if configured
  if (isContentfulConfigured) {
    const contentfulPosts = await getBlogPosts();
    if (contentfulPosts && contentfulPosts.length > 0) {
      posts = contentfulPosts.map((post: any) => {
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
          author: fields.author || "Kovasure Team",
        };
      });
    }
  }

  // Fallback to static data if no Contentful posts
  if (posts.length === 0) {
    posts = blogArticles;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white antialiased">
      <Header />
      <BlogListingClient posts={posts} />
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListingClient, { UnifiedBlogPost } from "./BlogListingClient";

async function getBlogPosts(): Promise<UnifiedBlogPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog`, {
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      return data.posts || [];
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
  return [];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white antialiased">
      <Header />
      <BlogListingClient posts={posts} />
      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MagnifyingGlass, Funnel, Article } from "@phosphor-icons/react";

export interface UnifiedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  author: string;
}

interface BlogListingClientProps {
  posts: UnifiedBlogPost[];
  initialLoading?: boolean;
}

const categories = ["all", "risk", "industry", "global", "compliance"];

// Skeleton Loader Component
function BlogCardSkeleton({ index }: { index: number }) {
  const indexStr = (index + 1).toString().padStart(2, "0");
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-white/5 p-6 min-h-[450px] relative overflow-hidden animate-pulse">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
          <span className="text-xs font-bold text-gray-300">{indexStr}</span>
        </div>

        <div className="relative h-48 w-full bg-gradient-to-br from-[#0024ff]/5 to-[#ffb41d]/5 rounded-2xl mb-4" />

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </div>
          <div className="h-5 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-5 w-3/5 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="space-y-2 pt-2">
            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800/50 rounded" />
            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800/50 rounded" />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="h-4 w-28 bg-blue-500/20 rounded" />
      </div>
    </div>
  );
}

// Empty State Component
function EmptyState({ searchQuery, selectedCategory, onReset }: { searchQuery: string; selectedCategory: string; onReset: () => void }) {
  const hasFilters = searchQuery !== "" || selectedCategory !== "all";

  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 border border-gray-100 dark:border-white/5 bg-white dark:bg-gray-900 rounded-3xl">
      <div className="flex flex-col items-center max-w-md text-center space-y-5">
        <div className="w-20 h-20 rounded-full bg-[#0024ff]/5 flex items-center justify-center">
          <Article className="w-10 h-10 text-[#0024ff]" weight="bold" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {hasFilters ? "No Matching Articles Found" : "No Blog Posts Available"}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {hasFilters 
              ? "Try adjusting your search or filter criteria to find what you're looking for."
              : "Check back soon for insights and updates on cargo insurance."
            }
          </p>
        </div>

        {hasFilters && (
          <button
            onClick={onReset}
            className="mt-2 px-6 py-3 bg-[#0024ff] hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all duration-300 cursor-pointer border-none shadow-[0_4px_15px_rgba(0,36,255,0.25)]"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}

export default function BlogListingClient({ posts, initialLoading = false }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const filteredPosts = posts.filter((post) => {
    const postCategory = post.category ? post.category.toLowerCase() : "";
    const matchesCategory = selectedCategory === "all" || postCategory === selectedCategory.toLowerCase();

    const titleText = post.title ? post.title.toLowerCase() : "";
    const excerptText = post.excerpt ? post.excerpt.toLowerCase() : "";
    const tagsArray = Array.isArray(post.tags) ? post.tags : [];
    const tagMatch = tagsArray.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesSearch =
      searchQuery === "" ||
      titleText.includes(searchQuery.toLowerCase()) ||
      excerptText.includes(searchQuery.toLowerCase()) ||
      tagMatch;

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-grow pt-16">

      {/* Premium Light/Split Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 md:py-32 overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0024ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
                Insights & Resources <br />
                <span className="text-[#0024ff] dark:text-blue-500">for Global Trade</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Expert perspectives on cargo insurance, risk management, compliance, and the evolving landscape of international shipping.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/personOffice.jpg"
                  alt="Cargo Insurance Blog & Resources"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTER BAR */}
      <section className="sticky top-16 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-100 dark:border-white/5 py-5 px-6 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" weight="bold" />
            <input
              type="text"
              placeholder="Search articles, topics, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/5 rounded-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#0024ff] focus:ring-2 focus:ring-[#0024ff]/20 text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide py-1">
            <Funnel className="w-4 h-4 text-gray-400 flex-shrink-0" weight="bold" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 border rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0024ff] border-[#0024ff] text-white shadow-[0_4px_15px_rgba(0,36,255,0.25)]"
                    : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {cat === "all" ? "All Topics" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 px-6 md:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <BlogCardSkeleton key={index} index={index} />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <EmptyState 
              searchQuery={searchQuery} 
              selectedCategory={selectedCategory}
              onReset={handleResetFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const indexStr = (index + 1).toString().padStart(2, "0");
                return (
                  <article
                    key={post.slug}
                    className="group bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-[#0024ff]/20 transition-all duration-300 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,36,255,0.06)] hover:-translate-y-1.5 flex flex-col min-h-[450px]"
                  >
                    <div>
                      <div className="p-6 pb-4">
                        <div className="flex items-center justify-between mb-4">
                          {/* Clean Category Label - No Badge background */}
                          <span className="text-[#0024ff] dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0024ff] dark:bg-blue-400" />
                            {post.category}
                          </span>
                          <span className="text-xs font-bold text-gray-400 group-hover:text-[#0024ff] transition-colors">
                            {indexStr}
                          </span>
                        </div>
                      </div>

                      <div className="relative h-48 bg-gradient-to-br from-[#0024ff]/5 to-[#ffb41d]/5 flex items-center justify-center overflow-hidden">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="relative w-24 h-24">
                            <Image
                              src="/kovasure.svg"
                              alt={post.title}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" weight="bold" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" weight="bold" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-[#0024ff] transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                        <span className="text-xs font-bold text-gray-500">
                          By {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-sm font-bold text-[#0024ff] hover:text-blue-700 gap-1.5 group/btn"
                        >
                          Read Article
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" weight="bold" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Dynamic Deep Blue Body Section (Newsletter CTA) */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-br from-[#0024ff] to-blue-900 text-white relative overflow-hidden rounded-[2.5rem] max-w-7xl mx-auto my-16 shadow-[0_20px_50px_rgba(0,36,255,0.2)] border border-white/5">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#ffb41d]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Subscribe to our newsletter and get the latest articles, trade regulation updates, and logistics compliance news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl pt-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white text-gray-900 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffb41d]"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#ffb41d] hover:bg-amber-500 text-gray-900 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer border-none shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="md:col-span-5 relative">
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/team.jpeg"
                alt="Kovasure Logistics Experts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/45 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MagnifyingGlass, Article } from "@phosphor-icons/react";

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

function BlogCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-none border border-gray-100 dark:border-white/5 p-5 animate-pulse">
      <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 mb-3" />
      <div className="h-36 bg-gray-100 dark:bg-gray-800 rounded-none mb-4" />
      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
      <div className="h-3 w-full bg-gray-100 dark:bg-gray-800/50 rounded mb-1" />
      <div className="h-3 w-2/3 bg-gray-100 dark:bg-gray-800/50 rounded" />
    </div>
  );
}

function EmptyState({ searchQuery, selectedCategory, onReset }: { searchQuery: string; selectedCategory: string; onReset: () => void }) {
  const hasFilters = searchQuery !== "" || selectedCategory !== "all";

  return (
    <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-none border border-gray-100 dark:border-white/5">
      <Article size={32} weight="bold" className="text-[#0024ff] mx-auto mb-3" />
      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
        {hasFilters ? "No Matching Articles" : "No Posts Yet"}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {hasFilters
          ? "Try adjusting your search or filters."
          : "Check back soon for cargo insurance insights."
        }
      </p>
      {hasFilters && (
        <button
          onClick={onReset}
          className="px-5 py-2.5 bg-[#0024ff] text-white text-sm font-semibold rounded-none hover:bg-blue-700 transition-colors cursor-pointer border-none"
        >
          Clear Filters
        </button>
      )}
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
      {/* Hero */}
      <section className="bg-slate-50 dark:bg-gray-950 py-20 md:py-28 border-b border-gray-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Insights & Resources <br />
                <span className="text-[#0024ff]">for Global Trade</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Cargo insurance, risk management, compliance, and shipping updates.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-[320px] w-full rounded-none overflow-hidden shadow-lg">
                <Image
                  src="/personOffice.jpg"
                  alt="Blog resources"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-16 z-20 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5 py-4 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <MagnifyingGlass size={18} weight="bold" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-none text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0024ff] text-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-none text-sm font-medium transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-[#0024ff] border-[#0024ff] text-white"
                    : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6 md:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <EmptyState
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onReset={handleResetFilters}
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-900 rounded-none border border-gray-100 dark:border-white/5 overflow-hidden flex flex-col"
                >
                  <div className="p-5 pb-3">
                    <span className="text-[#0024ff] text-xs font-semibold uppercase">
                      {post.category}
                    </span>
                  </div>

                  <div className="relative h-40 bg-gray-100 dark:bg-gray-800 mx-5 rounded-none overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Image
                          src="/kovasure.svg"
                          alt={post.title}
                          width={60}
                          height={60}
                          className="opacity-30"
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-2 flex-grow">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} weight="bold" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} weight="bold" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-white/5 mt-auto">
                    <span className="text-xs text-gray-500 pt-3">
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#0024ff] hover:text-blue-700 gap-1 pt-3"
                    >
                      Read <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
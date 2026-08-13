"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Article } from "@phosphor-icons/react";

export interface BlogPost {
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

// Skeleton Loader Component for Homepage Blog
function BlogCardSkeleton({ index }: { index: number }) {
  const indexStr = (index + 1).toString().padStart(2, "0");
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-white/5 p-6 min-h-[450px] relative overflow-hidden animate-pulse">
      <div>
        {/* Category + index skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
          <span className="font-mono text-xs font-bold text-gray-300">{indexStr}</span>
        </div>

        {/* Thumbnail skeleton */}
        <div className="relative h-48 w-full bg-gradient-to-br from-[#0024ff]/5 to-[#ffb41d]/5 rounded-xl mb-4" />

        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </div>
          <div className="h-5 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-5 w-3/5 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="space-y-2 pt-2">
            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800/50 rounded" />
            <div className="h-3 w-3/4 bg-gray-100 dark:bg-gray-800/50 rounded" />
          </div>
        </div>
      </div>

      {/* Read More skeleton */}
      <div className="pt-6">
        <div className="h-4 w-28 bg-blue-500/20 rounded" />
      </div>
    </div>
  );
}

// Empty State Component for Homepage Blog
function EmptyBlogState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 border border-gray-100 dark:border-white/5 bg-white dark:bg-gray-900 rounded-xl">
      <div className="flex flex-col items-center max-w-md text-center space-y-4">
        <div className="w-16 h-16 rounded-xl bg-[#0024ff]/5 flex items-center justify-center">
          <Article className="w-8 h-8 text-[#0024ff]" weight="bold" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            No Blog Posts Available
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Check back soon for insights and updates on cargo insurance.
          </p>
        </div>

        <Link
          href="/blog"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#0024ff] hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all duration-300"
        >
          Explore Blog
          <ArrowRight className="h-4 w-4" weight="bold" />
        </Link>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [sectionActive, setSectionActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("blog-section");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setSectionActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    async function loadPosts() {
      try {
        const res = await fetch("/api/blog");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && data.posts.length > 0) {
            setPosts(data.posts.slice(0, 3));
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load blog posts for home section:", err);
      }
      setPosts([]);
      setLoading(false);
    }
    loadPosts();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="blog-section"
      className={`w-full py-24 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-white/5 transition-all duration-700 transform translate-y-4 opacity-0 ${
        sectionActive ? "translate-y-0 opacity-100" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Latest Insights & <br />
              <span className="text-[#0024ff] dark:text-blue-500">Industry Updates</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Expert perspectives on cargo insurance, risk management, and global trade trends.
            </p>
          </div>
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0024ff] hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(0,36,255,0.25)]"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" weight="bold" />
            </Link>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {loading ? (
          // Loading State with Skeleton Loaders
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCardSkeleton key={index} index={index} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          // Empty State
          <EmptyBlogState />
        ) : (
          // Blog Posts Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const indexStr = (index + 1).toString().padStart(2, "0");
              return (
                <article
                  key={post.slug}
                  className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#0024ff]/20 transition-all duration-300 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,36,255,0.06)] hover:-translate-y-1.5 flex flex-col min-h-[450px]"
                >
                  <div>
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#0024ff] dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-[#0024ff] transition-colors">
                          {indexStr}
                        </span>
                      </div>
                    </div>

                    <div className="relative h-48 bg-gradient-to-br from-[#0024ff]/5 to-[#ffb41d]/5 flex items-center justify-center p-6">
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
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" weight="bold" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" weight="bold" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0024ff] transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-[#0024ff] hover:text-blue-700 gap-1.5 group/btn"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" weight="bold" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

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

function BlogCardSkeleton({ index }: { index: number }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 p-5 animate-pulse">
      <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
      <div className="h-36 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4" />
      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mb-3" />
      <div className="h-3 w-full bg-gray-100 dark:bg-gray-800/50 rounded mb-1" />
      <div className="h-3 w-2/3 bg-gray-100 dark:bg-gray-800/50 rounded" />
    </div>
  );
}

function EmptyBlogState() {
  return (
    <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5">
      <Article size={32} weight="bold" className="text-[#0024ff] mx-auto mb-3" />
      <h3 className="font-bold text-gray-900 dark:text-white mb-1">No Posts Yet</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Check back soon for cargo insurance insights.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0024ff] text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Explore Blog <ArrowRight size={14} weight="bold" />
      </Link>
    </div>
  );
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/api/blog");
        if (res.ok) {
          const data = await res.json();
          if (data.posts?.length > 0) {
            setPosts(data.posts.slice(0, 3));
          }
        }
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      }
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Latest Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Cargo insurance, risk management, and trade updates.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0024ff] text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            View All <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <BlogCardSkeleton key={i} index={i} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <EmptyBlogState />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 overflow-hidden flex flex-col"
              >
                <div className="p-5 pb-3">
                  <span className="text-[#0024ff] text-xs font-semibold uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="relative h-40 bg-gray-100 dark:bg-gray-800 mx-5 rounded-lg overflow-hidden">
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

                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-5 pb-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#0024ff] hover:text-blue-700 gap-1"
                  >
                    Read Article <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
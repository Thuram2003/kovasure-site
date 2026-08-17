"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "@phosphor-icons/react";
import { blogArticles } from "../blogData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

interface BlogArticleClientProps {
    slug: string;
    initialPost: any | null;
}

const renderOptions = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {children}
            </p>
        ),
        [BLOCKS.HEADING_1]: (node: any, children: any) => (
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
                {children}
            </h1>
        ),
        [BLOCKS.HEADING_2]: (node: any, children: any) => (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-8">
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_3]: (node: any, children: any) => (
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
                {children}
            </h3>
        ),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
            <ul className="list-disc list-inside mb-5 space-y-2 text-gray-700 dark:text-gray-300">
                {children}
            </ul>
        ),
        [BLOCKS.OL_LIST]: (node: any, children: any) => (
            <ol className="list-decimal list-inside mb-5 space-y-2 text-gray-700 dark:text-gray-300">
                {children}
            </ol>
        ),
        [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
            <li className="ml-4">{children}</li>
        ),
        [BLOCKS.QUOTE]: (node: any, children: any) => (
            <blockquote className="border-l-4 border-[#0024ff] pl-5 italic my-6 text-gray-600 dark:text-gray-400">
                {children}
            </blockquote>
        ),
        [INLINES.HYPERLINK]: (node: any, children: any) => (
            <a
                href={node.data.uri}
                className="text-[#0024ff] hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { file, description } = node.data.target.fields;
            return (
                <div className="my-8">
                    <div className="relative w-full h-64 md:h-96 border border-gray-200 dark:border-white/10 overflow-hidden">
                        <Image
                            src={`https:${file.url}`}
                            alt={description || "Article image"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                            {description}
                        </p>
                    )}
                </div>
            );
        },
    },
};

export default function BlogArticleClient({
    slug,
    initialPost,
}: BlogArticleClientProps) {
    const [post, setPost] = useState(initialPost);
    const [isLoading, setIsLoading] = useState(!initialPost);

    const fallbackPost = blogArticles.find((article) => article.slug === slug);

    useEffect(() => {
        if (!initialPost && !fallbackPost) {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 300);
            return () => clearTimeout(timer);
        }
    }, [initialPost, fallbackPost]);

    const displayPost = post?.fields ||
        (fallbackPost
            ? {
                title: fallbackPost.title,
                excerpt: fallbackPost.excerpt,
                category: fallbackPost.category,
                date: fallbackPost.date,
                readTime: fallbackPost.readTime,
                coverImage: { fields: { file: { url: fallbackPost.image } } },
                tags: fallbackPost.tags,
                author: fallbackPost.author,
                content: null,
            }
            : null);

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712]">
                <Header />
                <main className="flex-grow pt-16">
                    <div className="mx-auto max-w-4xl px-6 md:px-8 py-16">
                        <div className="animate-pulse space-y-6">
                            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800" />
                            <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800" />
                            <div className="h-64 bg-gray-100 dark:bg-gray-800" />
                            <div className="space-y-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="h-4 bg-gray-100 dark:bg-gray-800/50" />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!displayPost) {
        return (
            <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712]">
                <Header />
                <main className="flex-grow pt-16">
                    <div className="mx-auto max-w-4xl px-6 md:px-8 py-20 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Article Not Found
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            The article you’re looking for doesn’t exist or has been removed.
                        </p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                            <ArrowLeft size={18} weight="bold" />
                            Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const imageUrl =
        displayPost.coverImage?.fields?.file?.url || fallbackPost?.image;
    const fullImageUrl = imageUrl?.startsWith("//")
        ? `https:${imageUrl}`
        : imageUrl;

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
            <Header />

            <main className="flex-grow pt-16">
                {/* Back bar */}
                <div className="bg-white dark:bg-[#030712] border-b border-gray-200 dark:border-white/10 py-4 px-6 md:px-8 sticky top-16 z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0024ff] transition-colors"
                        >
                            <ArrowLeft size={16} weight="bold" />
                            Back to Blog
                        </Link>
                    </div>
                </div>

                {/* Article */}
                <article className="py-12 px-6 md:px-8">
                    <div className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-10">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0024ff] bg-[#0024ff]/10 uppercase tracking-wide mb-5">
                                {displayPost.category}
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                                {displayPost.title}
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {displayPost.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400 border-t border-b border-gray-200 dark:border-white/10 py-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={16} weight="bold" />
                                    {displayPost.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={16} weight="bold" />
                                    {displayPost.readTime}
                                </span>
                                {displayPost.author && (
                                    <span>By {displayPost.author}</span>
                                )}
                            </div>
                        </div>

                        {/* Cover Image */}
                        {fullImageUrl && (
                            <div className="relative h-72 md:h-[460px] border border-gray-200 dark:border-white/10 overflow-hidden mb-12">
                                <Image
                                    src={fullImageUrl}
                                    alt={displayPost.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="max-w-none">
                            {displayPost.content ? (
                                documentToReactComponents(displayPost.content, renderOptions)
                            ) : (
                                <div className="space-y-5 text-gray-700 dark:text-gray-300">
                                    <p>
                                        This article provides comprehensive insights into{" "}
                                        {displayPost.title.toLowerCase()}. Our team of experts has
                                        compiled essential information to help you understand the key
                                        concepts and practical applications.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                                        Key Insights
                                    </h2>
                                    <p>
                                        Understanding {displayPost.category} is crucial for successful
                                        international trade operations. This guide covers the
                                        fundamental aspects you need to know to protect your cargo and
                                        manage risk effectively.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                                        Why It Matters
                                    </h2>
                                    <p>
                                        In today’s global marketplace, having the right knowledge and
                                        tools for cargo protection is essential. This article explores
                                        best practices and industry standards that can help you make
                                        informed decisions.
                                    </p>
                                    <div className="mt-10 p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400 italic">
                                        For the full article content, please check back soon or
                                        contact our team for more detailed information about{" "}
                                        {displayPost.title.toLowerCase()}.
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tags */}
                        {displayPost.tags &&
                            Array.isArray(displayPost.tags) &&
                            displayPost.tags.length > 0 && (
                                <div className="mt-14 pt-8 border-t border-gray-200 dark:border-white/10">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <Tag size={18} weight="bold" className="text-gray-400" />
                                        {displayPost.tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                        {/* CTA */}
                        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Need Cargo Insurance?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                Protect your shipments with comprehensive coverage. Get clear
                                quotes and straightforward claims support.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
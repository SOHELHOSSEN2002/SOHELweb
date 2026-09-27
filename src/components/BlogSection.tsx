import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';
import { blogPostsData as defaultBlogPostsData } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  lang: 'bn' | 'en';
  blogPosts?: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  lang,
  blogPosts = defaultBlogPostsData
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts = blogPosts.length > 0 ? blogPosts : defaultBlogPostsData;
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <section id="blog" className="py-20 bg-slate-50/70 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'নলেজ হাব ও মার্কেটিং ব্লগ' : 'Digital Marketing Insights'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {lang === 'bn'
              ? 'ডিজিটাল মার্কেটিং ও গ্রোথ হ্যাকিং আর্টিকেল'
              : 'Actionable Articles & Growth Strategies'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'নিচে প্রথমে বড় ছবিসহ ফিচার্ড ব্লগ এবং মার্কেটিংয়ের সর্বশেষ টিপস দেওয়া হলো।'
              : 'Real-world case lessons, media buying formulas, and algorithmic algorithm insights.'}
          </p>
        </div>

        {/* 1. Featured Blog: First a large picture, then blog name, details as requested */}
        {featuredPost && (
          <div className="mb-12 bg-white rounded-3xl border border-sky-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            {/* Big Prominent Image on Top as requested */}
            <div className="relative h-64 sm:h-96 w-full bg-slate-900 overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                {lang === 'bn' ? 'ফিচার্ড আর্টিকেল' : 'Featured Post'}
              </div>
            </div>

            {/* Content Below the Big Image */}
            <div className="p-6 sm:p-10 space-y-4">
              {/* Unboxed Metadata with Typographic Separator */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-sky-700 font-semibold">
                  {lang === 'bn' ? featuredPost.categoryBn : featuredPost.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? featuredPost.publishDateBn : featuredPost.publishDate}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? featuredPost.readTimeBn : featuredPost.readTime}</span>
                </span>
              </div>

              {/* Blog Title */}
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">
                {lang === 'bn' ? featuredPost.titleBn : featuredPost.title}
              </h3>

              {/* Detailed Overview */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
                {lang === 'bn' ? featuredPost.excerptBn : featuredPost.excerpt}
              </p>

              {/* Read More Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedPost(featuredPost)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'সম্পূর্ণ আর্টিকেলটি পড়ুন' : 'Read Full Article'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col group"
            >
              <div className="relative h-52 bg-slate-900 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-sky-900 shadow-xs">
                  {lang === 'bn' ? post.categoryBn : post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{lang === 'bn' ? post.publishDateBn : post.publishDate}</span>
                    <span>·</span>
                    <span>{lang === 'bn' ? post.readTimeBn : post.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {lang === 'bn' ? post.titleBn : post.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? post.excerptBn : post.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-800 cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'বিস্তারিত পড়ুন →' : 'Read Article →'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-sky-100 max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {lang === 'bn' ? selectedPost.categoryBn : selectedPost.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {lang === 'bn' ? selectedPost.titleBn : selectedPost.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <span>{lang === 'bn' ? selectedPost.publishDateBn : selectedPost.publishDate}</span>
                  <span>·</span>
                  <span>{lang === 'bn' ? selectedPost.readTimeBn : selectedPost.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors shrink-0 ml-4"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Image */}
            <div className="relative h-64 my-6 rounded-xl overflow-hidden bg-slate-900">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {(lang === 'bn' ? selectedPost.contentBn : selectedPost.content).map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'font-medium text-slate-900' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover border border-sky-200"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900">{selectedPost.author.name}</p>
                  <p className="text-[10px] text-slate-500">{selectedPost.author.role}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

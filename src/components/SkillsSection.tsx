import React, { useState } from 'react';
import {
  Share2,
  Youtube,
  Instagram,
  Video,
  Megaphone,
  Search,
  BarChart2,
  FileText,
  CheckCircle,
  Layers
} from 'lucide-react';
import { skillsData as defaultSkillsData } from '../data/portfolioData';
import { Skill } from '../types';

interface SkillsSectionProps {
  lang: 'bn' | 'en';
  skills?: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  lang,
  skills = defaultSkillsData
}) => {
  const [filter, setFilter] = useState<'all' | 'paid' | 'social' | 'organic'>('all');

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Share2 className="w-5 h-5 text-sky-600" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5 text-red-500" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-slate-800" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-amber-500" />;
      case 'Search':
        return <Search className="w-5 h-5 text-sky-600" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-indigo-600" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-sky-600" />;
    }
  };

  const filteredSkills = skills.filter((skill) => {
    if (filter === 'all') return true;
    if (filter === 'paid') return skill.category === 'paid';
    if (filter === 'social') return skill.category === 'social';
    if (filter === 'organic') return skill.category === 'organic' || skill.category === 'analytics';
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-slate-50/70 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'আমার দক্ষতা ও পারদর্শিতা' : 'My Core Competencies'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {lang === 'bn'
              ? 'আইকনসহ প্রমাণিত ডিজিটাল মার্কেটিং স্কিলস'
              : 'Proven Digital Marketing & Performance Skills'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক, গুগল অ্যাডস এবং এসইও অপ্টিমাইজেশনের মাধ্যমে ব্যবসায় কাঙ্ক্ষিত প্রবৃদ্ধি অর্জনে ব্যবহৃত টুলস ও প্রযুক্তি।'
              : 'Targeted expertise across paid media buying, search algorithms, short-form viral video, and conversion rate optimization.'}
          </p>

          {/* Interactive Filter Tabs (Constitution compliant segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-sky-200 rounded-xl mt-8 shadow-2xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'সকল দক্ষতা (All)' : 'All Skills'}
            </button>
            <button
              onClick={() => setFilter('paid')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'paid'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'পেইড মিডিয়া ও অ্যাডস' : 'Paid Ads & PPC'}
            </button>
            <button
              onClick={() => setFilter('social')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'social'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'সোশ্যাল মিডিয়া (YT/IG/TikTok)' : 'Social Marketing'}
            </button>
            <button
              onClick={() => setFilter('organic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'organic'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'এসইও ও অ্যানালিটিক্স' : 'SEO & Analytics'}
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Proficiency Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-sky-900 tabular-nums">
                      {skill.proficiency}%
                    </span>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {lang === 'bn' ? 'অভিজ্ঞতা:' : 'Exp:'} {skill.experience}
                    </p>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {lang === 'bn' ? skill.nameBn : skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {lang === 'bn' ? skill.descriptionBn : skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
                  <div
                    className="bg-gradient-to-r from-sky-400 to-sky-600 h-full rounded-full transition-all duration-700"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>

                {/* Unboxed tags (zero-pill discipline: subtle typographic text items) */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                  {skill.tags.map((tag, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-slate-600 font-medium">{tag}</span>
                      {idx < skill.tags.length - 1 && <span className="text-slate-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>{lang === 'bn' ? 'বিজ্ঞাপনের সঠিক ফানেল সেটআপ করতে চান?' : 'Need an End-to-End Marketing Funnel Audit?'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              {lang === 'bn'
                ? 'আমি আপনার বর্তমান ফেসবুক ও গুগল অ্যাডস অ্যাকাউন্ট সম্পূর্ণ বিনামূল্যে অডিট করে গ্রোথ প্ল্যান দেব।'
                : 'I offer a complimentary 30-minute growth audit for existing Meta & Google Ad accounts.'}
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            {lang === 'bn' ? 'ফ্রি অডিট রিকোয়েস্ট করুন' : 'Request Free Account Audit'}
          </a>
        </div>
      </div>
    </section>
  );
};

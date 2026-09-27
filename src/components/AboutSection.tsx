import React, { useState } from 'react';
import { User, CheckCircle2, Award, Briefcase, GraduationCap, ArrowRight, X, ExternalLink } from 'lucide-react';
import { personalInfo as defaultPersonalInfo } from '../data/portfolioData';
import { PersonalInfo } from '../types';

interface AboutSectionProps {
  lang: 'bn' | 'en';
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  personalInfo?: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  isModalOpen,
  setIsModalOpen,
  personalInfo = defaultPersonalInfo
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'certs'>('overview');

  const processes = [
    {
      step: '01',
      title: 'Audience & Competitor Research',
      titleBn: 'অডিয়েন্স ও প্রতিযোগী অ্যানালাইসিস',
      desc: 'Deep-dive audit into customer persona, competitors’ active ad creative library, and identifying market gaps.',
      descBn: 'টার্গেট কাস্টমারদের বিহেভিয়র এবং প্রতিদ্বন্দ্বীদের বিজ্ঞাপনের লাইব্রেরি অডিট করে কার্যকর কৌশল তৈরি।'
    },
    {
      step: '02',
      title: 'Full-Funnel Creative Strategy',
      titleBn: 'ফানেল ও ক্রিয়েটিভ স্ট্র্যাটেজি',
      desc: 'Crafting hook-rich video briefs, high-converting ad copy angles, and high-CTR visual designs.',
      descBn: 'আকর্ষণীয় হুক, সাইকোলজিক্যাল অ্যাড কপি এবং হাই-কনভার্টিং ব্যানার ও রিলস ভিডিও প্ল্যানিং।'
    },
    {
      step: '03',
      title: 'Pixel & CAPI Technical Tracking',
      titleBn: 'পিক্সেল ও সার্ভার ট্র্যাকিং সেটআপ',
      desc: 'Configuring Meta Conversion API (CAPI), GA4 purchase events, and server-side tracking for zero data loss.',
      descBn: 'মেটা পিক্সেল ও গুগল অ্যানালিটিক্স ৪ এর মাধ্যমে ১০০% নিখুঁত ইভেন্ট ও সেলস ট্র্যাকিং নিশ্চিত করা।'
    },
    {
      step: '04',
      title: 'Testing, Optimization & Scaling',
      titleBn: 'টেস্টিং ও প্রফিটেবল স্কেলিং',
      desc: 'Systematic 3:2:2 dynamic creative testing, cutting losing ad sets, and scaling budget aggressively into winners.',
      descBn: 'নিয়মিত এ/বি টেস্টিং এবং সবচেয়ে বেশি লাভজনক ক্যাম্পেইনে বাজেট বাড়িয়ে আরওএএস (ROAS) বাড়ানো।'
    }
  ];

  const certifications = [
    {
      title: 'Meta Certified Media Buying Professional',
      titleBn: 'মেটা সার্টিফাইড মিডিয়া বায়িং প্রফেশনাল',
      issuer: 'Meta Blueprint',
      year: '2024 - 2026',
      badge: 'Certified'
    },
    {
      title: 'Google Ads Search & Measurement Certified',
      titleBn: 'গুগল অ্যাডস সার্চ ও মেজারমেন্ট সার্টিফিকেশন',
      issuer: 'Google Skillshop',
      year: '2024 - 2026',
      badge: 'Certified'
    },
    {
      title: 'HubSpot Inbound Marketing & SEO Specialist',
      titleBn: 'হাবস্পট ইনবাউন্ড মার্কেটিং ও এসইও স্পেশালিস্ট',
      issuer: 'HubSpot Academy',
      year: '2025 - Present',
      badge: 'Certified'
    },
    {
      title: 'SEMrush Technical SEO & Keyword Masterclass',
      titleBn: 'এসইএমরাশ টেকনিক্যাল এসইও মাস্টারক্লাস',
      issuer: 'SEMrush Academy',
      year: '2024 - Present',
      badge: 'Certified'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'আমার সম্পর্কে জানুন' : 'About Myself'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {lang === 'bn'
              ? 'ডিজিটাল মার্কেটিংয়ে ডেডিকেটেড গ্রোথ পার্টনার'
              : 'Dedicated Digital Growth & Marketing Strategist'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'ডাটা, ক্রিয়েটিভিটি এবং নিখুঁত ফানেলের সমন্বয়ে ব্যবসায় স্থায়ী বিক্রি বাড়ানোই আমার একমাত্র লক্ষ্য।'
              : 'Combining data-driven strategy, psychological ad creatives, and tight conversion funnels to maximize client profit.'}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-sky-50/60 to-white p-6 sm:p-8 rounded-2xl border border-sky-100 shadow-xs">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-sky-300 shadow-sm shrink-0">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'bn' ? personalInfo.nameBn : personalInfo.name}
                </h3>
                <p className="text-xs font-semibold text-sky-600">
                  {lang === 'bn' ? personalInfo.titleBn : personalInfo.title}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'bn' ? personalInfo.locationBn : personalInfo.location}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-sky-100 pt-5">
              <p>
                {lang === 'bn'
                  ? 'বিগত ৫ বছর ধরে আমি ৫০টিরও বেশি দেশি ও আন্তর্জাতিক ই-কমার্স এবং সার্ভিস বিজনেসের জন্য পেইড অ্যাডস এবং অর্গানিক এসইও পরিচালনা করে আসছি।'
                  : 'For over 5 years, I have engineered paid media and organic search infrastructure for 50+ e-commerce brands and high-ticket service companies.'}
              </p>
              <p>
                {lang === 'bn'
                  ? 'বিজ্ঞাপনের মূল রহস্য শুধু বাজেট খরচ করা নয়, বরং সঠিক ক্রেতাকে আকর্ষণীয় অফার দিয়ে কনভার্ট করা।'
                  : 'Effective digital marketing is never just about throwing ad dollars; it requires precision targeting, messaging resonance, and server-side tracking.'}
              </p>
            </div>

            {/* Quick Highlights Checkmarks */}
            <div className="mt-6 space-y-2.5 pt-5 border-t border-sky-100">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? 'মেটা ব্লুপ্রিন্ট ও গুগল অ্যাডস সার্টিফাইড এক্সপার্ট' : 'Meta Blueprint & Google Ads Certified'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? '১০০% স্বচ্ছ ট্র্যাকিং ও সাপ্তাহিক বিস্তারিত অ্যানালিটিক্স রিপোর্ট' : 'Transparent Weekly Analytics & ROI Dashboards'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? '২৪/৭ ক্লায়েন্ট সাপোর্ট ও ডেডিকেটেড স্ট্র্যাটেজি কল' : 'Dedicated Strategic Consultation & WhatsApp Support'}</span>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>{lang === 'bn' ? 'সম্পূর্ণ প্রোফাইল ও বিস্তারিত জানুন' : 'Learn More & Full Bio'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Tabbed Content (Process / Certifications / Value) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tabs Bar (Interactive filter controls allowed by constitution) */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'আমার কাজের দর্শন' : 'My Philosophy'}</span>
              </button>

              <button
                onClick={() => setActiveTab('process')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'process'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'কাজের ৪টি ধাপ' : '4-Step Process'}</span>
              </button>

              <button
                onClick={() => setActiveTab('certs')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'certs'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'সার্টিফিকেশন' : 'Certifications'}</span>
              </button>
            </div>

            {/* Tab 1: Overview & Philosophy */}
            {activeTab === 'overview' && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-sky-100 shadow-xs space-y-5">
                <h4 className="text-lg font-bold text-slate-900">
                  {lang === 'bn' ? 'ব্যবসায়িক বিক্রি ও ব্র্যান্ড ভ্যালু বাড়ানোর বৈজ্ঞানিক ফর্মুলা' : 'Scientific Formula for Scalable Revenue'}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {lang === 'bn' ? personalInfo.bioFullBn : personalInfo.bioFullEn}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                    <p className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                      {lang === 'bn' ? 'প্রধান ফোকাস' : 'Primary Focus'}
                    </p>
                    <p className="text-slate-800 text-sm font-semibold mt-1">
                      {lang === 'bn' ? 'উচ্চ আরওএএস (ROAS) ও কম খরচে কোয়ালিটি কাস্টমার' : 'High ROAS & Lower Customer Acquisition Cost (CAC)'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                    <p className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                      {lang === 'bn' ? 'গ্যারান্টি' : 'Commitment'}
                    </p>
                    <p className="text-slate-800 text-sm font-semibold mt-1">
                      {lang === 'bn' ? '১০০% খাঁটি ডাটা-ড্রিভেন সিদ্ধান্ত ও শূন্য অপচয়' : '100% Transparent Data & Zero Wasted Ad Spend'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: 4-Step Process */}
            {activeTab === 'process' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processes.map((item) => (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white border border-sky-100 shadow-2xs hover:border-sky-200 transition-colors"
                  >
                    <span className="text-xs font-bold text-sky-600 tracking-wider">
                      {item.step}
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mt-1">
                      {lang === 'bn' ? item.titleBn : item.title}
                    </h5>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {lang === 'bn' ? item.descBn : item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Certifications */}
            {activeTab === 'certs' && (
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-white border border-sky-100 shadow-2xs hover:border-sky-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">
                          {lang === 'bn' ? cert.titleBn : cert.title}
                        </h5>
                        <p className="text-xs text-slate-500">
                          {cert.issuer} · {cert.year}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Learn More Full Bio Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-sky-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-sky-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'bn' ? 'আমার বিস্তারিত প্রোফাইল' : 'Full Marketer Profile'}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 py-5 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>{lang === 'bn' ? 'নাম:' : 'Name:'}</strong>{' '}
                {lang === 'bn' ? personalInfo.nameBn : personalInfo.name}
              </p>
              <p>
                <strong>{lang === 'bn' ? 'পদবী:' : 'Designation:'}</strong>{' '}
                {lang === 'bn' ? personalInfo.titleBn : personalInfo.title}
              </p>
              <p>
                <strong>{lang === 'bn' ? 'ঠিকানা:' : 'Location:'}</strong>{' '}
                {lang === 'bn' ? personalInfo.locationBn : personalInfo.location}
              </p>
              <p>
                <strong>{lang === 'bn' ? 'ইমেইল:' : 'Email:'}</strong> {personalInfo.email}
              </p>
              <p>
                <strong>{lang === 'bn' ? 'হোয়াটসঅ্যাপ:' : 'WhatsApp:'}</strong>{' '}
                {personalInfo.whatsappDisplay}
              </p>

              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">
                  {lang === 'bn' ? 'ক্যারিয়ার মিশন ও ভিশন:' : 'Career Mission & Vision:'}
                </h4>
                <p>
                  {lang === 'bn'
                    ? 'ছোট ও মাঝারি উদ্যোক্তাদের ডিজিটাল বিজ্ঞাপনে লোকসান থেকে রক্ষা করে একটি টেকসই এবং প্রফিটেবল সেলস ফানেল তৈরি করে দেওয়া। বাংলাদেশের লোকাল ব্র্যান্ডগুলোকে আন্তর্জাতিক মানের ব্র্যান্ডিং ও আরওএএস অর্জনে সাহায্য করাই আমার পেশাগত অঙ্গীকার।'
                    : 'To bridge the gap between creative visual storytelling and algorithmic media buying precision, unlocking sustainable ROAS for modern e-commerce brands.'}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">
                  {lang === 'bn' ? 'শিক্ষাগত যোগ্যতা:' : 'Educational Background:'}
                </h4>
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      {lang === 'bn' ? 'বিএসসি ইন ইঞ্জিনিয়ারিং' : 'B.Sc. in Engineering'}
                    </p>
                    <p className="text-xs text-slate-500">
                      {lang === 'bn' ? 'অ্যানালাইটিক্যাল থিংকিং, ডাটা ও টেকনোলজি ব্যাকগ্রাউন্ড' : 'Strong analytical, technical, and data engineering foundation.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <a
                href="#resume"
                onClick={() => {
                  setIsModalOpen(false);
                  document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
              >
                {lang === 'bn' ? 'রেজুমে দেখুন' : 'View Resume'}
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
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

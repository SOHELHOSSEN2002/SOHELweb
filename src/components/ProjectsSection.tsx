import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, Check, Award, Layers, TrendingUp } from 'lucide-react';
import { projectsData as defaultProjectsData } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  lang: 'bn' | 'en';
  projects?: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  projects = defaultProjectsData
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = projects.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 bg-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'সাম্প্রতিক কাজের পোর্টফোলিও' : 'Featured Case Studies'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {lang === 'bn' ? 'সফল প্রজেক্ট ও লাইভ ক্যাম্পেইন রেজাল্ট' : 'Recent Projects & Measurable Results'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'প্রতিটি লাইনে তিনটি করে প্রজেক্ট সাজানো রয়েছে। বিস্তারিত জানতে "বিস্তারিত জানুন" বাটনে ক্লিক করুন।'
              : 'Each project represents real advertising budget management, conversion optimization, and tangible revenue growth.'}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-sky-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'সকল প্রজেক্ট (All)' : 'All Projects'}
            </button>
            <button
              onClick={() => setActiveCategory('meta')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'meta'
                  ? 'bg-white text-sky-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'মেটা ও ফেসবুক' : 'Meta Ads'}
            </button>
            <button
              onClick={() => setActiveCategory('youtube')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'youtube'
                  ? 'bg-white text-sky-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'ইউটিউব গ্রোথ' : 'YouTube Growth'}
            </button>
            <button
              onClick={() => setActiveCategory('seo')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'seo'
                  ? 'bg-white text-sky-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'এসইও র‍্যাংকিং' : 'SEO Ranking'}
            </button>
            <button
              onClick={() => setActiveCategory('tiktok')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'tiktok'
                  ? 'bg-white text-sky-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'bn' ? 'টিকটক ভিডিও' : 'TikTok Ads'}
            </button>
          </div>
        </div>

        {/* 3 Projects per row Grid as requested: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col group"
            >
              {/* 1. Project Image at the top */}
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-sky-900 shadow-xs">
                  {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* 2. Project Name */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {lang === 'bn' ? project.titleBn : project.title}
                  </h3>

                  {/* 3. Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {lang === 'bn' ? project.shortDescBn : project.shortDesc}
                  </p>

                  {/* Highlight Metric */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {lang === 'bn' ? project.results[0]?.labelBn : project.results[0]?.label}:
                    </span>
                    <span className="font-bold text-sky-600 tabular-nums">
                      {project.results[0]?.value}
                    </span>
                  </div>
                </div>

                {/* 4. Learn More Button */}
                <div className="mt-6 pt-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-600 text-sky-800 hover:text-white font-semibold text-xs transition-all duration-200 cursor-pointer border border-sky-100 hover:border-sky-600 group/btn"
                  >
                    <span>{lang === 'bn' ? 'বিস্তারিত জানুন (Learn More)' : 'Learn More Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal (Opened by Learn More Button) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-sky-100 max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {lang === 'bn' ? selectedProject.categoryLabelBn : selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {lang === 'bn' ? selectedProject.titleBn : selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {selectedProject.client} · {selectedProject.duration}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-72 my-5 rounded-xl overflow-hidden bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metrics Showcase Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-sky-50 rounded-xl border border-sky-100 mb-6">
              {selectedProject.results.map((res, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-lg sm:text-xl font-bold text-sky-900 tabular-nums">
                    {res.value}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {lang === 'bn' ? res.labelBn : res.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Full Description & Strategy */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-sky-600" />
                <span>{lang === 'bn' ? 'ক্যাম্পেইন স্ট্র্যাটেজি ও কাজের বিবরণ:' : 'Campaign Strategy & Execution:'}</span>
              </h4>
              <p>
                {lang === 'bn' ? selectedProject.fullDescBn : selectedProject.fullDesc}
              </p>

              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'bn' ? 'ব্যবহৃত টুলস ও প্ল্যাটফর্ম:' : 'Tools & Technologies Used:'}</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {selectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-100 font-medium border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => {
                  setSelectedProject(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-sky-600 hover:text-sky-800 underline"
              >
                {lang === 'bn' ? 'অনুরূপ প্রজেক্ট নিয়ে আলোচনা করুন →' : 'Discuss a similar project →'}
              </a>

              <button
                onClick={() => setSelectedProject(null)}
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

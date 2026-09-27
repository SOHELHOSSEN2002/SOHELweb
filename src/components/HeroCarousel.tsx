import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Award, TrendingUp, Sparkles, Send } from 'lucide-react';
import { personalInfo as defaultPersonalInfo, carouselSlides as defaultCarouselSlides } from '../data/portfolioData';
import { PersonalInfo, CarouselSlide } from '../types';

interface HeroCarouselProps {
  lang: 'bn' | 'en';
  onLearnMoreClick: () => void;
  personalInfo?: PersonalInfo;
  carouselSlides?: CarouselSlide[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  lang,
  onLearnMoreClick,
  personalInfo = defaultPersonalInfo,
  carouselSlides = defaultCarouselSlides
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeSlides = carouselSlides.length > 0 ? carouselSlides : defaultCarouselSlides;

  // Make sure currentSlide is in bounds if slide list shrinks
  useEffect(() => {
    if (currentSlide >= activeSlides.length) {
      setCurrentSlide(0);
    }
  }, [activeSlides.length, currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  }, [activeSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = activeSlides[currentSlide] || activeSlides[0];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-slate-950">
      {/* Main Full-Bleed Hero Banner Carousel - Styled like Jackson/Alime Photography Portfolio in Image 2 */}
      <div
        className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Image with Smooth Crossfade */}
        {activeSlides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center sm:object-[center_30%]"
            />
            {/* Cinematic Gradient Overlays to match Image 2's high readability & ambient mood */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/20 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
          </div>
        ))}

        {/* Carousel Floating Navigation Buttons on Left & Right Edges as in Image 2 */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg group"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg group"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Hero Content Container - Exact Typography & Alignment from Image 2 */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full py-16 sm:py-24">
          <div className="max-w-2xl sm:max-w-3xl space-y-5 sm:space-y-6">
            {/* Top Tag / Pill Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'bn' ? slide.badgeBn : slide.badge}</span>
              <span className="text-white/30">·</span>
              <span className="text-emerald-400 font-semibold">{lang === 'bn' ? '৫+ বছর অভিজ্ঞতা' : '5+ Years Exp'}</span>
            </div>

            {/* Big Typography matching "Hello \n I'm Jackson" */}
            <div>
              {/* "Hello" in warm peach / soft coral */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fba888] drop-shadow-sm select-none">
                {lang === 'bn' ? (slide.greetingBn || 'হ্যালো') : (slide.greeting || 'Hello')}
              </h2>

              {/* "I'm Sohel" in crisp bold white */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-tight sm:leading-none mt-1 sm:mt-2 drop-shadow-md">
                {lang === 'bn'
                  ? (slide.heroTitleBn || 'আমি সোহেল')
                  : (slide.heroTitle || "I'm Sohel")}
              </h1>

              {/* Sub-badge / Title */}
              <p className="text-sky-300 font-semibold text-sm sm:text-lg mt-3 tracking-wide">
                {lang === 'bn' ? personalInfo.titleBn : personalInfo.title}
              </p>
            </div>

            {/* Paragraph Bio from Image 2 */}
            <p className="text-slate-200/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl drop-shadow-sm">
              {lang === 'bn' ? slide.descriptionBn : slide.description}
            </p>

            {/* Action Row: "Get A Quote" pill button + Underlined Email link directly beside it */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-3 sm:pt-4">
              {/* Rounded pill border button "Get A Quote" as in Image 2 */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full border-2 border-[#fba888] hover:bg-[#fba888] text-white hover:text-slate-950 px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <span>{lang === 'bn' ? 'কোটেশন নিন (Get A Quote)' : 'Get A Quote'}</span>
              </a>

              {/* Underlined Italic Email link matching hello.alime@gmail.com in Image 2 */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white hover:text-[#fba888] italic underline underline-offset-8 text-sm sm:text-base font-light tracking-wide transition-colors cursor-pointer drop-shadow-sm"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Secondary actions: Explore Projects & Learn More */}
            <div className="flex items-center gap-4 pt-3 text-xs sm:text-sm text-slate-300">
              <button
                onClick={onLearnMoreClick}
                className="hover:text-sky-400 font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{lang === 'bn' ? 'আমার সম্পর্কে আরও জানুন →' : 'Learn More About Me →'}</span>
              </button>
              <span className="text-slate-600">|</span>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-sky-400 font-medium transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'প্রজেক্ট দেখুন' : 'Explore Projects'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slide Indicators (Dots & Counter) */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-2">
          {activeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-[#fba888]' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Global Key Figures Bar - Clean, unboxed modern metrics below hero */}
      <div className="bg-slate-900 border-t border-slate-800 text-white py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 text-center sm:text-left border-r border-slate-800/80 last:border-r-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-sky-400 tabular-nums">
              {personalInfo.experienceYears}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {lang === 'bn' ? 'বছরের প্রফেশনাল অভিজ্ঞতা' : 'Years Professional Experience'}
            </p>
          </div>

          <div className="p-3 text-center sm:text-left border-r border-slate-800/80 last:border-r-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-sky-400 tabular-nums">
              {personalInfo.adSpendManaged}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {lang === 'bn' ? 'পরিচালিত অ্যাড স্পেন্ড' : 'Total Ad Spend Managed'}
            </p>
          </div>

          <div className="p-3 text-center sm:text-left border-r border-slate-800/80 last:border-r-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-sky-400 tabular-nums">
              {personalInfo.satisfiedClients}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {lang === 'bn' ? 'সন্তুষ্ট ক্লায়েন্ট ও ব্র্যান্ড' : 'Satisfied Global Clients'}
            </p>
          </div>

          <div className="p-3 text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#fba888] tabular-nums">
              {personalInfo.avgROAS}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {lang === 'bn' ? 'গড় রিটার্ন অন অ্যাড স্পেন্ড (ROAS)' : 'Average Return On Ad Spend'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

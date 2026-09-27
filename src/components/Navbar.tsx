import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { personalInfo as defaultPersonalInfo } from '../data/portfolioData';
import { PersonalInfo } from '../types';

interface NavbarProps {
  lang: 'bn' | 'en';
  activeSection: string;
  personalInfo?: PersonalInfo;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  activeSection,
  personalInfo = defaultPersonalInfo
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', labelBn: 'হোম', id: 'home' },
    { href: '#about', label: 'About', labelBn: 'পরিচিতি', id: 'about' },
    { href: '#skills', label: 'Skills', labelBn: 'দক্ষতা', id: 'skills' },
    { href: '#projects', label: 'Projects', labelBn: 'প্রজেক্টস', id: 'projects' },
    { href: '#blog', label: 'Blog', labelBn: 'ব্লগ', id: 'blog' },
    { href: '#resume', label: 'Resume', labelBn: 'রেজুমে', id: 'resume' }
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-sky-100'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with brand identity */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow">
            SH
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>{lang === 'bn' ? personalInfo.nameBn : personalInfo.name}</span>
              <span className="w-2 h-2 rounded-full bg-sky-500" />
            </div>
            <p className="text-[11px] text-sky-700 font-medium leading-none">
              {lang === 'bn' ? 'ডিজিটাল মার্কেটিং এক্সপার্ট' : 'Digital Marketer'}
            </p>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Home, About, Skills, Projects, Blog, Resume) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative py-1.5 transition-colors hover:text-sky-600 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-sky-600 font-semibold' : 'text-slate-600'
                }`}
              >
                {lang === 'bn' ? link.labelBn : link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Contact button with requested Animation! */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 bg-[length:200%_auto] hover:bg-right text-white text-sm font-semibold shadow-sm transition-all duration-500 cursor-pointer animate-contact-pulse hover:scale-105 active:scale-95"
            style={{ animationDuration: '3s' }}
          >
            {/* Animated glowing halo */}
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-200 opacity-60 blur-xs group-hover:opacity-100 transition-opacity -z-10" />
            
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span>{lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Me'}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="animate-contact-pulse inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold"
          >
            <span>{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white/98 backdrop-blur-lg px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center justify-between py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{lang === 'bn' ? link.labelBn : link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-sky-500" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm shadow-md animate-contact-pulse"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'bn' ? 'যোগাযোগ করুন (Contact)' : 'Contact Me Now'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

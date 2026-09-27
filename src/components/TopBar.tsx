import React from 'react';
import { LayoutDashboard, LogIn, LogOut, Phone, ShieldCheck, Globe, Lock } from 'lucide-react';
import { personalInfo as defaultPersonalInfo } from '../data/portfolioData';
import { PersonalInfo } from '../types';

interface TopBarProps {
  isLoggedIn: boolean;
  onOpenLogin: () => void;
  onLogout: () => void;
  onOpenDashboard: () => void;
  lang: 'bn' | 'en';
  onToggleLang: () => void;
  unreadCount: number;
  personalInfo?: PersonalInfo;
}

export const TopBar: React.FC<TopBarProps> = ({
  isLoggedIn,
  onOpenLogin,
  onLogout,
  onOpenDashboard,
  lang,
  onToggleLang,
  unreadCount,
  personalInfo = defaultPersonalInfo
}) => {
  return (
    <div className="w-full bg-gradient-to-r from-sky-50 via-white to-sky-50 border-b border-sky-100 text-xs text-slate-600 py-1.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Side: Contact Fast Track */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Sohel,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sky-800 hover:text-sky-950 font-medium transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">WhatsApp:</span>
            <span>{personalInfo.whatsappDisplay}</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>{lang === 'bn' ? 'ভেরিফায়েড মেটা ও গুগল অ্যাডস এক্সপার্ট' : 'Verified Meta & Google Ads Specialist'}</span>
          </div>
        </div>

        {/* Right Side: Language Toggle + Dashboard + Login / Logout */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1 rounded border border-sky-200 bg-white hover:bg-sky-50 text-sky-800 transition-colors cursor-pointer"
            title="Toggle Language / ভাষা পরিবর্তন"
          >
            <Globe className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold">{lang === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>

          {/* Dashboard Button */}
          <button
            onClick={onOpenDashboard}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded font-medium transition-colors cursor-pointer border ${
              isLoggedIn
                ? 'bg-sky-100 hover:bg-sky-200 text-sky-900 border-sky-300'
                : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-900 border-slate-300'
            }`}
            title={
              isLoggedIn
                ? lang === 'bn'
                  ? 'ড্যাশবোর্ড খুলুন'
                  : 'Open Dashboard'
                : lang === 'bn'
                ? 'ড্যাশবোর্ডে প্রবেশ করতে ইউজার আইডি ও পাসওয়ার্ড লাগবে'
                : 'Dashboard locked - Login required'
            }
          >
            {isLoggedIn ? (
              <LayoutDashboard className="w-3.5 h-3.5 text-sky-700" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-amber-600" />
            )}
            <span>{lang === 'bn' ? 'ড্যাশবোর্ড' : 'Dashboard'}</span>
            {!isLoggedIn && (
              <span className="text-[9px] bg-amber-100 text-amber-800 font-semibold px-1 rounded">
                {lang === 'bn' ? 'লকড' : 'Locked'}
              </span>
            )}
            {unreadCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Login / Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-1 px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-600" />
              <span>{lang === 'bn' ? 'লগআউট' : 'Logout'}</span>
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-1 px-3 py-1 rounded bg-sky-600 hover:bg-sky-700 text-white font-medium transition-colors cursor-pointer shadow-xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'লগইন' : 'Login'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


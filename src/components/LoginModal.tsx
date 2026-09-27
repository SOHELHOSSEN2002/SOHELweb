import React, { useState } from 'react';
import {
  Lock,
  User,
  X,
  ShieldCheck,
  AlertTriangle,
  Eye,
  EyeOff,
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import { AdminCredentials } from '../types';
import { defaultAdminCredentials } from '../data/portfolioData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userId: string) => void;
  lang: 'bn' | 'en';
  credentials?: AdminCredentials;
  reason?: 'dashboard' | 'general';
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  lang,
  credentials = defaultAdminCredentials,
  reason = 'dashboard'
}) => {
  const [userIdInput, setUserIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isShake, setIsShake] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const trimmedId = userIdInput.trim();
      const trimmedPass = passwordInput.trim();

      // Check if credentials match either primary userId, altUserId, or current saved credentials
      const validIdMatch =
        trimmedId.toLowerCase() === credentials.userId.toLowerCase() ||
        (credentials.altUserId &&
          trimmedId.toLowerCase() === credentials.altUserId.toLowerCase());

      const validPassMatch = trimmedPass === credentials.password;

      if (validIdMatch && validPassMatch) {
        // Correct Credentials
        setSuccessNotice(true);
        setTimeout(() => {
          setSuccessNotice(false);
          onLoginSuccess(trimmedId);
          onClose();
        }, 600);
      } else {
        // INCORRECT Credentials: Block access & show explicit error message
        setIsShake(true);
        setTimeout(() => setIsShake(false), 500);

        if (!trimmedId || !trimmedPass) {
          setError(
            lang === 'bn'
              ? 'ইউজার আইডি এবং পাসওয়ার্ড উভয় ফিল্ড পূরণ করা আবশ্যক।'
              : 'Both User ID and Password are required.'
          );
        } else {
          setError(
            lang === 'bn'
              ? '❌ ভুল ইউজার আইডি অথবা পাসওয়ার্ড! আপনার দেওয়া তথ্যের সাথে অ্যাকাউন্টের মিল নেই। ড্যাশবোর্ডে প্রবেশাধিকার দেওয়া হলো না।'
              : '❌ Invalid User ID or Password! The credentials entered do not match. Dashboard access is denied.'
          );
        }
      }
    }, 400);
  };

  const handleFillCredentials = (isCorrect: boolean) => {
    if (isCorrect) {
      setUserIdInput(credentials.userId);
      setPasswordInput(credentials.password);
      setError(null);
    } else {
      setUserIdInput('wrong_user');
      setPasswordInput('wrong_pass');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-sky-100 relative transition-transform duration-200 ${
          isShake ? 'translate-x-1 ring-2 ring-rose-500' : ''
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
          title="Close / বন্ধ করুন"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <KeyRound className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            {lang === 'bn' ? 'ড্যাশবোর্ড অ্যাডমিন ভেরিফিকেশন' : 'Dashboard Admin Verification'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            {reason === 'dashboard'
              ? lang === 'bn'
                ? 'ড্যাশবোর্ডে প্রবেশ করতে অনুগ্রহ করে আপনার ইউজার আইডি এবং পাসওয়ার্ড প্রদান করুন।'
                : 'Please enter your User ID and Password to unlock the administrative dashboard.'
              : lang === 'bn'
              ? 'সুরক্ষিত অ্যাডমিন প্যানেলে লগইন করুন।'
              : 'Sign in to access your administrative panel.'}
          </p>
        </div>

        {/* Access Denied / Error Alert */}
        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-start gap-2.5 shadow-xs animate-shake">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-bold block text-rose-900 mb-0.5">
                {lang === 'bn' ? 'প্রবেশাধিকার প্রত্যাখ্যাত (Access Denied)' : 'Access Denied'}
              </span>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Success Alert */}
        {successNotice && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-semibold">
              {lang === 'bn'
                ? 'লগইন সফল হয়েছে! ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...'
                : 'Verified successfully! Opening Dashboard...'}
            </span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User ID Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {lang === 'bn' ? 'ইউজার আইডি (User ID / Email)' : 'User ID / Username'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                autoFocus
                placeholder={lang === 'bn' ? 'যেমন: admin বা ইমেইল' : 'e.g. admin'}
                value={userIdInput}
                onChange={(e) => {
                  setUserIdInput(e.target.value);
                  if (error) setError(null);
                }}
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  error
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                    : 'border-slate-200 focus:border-sky-500 bg-white'
                }`}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                {lang === 'bn' ? 'পাসওয়ার্ড (Password)' : 'Password'}
              </label>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder={lang === 'bn' ? 'আপনার পাসওয়ার্ড লিখুন' : 'Enter your password'}
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (error) setError(null);
                }}
                className={`w-full pl-9 pr-10 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  error
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                    : 'border-slate-200 focus:border-sky-500 bg-white'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || successNotice}
            className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
          >
            {loading ? (
              <span>{lang === 'bn' ? 'যাচাই করা হচ্ছে...' : 'Verifying Credentials...'}</span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {lang === 'bn' ? 'যাচাই করে ড্যাশবোর্ডে প্রবেশ করুন' : 'Verify & Enter Dashboard'}
                </span>
              </>
            )}
          </button>
        </form>

        {/* Credentials Info Helper & Testing buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
          <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-[11px] text-slate-600">
            <div className="font-semibold text-sky-900 flex items-center gap-1 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>
                {lang === 'bn' ? 'অ্যাডমিন অ্যাক্সেস তথ্য (Login Credentials):' : 'Default Credentials:'}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-700">
              <span>
                <strong>User ID:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-sky-200 font-mono text-sky-800">{credentials.userId}</code>
              </span>
              <span>
                <strong>Password:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-sky-200 font-mono text-sky-800">{credentials.password}</code>
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1">
              {lang === 'bn'
                ? '* ভুল তথ্য দিলে ড্যাশবোর্ডে প্রবেশ বন্ধ থাকবে। ড্যাশবোর্ডের Settings থেকে পাসওয়ার্ড পরিবর্তন করা যাবে।'
                : '* Entering incorrect credentials will deny access. Password can be changed inside Dashboard Settings.'}
            </p>
          </div>

          {/* Quick test buttons for demonstration */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleFillCredentials(true)}
              className="flex-1 py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-800 text-[11px] font-medium border border-slate-200 transition-colors cursor-pointer text-center"
            >
              {lang === 'bn' ? 'সঠিক আইডি/পাসওয়ার্ড বসান' : 'Fill Valid Credentials'}
            </button>
            <button
              type="button"
              onClick={() => handleFillCredentials(false)}
              className="flex-1 py-1.5 px-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-[11px] font-medium border border-rose-200 transition-colors cursor-pointer text-center"
            >
              {lang === 'bn' ? 'ভুল তথ্য দিয়ে টেস্ট করুন' : 'Test Wrong Credentials'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

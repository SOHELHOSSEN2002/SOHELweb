import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo as defaultPersonalInfo } from '../data/portfolioData';
import { ContactMessage, PersonalInfo } from '../types';

interface ContactSectionProps {
  lang: 'bn' | 'en';
  onSendMessage: (msg: ContactMessage) => void;
  personalInfo?: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  onSendMessage,
  personalInfo = defaultPersonalInfo
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Facebook & Meta Ads',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setLoading(true);
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.description,
        createdAt: new Date().toLocaleString(),
        status: 'new'
      };

      onSendMessage(newMessage);
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Facebook & Meta Ads',
        description: ''
      });

      setTimeout(() => setSubmitted(false), 7000);
    }, 600);
  };

  const whatsappDirectUrl = `https://wa.me/${personalInfo.whatsappNumber.replace(
    /[^0-9]/g,
    ''
  )}?text=Hello%20Sohel,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.`;

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'সরাসরি যোগাযোগ' : 'Get in Touch'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {lang === 'bn' ? 'আপনার প্রজেক্ট বা ব্র্যান্ড নিয়ে আলোচনা করুন' : 'Let’s Scale Your Business Together'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'নিচে সরাসরি হোয়াটসঅ্যাপ নম্বর ও মেসেজ ফর্ম রয়েছে। পাশে গুগল ম্যাপে লোকেশন দেখে নিতে পারেন।'
              : 'Direct WhatsApp communication, quick response inquiry form, and physical office location on the map.'}
          </p>
        </div>

        {/* 1. WhatsApp Number Prominently Highlighted at the Top as requested */}
        <div className="max-w-4xl mx-auto mb-12">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-sky-50 border-2 border-emerald-300 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপ (WhatsApp)' : 'Direct WhatsApp'}
                    </span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs text-emerald-800 font-semibold">{lang === 'bn' ? 'অনলাইন / অ্যাক্টিভ' : 'Online / Active'}</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 tabular-nums">
                    {personalInfo.whatsappDisplay}
                  </p>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn'
                      ? 'যেকোনো ক্যাম্পেইন আইডিয়া বা দ্রুত সাপোর্টের জন্য ক্লিক করে সরাসরি চ্যাট শুরু করুন'
                      : 'Click here to start a direct one-on-one WhatsApp conversation instantly.'}
                  </p>
                </div>
              </div>

              <div className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs group-hover:translate-x-1 transition-all">
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Chat on WhatsApp'}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>

        {/* 2. Grid with Contact Form & Google Map Embed beside it */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Contact Form with name, email, description */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-sky-100 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                {lang === 'bn' ? 'ইনকোয়ারি বা মেসেজ পাঠান' : 'Send an Inquiry Message'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'bn'
                  ? 'আপনার নাম, ইমেইল এবং প্রজেক্টের বিস্তারিত লিখে জমা দিন। সাধারণত ২ ঘণ্টার মধ্যে রিপ্লাই দেওয়া হয়।'
                  : 'Fill in your requirements below. I usually respond within 2 hours.'}
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {lang === 'bn' ? 'মেসেজটি সফলভাবে পাঠানো হয়েছে!' : 'Message successfully sent!'}
                  </p>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    {lang === 'bn'
                      ? 'ধন্যবাদ! আপনার বার্তাটি পেয়েছি এবং দ্রুত যোগাযোগ করব। এছাড়া আপনি উপরের ড্যাশবোর্ডে গিয়ে আপনার মেসেজ দেখতে পারেন।'
                      : 'Thank you! Your message is securely stored and I will contact you shortly.'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'bn' ? 'আপনার নাম (Name) *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: তানভীর আহমেদ' : 'e.g., Tanvir Ahmed'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm bg-slate-50/50"
                />
              </div>

              {/* Email & Phone grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'ইমেইল এড্রেস (Email) *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'ফোন বা হোয়াটসঅ্যাপ নম্বর' : 'Phone / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1700-000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'bn' ? 'কোন সার্ভিসের প্রয়োজন?' : 'Service Needed'}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm bg-slate-50/50 text-slate-800"
                >
                  <option value="Facebook & Meta Ads">Facebook & Meta Ads Campaign</option>
                  <option value="YouTube Marketing & SEO">YouTube Marketing & Video SEO</option>
                  <option value="Instagram Reels & Growth">Instagram Reels & Catalog Growth</option>
                  <option value="TikTok Viral Ads">TikTok Spark Ads Campaign</option>
                  <option value="Google Ads & PPC Search">Google Ads PPC Search & Display</option>
                  <option value="Complete Website SEO">Complete Website SEO & Ranking</option>
                  <option value="Web Analytics & CAPI Setup">Web Analytics & Server CAPI Setup</option>
                </select>
              </div>

              {/* Description / Message field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'bn' ? 'প্রজেক্টের বিবরণ বা মেসেজ (Description) *' : 'Project Description *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={
                    lang === 'bn'
                      ? 'আপনার বর্তমান ব্যবসা, টার্গেট গোল এবং কী ধরনের মার্কেটিং সুবিধা প্রয়োজন তা সংক্ষেপে লিখুন...'
                      : 'Please describe your business, advertising goals, or current bottlenecks...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm bg-slate-50/50 resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>{lang === 'bn' ? 'পাঠানো হচ্ছে...' : 'Sending...'}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'মেসেজ জমা দিন (Submit Message)' : 'Send Inquiry Message'}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column (5 cols): Beside Contact, Google Map below Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Info Header Card */}
            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {lang === 'bn' ? 'যোগাযোগের তথ্য' : 'Direct Contact'}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  {lang === 'bn' ? 'অফিস ও ভার্চুয়াল কনসাল্টেশন' : 'Office & Consultation'}
                </h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">{lang === 'bn' ? 'লোকেশন:' : 'Address:'}</p>
                    <p className="text-slate-600">{lang === 'bn' ? personalInfo.locationBn : personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">{lang === 'bn' ? 'ইমেইল:' : 'Direct Email:'}</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sky-700 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">{lang === 'bn' ? 'সাপোর্ট সময়:' : 'Working Hours:'}</p>
                    <p className="text-slate-600">
                      {lang === 'bn' ? 'শনিবার - বৃহস্পতিবার (১০:০০ AM - ০৯:০০ PM)' : 'Saturday - Thursday (10:00 AM - 09:00 PM)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed below Contact Text as requested */}
            <div className="bg-white p-4 rounded-3xl border border-sky-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span className="text-xs font-bold text-slate-900">
                    {lang === 'bn' ? 'গুগল ম্যাপে আমার অবস্থান' : 'Google Map Location'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Dhaka, Bangladesh</span>
              </div>

              {/* Responsive Google Maps Iframe Embed */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Dhaka Bangladesh Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977782806!2d90.33728810787123!3d23.780777717462157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

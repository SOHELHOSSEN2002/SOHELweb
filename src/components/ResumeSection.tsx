import React, { useState } from 'react';
import {
  Download,
  Printer,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Eye,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { personalInfo as defaultPersonalInfo, skillsData as defaultSkillsData } from '../data/portfolioData';
import { PersonalInfo, Skill } from '../types';

interface ResumeSectionProps {
  lang: 'bn' | 'en';
  personalInfo?: PersonalInfo;
  skills?: Skill[];
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  lang,
  personalInfo = defaultPersonalInfo,
  skills = defaultSkillsData
}) => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate and trigger download of clean structured text/HTML resume document
    const resumeContent = `
==================================================
${personalInfo.name.toUpperCase()} - ${personalInfo.title.toUpperCase()}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | WhatsApp: ${personalInfo.whatsappDisplay}
Address: ${personalInfo.location}
==================================================

PROFESSIONAL SUMMARY:
Certified Digital Marketing & Growth Specialist with 5+ years of experience scaling e-commerce brands and local businesses using Meta Ads, Google Ads PPC, YouTube SEO, and TikTok marketing. Managed over $650K in advertising spend with an average 4.8x ROAS.

KEY SKILLS:
- Performance Marketing: Meta Ads (CBO/ABO), Google Search & Display Ads, TikTok Spark Ads.
- Technical Setup: Meta Pixel & Server-Side Conversion API (CAPI), Google Tag Manager (GTM), GA4.
- Organic Growth: YouTube Video SEO, High-CTR Thumbnail Strategy, On-Page & Technical SEO.
- Tools: Meta Ads Manager, Google Ads, Ahrefs, SEMrush, Shopify, HubSpot CRM, Zapier, Canva.

WORK EXPERIENCE:
1. Senior Performance Marketing Lead | GrowthPoint Agency (2023 - Present)
   - Managed $350K+ in Meta and Google ad spend across 25+ e-commerce brands.
   - Scaled 8 client accounts past $50K monthly revenue with >4.5x ROAS.
   - Implemented server-side CAPI tracking across Shopify and WooCommerce stores.

2. Digital Marketing & SEO Specialist | Digiverse Tech (2021 - 2023)
   - Executed YouTube video SEO resulting in 2.5M+ organic channel views.
   - Handled high-intent lead generation campaigns for real estate and healthcare clients.
   - Reduced cost per lead (CPL) by 35% through structured instant lead forms.

3. Social Media & Content Strategist | Creative Pulse (2019 - 2021)
   - Built viral Instagram Reels and TikTok campaign funnels.
   - Spearheaded influencer collaborations and product placements.

EDUCATION & CERTIFICATIONS:
- B.Sc. in Engineering
- Meta Certified Media Buying Professional (Meta Blueprint)
- Google Ads Search & Measurement Certification (Google Skillshop)
- HubSpot Inbound Marketing Certified
==================================================
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume_${personalInfo.name.replace(/\s+/g, '_')}_Digital_Marketer.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-20 bg-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'কারিকুলাম ভিটা ও রেজুমে' : 'Curriculum Vitae'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {lang === 'bn' ? 'আমার রেজুমে ও পিডিএফ কপি' : 'Professional Resume & PDF Preview'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'নিচে আমার ক্যারিয়ারের অভিজ্ঞতা, শিক্ষাগত যোগ্যতা এবং সার্টিফিকেশন দেওয়া হলো। আপনি সরাসরি পিডিএফ ডাউনলোড বা প্রিন্ট করতে পারেন।'
              : 'Review my complete career history, technical skill stack, and verified certifications. Download or print a clean copy below.'}
          </p>

          {/* Action Row: Download PDF & Print Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ডাউনলোড রেজুমে (Download CV)' : 'Download Resume'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-sky-50 text-sky-800 border border-sky-200 font-semibold text-xs sm:text-sm shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-sky-600" />
              <span>{lang === 'bn' ? 'প্রিন্ট করুন (Print CV)' : 'Print Document'}</span>
            </button>

            <button
              onClick={() => setShowPdfModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ফুল-স্ক্রিন ভিউয়ার' : 'Full-Screen Viewer'}</span>
            </button>
          </div>
        </div>

        {/* Realistic Printable & Interactive Resume Document Card */}
        <div
          id="printable-resume"
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-sky-200 shadow-md p-6 sm:p-12 relative overflow-hidden"
        >
          {/* Watermark / Header accent bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400" />

          {/* Resume Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-200 gap-6">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'bn' ? personalInfo.nameBn : personalInfo.name}
              </h3>
              <p className="text-sm sm:text-base font-bold text-sky-600">
                {lang === 'bn' ? personalInfo.titleBn : personalInfo.title}
              </p>
              <p className="text-xs text-slate-500 max-w-xl leading-relaxed mt-2">
                {lang === 'bn' ? personalInfo.bioShortBn : personalInfo.bioShortEn}
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600 shrink-0 border-l-0 md:border-l md:border-slate-200 md:pl-6">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{personalInfo.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{lang === 'bn' ? personalInfo.locationBn : personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Resume Body: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            {/* Left Column (8 cols): Experience & Summary */}
            <div className="md:col-span-8 space-y-8">
              {/* Work Experience */}
              <div>
                <h4 className="text-sm font-bold text-sky-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-sky-100">
                  <Briefcase className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'bn' ? 'পেশাগত অভিজ্ঞতা' : 'Professional Work Experience'}</span>
                </h4>

                <div className="space-y-6 mt-4">
                  <div className="relative pl-6 border-l-2 border-sky-200 space-y-1">
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sky-600" />
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-slate-900">Senior Performance Marketing Lead</h5>
                      <span className="text-[11px] font-semibold text-sky-600">2023 - Present</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500">GrowthPoint Digital Media</p>
                    <ul className="text-xs text-slate-600 space-y-1 pt-1.5 list-disc list-inside">
                      <li>Managed over $350,000 ad spend across Meta and Google Ads with a 5.2x average ROAS.</li>
                      <li>Deployed server-side Conversion API (CAPI) on Shopify & WooCommerce stores.</li>
                      <li>Developed high-retention TikTok Spark Ads and viral video hooks for e-commerce.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-sky-200 space-y-1">
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sky-400" />
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-slate-900">Digital Marketing & SEO Specialist</h5>
                      <span className="text-[11px] font-semibold text-slate-500">2021 - 2023</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500">Digiverse Agency</p>
                    <ul className="text-xs text-slate-600 space-y-1 pt-1.5 list-disc list-inside">
                      <li>Ranked 45+ competitive keywords on Google search first page for service businesses.</li>
                      <li>Scaled YouTube channel from 5,000 to 45,000 subscribers through video SEO.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-sky-200 space-y-1">
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sky-300" />
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-slate-900">Social Media Campaign Manager</h5>
                      <span className="text-[11px] font-semibold text-slate-500">2019 - 2021</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500">BrandWave Agency</p>
                    <ul className="text-xs text-slate-600 space-y-1 pt-1.5 list-disc list-inside">
                      <li>Created high-converting Facebook and Instagram ad creatives and sales copies.</li>
                      <li>Generated 1,200+ qualified real estate and healthcare inbound leads.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-sm font-bold text-sky-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-sky-100">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education'}</span>
                </h4>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-slate-900">
                      {lang === 'bn' ? 'বিএসসি ইন ইঞ্জিনিয়ারিং' : 'Bachelor of Science in Engineering'}
                    </h5>
                    <span className="text-xs text-slate-500 font-semibold">2018 - 2022</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {lang === 'bn'
                      ? 'ডাটা অ্যানালিটিক্স, লজিক্যাল প্রবলেম সলভিং ও অ্যালগরিদম ফাউন্ডেশন।'
                      : 'Strong technical grounding in algorithms, data structuring, and empirical research.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Skills & Certifications */}
            <div className="md:col-span-4 space-y-8">
              {/* Core Skills */}
              <div>
                <h4 className="text-sm font-bold text-sky-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'bn' ? 'প্রধান দক্ষতাসমূহ' : 'Core Skills'}</span>
                </h4>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  {skills.slice(0, 8).map((sk) => (
                    <div key={sk.id} className="p-2 rounded bg-sky-50 font-medium flex items-center justify-between">
                      <span>{lang === 'bn' ? sk.nameBn : sk.name}</span>
                      <span className="font-bold text-sky-800">{sk.proficiency}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-sm font-bold text-sky-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-sky-100">
                  <Award className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'bn' ? 'সার্টিফিকেটসমূহ' : 'Certifications'}</span>
                </h4>

                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-xl border border-sky-100 bg-white">
                    <p className="text-xs font-bold text-slate-900">Meta Blueprint Certified</p>
                    <p className="text-[10px] text-slate-500">Media Buying Professional</p>
                  </div>

                  <div className="p-3 rounded-xl border border-sky-100 bg-white">
                    <p className="text-xs font-bold text-slate-900">Google Ads Certified</p>
                    <p className="text-[10px] text-slate-500">Search & Measurement Specialist</p>
                  </div>

                  <div className="p-3 rounded-xl border border-sky-100 bg-white">
                    <p className="text-xs font-bold text-slate-900">HubSpot Academy</p>
                    <p className="text-[10px] text-slate-500">Inbound Marketing & SEO</p>
                  </div>
                </div>
              </div>

              {/* Tools & Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-100">
                  {lang === 'bn' ? 'টুলস ও সফটওয়্যার' : 'Tools & Software'}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-3 text-[11px] text-slate-600">
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Meta Suite</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Google Ads</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">GA4 / GTM</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Ahrefs</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">SEMrush</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Shopify</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Canva Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen PDF Viewer Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-sky-100 max-h-[95vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'bn' ? 'রেজুমে প্রিভিউ ও প্রিন্ট ভিউ' : 'Resume Preview & Print View'}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer ml-2"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-4 flex-1">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-mono text-xs whitespace-pre-wrap leading-relaxed text-slate-800">
                {`==================================================================
${personalInfo.name.toUpperCase()}
${personalInfo.title.toUpperCase()}
Email: ${personalInfo.email} | WhatsApp: ${personalInfo.whatsappDisplay}
Address: ${personalInfo.location}
==================================================================

[PROFILE]
Certified Performance Marketing & Growth Specialist with 5+ years of verified expertise. Managed $650K+ in paid media across Meta Ads, Google Ads PPC, YouTube Video SEO, and TikTok Viral Campaigns. Average ROAS: 4.8x.

[CORE COMPETENCIES]
* Facebook Marketing: Custom Audiences, Lookalikes, Dynamic Ads, Retargeting Funnels
* YouTube Marketing: Video Search Algorithm, TrueView Ads, CTR Optimization
* Instagram Marketing: Reels Distribution, Shopping Catalog, Influencer Funnels
* TikTok Marketing: Spark Ads, Narrative Hooks, Creative Center Demographics
* Ads Campaign (PPC): Google Search, Display Network, Performance Max
* Search Engine Optimization (SEO): Technical Audits, Keyword Mapping, Backlinks
* Web Analytics: GA4 Setup, Google Tag Manager, Server-Side CAPI Tracking

[PROFESSIONAL HISTORY]
- Senior Performance Marketing Lead | GrowthPoint Agency (2023 - Present)
- Digital Marketing & SEO Specialist | Digiverse Media (2021 - 2023)
- Campaign Strategist | Creative Pulse (2019 - 2021)

[EDUCATION & CERTIFICATIONS]
- B.Sc. in Engineering
- Meta Blueprint Certified Media Buying Specialist
- Google Ads Search & Measurement Certification
- HubSpot Inbound Marketing Certified`}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

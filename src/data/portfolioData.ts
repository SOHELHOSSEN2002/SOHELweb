import { CarouselSlide, Project, Skill, BlogPost, ContactMessage } from '../types';

import heroImg1 from '../assets/images/carousel_marketing_dashboard_1790345007249.jpg';
import heroImg2 from '../assets/images/carousel_seo_growth_1790345020040.jpg';
import heroImg3 from '../assets/images/carousel_social_ads_1790345032981.jpg';
import heroCinematic1 from '../assets/images/hero_marketer_cinematic_1790345771344.jpg';
import heroCinematic2 from '../assets/images/hero_workspace_cinematic_1790345803299.jpg';
import profileAvatar from '../assets/images/marketer_portrait_headshot_1790345043579.jpg';
import projectImgMeta from '../assets/images/project_meta_ads_1790345054633.jpg';
import blogImg1 from '../assets/images/blog_marketing_trends_1790345067064.jpg';

export const personalInfo = {
  name: 'Md. Sohel Hossen',
  nameBn: 'মোঃ সোহেল হোসেন',
  title: 'Digital Marketing & Growth Strategist',
  titleBn: 'ডিজিটাল মার্কেটিং ও গ্রোথ স্পেশালিস্ট',
  avatar: profileAvatar,
  email: 'engi.sohelhossen.2002@gmail.com',
  phone: '+880 1712-345678',
  whatsappNumber: '+8801712345678',
  whatsappDisplay: '+880 1712-345678',
  location: 'Mirpur, Dhaka - 1216, Bangladesh',
  locationBn: 'মিরপুর, ঢাকা - ১২১৬, বাংলাদেশ',
  experienceYears: '5+',
  adSpendManaged: '$650K+',
  satisfiedClients: '120+',
  avgROAS: '4.8x',
  bioShortBn: 'আমি একজন অভিজ্ঞ ডিজিটাল মার্কেটিং ও পারফরম্যান্স গ্রোথ এক্সপার্ট। ফেসবুক ও ইনস্টাগ্রাম পেইড অ্যাডস, ইউটিউব ভিডিও এসইও, টিকটক মার্কেটিং এবং গুগল সার্চ ক্যাম্পেইনের মাধ্যমে ব্যবসার রিটার্ন অন অ্যাড স্পেন্ড (ROAS) সর্বোচ্চ করতে সহায়তা করি।',
  bioShortEn: 'I am a certified Digital Marketing and Performance Growth Specialist with 5+ years of proven expertise in Meta Ads, Google PPC, YouTube Video SEO, and TikTok Growth funnels.',
  bioFullBn: `বিগত ৫ বছরেরও বেশি সময় ধরে আমি ডিজিটাল মার্কেটিং জগতে কাজ করে আসছি। আমার মূল লক্ষ্য থাকে প্রতিটি মার্কেটিং ক্যাম্পেইনে সঠিক টার্গেটিং, ক্রিয়েটিভ অ্যাড কপি এবং কার্যকর কনভার্সন ফানেল ব্যবহার করে ক্লায়েন্টের ব্যবসায় সর্বোচ্চ প্রবৃদ্ধি নিশ্চিত করা। 

আমি ফেসবুক অ্যাডস ম্যানেজার, গুগল অ্যাডওয়ার্ডস, ইউটিউব এসইও অ্যালগরিদম, টিকটক স্পার্ক অ্যাডস এবং গুগল অ্যানালিটিক্স ৪ (GA4) এর নিখুঁত ট্র্যাকিং ব্যবহার করে কাজ করি। প্রতিটি ক্যাম্পেইন শুরু করার আগে গভীর অডিয়েন্স রিসার্চ এবং কম্পিটিটর অ্যানালাইসিস করি। ফলে অপ্রয়োজনীয় বাজেট নষ্ট না হয়ে প্রতিটি ডলার থেকে সর্বোচ্চ বিক্রয় ও কোয়ালিটি লিড উৎপন্ন হয়।`,
  bioFullEn: `With over 5 years of hands-on experience in performance marketing, I specialize in scaling e-commerce brands and local service businesses through data-driven campaigns. From Meta Pixel & CAPI server-side tracking to full-funnel TikTok & YouTube ads, I focus relentlessly on measurable ROAS.`,
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    whatsapp: 'https://wa.me/8801712345678',
    github: 'https://github.com',
    twitter: 'https://twitter.com'
  }
};

export const carouselSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    greeting: 'Hello',
    greetingBn: 'হ্যালো',
    heroTitle: "I'm Sohel",
    heroTitleBn: 'আমি সোহেল',
    title: 'Scaling E-Commerce Brands With Meta Ads',
    titleBn: 'মেটা ও ফেসবুক অ্যাডস ক্যাম্পেইনে ৫.২x ROAS অর্জন',
    subtitle: 'High-Converting Performance Marketing',
    subtitleBn: 'উচ্চ কনভার্সন ও সেলস ফানেল অপ্টিমাইজেশন',
    description: 'I design and scale high-converting digital advertising funnels instinctively. I see consumer psychology and algorithmic trends clearly to maximize ROAS for ambitious brands.',
    descriptionBn: 'আমি ডাটা ও অডিয়েন্স সাইকোলজি গভীরভাবে কাজে লাগিয়ে ডিজিটাল মার্কেটিং ফানেল তৈরি করি। ফেসবুক, ইউটিউব ও গুগলের মাধ্যমে ব্যবসার সর্বোচ্চ সেলস ও প্রবৃদ্ধি নিশ্চিত করাই আমার লক্ষ্য।',
    image: heroCinematic1,
    badge: 'Performance Marketer',
    badgeBn: 'পারফরম্যান্স মার্কেটার',
    stats: [
      { label: 'ROAS Achieved', labelBn: 'গড় ROAS', value: '5.2x' },
      { label: 'Ad Spend Managed', labelBn: 'অ্যাড স্পেন্ড', value: '$84,000' },
      { label: 'Purchases Generated', labelBn: 'মোট সেলস', value: '14,200+' }
    ]
  },
  {
    id: 'slide-2',
    greeting: 'Scale',
    greetingBn: 'স্কেল করুন',
    heroTitle: 'Your Brand',
    heroTitleBn: 'আপনার ব্যবসা',
    title: 'Dominating Search With Organic SEO & Google Ads',
    titleBn: 'অর্গানিক এসইও ও গুগল সার্চে ১ম পৃষ্ঠায় র‍্যাংকিং',
    subtitle: 'Sustainable Inbound Growth & High-Intent Leads',
    subtitleBn: 'হাই-ইন্টেন্ট ট্রাফিক ও স্থায়ী ব্র্যান্ড ভিজিবিলিটি',
    description: 'I execute technical audits, intent-driven keyword architecture, and conversion API tracking that scaled client monthly revenue by 320%.',
    descriptionBn: 'অন-পেজ অপ্টিমাইজেশন, টেকনিক্যাল অডিট এবং সার্ভার-সাইড ট্র্যাকিংয়ের মাধ্যমে অর্গানিক ভিজিটর ও সেলস ৩ গুণ বৃদ্ধি করা হয়েছে।',
    image: heroCinematic2,
    badge: 'Growth Strategy',
    badgeBn: 'গ্রোথ স্ট্র্যাটেজি',
    stats: [
      { label: 'Organic Traffic Growth', labelBn: 'ট্রাফিক বৃদ্ধি', value: '+450%' },
      { label: 'Ranked Keywords', labelBn: 'টপ কি-ওয়ার্ড', value: '180+' },
      { label: 'Domain Authority Boost', labelBn: 'ডিএ বৃদ্ধি', value: '18 -> 42' }
    ]
  },
  {
    id: 'slide-3',
    greeting: 'Dominate',
    greetingBn: 'শীর্ষে থাকুন',
    heroTitle: 'Search & Social',
    heroTitleBn: 'ইউটিউব ও সোশ্যাল',
    title: 'Viral Social Reach on YouTube & TikTok',
    titleBn: 'ইউটিউব ও টিকটকে ভাইরাল ভিডিও মার্কেটিং স্ট্র্যাটেজি',
    subtitle: 'Engaging Content Funnels & Creator Partnerships',
    subtitleBn: 'আকর্ষণীয় শর্ট-ফর্ম কনটেন্ট ও ব্র্যান্ড পরিচিতি',
    description: 'Data-backed hook strategies, trending audio leveraging, and paid TikTok spark ads delivering 2.8M views across product launches.',
    descriptionBn: 'অ্যালগরিদম উপযোগী হুক, ট্রেন্ডিং কনটেন্ট ফরম্যাট এবং ভিডিও এসইও করে মোট ২.৮ মিলিয়নের বেশি অর্গানিক ভিউজ ও ব্র্যান্ড লিড নিশ্চিত করা হয়েছে।',
    image: heroImg3,
    badge: 'Video Marketing',
    badgeBn: 'ভিডিও মার্কেটিং',
    stats: [
      { label: 'Total Views Generated', labelBn: 'মোট ভিউজ', value: '2.8M+' },
      { label: 'Engagement Rate', labelBn: 'এনগেজমেন্ট রেট', value: '8.4%' },
      { label: 'Subscriber Inbound', labelBn: 'নতুন সাবস্ক্রাইবার', value: '45K+' }
    ]
  }
];

export const skillsData: Skill[] = [
  {
    id: 'fb-marketing',
    name: 'Facebook Marketing',
    nameBn: 'ফেসবুক মার্কেটিং (Facebook Marketing)',
    category: 'paid',
    proficiency: 95,
    iconName: 'Facebook',
    experience: '5 Years',
    description: 'Meta Business Suite, Campaign Budget Optimization (CBO), Custom Audiences, Lookalikes, and Retargeting Funnels.',
    descriptionBn: 'মেটা বিজনেস স্যুট, কাস্টম ও লুকঅ্যালাইক অডিয়েন্স, রিটার্গেটিং সেলস ফানেল এবং ক্রিয়েটিভ এ/বি স্প্লিট টেস্টিং।',
    tags: ['Meta Pixel', 'CBO/ABO', 'Dynamic Product Ads', 'Retargeting']
  },
  {
    id: 'yt-marketing',
    name: 'YouTube Marketing',
    nameBn: 'ইউটিউব মার্কেটিং (YouTube Marketing)',
    category: 'social',
    proficiency: 90,
    iconName: 'Youtube',
    experience: '4 Years',
    description: 'Video SEO, YouTube Search Algorithm, In-Stream Skippable Ads, TrueView Campaigns, and High-CTR Thumbnail Strategy.',
    descriptionBn: 'ইউটিউব ভিডিও এসইও, ট্যাগ ও ডেসক্রিপশন অপ্টিমাইজেশন, স্কিপেবল ইন-স্ট্রিম ভিডিও বিজ্ঞাপন এবং চ্যানেল স্কেলিং।',
    tags: ['Video SEO', 'In-Stream Ads', 'CTR Optimization', 'Audience Retention']
  },
  {
    id: 'ig-marketing',
    name: 'Instagram Marketing',
    nameBn: 'ইনস্টাগ্রাম মার্কেটিং (Instagram Marketing)',
    category: 'social',
    proficiency: 92,
    iconName: 'Instagram',
    experience: '4.5 Years',
    description: 'Reels Viral Distribution, Instagram Shopping Catalog Setup, Aesthetic Grid Strategy, and Influencer Collabs.',
    descriptionBn: 'ইনস্টাগ্রাম রিলস অ্যালগরিদম গ্রোথ, শপিং ক্যাটালগ ইন্টিগ্রেশন, ইনফ্লুয়েন্সার কোলাবোরেশন এবং স্টোরিজ কনভার্সন।',
    tags: ['Reels Growth', 'Shop Integration', 'Influencer Outreach', 'Story Ads']
  },
  {
    id: 'tiktok-marketing',
    name: 'TikTok Marketing',
    nameBn: 'টিকটক মার্কেটিং (TikTok Marketing)',
    category: 'social',
    proficiency: 88,
    iconName: 'Video',
    experience: '3 Years',
    description: 'Short-Form Narrative Hooks, TikTok Ads Manager, Spark Ads, Sound Trending Strategy, and Gen-Z Demographics Targeting.',
    descriptionBn: 'টিকটক অ্যাডস ম্যানেজার, স্পার্ক অ্যাডস, ট্রেন্ডিং সাউন্ড ট্র্যাকিং, হুক অ্যান্ড ভ্যালু ফ্রেমওয়ার্ক এবং ভাইরাল ব্র্যান্ডিং।',
    tags: ['Spark Ads', 'TikTok Ads Manager', 'Viral Hooks', 'UGC Strategy']
  },
  {
    id: 'ads-campaign',
    name: 'Ads Campaign (PPC & Meta)',
    nameBn: 'অ্যাডস ক্যাম্পেইন (Ads Campaign)',
    category: 'paid',
    proficiency: 96,
    iconName: 'Megaphone',
    experience: '5 Years',
    description: 'Multi-platform Paid Advertising: Google Search & Display Ads, Performance Max, Meta Ads, and ROAS Optimization.',
    descriptionBn: 'গুগল সার্চ ও ডিসপ্লে নেটওয়ার্ক, পারফরম্যান্স ম্যাক্স ক্যাম্পেইন, স্মার্ট বিডিং স্ট্র্যাটেজি এবং আরওএএস অপ্টিমাইজেশন।',
    tags: ['Google PMax', 'Search Ads', 'Target CPA/ROAS', 'Budget Scaling']
  },
  {
    id: 'seo-optimization',
    name: 'Search Engine Optimization (SEO)',
    nameBn: 'এসইও (Search Engine Optimization)',
    category: 'organic',
    proficiency: 92,
    iconName: 'Search',
    experience: '4.5 Years',
    description: 'Complete SEO Strategy: Keyword Intent Mapping, On-Page Optimization, Technical SEO Audits, Backlinks, and Local GMB.',
    descriptionBn: 'অন-পেজ এসইও, টেকনিক্যাল অডিট, কি-ওয়ার্ড রিসার্চ, হাই-কোয়ালিটি অথরিটি ব্যাকলিংক বিল্ডিং এবং গুগল ম্যাপ/লোকাল এসইও।',
    tags: ['Keyword Research', 'Technical Audit', 'Backlink Building', 'Local SEO']
  },
  {
    id: 'web-analytics',
    name: 'Web Analytics & Pixel Setup',
    nameBn: 'ওয়েব অ্যানালিটিক্স ও ট্র্যাকিং (Web Analytics)',
    category: 'analytics',
    proficiency: 94,
    iconName: 'BarChart2',
    experience: '4 Years',
    description: 'Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta Conversion API (CAPI), and Attribution Modeling.',
    descriptionBn: 'গুগল অ্যানালিটিক্স ৪ সেটআপ, ট্যাগ ম্যানেজার ইভেন্ট কনফিগারেশন, মেটা সার্ভার-সাইড ট্র্যাকিং ও কনভার্সন ট্র্যাকিং।',
    tags: ['GA4', 'GTM', 'Server-Side CAPI', 'E-commerce Tracking']
  },
  {
    id: 'content-copywriting',
    name: 'Content Strategy & Copywriting',
    nameBn: 'কনটেন্ট স্ট্র্যাটেজি ও সেলস কপি (Content Strategy)',
    category: 'organic',
    proficiency: 89,
    iconName: 'FileText',
    experience: '4 Years',
    description: 'High-converting ad copy, visual design direction for creatives, email marketing drip campaigns, and lead magnets.',
    descriptionBn: 'উচ্চ কনভার্সনকারী অ্যাড কপিরাইটিং, ক্রিয়েটিভ ভিজ্যুয়াল ডিরেকশন, সোশ্যাল মিডিয়া প্ল্যানার এবং সেলস ফানেল তৈরি।',
    tags: ['Ad Copywriting', 'Creative Briefs', 'Email Funnels', 'Storytelling']
  }
];

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Fashion Brand Meta Scaling',
    titleBn: 'ই-কমার্স ফ্যাশন ব্র্যান্ড মেটা অ্যাডস স্কেলিং',
    category: 'meta',
    categoryLabel: 'Meta Ads',
    categoryLabelBn: 'মেটা অ্যাডস',
    image: projectImgMeta,
    shortDesc: 'Scaled an apparel brand from $10k to $65k monthly revenue with 5.2x average ROAS using dynamic catalog ads and deep retargeting.',
    shortDescBn: 'একটি অনলাইন ফ্যাশন ব্র্যান্ডের সেলস মাসিক $১০,০০০ থেকে $৬৫,০০০ এ উন্নীত করা হয়েছে এবং মেটা বিজ্ঞাপনে গড়ে ৫.২x ROAS অর্জন হয়েছে।',
    fullDesc: 'This project focused on restructuring the client’s entire Meta Ads funnel. We migrated to Conversion API, built cold interest-based tests, established dynamic lookalikes (1-3%), and created a sequential 3-phase retargeting campaign that captured abandoned carts with urgency-driven creatives.',
    fullDescBn: 'এই প্রজেক্টে ব্র্যান্ডটির সম্পূর্ণ ফানেল নতুন করে সাজানো হয়। সার্ভার-সাইড কনভার্সন এপিআই (CAPI) যুক্ত করার পাশাপাশি কাস্টম লুকঅ্যালাইক অডিয়েন্স এবং ডায়নামিক ক্যাটালগ সেলের মাধ্যমে পরিত্যক্ত কার্ট রিকভারি করে সেলস ৩ গুণ বৃদ্ধি পায়।',
    client: 'Velvet Stitch Lifestyle (E-Commerce)',
    duration: '4 Months',
    results: [
      { label: 'Average ROAS', labelBn: 'গড় ROAS', value: '5.2x' },
      { label: 'Revenue Generated', labelBn: 'অর্জিত রেভিনিউ', value: '$198,000' },
      { label: 'CPA Reduction', labelBn: 'CPA খরচ হ্রাস', value: '-38%' }
    ],
    tools: ['Meta Ads Manager', 'Shopify', 'CAPI Server Tracking', 'Canva Pro']
  },
  {
    id: 'project-2',
    title: 'YouTube Tech Channel Growth & Monetization',
    titleBn: 'ইউটিউব টেক চ্যানেলের ভিউজ ও সাবস্ক্রাইবার বৃদ্ধি',
    category: 'youtube',
    categoryLabel: 'YouTube Marketing',
    categoryLabelBn: 'ইউটিউব মার্কেটিং',
    image: heroImg3,
    shortDesc: 'Optimized video SEO, keywords, high-CTR thumbnails, and community engagement resulting in 1.5M+ views and 38,000 new subscribers.',
    shortDescBn: 'ভিডিও এসইও, কি-ওয়ার্ড অপ্টিমাইজেশন ও আকর্ষণীয় থাম্বনেইল ডিজাইনের মাধ্যমে মাত্র ৬ মাসে ১৫ লাখের বেশি ভিউজ এবং ৩৮,০০০ সাবস্ক্রাইবার বৃদ্ধি।',
    fullDesc: 'We implemented systematic title structuring, A/B tested custom thumbnail designs to raise impressions click-through rate (CTR) from 4.2% to 11.8%, and targeted long-tail search queries with optimized script pacing to maximize watch time.',
    fullDescBn: 'চ্যানেলের প্রতিটি ভিডিওর জন্য সার্চ ইনটেন্ট রিসার্চ করে থাম্বনেইল সিটিআর ৪.২% থেকে বাড়িয়ে ১১.৮% করা হয়। ভিডিওর প্রথম ৩০ সেকেন্ডে শক্তিশালী হুক যুক্ত করায় ওয়াচ টাইম বেড়ে যায় ৫২%।',
    client: 'TechPulse BD (EdTech / Media)',
    duration: '6 Months',
    results: [
      { label: 'Total Views', labelBn: 'মোট ভিউজ', value: '1,540,000+' },
      { label: 'New Subscribers', labelBn: 'নতুন সাবস্ক্রাইবার', value: '38,500' },
      { label: 'Avg CTR', labelBn: 'গড় থাম্বনেইল CTR', value: '11.8%' }
    ],
    tools: ['YouTube Studio', 'VidIQ Pro', 'TubeBuddy', 'Adobe Premiere Pro']
  },
  {
    id: 'project-3',
    title: 'Local Real Estate Lead Generation Campaign',
    titleBn: 'রিয়েল এস্টেট কোম্পানির হাই-কোয়ালিটি লিড জেনারেশন',
    category: 'ads',
    categoryLabel: 'Google & Meta Ads',
    categoryLabelBn: 'গুগল ও মেটা অ্যাডস',
    image: heroImg1,
    shortDesc: 'Generated 420+ highly qualified residential buyer inquiries for a premier Dhaka luxury apartments developer at 45% lower CPL.',
    shortDescBn: 'ঢাকার অভিজাত আবাসিক প্রজেক্টের জন্য ৪২০+ ভেরিফায়েড ক্রেতার লিড তৈরি করা হয় এবং লিড প্রতি খরচ ৪৫% হ্রাস পায়।',
    fullDesc: 'We deployed instant lead forms with custom qualification filters (budget qualification, desired bedrooms, move-in timeline) alongside Google Search exact match campaigns targeting luxury property buyers in Gulshan and Dhanmondi.',
    fullDescBn: 'ইনস্ট্যান্ট লিড ফর্মে কোয়ালিফিকেশন ফিল্টার (বাজেট, ফ্ল্যাট সাইজ ও সময়সীমা) যুক্ত করে শুধু প্রকৃত ক্রেতাদের লিড সংগ্রহ করা হয়। সাথে গুগল সার্চের হাই-ইন্টেন্ট কি-ওয়ার্ডে বিজ্ঞাপন চালানো হয়।',
    client: 'Skyline Properties Ltd.',
    duration: '3 Months',
    results: [
      { label: 'Qualified Leads', labelBn: 'ভেরিফায়েড লিড', value: '420+' },
      { label: 'Cost Per Lead', labelBn: 'লিড প্রতি খরচ', value: '$6.40 (-45%)' },
      { label: 'Direct Bookings', labelBn: 'কনফার্ম বুকিং', value: '18 Units' }
    ],
    tools: ['Meta Instant Forms', 'Google Ads', 'Zapier Automation', 'HubSpot CRM']
  },
  {
    id: 'project-4',
    title: 'Organic SEO Ranking & Organic Traffic Surge',
    titleBn: 'অর্গানিক এসইও ও কিওয়ার্ড ১ম পেজ র‍্যাংকিং',
    category: 'seo',
    categoryLabel: 'SEO Campaign',
    categoryLabelBn: 'এসইও ক্যাম্পেইন',
    image: heroImg2,
    shortDesc: 'Full on-page, technical audit and authority link acquisition ranking 45 competitive keywords in top 3 Google positions.',
    shortDescBn: 'সম্পূর্ণ টেকনিক্যাল এসইও অডিট ও কোয়ালিটি ব্যাকলিংক তৈরি করে ৪৫টি অত্যন্ত প্রতিযোগিতাপূর্ণ কি-ওয়ার্ড গুগল সার্চের শীর্ষ ৩-এ র‍্যাংক করানো হয়েছে।',
    fullDesc: 'Fixed Core Web Vitals performance, re-architected topical clusters for the blog, and secured 35+ relevant guest posting backlinks with DR 50+. Monthly organic search clicks jumped from 3,200 to 28,500.',
    fullDescBn: 'ওয়েবসাইটের স্পিড ও কোর ওয়েব ভাইটালস সমাধান করে টপিকাল অথরিটি বাড়ানো হয়। ফলে মাসিক অর্গানিক ক্লিক ৩,২০০ থেকে লাফিয়ে ২৮,৫০০-তে পৌঁছায়।',
    client: 'CarePlus Medical & Wellness',
    duration: '8 Months',
    results: [
      { label: 'Organic Clicks', labelBn: 'মাসিক অর্গানিক ক্লিক', value: '28,500/mo' },
      { label: 'Top 3 Keywords', labelBn: 'শীর্ষ ৩-এ কি-ওয়ার্ড', value: '45 Keywords' },
      { label: 'Organic Revenue', labelBn: 'অর্গানিক রেভিনিউ', value: '+340%' }
    ],
    tools: ['Ahrefs', 'Google Search Console', 'Screaming Frog', 'SurferSEO']
  },
  {
    id: 'project-5',
    title: 'TikTok Viral Beauty Campaign & UGC Ads',
    titleBn: 'টিকটক ভাইরাল স্কিনকেয়ার ও বিউটি ক্যাম্পেইন',
    category: 'tiktok',
    categoryLabel: 'TikTok Marketing',
    categoryLabelBn: 'টিকটক মার্কেটিং',
    image: heroImg3,
    shortDesc: 'Leveraged 15 nano-creators and TikTok Spark Ads to promote a clean skincare line, triggering 2.1M views and selling out initial inventory.',
    shortDescBn: '১৫ জন ক্রিয়েটরের ইউজার জেনারেটেড কনটেন্ট (UGC) এবং টিকটক স্পার্ক বিজ্ঞাপনের মাধ্যমে ২.১ মিলিয়ন ভিউজ এবং পুরো স্টক সম্পূর্ণ সোল্ড-আউট।',
    fullDesc: 'We built a creator-led testimonial framework answering genuine customer skincare doubts. High-performing organic TikToks were boosted through Spark Ads targeting 18-34 female beauty shoppers.',
    fullDescBn: 'বাস্তব গ্রাহক রিভিউ ও সমস্যার সমাধানভিত্তিক শর্ট ভিডিও তৈরি করে স্পার্ক অ্যাডস দিয়ে বুস্ট করা হয়, যা তরুণ গ্রাহকদের মাঝে ব্যপক গ্রহণযোগ্যতা পায়।',
    client: 'GlowAura Organic Skincare',
    duration: '2 Months',
    results: [
      { label: 'Video Views', labelBn: 'মোট ভিউজ', value: '2,100,000+' },
      { label: 'Sold Units', labelBn: 'বিক্রিত পণ্য', value: '6,200 Units' },
      { label: 'Store Conversion Rate', labelBn: 'কনভার্সন রেট', value: '4.6%' }
    ],
    tools: ['TikTok Ads Manager', 'CapCut Pro', 'TikTok Creative Center']
  },
  {
    id: 'project-6',
    title: 'Instagram Influencer & Shopping Catalog Setup',
    titleBn: 'ইনস্টাগ্রাম শপিং ও ইনফ্লুয়েন্সার কোলাবোরেশন',
    category: 'instagram',
    categoryLabel: 'Instagram Marketing',
    categoryLabelBn: 'ইনস্টাগ্রাম মার্কেটিং',
    image: projectImgMeta,
    shortDesc: 'Connected Instagram Shop catalog, executed micro-influencer product placements, and grew profile follower base by 42,000.',
    shortDescBn: 'ইনস্টাগ্রাম শপ ক্যাটালগ সেটআপ এবং মাইক্রো-ইনফ্লুয়েন্সার ক্যাম্পেইনের মাধ্যমে প্রোফাইলে ৪২,০০০ সক্রিয় ফলোয়ার যুক্ত করা হয়।',
    fullDesc: 'We developed an aesthetic editorial grid, set up product tags inside Reels, and coordinated with 25 fashion micro-influencers with engaged followings, driving direct in-app checkouts and high profile visits.',
    fullDescBn: 'রিলসের ভেতর সরাসরি প্রডাক্ট ট্যাগিং ফিচার চালু করা হয় এবং ফ্যাশন ইনফ্লুয়েন্সারদের মাধ্যমে ব্র্যান্ডের ক্রেডিবিলিটি বাড়ানো হয়।',
    client: 'UrbanVibe Streetwear',
    duration: '5 Months',
    results: [
      { label: 'Follower Growth', labelBn: 'ফলোয়ার বৃদ্ধি', value: '+42,000' },
      { label: 'Catalog Purchases', labelBn: 'ইন-অ্যাপ সেলস', value: '1,890 Orders' },
      { label: 'Profile Visits', labelBn: 'প্রোফাইল ভিজিট', value: '310,000+' }
    ],
    tools: ['Instagram Commerce Manager', 'Meta Business Suite', 'Canva', 'Later']
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Proven Strategies to Double E-Commerce Sales with Meta Ads in 2026',
    titleBn: '২০২৬ সালে ফেসবুক ও মেটা বিজ্ঞাপনে কম খরচে দ্বিগুণ সেলস আনার ৫টি প্রমাণিত কৌশল',
    slug: 'meta-ads-ecommerce-scaling-strategies-2026',
    image: blogImg1,
    publishDate: 'September 18, 2026',
    publishDateBn: '১৮ সেপ্টেম্বর, ২০২৬',
    readTime: '6 min read',
    readTimeBn: '৬ মিনিট পড়ার সময়',
    category: 'Paid Advertising',
    categoryBn: 'পেইড বিজ্ঞাপন',
    excerpt: 'Discover how modern AI targeting in Meta Ads Manager, server-side Conversion API (CAPI), and dynamic creative testing can dramatically lower your customer acquisition cost (CAC).',
    excerptBn: 'বিজ্ঞাপনের খরচ না বাড়িয়ে কীভাবে সঠিক ক্রিয়েটিভ টেস্টিং, কনভার্সন এপিআই ও অ্যাডভান্সড রিটার্গেটিংয়ের মাধ্যমে ব্যবসার সেলস ও ROAS দ্বিগুণ করবেন তার বাস্তব নির্দেশিকা।',
    content: [
      'In today’s fast-moving digital economy, running generic Facebook ads with basic demographic targeting is a surefire way to burn your budget without results.',
      '1. Implement Server-Side Conversion API (CAPI): Browser cookies are increasingly blocked. Setting up server-side CAPI ensures Meta receives 100% of purchase signals, enabling the algorithm to find high-intent buyers.',
      '2. The 3:2:2 Dynamic Creative Testing Method: Test 3 ad copies, 2 videos/images, and 2 headline hooks inside one dynamic creative ad set to let Meta uncover the winning combination.',
      '3. Stop Micro-Segmenting: Give Advantage+ Shopping Campaigns (ASC) enough audience latitude. Modern algorithms optimize better on broad signals than restrictive custom lists.',
      '4. Focus on the First 3 Seconds: Video ads must hook the viewer with an emotional or visual trigger before introducing the product.',
      '5. Offer Irresistible Bundles: Higher Average Order Value (AOV) directly allows you to bid more aggressively and out-compete rivals in the ad auctions.'
    ],
    contentBn: [
      'বর্তমান প্রতিযোগিতামূলক বাজারে কেবল সাধারণ বুস্টিং বা পুরোনো টার্গেটিং দিয়ে ফেসবুক বিজ্ঞাপনে ভালো ফল পাওয়া অসম্ভব। এখন প্রয়োজন সুনির্দিষ্ট ডাটা-ড্রিভেন কৌশল।',
      '১. সার্ভার-সাইড কনভার্সন এপিআই (CAPI) চালু করুন: ব্রাউজার কুকি ব্লক হওয়ার কারণে মেটা পিক্সেল অনেক ডাটা মিস করে। সার্ভার-সাইড ট্র্যাকিং মেটাকে ১০০% সঠিক ডাটা দেয়, ফলে অ্যালগরিদম প্রকৃত ক্রেতাদের খুঁজে বের করতে পারে।',
      '২. ৩:২:২ ডায়নামিক ক্রিয়েটিভ টেস্টিং: একটি অ্যাড সেটে ৩টি ভিন্ন কপি, ২টি ইমেজ/ভিডিও এবং ২টি হেডলাইন দিয়ে টেস্ট করুন। মেটা নিজেই সবচেয়ে লাভজনক ভ্যারিয়েশনটি খুঁজে বের করবে।',
      '৩. অতিরিক্ত ন্যারো টার্গেটিং বন্ধ করুন: মেটার অ্যাডভান্টেজ+ ক্যাম্পেইনে অ্যালগরিদমকে পর্যাপ্ত স্বাধীনতা দিন। বেশি ন্যারো করলে বিজ্ঞাপনের খরচ (CPM) অনেক বেড়ে যায়।',
      '৪. ভিডিওর প্রথম ৩ সেকেন্ডে আকর্ষণীয় হুক: কাস্টমার স্ক্রল করার আগেই তার সমস্যার কথা বা আকর্ষণীয় অফার তুলে ধরুন।',
      '৫. গড় অর্ডার ভ্যালু (AOV) বাড়ানো: সিঙ্গেল প্রডাক্টের চেয়ে বান্ডেল অফার বা ফ্রি শিপিং থ্রেশহোল্ড দিন, যাতে প্রতি অর্ডারে বেশি রেভিনিউ নিশ্চিত হয়।'
    ],
    author: {
      name: 'Md. Sohel Hossen',
      role: 'Growth Strategist',
      avatar: profileAvatar
    }
  },
  {
    id: 'blog-2',
    title: 'YouTube Video SEO Secrets: Ranking #1 on Search & Suggested Feeds',
    titleBn: 'ইউটিউব ভিডিও এসইও মাস্টারক্লাস: সার্চ ও সাজেস্টেড ফিডে শীর্ষে থাকার উপায়',
    slug: 'youtube-video-seo-ranking-guide',
    image: heroImg3,
    publishDate: 'August 28, 2026',
    publishDateBn: '২৮ আগস্ট, ২০২৬',
    readTime: '5 min read',
    readTimeBn: '৫ মিনিট পড়ার সময়',
    category: 'YouTube SEO',
    categoryBn: 'ইউটিউব এসইও',
    excerpt: 'Master the YouTube algorithm in 2026: thumbnail psychology, keyword placement in spoken audio, chapters optimization, and viewer retention triggers.',
    excerptBn: 'ইউটিউব অ্যালগরিদমের নজর কাড়তে থাম্বনেইল সাইকোলজি, স্পোকেন ওয়ার্ড এসইও এবং ওয়াচ টাইম বাড়ানোর কার্যকরী কলাকৌশল।',
    content: [
      'YouTube is the world’s second largest search engine. To dominate search results, your optimization starts before you even hit record.',
      '1. High-Intent Keyword In Title & Spoken Script: YouTube auto-transcribes your audio. Saying your primary keyword in the first 30 seconds triggers algorithmic relevance.',
      '2. The Contrast & Curiosity Thumbnail Formula: High-contrast faces with minimal text (under 4 words) consistently produce higher Click-Through-Rate (CTR).',
      '3. Pacing & Pattern Interrupts: Keep viewers watching past the 50% mark by changing camera angles, inserting b-roll, and cutting out pauses.'
    ],
    contentBn: [
      'ইউটিউব বিশ্বের দ্বিতীয় বৃহত্তম সার্চ ইঞ্জিন। এখানে ভিডিও র‍্যাংক করাতে হলে ভিডিও রেকর্ডিংয়ের আগেই রিসার্চ শুরু করতে হয়।',
      '১. টাইটেল ও মুখে উচ্চারিত কিওয়ার্ড: ইউটিউব স্বয়ংক্রিয়ভাবে ভিডিওর অডিও স্ক্যান করে। প্রথম ৩০ সেকেন্ডের মধ্যে মূল বিষয়টি স্পষ্ট করে বললে সার্চ র‍্যাংকিং দ্রুত বাড়ে।',
      '২. আকর্ষণীয় থাম্বনেইল: থাম্বনেইলে ৪টির বেশি শব্দ না রেখে হাই-কনট্রাস্ট ছবি ও এক্সপ্রেশন ব্যবহার করুন, যা সিটিআর বৃদ্ধি করে।',
      '৩. প্যাটার্ন ইন্টারাপ্ট: একটানা এক দৃশ্যে কথা না বলে প্রতি ৫-৭ সেকেন্ড পর পর টেক্সট, গ্রাফিক্স বা অ্যাঙ্গেল পরিবর্তন করুন যাতে দর্শক শেষ পর্যন্ত ভিডিও দেখে।'
    ],
    author: {
      name: 'Md. Sohel Hossen',
      role: 'Growth Strategist',
      avatar: profileAvatar
    }
  },
  {
    id: 'blog-3',
    title: 'TikTok Spark Ads & Organic Viral Video Framework for Brands',
    titleBn: 'টিকটক স্পার্ক অ্যাডস এবং ভাইরাল কনটেন্ট বানানোর সহজ ফ্রেমওয়ার্ক',
    slug: 'tiktok-spark-ads-viral-framework',
    image: heroImg1,
    publishDate: 'July 14, 2026',
    publishDateBn: '১৪ জুলাই, ২০২৬',
    readTime: '4 min read',
    readTimeBn: '৪ মিনিট পড়ার সময়',
    category: 'Social Growth',
    categoryBn: 'সোশ্যাল গ্রোথ',
    excerpt: 'Why high-production ads fail on TikTok and why raw User-Generated Content (UGC) boosted by Spark Ads produces up to 3x higher click rates.',
    excerptBn: 'অতিরিক্ত এডিটেড বিজ্ঞাপনের চেয়ে সাধারণ স্মার্টফোনে শুট করা খাঁটি কাস্টমার রিভিউ কেন টিকটকে ৩ গুণ বেশি সেলস এনে দেয়।',
    content: [
      'The biggest mistake brands make on TikTok is treating it like television. TikTok users crave authentic stories, unpolished recommendations, and actionable advice.',
      'Spark Ads allow brands to amplify existing creator videos directly with native comments and profile follows intact, preserving authentic social proof.'
    ],
    contentBn: [
      'টিকটকে সফল হওয়ার মূল মন্ত্র হলো "Don’t make ads, make TikToks"। অতিরিক্ত কর্পোরেট লুকের বদলে সাধারণ ব্যবহারকারীর মতো কনটেন্ট তৈরি করুন।',
      'স্পার্ক অ্যাডস ব্যবহার করলে অরিজিনাল পোস্টের লাইক, কমেন্ট ও শেয়ার বজায় রেখেই অ্যাড রান করা যায়, যা গ্রাহকের আস্থা বহুগুণ বাড়িয়ে তোলে।'
    ],
    author: {
      name: 'Md. Sohel Hossen',
      role: 'Growth Strategist',
      avatar: profileAvatar
    }
  }
];

export const initialContactMessages: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'তানভীর আহমেদ',
    email: 'tanvir.ecommerce@gmail.com',
    phone: '+880 1819-876543',
    service: 'Facebook Marketing & Meta Ads',
    message: 'আমাদের একটি ফ্যাশন ব্র্যান্ডের জন্য মেটা অ্যাডস ফানেল তৈরি ও মাসিক সেলস স্কেলিং করতে চাই। আপনার সার্ভিস প্যাকেজ ও কোটেশন জানতে আগ্রহী।',
    createdAt: '2026-09-24 14:30',
    status: 'new'
  },
  {
    id: 'msg-2',
    name: 'Rahim Chowdhury',
    email: 'rahim@techsolutions.com',
    phone: '+880 1711-223344',
    service: 'SEO & Google Ads Campaign',
    message: 'We want to rank our software company website on Google first page and run targeted PPC search campaigns.',
    createdAt: '2026-09-23 10:15',
    status: 'read'
  }
];

export const defaultAdminCredentials = {
  userId: 'admin',
  altUserId: 'engi.sohelhossen.2002@gmail.com',
  password: 'admin123'
};

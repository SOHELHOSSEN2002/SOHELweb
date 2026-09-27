export interface Project {
  id: string;
  title: string;
  titleBn: string;
  category: 'meta' | 'youtube' | 'instagram' | 'tiktok' | 'seo' | 'ads';
  categoryLabel: string;
  categoryLabelBn: string;
  image: string;
  shortDesc: string;
  shortDescBn: string;
  fullDesc: string;
  fullDescBn: string;
  client: string;
  duration: string;
  results: {
    label: string;
    labelBn: string;
    value: string;
  }[];
  tools: string[];
  link?: string;
}

export interface Skill {
  id: string;
  name: string;
  nameBn: string;
  category: 'paid' | 'organic' | 'social' | 'analytics';
  proficiency: number;
  iconName: string;
  experience: string;
  description: string;
  descriptionBn: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  titleBn: string;
  slug: string;
  image: string;
  publishDate: string;
  publishDateBn: string;
  readTime: string;
  readTimeBn: string;
  category: string;
  categoryBn: string;
  excerpt: string;
  excerptBn: string;
  content: string[];
  contentBn: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

export interface CarouselSlide {
  id: string;
  greeting?: string;
  greetingBn?: string;
  heroTitle?: string;
  heroTitleBn?: string;
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  badge: string;
  badgeBn: string;
  stats: {
    label: string;
    labelBn: string;
    value: string;
  }[];
  projectLink?: string;
}

export interface PersonalInfo {
  name: string;
  nameBn: string;
  title: string;
  titleBn: string;
  avatar: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  location: string;
  locationBn: string;
  experienceYears: string;
  adSpendManaged: string;
  satisfiedClients: string;
  avgROAS: string;
  bioShortBn: string;
  bioShortEn: string;
  bioFullBn: string;
  bioFullEn: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
    whatsapp: string;
    github?: string;
    twitter?: string;
  };
}

export interface AdminCredentials {
  userId: string;
  password: string;
  altUserId?: string;
}


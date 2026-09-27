import React, { useState } from 'react';
import {
  LayoutDashboard,
  X,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Trash2,
  ExternalLink,
  MessageSquare,
  TrendingUp,
  Users,
  Eye,
  EyeOff,
  DollarSign,
  User,
  Sliders,
  FolderKanban,
  FileText,
  RotateCcw,
  Plus,
  Save,
  Edit2,
  Check,
  Share2,
  ArrowRight,
  Shield,
  Download,
  Upload,
  Lock,
  KeyRound,
  AlertTriangle,
  ShieldCheck
} from 'lucide-react';
import {
  ContactMessage,
  PersonalInfo,
  CarouselSlide,
  Skill,
  Project,
  BlogPost,
  AdminCredentials
} from '../types';
import { defaultAdminCredentials } from '../data/portfolioData';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ContactMessage[];
  onMarkAsRead: (id: string) => void;
  onDeleteMessage: (id: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  lang: 'bn' | 'en';
  // Whole Site Control Props
  personalInfo: PersonalInfo;
  onUpdatePersonalInfo: (info: PersonalInfo) => void;
  carouselSlides: CarouselSlide[];
  onUpdateCarouselSlides: (slides: CarouselSlide[]) => void;
  skills: Skill[];
  onUpdateSkills: (skills: Skill[]) => void;
  projects: Project[];
  onUpdateProjects: (projects: Project[]) => void;
  blogPosts: BlogPost[];
  onUpdateBlogPosts: (posts: BlogPost[]) => void;
  onResetAllData: () => void;
  credentials?: AdminCredentials;
  onUpdateCredentials?: (creds: AdminCredentials) => void;
  onRequireLogin?: () => void;
}

type TabType = 'leads' | 'profile' | 'hero' | 'skills' | 'projects' | 'blog' | 'settings';

export const DashboardModal: React.FC<DashboardModalProps> = ({
  isOpen,
  onClose,
  messages,
  onMarkAsRead,
  onDeleteMessage,
  isLoggedIn,
  onLogout,
  lang,
  personalInfo,
  onUpdatePersonalInfo,
  carouselSlides,
  onUpdateCarouselSlides,
  skills,
  onUpdateSkills,
  projects,
  onUpdateProjects,
  blogPosts,
  onUpdateBlogPosts,
  onResetAllData,
  credentials = defaultAdminCredentials,
  onUpdateCredentials,
  onRequireLogin
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('leads');
  const [leadFilter, setLeadFilter] = useState<'all' | 'new'>('all');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Security Credentials State
  const [adminUserId, setAdminUserId] = useState(credentials.userId);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCredPassword, setShowCredPassword] = useState(false);
  const [credError, setCredError] = useState<string | null>(null);

  // Profile Form State
  const [profileForm, setProfileForm] = useState<PersonalInfo>(personalInfo);

  // Skill editing state
  const [editingSkillId, setEditingSkillId] = useState<string | null>(null);
  const [skillForm, setSkillForm] = useState<Partial<Skill>>({});
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  // Project editing state
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState<Partial<Project>>({});
  const [isAddingProject, setIsAddingProject] = useState(false);

  // Blog editing state
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({});
  const [isAddingBlog, setIsAddingBlog] = useState(false);

  // Hero Slide editing state
  const [editingSlideId, setEditingSlideId] = useState<string | null>(null);
  const [slideForm, setSlideForm] = useState<Partial<CarouselSlide>>({});
  const [isAddingSlide, setIsAddingSlide] = useState(false);

  // Sync profileForm if personalInfo changes externally
  React.useEffect(() => {
    setProfileForm(personalInfo);
  }, [personalInfo]);

  React.useEffect(() => {
    setAdminUserId(credentials.userId);
  }, [credentials]);

  const handleSaveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    setCredError(null);

    const trimmedId = adminUserId.trim();
    if (!trimmedId) {
      setCredError(lang === 'bn' ? 'ইউজার আইডি ফাঁকা রাখা যাবে না।' : 'User ID cannot be empty.');
      return;
    }

    if (newPassword) {
      if (newPassword.length < 4) {
        setCredError(
          lang === 'bn'
            ? 'পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে।'
            : 'Password must be at least 4 characters long.'
        );
        return;
      }
      if (newPassword !== confirmPassword) {
        setCredError(
          lang === 'bn'
            ? 'নতুন পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না।'
            : 'New password and confirm password do not match.'
        );
        return;
      }
    }

    const updatedCreds: AdminCredentials = {
      userId: trimmedId,
      password: newPassword ? newPassword : credentials.password,
      altUserId: profileForm.email || credentials.altUserId
    };

    if (onUpdateCredentials) {
      onUpdateCredentials(updatedCreds);
    }
    setNewPassword('');
    setConfirmPassword('');
    showToast(
      lang === 'bn'
        ? 'লগইন তথ্য সফলভাবে আপডেট হয়েছে! পরবর্তী লগইনে এই তথ্য ব্যবহৃত হবে।'
        : 'Credentials updated successfully!'
    );
  };

  if (!isOpen) return null;

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-rose-100 text-center relative animate-fade-in">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 border border-rose-200 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {lang === 'bn' ? 'ড্যাশবোর্ড অ্যাক্সেস লক করা' : 'Dashboard Access Locked'}
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            {lang === 'bn'
              ? 'ড্যাশবোর্ডে প্রবেশ করতে হলে সঠিক ইউজার আইডি ও পাসওয়ার্ড দেওয়া আবশ্যক। ভুল ইউজার আইডি ও পাসওয়ার্ড ব্যবহার করলে ড্যাশবোর্ডে প্রবেশাধিকার পাওয়া যাবে না।'
              : 'Valid User ID and Password are required to access this dashboard. Incorrect credentials will deny entry.'}
          </p>
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => {
                onClose();
                if (onRequireLogin) onRequireLogin();
              }}
              className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ইউজার আইডি ও পাসওয়ার্ড দিন' : 'Enter User ID & Password'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'বন্ধ করুন' : 'Cancel'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const showToast = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(null), 3500);
  };

  // Profile Save
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePersonalInfo(profileForm);
    showToast(lang === 'bn' ? 'প্রোফাইল তথ্য সফলভাবে সেভ করা হয়েছে!' : 'Profile saved successfully!');
  };

  // Skill handlers
  const handleStartEditSkill = (s: Skill) => {
    setEditingSkillId(s.id);
    setIsAddingSkill(false);
    setSkillForm({ ...s });
  };

  const handleSaveSkill = () => {
    if (!skillForm.name) return;
    if (isAddingSkill) {
      const newSkill: Skill = {
        id: `skill-${Date.now()}`,
        name: skillForm.name || 'New Skill',
        nameBn: skillForm.nameBn || skillForm.name || 'নতুন স্কিল',
        category: skillForm.category || 'paid',
        proficiency: Number(skillForm.proficiency) || 90,
        experience: skillForm.experience || '3 Years',
        iconName: skillForm.iconName || 'Layers',
        description: skillForm.description || '',
        descriptionBn: skillForm.descriptionBn || '',
        tags: skillForm.tags || ['Marketing', 'Ads']
      };
      onUpdateSkills([newSkill, ...skills]);
      setIsAddingSkill(false);
      showToast(lang === 'bn' ? 'নতুন স্কিল যোগ করা হয়েছে!' : 'New skill added!');
    } else if (editingSkillId) {
      const updated = skills.map((s) =>
        s.id === editingSkillId ? ({ ...s, ...skillForm } as Skill) : s
      );
      onUpdateSkills(updated);
      setEditingSkillId(null);
      showToast(lang === 'bn' ? 'স্কিল আপডেট করা হয়েছে!' : 'Skill updated!');
    }
  };

  const handleDeleteSkill = (id: string) => {
    if (confirm(lang === 'bn' ? 'আপনি কি নিশ্চিত এই স্কিলটি মুছে ফেলতে চান?' : 'Are you sure you want to delete this skill?')) {
      onUpdateSkills(skills.filter((s) => s.id !== id));
      if (editingSkillId === id) setEditingSkillId(null);
      showToast(lang === 'bn' ? 'স্কিল মুছে ফেলা হয়েছে!' : 'Skill deleted!');
    }
  };

  // Project handlers
  const handleStartEditProject = (p: Project) => {
    setEditingProjectId(p.id);
    setIsAddingProject(false);
    setProjectForm({ ...p });
  };

  const handleSaveProject = () => {
    if (!projectForm.title) return;
    if (isAddingProject) {
      const newProj: Project = {
        id: `proj-${Date.now()}`,
        title: projectForm.title || 'New Project',
        titleBn: projectForm.titleBn || projectForm.title || 'নতুন প্রজেক্ট',
        category: (projectForm.category as any) || 'meta',
        categoryLabel: projectForm.categoryLabel || 'Paid Ads',
        categoryLabelBn: projectForm.categoryLabelBn || 'পেইড বিজ্ঞাপন',
        image: projectForm.image || '/src/assets/images/project_meta_ads_1790345054633.jpg',
        shortDesc: projectForm.shortDesc || '',
        shortDescBn: projectForm.shortDescBn || '',
        fullDesc: projectForm.fullDesc || '',
        fullDescBn: projectForm.fullDescBn || '',
        client: projectForm.client || 'Client Brand',
        duration: projectForm.duration || '3 Months',
        results: projectForm.results || [
          { label: 'ROAS', labelBn: 'গড় ROAS', value: '4.5x' },
          { label: 'Revenue', labelBn: 'রেভিনিউ', value: '$50,000' },
          { label: 'CPA', labelBn: 'CPA', value: '-30%' }
        ],
        tools: projectForm.tools || ['Meta Ads', 'Analytics']
      };
      onUpdateProjects([newProj, ...projects]);
      setIsAddingProject(false);
      showToast(lang === 'bn' ? 'নতুন প্রজেক্ট যোগ করা হয়েছে!' : 'New project added!');
    } else if (editingProjectId) {
      const updated = projects.map((p) =>
        p.id === editingProjectId ? ({ ...p, ...projectForm } as Project) : p
      );
      onUpdateProjects(updated);
      setEditingProjectId(null);
      showToast(lang === 'bn' ? 'প্রজেক্ট আপডেট করা হয়েছে!' : 'Project updated!');
    }
  };

  const handleDeleteProject = (id: string) => {
    if (confirm(lang === 'bn' ? 'এই প্রজেক্টটি ডিলিট করতে চান?' : 'Delete this project?')) {
      onUpdateProjects(projects.filter((p) => p.id !== id));
      if (editingProjectId === id) setEditingProjectId(null);
      showToast(lang === 'bn' ? 'প্রজেক্ট মুছে ফেলা হয়েছে!' : 'Project deleted!');
    }
  };

  // Blog handlers
  const handleStartEditBlog = (b: BlogPost) => {
    setEditingBlogId(b.id);
    setIsAddingBlog(false);
    setBlogForm({ ...b });
  };

  const handleSaveBlog = () => {
    if (!blogForm.title) return;
    if (isAddingBlog) {
      const newPost: BlogPost = {
        id: `blog-${Date.now()}`,
        title: blogForm.title || 'New Blog Article',
        titleBn: blogForm.titleBn || blogForm.title || 'নতুন ব্লগ পোস্ট',
        slug: `article-${Date.now()}`,
        image: blogForm.image || '/src/assets/images/blog_marketing_trends_1790345067064.jpg',
        publishDate: blogForm.publishDate || 'Today',
        publishDateBn: blogForm.publishDateBn || 'আজ',
        readTime: blogForm.readTime || '5 min read',
        readTimeBn: blogForm.readTimeBn || '৫ মিনিট',
        category: blogForm.category || 'Digital Strategy',
        categoryBn: blogForm.categoryBn || 'ডিজিটাল স্ট্র্যাটেজি',
        excerpt: blogForm.excerpt || '',
        excerptBn: blogForm.excerptBn || '',
        content: blogForm.content || ['Article paragraph 1', 'Article paragraph 2'],
        contentBn: blogForm.contentBn || ['প্রথম অনুচ্ছেদ', 'দ্বিতীয় অনুচ্ছেদ'],
        author: {
          name: personalInfo.name,
          role: personalInfo.title,
          avatar: personalInfo.avatar
        }
      };
      onUpdateBlogPosts([newPost, ...blogPosts]);
      setIsAddingBlog(false);
      showToast(lang === 'bn' ? 'নতুন ব্লগ আর্টিকেল প্রকাশিত হয়েছে!' : 'New blog article published!');
    } else if (editingBlogId) {
      const updated = blogPosts.map((b) =>
        b.id === editingBlogId ? ({ ...b, ...blogForm } as BlogPost) : b
      );
      onUpdateBlogPosts(updated);
      setEditingBlogId(null);
      showToast(lang === 'bn' ? 'ব্লগ আপডেট করা হয়েছে!' : 'Blog post updated!');
    }
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm(lang === 'bn' ? 'এই ব্লগটি ডিলিট করতে চান?' : 'Delete this blog article?')) {
      onUpdateBlogPosts(blogPosts.filter((b) => b.id !== id));
      if (editingBlogId === id) setEditingBlogId(null);
      showToast(lang === 'bn' ? 'ব্লগ মুছে ফেলা হয়েছে!' : 'Blog deleted!');
    }
  };

  // Hero Slide Handlers
  const handleStartEditSlide = (slide: CarouselSlide) => {
    setEditingSlideId(slide.id);
    setIsAddingSlide(false);
    setSlideForm({ ...slide });
  };

  const handleSaveSlide = () => {
    if (!slideForm.heroTitle && !slideForm.title) return;
    if (isAddingSlide) {
      const newSlide: CarouselSlide = {
        id: `slide-${Date.now()}`,
        greeting: slideForm.greeting || 'Hello',
        greetingBn: slideForm.greetingBn || 'হ্যালো',
        heroTitle: slideForm.heroTitle || "I'm Sohel",
        heroTitleBn: slideForm.heroTitleBn || 'আমি সোহেল',
        title: slideForm.title || 'Performance Marketing',
        titleBn: slideForm.titleBn || 'পারফরম্যান্স মার্কেটিং',
        subtitle: slideForm.subtitle || 'High-Converting Campaigns',
        subtitleBn: slideForm.subtitleBn || 'উচ্চ কনভার্সন ক্যাম্পেইন',
        description: slideForm.description || '',
        descriptionBn: slideForm.descriptionBn || '',
        image: slideForm.image || carouselSlides[0]?.image,
        badge: slideForm.badge || 'Showcase',
        badgeBn: slideForm.badgeBn || 'শোকেস',
        stats: slideForm.stats || [
          { label: 'Avg ROAS', labelBn: 'গড় ROAS', value: '4.8x' },
          { label: 'Ad Spend', labelBn: 'অ্যাড স্পেন্ড', value: '$50K+' },
          { label: 'Purchases', labelBn: 'অর্ডার', value: '10K+' }
        ]
      };
      onUpdateCarouselSlides([...carouselSlides, newSlide]);
      setIsAddingSlide(false);
      showToast(lang === 'bn' ? 'নতুন স্লাইড তৈরি করা হয়েছে!' : 'New hero slide added!');
    } else if (editingSlideId) {
      const updated = carouselSlides.map((s) =>
        s.id === editingSlideId ? ({ ...s, ...slideForm } as CarouselSlide) : s
      );
      onUpdateCarouselSlides(updated);
      setEditingSlideId(null);
      showToast(lang === 'bn' ? 'হিরো স্লাইড আপডেট করা হয়েছে!' : 'Slide updated!');
    }
  };

  const handleDeleteSlide = (id: string) => {
    if (carouselSlides.length <= 1) {
      alert(lang === 'bn' ? 'কমপক্ষে একটি স্লাইড থাকতে হবে!' : 'Must have at least one slide!');
      return;
    }
    if (confirm(lang === 'bn' ? 'এই স্লাইডটি ডিলিট করতে চান?' : 'Delete this slide?')) {
      onUpdateCarouselSlides(carouselSlides.filter((s) => s.id !== id));
      if (editingSlideId === id) setEditingSlideId(null);
      showToast(lang === 'bn' ? 'স্লাইড ডিলিট করা হয়েছে!' : 'Slide deleted!');
    }
  };

  // Export JSON Configuration
  const handleExportConfig = () => {
    const backupData = {
      personalInfo,
      carouselSlides,
      skills,
      projects,
      blogPosts,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Portfolio_Backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast(lang === 'bn' ? 'ব্যাকআপ ফাইল ডাউনলোড হয়েছে!' : 'Backup exported!');
  };

  const filteredMessages = messages.filter((msg) => {
    if (leadFilter === 'new') return msg.status === 'new';
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full p-4 sm:p-8 shadow-2xl border border-sky-100 max-h-[95vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  {lang === 'bn' ? 'পোর্টফোলিও অ্যাডমিন কন্ট্রোল প্যানেল' : 'Full Portfolio Admin CMS'}
                </h3>
                <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">
                  LIVE CMS
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {lang === 'bn'
                  ? 'এখান থেকে পুরো ওয়েবসাইটের টেক্সট, ছবি, স্কিলস, প্রজেক্ট ও স্লাইডার সহজে পরিবর্তন করুন।'
                  : 'Manage and customize any content, image, project, or lead on the live portfolio.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                {lang === 'bn' ? 'লগআউট' : 'Logout'}
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
              title="Close Dashboard"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {saveSuccessMsg && (
          <div className="my-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-fadeIn shrink-0">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{saveSuccessMsg}</span>
            </div>
            <button
              onClick={() => setSaveSuccessMsg(null)}
              className="text-emerald-700 font-bold hover:text-emerald-950"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab Navigation Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 border-b border-slate-100 shrink-0 text-xs scrollbar-none">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'bn' ? 'ইনবক্স ও লিড' : 'Leads & Inquiries'}</span>
            {messages.filter((m) => m.status === 'new').length > 0 && (
              <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                {messages.filter((m) => m.status === 'new').length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{lang === 'bn' ? 'প্রোফাইল ও পরিচয়' : 'Profile & Info'}</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'hero'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হিরো স্লাইডার' : 'Hero Carousel'}</span>
            <span className="text-[10px] opacity-75">({carouselSlides.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{lang === 'bn' ? 'দক্ষতাসমূহ (Skills)' : 'Skills'}</span>
            <span className="text-[10px] opacity-75">({skills.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>{lang === 'bn' ? 'প্রজেক্টস' : 'Projects'}</span>
            <span className="text-[10px] opacity-75">({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'blog'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{lang === 'bn' ? 'ব্লগ আর্টিকেল' : 'Blog'}</span>
            <span className="text-[10px] opacity-75">({blogPosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{lang === 'bn' ? 'সেটিংস ও ব্যাকআপ' : 'Backup & Reset'}</span>
          </button>
        </div>

        {/* Tab Contents Area */}
        <div className="flex-1 overflow-y-auto py-4 pr-1">
          {/* 1. LEADS TAB */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                  <span className="text-xs font-medium text-slate-600">
                    {lang === 'bn' ? 'মোট ইনকোয়ারি' : 'Total Inquiries'}
                  </span>
                  <p className="text-xl font-bold text-slate-900 mt-1 tabular-nums">
                    {messages.length}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <span className="text-xs font-medium text-emerald-800">
                    {lang === 'bn' ? 'নতুন লিড' : 'New Leads'}
                  </span>
                  <p className="text-xl font-bold text-emerald-700 mt-1 tabular-nums">
                    {messages.filter((m) => m.status === 'new').length}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                  <span className="text-xs font-medium text-slate-600">
                    {lang === 'bn' ? 'সক্রিয় প্রজেক্টস' : 'Active Projects'}
                  </span>
                  <p className="text-xl font-bold text-slate-900 mt-1 tabular-nums">
                    {projects.length}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                  <span className="text-xs font-medium text-slate-600">
                    {lang === 'bn' ? 'গড় ROAS' : 'Avg. ROAS'}
                  </span>
                  <p className="text-xl font-bold text-sky-600 mt-1 tabular-nums">
                    {personalInfo.avgROAS}
                  </p>
                </div>
              </div>

              {/* Messages list */}
              <div className="flex items-center justify-between pt-2">
                <h4 className="text-sm font-bold text-slate-900">
                  {lang === 'bn' ? 'গ্রাহকদের বার্তা তালিকা' : 'Client Messages & Leads'}
                </h4>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setLeadFilter('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      leadFilter === 'all'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    All ({messages.length})
                  </button>
                  <button
                    onClick={() => setLeadFilter('new')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      leadFilter === 'new'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    New ({messages.filter((m) => m.status === 'new').length})
                  </button>
                </div>
              </div>

              {filteredMessages.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <MessageSquare className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                  <p className="text-sm font-medium">
                    {lang === 'bn' ? 'কোন মেসেজ নেই।' : 'No messages found.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        msg.status === 'new'
                          ? 'bg-sky-50/40 border-sky-200'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900">{msg.name}</span>
                          {msg.status === 'new' && (
                            <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">
                              NEW
                            </span>
                          )}
                          <span className="text-xs text-sky-700 bg-white border border-sky-100 px-2 py-0.5 rounded font-medium">
                            {msg.service}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400">{msg.createdAt}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 my-2.5 leading-relaxed">
                        {msg.message}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2">
                        <div className="flex items-center gap-3 text-slate-500">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-sky-600" />
                            <a href={`mailto:${msg.email}`} className="text-sky-700 hover:underline">
                              {msg.email}
                            </a>
                          </span>
                          {msg.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{msg.phone}</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {msg.phone && (
                            <a
                              href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                                msg.name
                              )},%20I%20received%20your%20inquiry.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          )}

                          {msg.status === 'new' && (
                            <button
                              onClick={() => onMarkAsRead(msg.id)}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium cursor-pointer"
                            >
                              Mark Read
                            </button>
                          )}

                          <button
                            onClick={() => onDeleteMessage(msg.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2. PROFILE & IDENTITY TAB */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h4 className="text-sm font-bold text-slate-900">
                  {lang === 'bn' ? 'ব্যক্তিগত তথ্য ও পরিচিতি নিয়ন্ত্রণ' : 'Edit Personal Profile & Identity'}
                </h4>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'পরিবর্তন সেভ করুন' : 'Save Changes'}</span>
                </button>
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Name (English)
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    নাম (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={profileForm.nameBn}
                    onChange={(e) => setProfileForm({ ...profileForm, nameBn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Designation / Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Designation (English)
                  </label>
                  <input
                    type="text"
                    value={profileForm.title}
                    onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    পদবী (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={profileForm.titleBn}
                    onChange={(e) => setProfileForm({ ...profileForm, titleBn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Display Number
                  </label>
                  <input
                    type="text"
                    value={profileForm.whatsappDisplay}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        whatsappDisplay: e.target.value,
                        whatsappNumber: e.target.value.replace(/[^0-9]/g, '')
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Stats & Key Figures Bar */}
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
                <h5 className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                  {lang === 'bn' ? 'হোমপেজের মূল পরিসংখ্যান (Key Figures)' : 'Homepage Key Stats Bar'}
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Experience</label>
                    <input
                      type="text"
                      value={profileForm.experienceYears}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, experienceYears: e.target.value })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Ad Spend</label>
                    <input
                      type="text"
                      value={profileForm.adSpendManaged}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, adSpendManaged: e.target.value })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Satisfied Clients</label>
                    <input
                      type="text"
                      value={profileForm.satisfiedClients}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, satisfiedClients: e.target.value })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Avg ROAS</label>
                    <input
                      type="text"
                      value={profileForm.avgROAS}
                      onChange={(e) => setProfileForm({ ...profileForm, avgROAS: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold text-sky-700"
                    />
                  </div>
                </div>
              </div>

              {/* Short Bio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Short Bio (English)
                  </label>
                  <textarea
                    rows={3}
                    value={profileForm.bioShortEn}
                    onChange={(e) => setProfileForm({ ...profileForm, bioShortEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    সংক্ষিপ্ত পরিচিতি (বাংলা)
                  </label>
                  <textarea
                    rows={3}
                    value={profileForm.bioShortBn}
                    onChange={(e) => setProfileForm({ ...profileForm, bioShortBn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {lang === 'bn' ? 'সোশ্যাল মিডিয়া প্রোফাইল লিংক' : 'Social Media Profile Links'}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Facebook</label>
                    <input
                      type="url"
                      value={profileForm.socialLinks.facebook}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          socialLinks: { ...profileForm.socialLinks, facebook: e.target.value }
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Instagram</label>
                    <input
                      type="url"
                      value={profileForm.socialLinks.instagram}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          socialLinks: { ...profileForm.socialLinks, instagram: e.target.value }
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">LinkedIn</label>
                    <input
                      type="url"
                      value={profileForm.socialLinks.linkedin}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          socialLinks: { ...profileForm.socialLinks, linkedin: e.target.value }
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">YouTube</label>
                    <input
                      type="url"
                      value={profileForm.socialLinks.youtube}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          socialLinks: { ...profileForm.socialLinks, youtube: e.target.value }
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">TikTok</label>
                    <input
                      type="url"
                      value={profileForm.socialLinks.tiktok}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          socialLinks: { ...profileForm.socialLinks, tiktok: e.target.value }
                        })
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-0.5">Location</label>
                    <input
                      type="text"
                      value={profileForm.location}
                      onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'সেভ করুন (Save Profile)' : 'Save Profile'}</span>
                </button>
              </div>
            </form>
          )}

          {/* 3. HERO SLIDES TAB */}
          {activeTab === 'hero' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'bn' ? 'সিনেমেটিক হিরো স্লাইডার নিয়ন্ত্রণ' : 'Hero Carousel Slides'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn'
                      ? 'হোমপেজের বড় "Hello I\'m Sohel" স্লাইডার টেক্সট ও ছবি পরিবর্তন করুন।'
                      : 'Customize the full-bleed typography, background image, and message.'}
                  </p>
                </div>
                {!editingSlideId && !isAddingSlide && (
                  <button
                    onClick={() => {
                      setIsAddingSlide(true);
                      setSlideForm({
                        greeting: 'Hello',
                        greetingBn: 'হ্যালো',
                        heroTitle: "I'm Sohel",
                        heroTitleBn: 'আমি সোহেল',
                        description: 'I design and scale performance marketing funnels.',
                        descriptionBn: 'আমি পারফরম্যান্স মার্কেটিং ফানেল তৈরি করি।',
                        badge: 'Marketer',
                        badgeBn: 'মার্কেটার'
                      });
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'নতুন স্লাইড যোগ করুন' : 'Add New Slide'}</span>
                  </button>
                )}
              </div>

              {/* Editing Form */}
              {(editingSlideId || isAddingSlide) && (
                <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-sky-200">
                    <h5 className="text-xs font-bold text-sky-950 uppercase tracking-wider">
                      {isAddingSlide ? 'Add New Slide' : 'Edit Slide'}
                    </h5>
                    <button
                      onClick={() => {
                        setEditingSlideId(null);
                        setIsAddingSlide(false);
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Top Word (e.g. "Hello")
                      </label>
                      <input
                        type="text"
                        value={slideForm.greeting || ''}
                        onChange={(e) => setSlideForm({ ...slideForm, greeting: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        উপরে শব্দ (বাংলা: "হ্যালো")
                      </label>
                      <input
                        type="text"
                        value={slideForm.greetingBn || ''}
                        onChange={(e) => setSlideForm({ ...slideForm, greetingBn: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Main Title (e.g. "I'm Sohel")
                      </label>
                      <input
                        type="text"
                        value={slideForm.heroTitle || ''}
                        onChange={(e) => setSlideForm({ ...slideForm, heroTitle: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        প্রধান নাম (বাংলা: "আমি সোহেল")
                      </label>
                      <input
                        type="text"
                        value={slideForm.heroTitleBn || ''}
                        onChange={(e) =>
                          setSlideForm({ ...slideForm, heroTitleBn: e.target.value })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Description (English)
                      </label>
                      <textarea
                        rows={3}
                        value={slideForm.description || ''}
                        onChange={(e) =>
                          setSlideForm({ ...slideForm, description: e.target.value })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        বিবরণ (বাংলা)
                      </label>
                      <textarea
                        rows={3}
                        value={slideForm.descriptionBn || ''}
                        onChange={(e) =>
                          setSlideForm({ ...slideForm, descriptionBn: e.target.value })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Background Image Path / URL
                    </label>
                    <input
                      type="text"
                      value={slideForm.image || ''}
                      onChange={(e) => setSlideForm({ ...slideForm, image: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingSlideId(null);
                        setIsAddingSlide(false);
                      }}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveSlide}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white"
                    >
                      Save Slide
                    </button>
                  </div>
                </div>
              )}

              {/* Slides List Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {carouselSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                        <span className="text-xs font-bold text-sky-700">Slide #{idx + 1}</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleStartEditSlide(slide)}
                            className="p-1 text-slate-500 hover:text-sky-600 cursor-pointer"
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteSlide(slide.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="relative h-28 rounded-xl overflow-hidden mb-3 bg-slate-900">
                        <img
                          src={slide.image}
                          alt={slide.heroTitle}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 p-3 flex flex-col justify-end text-white">
                          <span className="text-xs text-[#fba888] font-bold">{slide.greeting}</span>
                          <span className="text-sm font-extrabold">{slide.heroTitle}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2">{slide.description}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{slide.badge}</span>
                      <button
                        onClick={() => handleStartEditSlide(slide)}
                        className="text-sky-600 font-semibold hover:underline"
                      >
                        Edit Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'bn' ? 'দক্ষতা ও পারদর্শিতা নিয়ন্ত্রণ' : 'Skills & Competencies'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn'
                      ? 'নতুন স্কিল যোগ করুন বা প্রফিশিয়েন্সি শতাংশ পরিবর্তন করুন।'
                      : 'Add new skill or update proficiency percentage on the live site.'}
                  </p>
                </div>
                {!editingSkillId && !isAddingSkill && (
                  <button
                    onClick={() => {
                      setIsAddingSkill(true);
                      setSkillForm({
                        name: '',
                        nameBn: '',
                        proficiency: 90,
                        category: 'paid',
                        experience: '4 Years',
                        iconName: 'Megaphone',
                        tags: ['Growth', 'PPC']
                      });
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'নতুন স্কিল যোগ করুন' : 'Add Skill'}</span>
                  </button>
                )}
              </div>

              {/* Editing Form */}
              {(editingSkillId || isAddingSkill) && (
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-sky-200">
                    <h5 className="text-xs font-bold text-sky-950 uppercase tracking-wider">
                      {isAddingSkill ? 'Add New Skill' : 'Edit Skill'}
                    </h5>
                    <button
                      onClick={() => {
                        setEditingSkillId(null);
                        setIsAddingSkill(false);
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Skill Name (English)
                      </label>
                      <input
                        type="text"
                        value={skillForm.name || ''}
                        onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        placeholder="e.g. TikTok Ads"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        স্কিল নাম (বাংলা)
                      </label>
                      <input
                        type="text"
                        value={skillForm.nameBn || ''}
                        onChange={(e) => setSkillForm({ ...skillForm, nameBn: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        placeholder="যেমন: টিকটক মার্কেটিং"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Proficiency (%) : {skillForm.proficiency}%
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={skillForm.proficiency || 90}
                        onChange={(e) =>
                          setSkillForm({ ...skillForm, proficiency: Number(e.target.value) })
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Category
                      </label>
                      <select
                        value={skillForm.category || 'paid'}
                        onChange={(e) =>
                          setSkillForm({ ...skillForm, category: e.target.value as any })
                        }
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      >
                        <option value="paid">Paid Ads (Meta/Google)</option>
                        <option value="social">Social Marketing</option>
                        <option value="organic">Organic SEO</option>
                        <option value="analytics">Analytics & Tracking</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Experience (e.g. 5 Years)
                      </label>
                      <input
                        type="text"
                        value={skillForm.experience || ''}
                        onChange={(e) =>
                          setSkillForm({ ...skillForm, experience: e.target.value })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Short Description (English / Bengali)
                    </label>
                    <input
                      type="text"
                      value={skillForm.description || ''}
                      onChange={(e) =>
                        setSkillForm({ ...skillForm, description: e.target.value })
                      }
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingSkillId(null);
                        setIsAddingSkill(false);
                      }}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveSkill}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white"
                    >
                      Save Skill
                    </button>
                  </div>
                </div>
              )}

              {/* Skills list table/grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{skill.name}</span>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{skill.experience} Exp</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEditSkill(skill)}
                        className="p-1 text-slate-400 hover:text-sky-600 cursor-pointer"
                        title="Edit Skill"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteSkill(skill.id)}
                        className="p-1 text-slate-400 hover:text-rose-600 cursor-pointer"
                        title="Delete Skill"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'bn' ? 'প্রজেক্টস ও কেস স্টাডি নিয়ন্ত্রণ' : 'Projects & Case Studies'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn'
                      ? 'নতুন প্রজেক্ট বা ক্যাম্পেইন যোগ করুন অথবা বর্তমানের তথ্য এডিট করুন।'
                      : 'Add or modify case studies shown in the 3-per-line portfolio grid.'}
                  </p>
                </div>
                {!editingProjectId && !isAddingProject && (
                  <button
                    onClick={() => {
                      setIsAddingProject(true);
                      setProjectForm({
                        title: '',
                        titleBn: '',
                        category: 'meta',
                        categoryLabel: 'Meta Ads',
                        categoryLabelBn: 'মেটা অ্যাডস',
                        client: 'E-commerce Brand',
                        duration: '3 Months',
                        shortDesc: '',
                        results: [
                          { label: 'ROAS', labelBn: 'গড় ROAS', value: '4.8x' },
                          { label: 'Revenue', labelBn: 'রেভিনিউ', value: '$75,000' },
                          { label: 'CPA', labelBn: 'CPA', value: '-35%' }
                        ]
                      });
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'নতুন প্রজেক্ট যোগ করুন' : 'Add Project'}</span>
                  </button>
                )}
              </div>

              {/* Editing Form */}
              {(editingProjectId || isAddingProject) && (
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-sky-200">
                    <h5 className="text-xs font-bold text-sky-950 uppercase tracking-wider">
                      {isAddingProject ? 'Add Project' : 'Edit Project'}
                    </h5>
                    <button
                      onClick={() => {
                        setEditingProjectId(null);
                        setIsAddingProject(false);
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Project Title (English)
                      </label>
                      <input
                        type="text"
                        value={projectForm.title || ''}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        প্রজেক্ট নাম (বাংলা)
                      </label>
                      <input
                        type="text"
                        value={projectForm.titleBn || ''}
                        onChange={(e) =>
                          setProjectForm({ ...projectForm, titleBn: e.target.value })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Category
                      </label>
                      <select
                        value={projectForm.category || 'meta'}
                        onChange={(e) =>
                          setProjectForm({ ...projectForm, category: e.target.value as any })
                        }
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      >
                        <option value="meta">Meta Ads</option>
                        <option value="youtube">YouTube Marketing</option>
                        <option value="instagram">Instagram Marketing</option>
                        <option value="tiktok">TikTok Ads</option>
                        <option value="seo">SEO Ranking</option>
                        <option value="ads">Google & PPC Ads</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Client Name
                      </label>
                      <input
                        type="text"
                        value={projectForm.client || ''}
                        onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Highlight Result (e.g. 5.2x ROAS)
                      </label>
                      <input
                        type="text"
                        value={projectForm.results?.[0]?.value || ''}
                        onChange={(e) => {
                          const res = [...(projectForm.results || [])];
                          if (!res[0]) res[0] = { label: 'ROAS', labelBn: 'গড় ROAS', value: '' };
                          res[0].value = e.target.value;
                          setProjectForm({ ...projectForm, results: res });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Short Description (English)
                    </label>
                    <textarea
                      rows={2}
                      value={projectForm.shortDesc || ''}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, shortDesc: e.target.value })
                      }
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      সংক্ষিপ্ত বিবরণ (বাংলা)
                    </label>
                    <textarea
                      rows={2}
                      value={projectForm.shortDescBn || ''}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, shortDescBn: e.target.value })
                      }
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingProjectId(null);
                        setIsAddingProject(false);
                      }}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProject}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white"
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              )}

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-24 rounded-lg overflow-hidden bg-slate-900 mb-2">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-1.5 right-1.5 bg-white/90 text-sky-900 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {proj.categoryLabel}
                        </span>
                      </div>
                      <h5 className="font-bold text-xs text-slate-900 line-clamp-1">{proj.title}</h5>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {proj.shortDesc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-sky-600 text-[11px]">
                        {proj.results[0]?.value}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleStartEditProject(proj)}
                          className="p-1 text-slate-500 hover:text-sky-600 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. BLOG TAB */}
          {activeTab === 'blog' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'bn' ? 'মার্কেটিং ব্লগ ও আর্টিকেল নিয়ন্ত্রণ' : 'Blog Articles CMS'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn'
                      ? 'নতুন আর্টিকেল লিখুন বা প্রকাশিত আর্টিকেল এডিট করুন।'
                      : 'Publish insights, case lessons, or marketing updates.'}
                  </p>
                </div>
                {!editingBlogId && !isAddingBlog && (
                  <button
                    onClick={() => {
                      setIsAddingBlog(true);
                      setBlogForm({
                        title: '',
                        titleBn: '',
                        category: 'Marketing Trends',
                        categoryBn: 'মার্কেটিং ট্রেন্ড',
                        publishDate: new Date().toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        }),
                        readTime: '5 min read',
                        excerpt: '',
                        excerptBn: ''
                      });
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'নতুন আর্টিকেল লিখুন' : 'Write New Article'}</span>
                  </button>
                )}
              </div>

              {/* Editing Form */}
              {(editingBlogId || isAddingBlog) && (
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-sky-200">
                    <h5 className="text-xs font-bold text-sky-950 uppercase tracking-wider">
                      {isAddingBlog ? 'Write Article' : 'Edit Article'}
                    </h5>
                    <button
                      onClick={() => {
                        setEditingBlogId(null);
                        setIsAddingBlog(false);
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Article Title (English)
                      </label>
                      <input
                        type="text"
                        value={blogForm.title || ''}
                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        আর্টিকেল শিরোনাম (বাংলা)
                      </label>
                      <input
                        type="text"
                        value={blogForm.titleBn || ''}
                        onChange={(e) => setBlogForm({ ...blogForm, titleBn: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Category (e.g. Paid Advertising)
                      </label>
                      <input
                        type="text"
                        value={blogForm.category || ''}
                        onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Read Time (e.g. 6 min read)
                      </label>
                      <input
                        type="text"
                        value={blogForm.readTime || ''}
                        onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Excerpt / Summary (English)
                    </label>
                    <textarea
                      rows={2}
                      value={blogForm.excerpt || ''}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      সংক্ষিপ্ত সারমর্ম (বাংলা)
                    </label>
                    <textarea
                      rows={2}
                      value={blogForm.excerptBn || ''}
                      onChange={(e) => setBlogForm({ ...blogForm, excerptBn: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingBlogId(null);
                        setIsAddingBlog(false);
                      }}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveBlog}
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white"
                    >
                      Save Article
                    </button>
                  </div>
                </div>
              )}

              {/* Blogs list */}
              <div className="space-y-3">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="text-sky-600 font-semibold">{post.category}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h5 className="font-bold text-sm text-slate-900 mt-0.5 line-clamp-1">
                          {post.title}
                        </h5>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{post.excerpt}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        onClick={() => handleStartEditBlog(post)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(post.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. BACKUP & RESET TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Credentials / Security Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {lang === 'bn' ? 'অ্যাডমিন ইউজার আইডি ও পাসওয়ার্ড ম্যানেজমেন্ট' : 'Admin Security & Access Credentials'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {lang === 'bn'
                          ? 'ড্যাশবোর্ডে প্রবেশের জন্য ব্যবহৃত ইউজার আইডি ও পাসওয়ার্ড এখান থেকে পরিবর্তন ও নিয়ন্ত্রণ করুন।'
                          : 'Change the User ID and Password required to unlock and manage the dashboard.'}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold flex items-center gap-1 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'সুরক্ষিত' : 'Protected'}</span>
                  </span>
                </div>

                {credError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{credError}</span>
                  </div>
                )}

                <form onSubmit={handleSaveCredentials} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'bn' ? 'অ্যাডমিন ইউজার আইডি (User ID)' : 'Admin User ID'}
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={adminUserId}
                          onChange={(e) => setAdminUserId(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 text-xs"
                          placeholder="e.g. admin"
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {lang === 'bn' ? 'বর্তমান আইডি: ' + credentials.userId : 'Current: ' + credentials.userId}
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'bn' ? 'নতুন পাসওয়ার্ড (New Password)' : 'New Password'}
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type={showCredPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder={lang === 'bn' ? 'পরিবর্তন না করতে খালি রাখুন' : 'Leave empty to keep current'}
                          className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCredPassword(!showCredPassword)}
                          className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          {showCredPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {lang === 'bn' ? 'কমপক্ষে ৪ অক্ষর' : 'Min 4 characters'}
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'bn' ? 'কনফার্ম পাসওয়ার্ড' : 'Confirm Password'}
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type={showCredPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder={lang === 'bn' ? 'পাসওয়ার্ডটি আবার লিখুন' : 'Re-enter new password'}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[11px] text-slate-500">
                      {lang === 'bn'
                        ? '* ভুল তথ্য দিলে ড্যাশবোর্ডে প্রবেশাধিকার দেওয়া হবে না। পাসওয়ার্ড পরিবর্তন করলে মনে রাখুন।'
                        : '* Unauthorized access will be denied. Make sure to remember your new password.'}
                    </p>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'ক্রেডেনশিয়াল সেভ করুন' : 'Save Credentials'}</span>
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {lang === 'bn' ? 'ডাটা ব্যাকআপ ও রিসেট কন্ট্রোল' : 'Data Backup & Restore'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'bn'
                    ? 'আপনার সমস্ত সেটিংস কম্পিউটারে ব্যাকআপ হিসেবে ডাউনলোড করে রাখুন অথবা প্রয়োজনে রিসেট করুন।'
                    : 'Download a JSON snapshot of your entire portfolio or reset to original settings.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-2">
                      <Download className="w-4 h-4" />
                    </div>
                    <h5 className="font-bold text-sm text-slate-900">
                      {lang === 'bn' ? 'ব্যাকআপ ডাউনলোড (JSON)' : 'Export Full Portfolio (JSON)'}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      {lang === 'bn'
                        ? 'সকল টেক্সট, স্লাইড, স্কিল ও প্রজেক্ট কনফিগারেশন একটি ফাইলে সেভ করুন।'
                        : 'Save all your custom titles, projects, and slides safely.'}
                    </p>
                  </div>
                  <button
                    onClick={handleExportConfig}
                    className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                {/* Reset Card */}
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-2">
                      <RotateCcw className="w-4 h-4" />
                    </div>
                    <h5 className="font-bold text-sm text-slate-900">
                      {lang === 'bn' ? 'ডিফল্ট সেটিংসে রিসেট করুন' : 'Reset to Default Settings'}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      {lang === 'bn'
                        ? 'আপনার তৈরি করা পরিবর্তন মুছে দিয়ে মূল পোর্টফোলিও ডাটা ফিরিয়ে আনুন।'
                        : 'Clear all custom changes and reload the initial showcase content.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (
                        confirm(
                          lang === 'bn'
                            ? 'আপনি কি নিশ্চিত পুরো পোর্টফোলিও রিসেট করতে চান?'
                            : 'Are you sure you want to reset everything to initial state?'
                        )
                      ) {
                        onResetAllData();
                        showToast(lang === 'bn' ? 'সবকিছু সফলভাবে রিসেট হয়েছে!' : 'Reset complete!');
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Data</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between shrink-0 text-xs">
          <span className="text-slate-400">
            {lang === 'bn'
              ? '✓ ব্রাউজারের লোকাল স্টোরেজে স্বয়ংক্রিয়ভাবে সংরক্ষিত'
              : '✓ Instant sync to browser storage'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold cursor-pointer transition-colors"
          >
            {lang === 'bn' ? 'ড্যাশবোর্ড বন্ধ করুন' : 'Close Dashboard'}
          </button>
        </div>
      </div>
    </div>
  );
};

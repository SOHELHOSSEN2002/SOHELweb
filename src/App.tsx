/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { DashboardModal } from './components/DashboardModal';
import {
  personalInfo as defaultPersonalInfo,
  carouselSlides as defaultCarouselSlides,
  skillsData as defaultSkillsData,
  projectsData as defaultProjectsData,
  blogPostsData as defaultBlogPostsData,
  initialContactMessages,
  defaultAdminCredentials
} from './data/portfolioData';
import {
  ContactMessage,
  PersonalInfo,
  CarouselSlide,
  Skill,
  Project,
  BlogPost,
  AdminCredentials
} from './types';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('pm_isLoggedIn') === 'true';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginReason, setLoginReason] = useState<'dashboard' | 'general'>('dashboard');
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Admin Credentials State
  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>(() => {
    const saved = localStorage.getItem('pm_admin_auth');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultAdminCredentials;
      }
    }
    return defaultAdminCredentials;
  });

  // 1. Messages / Leads State
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('pm_contact_messages');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialContactMessages;
      }
    }
    return initialContactMessages;
  });

  // 2. Personal Info State
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(() => {
    const saved = localStorage.getItem('pm_personal_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultPersonalInfo;
      }
    }
    return defaultPersonalInfo;
  });

  // 3. Carousel Slides State
  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>(() => {
    const saved = localStorage.getItem('pm_carousel_slides');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultCarouselSlides;
      }
    }
    return defaultCarouselSlides;
  });

  // 4. Skills State
  const [skills, setSkills] = useState<Skill[]>(() => {
    const saved = localStorage.getItem('pm_skills');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultSkillsData;
      }
    }
    return defaultSkillsData;
  });

  // 5. Projects State
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('pm_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultProjectsData;
      }
    }
    return defaultProjectsData;
  });

  // 6. Blog Posts State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('pm_blog_posts');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultBlogPostsData;
      }
    }
    return defaultBlogPostsData;
  });

  // LocalStorage Sync Effects
  useEffect(() => {
    localStorage.setItem('pm_contact_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('pm_personal_info', JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem('pm_carousel_slides', JSON.stringify(carouselSlides));
  }, [carouselSlides]);

  useEffect(() => {
    localStorage.setItem('pm_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('pm_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('pm_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('pm_isLoggedIn', isLoggedIn ? 'true' : 'false');
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('pm_admin_auth', JSON.stringify(adminCredentials));
  }, [adminCredentials]);

  // Reset to Factory Defaults
  const handleResetAllData = () => {
    localStorage.removeItem('pm_personal_info');
    localStorage.removeItem('pm_carousel_slides');
    localStorage.removeItem('pm_skills');
    localStorage.removeItem('pm_projects');
    localStorage.removeItem('pm_blog_posts');
    localStorage.removeItem('pm_contact_messages');
    localStorage.removeItem('pm_admin_auth');

    setPersonalInfo(defaultPersonalInfo);
    setCarouselSlides(defaultCarouselSlides);
    setSkills(defaultSkillsData);
    setProjects(defaultProjectsData);
    setBlogPosts(defaultBlogPostsData);
    setMessages(initialContactMessages);
    setAdminCredentials(defaultAdminCredentials);
  };

  // ScrollSpy to update active section in navbar
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'blog', 'resume', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDashboard = () => {
    if (isLoggedIn) {
      setIsDashboardModalOpen(true);
    } else {
      // User must provide valid User ID and Password
      setLoginReason('dashboard');
      setIsLoginModalOpen(true);
    }
  };

  const handleOpenLogin = () => {
    setLoginReason('general');
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = (_userId: string) => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    // User successfully authenticated with valid User ID and Password -> open Dashboard
    setIsDashboardModalOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDashboardModalOpen(false);
  };

  const handleSendMessage = (newMsg: ContactMessage) => {
    setMessages((prev) => [newMsg, ...prev]);
  };

  const handleMarkAsRead = (id: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, status: 'read' as const } : msg))
    );
  };

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const unreadCount = messages.filter((m) => m.status === 'new').length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. Top Bar: Directly above Navbar with Dashboard and Login/Logout */}
      <TopBar
        isLoggedIn={isLoggedIn}
        onOpenLogin={handleOpenLogin}
        onLogout={handleLogout}
        onOpenDashboard={handleOpenDashboard}
        lang={lang}
        onToggleLang={() => setLang(lang === 'bn' ? 'en' : 'bn')}
        unreadCount={unreadCount}
        personalInfo={personalInfo}
      />

      {/* 2. Responsive Navbar: Home, About, Skills, Projects, Blog, Resume + Animated Contact */}
      <Navbar lang={lang} activeSection={activeSection} personalInfo={personalInfo} />

      {/* Main Content Sections with Smooth Scrolling */}
      <main className="flex-1">
        {/* 3. Hero Carousel Section with recent project screenshots, name, designation, bio, Learn More */}
        <HeroCarousel
          lang={lang}
          personalInfo={personalInfo}
          carouselSlides={carouselSlides}
          onLearnMoreClick={() => {
            const aboutEl = document.getElementById('about');
            if (aboutEl) {
              aboutEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 4. About Section with Learn More button/modal */}
        <AboutSection
          lang={lang}
          personalInfo={personalInfo}
          isModalOpen={isAboutModalOpen}
          setIsModalOpen={setIsAboutModalOpen}
        />

        {/* 5. Skills Section: Icons, Facebook Marketing, YouTube, Instagram, TikTok, Ads Campaign, SEO, etc. */}
        <SkillsSection lang={lang} skills={skills} />

        {/* 6. Projects Section: 3 projects per line, image, name, short desc, Learn More button */}
        <ProjectsSection lang={lang} projects={projects} />

        {/* 7. Blog Section: Big picture on top, blog name, details, and article reader */}
        <BlogSection lang={lang} blogPosts={blogPosts} />

        {/* 8. Resume Section: Resume view, printable document, PDF preview and download buttons */}
        <ResumeSection lang={lang} personalInfo={personalInfo} skills={skills} />

        {/* 9. Contact Section: WhatsApp number at top, form with name/email/description, Google Map embed */}
        <ContactSection
          lang={lang}
          personalInfo={personalInfo}
          onSendMessage={handleSendMessage}
        />
      </main>

      {/* 10. Footer with linked social media icons: Facebook, Instagram, LinkedIn, YouTube, TikTok, WhatsApp */}
      <Footer lang={lang} personalInfo={personalInfo} />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        lang={lang}
        credentials={adminCredentials}
        reason={loginReason}
      />

      <DashboardModal
        isOpen={isDashboardModalOpen}
        onClose={() => setIsDashboardModalOpen(false)}
        messages={messages}
        onMarkAsRead={handleMarkAsRead}
        onDeleteMessage={handleDeleteMessage}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        lang={lang}
        personalInfo={personalInfo}
        onUpdatePersonalInfo={setPersonalInfo}
        carouselSlides={carouselSlides}
        onUpdateCarouselSlides={setCarouselSlides}
        skills={skills}
        onUpdateSkills={setSkills}
        projects={projects}
        onUpdateProjects={setProjects}
        blogPosts={blogPosts}
        onUpdateBlogPosts={setBlogPosts}
        onResetAllData={handleResetAllData}
        credentials={adminCredentials}
        onUpdateCredentials={setAdminCredentials}
        onRequireLogin={() => {
          setLoginReason('dashboard');
          setIsLoginModalOpen(true);
        }}
      />
    </div>
  );
}


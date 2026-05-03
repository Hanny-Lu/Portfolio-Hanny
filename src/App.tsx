/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Download, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Target,
  Users,
  Briefcase,
  PlayCircle,
  Image as ImageIcon,
  CheckCircle2,
  TrendingUp,
  Layout
} from 'lucide-react';
import { cn } from './lib/utils';
import { PORTFOLIO_SECTIONS, PortfolioSection, Project } from './constants';

const IMPACT_HIGHLIGHTS = [
  { label: 'Content Growth', value: '150+', sub: 'Articles Published' },
  { label: 'Global Impact', value: '12', sub: 'Overseas Events' },
  { label: 'Market Depth', value: 'B2B/AI', sub: 'Tech & SaaS Expert' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_SECTIONS[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-slate-200">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100" : "bg-transparent py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-slate-900">
          <div className="font-bold text-lg tracking-tighter uppercase font-display">
            Hanny <span className="text-slate-400">© 2026</span>
          </div>
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#portfolio" className="hover:opacity-50 transition-opacity">Work</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">Info</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Extreme Visual Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-slate-400/20 blur-[100px]" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.8)_100%)]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        {/* Minimal Typography Layout */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* The "Hanny" Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="text-[clamp(5rem,15vw,12rem)] font-display font-bold leading-none tracking-tighter text-white">
                HANNY
              </h1>
              
              {/* Marketing Label - Positioned absolutely relative to HANNY */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 left-0 md:-left-12 flex items-center gap-4"
              >
                <div className="h-[2px] w-8 md:w-16 bg-indigo-500"></div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-indigo-400">Marcom & Growth</span>
              </motion.div>

              {/* Portfolio Label - Positioned absolutely relative to HANNY */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 right-0 md:-right-12 flex items-center justify-end"
              >
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-slate-400 text-right">Portfolio / 2026</span>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50">Scroll to explore</span>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Flare */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-6 mt-2 font-display">Marketing Case Portfolio</h2>
            <p className="text-lg text-slate-600">
              A selection of projects across six core marketing functions, demonstrating strategic thinking and outcome-driven execution.
            </p>
          </div>

          {/* Mobile Categories Switched to Horizontal Scroll */}
          <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto no-scrollbar flex gap-2 pb-2">
            {PORTFOLIO_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border",
                  activeTab === section.id 
                    ? "bg-slate-900 text-white border-slate-900" 
                    : "bg-white text-slate-500 border-slate-200"
                )}
              >
                {section.title.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex flex-wrap justify-center gap-2 mb-12 border border-slate-100 p-2 rounded-2xl bg-slate-50/50 w-full">
            {PORTFOLIO_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={cn(
                  "px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap",
                  activeTab === section.id 
                    ? "bg-white text-slate-900 shadow-sm shadow-slate-200" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {PORTFOLIO_SECTIONS.map((section) => {
                const isActive = activeTab === section.id;
                if (!isActive) return null;
                
                return (
                  <motion.div 
                    key={section.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid lg:grid-cols-12 gap-8 lg:gap-16"
                  >
                    {/* Category Intro */}
                    <div className="lg:col-span-4 space-y-8">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <span className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-500">Section Overview</span>
                          <h3 className="text-4xl md:text-5xl font-bold leading-tight font-display text-slate-900">{section.title}</h3>
                          <p className="text-lg text-slate-600 leading-relaxed font-medium">{section.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {section.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Cards */}
                    <div className="lg:col-span-8 space-y-12">
                      {section.projects.map((project, pIdx) => (
                        <CaseStudyCard key={pIdx} project={project} index={pIdx} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Categories (for better UX, you could also use an actual accordion button here) */}
          <div className="lg:hidden mt-8 space-y-4">
            <p className="text-center text-sm font-medium text-slate-400">Click categories above to explore more</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 px-4 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-display">Focusing on clarity, measurement, and sales alignment.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                I enjoy turning complex products and business goals into clear marketing stories, campaigns, and sales-ready materials that deliver tangible business results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <h4 className="font-bold flex items-center gap-2">
                    <Target size={20} className="text-slate-300" /> Strategic
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Connecting every marketing dollar spent to a specific business outcome.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold flex items-center gap-2">
                    <TrendingUp size={20} className="text-slate-300" /> Data-Driven
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Using analytics to validate hypothesis and scale winning channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-slate-900 rounded-3xl border border-slate-800 p-8 flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
               <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Collaborative Partner</h3>
                  <p className="text-slate-500 max-w-xs mx-auto">Working closely with sales, product, and leadership to ensure go-to-market harmony.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold tracking-tight font-display">Let's Connect</h2>
            <p className="text-xl text-slate-600">
              I'm open to marketing roles in B2B, AI, SaaS, and technology-driven growth teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center justify-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Mail size={20} className="text-slate-600" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-950">Email Me</span>
            </a>
            <a 
              href="https://linkedin.com/in/yourname" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Linkedin size={20} className="text-slate-600" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-950">LinkedIn</span>
            </a>
            <button className="flex items-center justify-center gap-3 p-5 bg-slate-900 text-white rounded-2xl border border-slate-900 hover:shadow-xl hover:shadow-slate-200 transition-all group">
              <Download size={20} />
              <span className="font-semibold">Get Resume</span>
            </button>
          </div>

          <div className="pt-20 border-t border-slate-100 text-slate-400 text-sm font-medium">
            <p>© {new Date().getFullYear()} Strategic Marketing Portfolio. Designed for excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface CaseStudyCardProps {
  project: Project;
  index: number;
  key?: React.Key;
}

function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
    >
      <div className="grid lg:grid-cols-12 gap-0">
        {/* Project Visual Area */}
        <div className="lg:col-span-5 bg-slate-50 border-r border-slate-100 flex flex-col items-center justify-center relative min-h-[400px] overflow-hidden">
          {project.imageUrl && !imgError ? (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-100/30 flex flex-col items-center justify-center text-slate-300 p-12 text-center">
              {project.mediaType === 'video' ? <PlayCircle size={48} strokeWidth={1} /> : <ImageIcon size={48} strokeWidth={1} />}
              <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]">Visual Asset</span>
              <p className="mt-2 text-[9px] leading-relaxed opacity-60">请在 constants.ts 中确认路径或上传图片至工程目录</p>
            </div>
          )}
        </div>

        {/* Project Content Area */}
        <div className="lg:col-span-7 p-8 md:p-12 space-y-10 flex flex-col justify-center bg-white">
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <h4 className="text-2xl md:text-3xl font-bold group-hover:text-indigo-600 transition-colors font-display leading-tight">{project.title}</h4>
              <button className="text-slate-300 hover:text-slate-900 transition-colors p-1 shrink-0">
                <ExternalLink size={20} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-indigo-200"></div>
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em]">{project.role}</span>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">The Challenge</h5>
              <p className="text-slate-600 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Strategy & Action</h5>
              <div className="grid gap-3">
                {project.actions.map((action, i) => (
                  <div key={i} className="flex gap-4 items-start text-slate-700 text-sm leading-relaxed">
                    <span className="text-indigo-300 font-mono font-bold mt-1">0{i+1}</span>
                    <p className="font-medium">{action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative group/impact">
               <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-2xl"></div>
               <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">Key Results</h5>
               <p className="text-lg font-bold text-slate-900 leading-snug">
                 {project.result}
               </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-400 border border-slate-100 rounded text-[10px] font-bold uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

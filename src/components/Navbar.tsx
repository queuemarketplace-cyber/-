import React from 'react';
import { APPLICATION_URL } from '../data/qhubData';
import { logClickEvent } from '../lib/firebase';
import { ArrowUpRight, Sparkles, Phone, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenApplyModal?: () => void;
}

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-xl tracking-tighter text-blue-700">
                Q<span className="text-cyan-500">Hub</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Q<span className="text-blue-600">Hub</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
                Agent Recruitment
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center ml-3 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Founding Agent รุ่นแรก
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#work-model" className="hover:text-blue-600 transition-colors">
            รูปแบบการรับงาน
          </a>
          <a href="#revenue-sharing" className="hover:text-blue-600 transition-colors">
            ส่วนแบ่งรายได้
          </a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">
            สิทธิประโยชน์
          </a>
          <a href="#register-lead" className="hover:text-blue-600 transition-colors flex items-center gap-1 font-semibold text-blue-700">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ลงทะเบียนด่วน</span>
          </a>
          <a href="#launch-contact" className="hover:text-blue-600 transition-colors">
            กำหนดการ & ติดต่อ
          </a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">
            คำถามที่พบบ่อย
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0948277626"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden md:inline">094-827-7626</span>
          </a>

          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logClickEvent('navbar_apply_button')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>สนใจสมัคร Agent</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { APPLICATION_URL } from '../data/qhubData';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Calendar, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 py-16 sm:py-24 border-b border-slate-200/60">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-cyan-200/50 rounded-full blur-3xl" />
        <div className="absolute top-32 left-1/2 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-blue-600 animate-spin-slow" />
          <span>เปิดรับสมัครจำนวนจำกัด • Founding Agent รุ่นแรก</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          เปิดรับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Agent รุ่นแรก</span>
          <br className="hidden sm:inline" /> (Founding Agent)
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          <strong className="font-semibold text-slate-800">QHub</strong> กำลังเปิดรับสมัคร Agent รุ่นแรกจำนวนจำกัด เพื่อเตรียมความพร้อมก่อนเปิดให้บริการอย่างเป็นทางการในเดือนหน้า
        </motion.p>

        {/* Highlight Callout Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xs border border-blue-200/80 shadow-sm relative text-slate-700 text-sm sm:text-base italic font-medium"
        >
          <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold not-italic uppercase tracking-wider">
            สิทธิพิเศษเฉพาะรุ่นแรก
          </div>
          “Agent รุ่นแรกจะได้รับสิทธิ์เข้าใช้งานระบบก่อน พร้อมร่วมเป็นส่วนหนึ่งในการเติบโตของแพลตฟอร์มตั้งแต่เริ่มต้น”
        </motion.div>

        {/* Call-to-action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:via-indigo-700 hover:to-cyan-700 text-white font-bold text-base sm:text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 active:scale-[0.98] transition-all group"
          >
            <span>สนใจสมัคร Agent รุ่นแรก</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#work-model"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-base border border-slate-200 shadow-xs transition-colors"
          >
            อ่านเกณฑ์การรับงาน
          </a>
        </motion.div>

        {/* Feature Pill Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">ค่าสมัคร & ค่าธรรมเนียม</div>
              <div className="text-sm font-bold text-slate-900">ฟรี 100% ไม่มีค่าใช้จ่าย</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">ความยืดหยุ่น</div>
              <div className="text-sm font-bold text-slate-900">เลือกรับงานเมื่อสะดวก</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">ส่วนแบ่งรายได้</div>
              <div className="text-sm font-bold text-slate-900">สูงสุด 88% (ตาม Tier)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">กำหนดเปิดบริการ</div>
              <div className="text-sm font-bold text-slate-900">กันยายน 2569</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

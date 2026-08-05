import React from 'react';
import { motion } from 'motion/react';
import { FOUNDING_BENEFITS, APPLICATION_URL } from '../data/qhubData';
import { logClickEvent } from '../lib/firebase';
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Clock,
  Zap,
  Award,
  MessageSquarePlus,
  ArrowRight,
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-indigo-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-purple-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-yellow-600" />;
      case 'MessageSquarePlus':
        return <MessageSquarePlus className="w-6 h-6 text-pink-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Exclusive Privileges</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            สิทธิประโยชน์ของ <span className="text-blue-600">Agent รุ่นแรก</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            โอกาสพิเศษสิทธิประโยชน์จัดเต็มสำหรับผู้สมัครเข้าร่วมเป็น <strong className="text-slate-800">Founding Agent</strong> ยุคบุกเบิกของ QHub
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {getIcon(benefit.iconName)}
                  </div>
                  {benefit.tag && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                      {benefit.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>ได้รับสิทธิ์ทันทีเมื่อสมัคร</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA in Benefits */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              Founding Agent Privileges
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              พร้อมรับสิทธิประโยชน์ของ Agent รุ่นแรกหรือยัง?
            </h3>
            <p className="text-sm text-blue-100 mt-1 max-w-xl">
              สมัครฟรี ไม่มีค่าเปิดบัญชี ไม่มีค่าธรรมเนียมรายปี รับสิทธิ์เข้าใช้งานก่อนใคร
            </p>
          </div>

          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logClickEvent('benefits_section_apply_button')}
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
          >
            <span>ลงทะเบียนสมัครตอนนี้</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

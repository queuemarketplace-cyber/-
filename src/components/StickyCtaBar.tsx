import React from 'react';
import { APPLICATION_URL } from '../data/qhubData';
import { logClickEvent } from '../lib/firebase';
import { Sparkles, ArrowRight } from 'lucide-react';

export const StickyCtaBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-2 sm:px-6">
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-sm shrink-0">
            Q
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span>เปิดรับสมัคร QHub Agent รุ่นแรก</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                สมัครฟรี 100%
              </span>
            </div>
            <p className="text-xs text-slate-500">
              รับจำนวนจำกัด • เลือกรับงานอิสระ • ส่วนแบ่งรายได้สูงสุด 88%
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logClickEvent('sticky_bar_apply_button')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-98 transition-all group"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>สนใจสมัคร Agent รุ่นแรก</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { APPLICATION_URL } from '../data/qhubData';
import { Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-xl flex items-center justify-center">
                Q
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Q<span className="text-blue-500">Hub</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              QHub แพลตฟอร์มตัวกลางเชื่อมต่อระหว่างลูกค้าและ Agent ให้บริการด้วยความโปร่งใส ยุติธรรม ยืดหยุ่น และสร้างรายได้ยั่งยืน
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ระบบปลอดภัย โปร่งใส ยืนยันตัวตนชัดเจน</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              เมนูลัด
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#work-model" className="hover:text-white transition-colors">
                  รูปแบบการรับงาน
                </a>
              </li>
              <li>
                <a href="#revenue-sharing" className="hover:text-white transition-colors">
                  โครงสร้าง Revenue Sharing
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  สิทธิประโยชน์ Agent รุ่นแรก
                </a>
              </li>
              <li>
                <a href="#launch-contact" className="hover:text-white transition-colors">
                  กำหนดการ & ติดต่อสอบถาม
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  คำถามที่พบบ่อย (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ติดต่อสมัครงาน
            </h4>
            <div className="text-xs space-y-2">
              <p className="text-slate-300 font-semibold">สอบถามข้อมูลเพิ่มเติม:</p>
              <a
                href="tel:0948277626"
                className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline font-mono text-sm"
              >
                <Phone className="w-4 h-4" />
                094-827-7626 (คุณนินจา)
              </a>
              <div className="pt-2">
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
                >
                  <span>แบบฟอร์มลงทะเบียนสมัคร</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} QHub Platform. All rights reserved.</p>
          <p className="text-slate-500">
            เปิดให้บริการเต็มรูปแบบ เดือน กันยายน 2569
          </p>
        </div>
      </div>
    </footer>
  );
};

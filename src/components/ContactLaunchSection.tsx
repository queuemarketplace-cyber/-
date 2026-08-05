import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Phone, Copy, Check, MessageCircle, Calendar } from 'lucide-react';

export const ContactLaunchSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '094-827-7626';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0948277626');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="launch-contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Launch Date Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-4">
                <Rocket className="w-3.5 h-3.5 animate-bounce" />
                <span>Launch Schedule</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                พร้อมเปิดใช้งานจริง
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-200">
                  เดือน กันยายน 2569
                </span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                QHub กำลังเตรียมความพร้อมขั้นสุดท้ายเพื่อให้ Agent รุ่นแรกสามารถเริ่มต้นรับงานได้อย่างราบรื่น ปลอดภัย และมีประสิทธิภาพสูงสุด
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/10 text-cyan-300 border border-white/10">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">เปิดรับสมัคร Founding Agent</div>
                  <div className="text-sm font-bold text-white">รับจำนวนจำกัดวันนี้</div>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-cyan-200 font-medium">
                ⚡ Agent รุ่นแรกจะได้สิทธิ์เริ่มงานทันทีเมื่อเปิดระบบ
              </div>
            </div>
          </motion.div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <Phone className="w-3.5 h-3.5" />
                <span>Need Support?</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                สอบถามข้อมูลเพิ่มเติม
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                หากมีข้อสงสัยเกี่ยวกับเกณฑ์การสมัคร สิทธิประโยชน์ หรือรายละเอียดระบบ สามารถติดต่อทีมงาน QHub ได้โดยตรง
              </p>

              {/* Contact Card */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  เจ้าหน้าที่รับเรื่องสมัคร Agent
                </div>
                <div className="mt-1 text-lg font-bold text-slate-900 flex items-center justify-between">
                  <span>คุณนินจา</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                    QHub Support
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-mono text-base font-bold text-slate-900">
                      {phoneNumber}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors flex items-center gap-1 text-xs font-medium"
                    title="คัดลอกเบอร์โทร"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600">คัดลอกแล้ว</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>คัดลอก</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`tel:0948277626`}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>โทรสอบถามทันที</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

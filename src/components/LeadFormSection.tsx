import React, { useState } from 'react';
import { motion } from 'motion/react';
import { submitAgentLead, logClickEvent } from '../lib/firebase';
import { APPLICATION_URL } from '../data/qhubData';
import { UserCheck, Send, CheckCircle2, AlertCircle, ArrowUpRight, Database, ShieldCheck } from 'lucide-react';

export const LeadFormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lineId, setLineId] = useState('');
  const [experience, setExperience] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('กรุณากรอกชื่อ-นามสกุล และเบอร์โทรศัพท์ให้ครบถ้วน');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const res = await submitAgentLead({
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      lineId: lineId.trim(),
      experience: experience.trim(),
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      logClickEvent('quick_lead_form_submitted');
    } else {
      setErrorMsg(res.error || 'เกิดข้อผิดพลาดในการลงทะเบียน');
    }
  };

  return (
    <section id="register-lead" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-blue-200/80 shadow-xl relative overflow-hidden">
          {/* Top Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  ลงทะเบียนแสดงความสนใจ (Quick Register)
                </h3>
                <p className="text-xs text-slate-500">
                  ฝากข้อมูลเบื้องต้นเพื่อบันทึกลงระบบ Firebase และรับสิทธิ์เข้าใช้งานก่อนใคร
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              <span>บันทึกข้อมูลปลอดภัยลง Firebase</span>
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                ลงทะเบียนแสดงความสนใจสำเร็จ!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                ขอบคุณ <strong className="text-slate-900">{fullName}</strong> ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว ทีมงาน QHub จะติดต่อกลับทางเบอร์ <span className="font-mono font-semibold">{phoneNumber}</span>
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => logClickEvent('form_success_redirect_button')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>ไปที่หน้าสมัครแบบฟอร์มหลัก (Netlify)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhoneNumber('');
                    setLineId('');
                    setExperience('');
                  }}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  ลงทะเบียนเพิ่มอีกคน
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ชื่อ - นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="เช่น สมชาย ใจดี"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="เช่น 0812345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-mono outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Line ID (ถ้ามี)
                  </label>
                  <input
                    type="text"
                    placeholder="ไอดีไลน์สำหรับติดต่อ"
                    value={lineId}
                    onChange={(e) => setLineId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ประเภทงานที่สนใจ / ประสบการณ์
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น งานบริการ, งานช่าง, ฟรีแลนซ์"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ข้อมูลถูกจัดเก็บในระบบ Firebase ปลอดภัย ไม่มีการเปิดเผยภายนอก</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>กำลังบันทึกข้อมูล...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ส่งข้อมูลลงทะเบียน</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

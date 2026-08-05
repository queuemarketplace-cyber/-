import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AGENT_TIERS } from '../data/qhubData';
import { EarningsCalculator } from './EarningsCalculator';
import { Percent, TrendingUp, Award, ChevronRight, LayoutGrid, Table } from 'lucide-react';

export const RevenueSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');

  return (
    <section id="revenue-sharing" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>Revenue Sharing Structure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            แนวทางการกำหนดค่าจ้าง & สัดส่วนรายได้
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            QHub ใช้ระบบ <strong className="text-slate-900 font-semibold">แบ่งรายได้ (Revenue Sharing)</strong> เพื่อพัฒนาแพลตฟอร์ม พัฒนาเครื่องมือ และสร้างโอกาสในการรับงานอย่างต่อเนื่องให้แก่ Agent
          </p>

          {/* View Mode Toggle Switch */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300/70">
            <button
              onClick={() => setViewMode('table')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'table'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>ตารางเปรียบเทียบ (ดูง่าย)</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'cards'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>มุมมองการ์ด (Card View)</span>
            </button>
          </div>
        </div>

        {/* View 1: Comparison Table (Ultra-readable) */}
        {viewMode === 'table' ? (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-5">ระดับ Tier</th>
                  <th className="py-4 px-5 text-center bg-blue-50/50 text-blue-900">Agent ได้รับ (%)</th>
                  <th className="py-4 px-5 text-center text-slate-600">QHub Share (%)</th>
                  <th className="py-4 px-5">เงื่อนไขการไต่ระดับ / คำอธิบาย</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-sm">
                {AGENT_TIERS.map((tier) => (
                  <tr key={tier.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tier.badgeColor}`}>
                          {tier.name}
                        </span>
                        {tier.id === 'diamond' && (
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-extrabold border border-indigo-200">
                            สูงสุด
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-5 text-center font-mono font-extrabold text-lg text-emerald-600 bg-blue-50/30">
                      {tier.agentShare}%
                    </td>
                    <td className="py-4 px-5 text-center font-mono font-semibold text-slate-500">
                      {tier.qhubShare}%
                    </td>
                    <td className="py-4 px-5 text-xs text-slate-600 leading-relaxed max-w-xs sm:max-w-md">
                      {tier.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* View 2: Tier Cards Grid */
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            {AGENT_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group ${
                  tier.id === 'diamond' ? 'ring-2 ring-indigo-500/50' : ''
                }`}
              >
                {/* Top Accent Strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${tier.gradient} absolute top-0 left-0`} />

                <div>
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${tier.badgeColor}`}>
                      {tier.name}
                    </span>
                    {tier.id === 'diamond' && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                      </span>
                    )}
                  </div>

                  <div className="mt-2 text-center py-3 bg-slate-50/80 rounded-xl border border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                      {tier.agentShare}%
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                      Agent ได้รับ
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-slate-500 flex justify-between items-center px-1">
                    <span>ส่วนแบ่ง QHub:</span>
                    <span className="font-semibold text-slate-700">{tier.qhubShare}%</span>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {tier.description}
                  </p>
                </div>

                {idx < AGENT_TIERS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white border border-slate-200 text-slate-400 shadow-xs">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Tier Advancement Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                ยิ่งผลงานดี คะแนนรีวิวสูง ยิ่งได้รับส่วนแบ่งเพิ่มขึ้น!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                ยิ่ง Agent มีผลงานดี คะแนนรีวิวสูง และรักษามาตรฐานการให้บริการ ก็จะมีโอกาสเลื่อนระดับและได้รับส่วนแบ่งรายได้สูงสุดถึง 88%
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-cyan-300 border border-white/10">
              <TrendingUp className="w-4 h-4" />
              <span>ปรับระดับอัตโนมัติ</span>
            </span>
          </div>
        </motion.div>

        {/* Interactive Earnings Calculator Component */}
        <EarningsCalculator />
      </div>
    </section>
  );
};

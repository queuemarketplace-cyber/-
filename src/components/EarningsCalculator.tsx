import React, { useState } from 'react';
import { AGENT_TIERS } from '../data/qhubData';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export const EarningsCalculator: React.FC = () => {
  const [jobPrice, setJobPrice] = useState<number>(1000);
  const [jobsPerMonth, setJobsPerMonth] = useState<number>(10);
  const [selectedTierId, setSelectedTierId] = useState<string>('bronze');

  const selectedTier = AGENT_TIERS.find((t) => t.id === selectedTierId) || AGENT_TIERS[0];
  const totalVolume = jobPrice * jobsPerMonth;
  const agentEarnings = (totalVolume * selectedTier.agentShare) / 100;
  const qhubFee = totalVolume - agentEarnings;

  return (
    <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl border border-indigo-500/30 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-400/30">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                คำนวณประมาณการรายได้
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                ทดลองปรับราคาและจำนวนงาน เพื่อดูประมาณการส่วนแบ่งรายได้ตาม Tier
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 self-start sm:self-auto">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>คำนวณแบบ Real-time</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tier Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                เลือกระดับ Agent Tier:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {AGENT_TIERS.map((tier) => {
                  const isSelected = tier.id === selectedTierId;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/30 scale-105'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div>{tier.name}</div>
                      <div className="text-[10px] opacity-80">{tier.agentShare}%</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider 1: Average Job Price */}
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="text-slate-300">ค่าจ้างเฉลี่ยต่องาน:</span>
                <span className="text-blue-400 font-mono text-base font-bold">
                  {jobPrice.toLocaleString()} บาท
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={jobPrice}
                onChange={(e) => setJobPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>300 บาท</span>
                <span>5,000 บาท</span>
                <span>10,000 บาท</span>
              </div>
            </div>

            {/* Slider 2: Number of Jobs Per Month */}
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="text-slate-300">จำนวนงานต่อเดือน (ประมาณการ):</span>
                <span className="text-cyan-400 font-mono text-base font-bold">
                  {jobsPerMonth} งาน
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={jobsPerMonth}
                onChange={(e) => setJobsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 งาน</span>
                <span>25 งาน</span>
                <span>50 งาน</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                ผลรวมการคำนวณรายได้ ({selectedTier.name} Tier)
              </span>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>ยอดงานรวมทั้งหมด ({jobsPerMonth} งาน):</span>
                  <span className="font-mono text-slate-200">{totalVolume.toLocaleString()} บาท</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>ส่วนแบ่ง QHub ({selectedTier.qhubShare}%):</span>
                  <span className="font-mono text-slate-400">-{qhubFee.toLocaleString()} บาท</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 text-center">
                <div className="text-xs text-emerald-300 font-semibold mb-1 flex items-center justify-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>รายได้สุทธิที่ Agent ได้รับ ({selectedTier.agentShare}%):</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                  {agentEarnings.toLocaleString()}{' '}
                  <span className="text-lg font-normal text-slate-200">บาท/เดือน</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-400 text-center">
              * เป็นเพียงการคำนวณประมาณการเพื่อสร้างความเข้าใจในโครงสร้าง Revenue Sharing เท่านั้น
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

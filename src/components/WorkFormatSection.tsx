import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  CalendarCheck,
  AlertTriangle,
  Users,
} from 'lucide-react';

export const WorkFormatSection: React.FC = () => {
  const points = [
    {
      title: 'ลูกค้าสร้างงานและระบุรายละเอียด',
      description: 'ลูกค้าเป็นผู้สร้างงานและกำหนดขอบเขตงานอย่างชัดเจนผ่านระบบ QHub',
      icon: FileText,
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    },
    {
      title: 'กำหนดค่าจ้างเป็นธรรม',
      description: 'ลูกค้าเป็นผู้กำหนดค่าจ้างตามอัตราขั้นต่ำของระบบ หรือเสนอราคาสูงกว่าเพื่อเพิ่มโอกาสในการมีผู้รับงาน',
      icon: DollarSign,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    },
    {
      title: 'เลือกรับหรือปฏิเสธงานได้อิสระ',
      description: 'Agent สามารถเลือก รับ หรือ ปฏิเสธ งานได้ตามความสมัครใจโดยไม่มีผลเสียต่อบัญชี',
      icon: CheckCircle,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
    },
    {
      title: 'ไม่มีการบังคับรับงาน',
      description: 'ไม่มีโควตางานบังคับ อิสระในการตัดสินใจเต็ม 100%',
      icon: XCircle,
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    },
    {
      title: 'ไม่มีขั้นต่ำในการรับงาน',
      description: 'จะรับงาน 1 งานต่อเดือน หรือมากกว่านั้น ได้ตามเป้าหมายส่วนตัว',
      icon: Clock,
      color: 'bg-amber-500/10 text-amber-600 border-amber-200',
    },
    {
      title: 'รับงานได้ทุกเมื่อที่สะดวก',
      description: 'เปิดรับงานในเวลาที่คุณพร้อม สะดวกตอนไหน ทำตอนนั้น',
      icon: CalendarCheck,
      color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200',
    },
  ];

  return (
    <section id="work-model" className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Platform Structure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            รูปแบบการรับงานบน <span className="text-blue-600">QHub</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            QHub เป็นแพลตฟอร์มตัวกลางเชื่อมต่อระหว่าง <span className="font-semibold text-slate-800">ลูกค้า</span> และ <span className="font-semibold text-blue-600">Agent</span> ด้วยระบบที่ยืดหยุ่น ยุติธรรม และให้อิสระแก่ผู้ให้บริการสูงสุด
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${point.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Official Notice Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-4 shadow-xs"
        >
          <div className="p-2 bg-amber-100 rounded-xl text-amber-700 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-sm sm:text-base leading-relaxed">
            <span className="font-bold block text-amber-950 mb-1">หมายเหตุสำคัญเกี่ยวกับการรับงาน:</span>
            จำนวนงานที่ได้รับขึ้นอยู่กับความต้องการของลูกค้าในแต่ละพื้นที่และช่วงเวลา แพลตฟอร์มจึงไม่สามารถรับประกันจำนวนงานหรือรายได้ที่แน่นอนได้ แต่จะพยายามกระจายโอกาสอย่างทั่วถึง
            <div className="mt-2 text-xs font-semibold text-amber-800 border-t border-amber-200/80 pt-2">
              * บริษัทขอสงวนสิทธิ์ในการปรับเปลี่ยนเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

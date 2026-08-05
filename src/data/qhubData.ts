import { AgentTier, BenefitItem, FaqItem } from '../types';

export const APPLICATION_URL = 'https://jazzy-pavlova-d74e09.netlify.app/';

export const AGENT_TIERS: AgentTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    agentShare: 80,
    qhubShare: 20,
    badgeColor: 'bg-amber-700/10 text-amber-800 border-amber-600/30 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/50',
    gradient: 'from-amber-600 to-amber-800',
    description: 'ระดับเริ่มต้นสำหรับ Agent ใหม่ทุกคน รับส่วนแบ่งสูงถึง 80% ตั้งแต่งานแรก',
  },
  {
    id: 'silver',
    name: 'Silver',
    agentShare: 82,
    qhubShare: 18,
    badgeColor: 'bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    gradient: 'from-slate-400 to-slate-600',
    description: 'เมื่อให้บริการอย่างต่อเนื่องและได้รับการรีวิวที่ดี ปรับเพิ่มส่วนแบ่งเป็น 82%',
  },
  {
    id: 'gold',
    name: 'Gold',
    agentShare: 84,
    qhubShare: 15,
    badgeColor: 'bg-yellow-500/10 text-yellow-800 border-yellow-600/30 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-600/50',
    gradient: 'from-yellow-500 to-amber-600',
    description: 'สำหรับ Agent คุณภาพสูงที่รักษาคะแนนรีวิวในระดับเยี่ยม รับส่วนแบ่ง 84%',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    agentShare: 86,
    qhubShare: 10,
    badgeColor: 'bg-cyan-500/10 text-cyan-800 border-cyan-600/30 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-600/50',
    gradient: 'from-cyan-500 to-blue-600',
    description: 'ระดับมืออาชีพที่มีปริมาณงานและคะแนนรีวิวโดดเด่น รับส่วนแบ่งคุ้มค่า 86%',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    agentShare: 88,
    qhubShare: 8,
    badgeColor: 'bg-indigo-500/10 text-indigo-800 border-indigo-600/30 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-600/50',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    description: 'ระดับสูงสุดสำหรับ Founding Agent แถวหน้า ส่วนแบ่งสูงสุดถึง 88%',
  },
];

export const FOUNDING_BENEFITS: BenefitItem[] = [
  {
    id: 'free_register',
    title: 'สมัครฟรีไม่มีค่าใช้จ่าย',
    description: 'เข้าร่วมเป็น Founding Agent ได้โดยไม่มีค่าสมัครหรือค่าธรรมเนียมแรกเข้า',
    iconName: 'Sparkles',
    tag: '100% ฟรี',
  },
  {
    id: 'no_annual_fee',
    title: 'ไม่มีค่ารายปี',
    description: 'ใช้งานแพลตฟอร์มได้ตลอดโดยไม่มีการเก็บค่าบริการรายปีย้อนหลัง',
    iconName: 'ShieldCheck',
    tag: 'ไม่มีค่าธรรมเนียมแอบแฝง',
  },
  {
    id: 'no_account_fee',
    title: 'ไม่มีค่าเปิดบัญชี',
    description: 'ยืนยันตัวตนและเปิดสิทธิ์รับงานได้ทันทีโดยไม่มีค่าเปิดบัญชี',
    iconName: 'UserCheck',
    tag: 'เปิดบัญชีฟรี',
  },
  {
    id: 'choose_jobs',
    title: 'เลือกรับงานเอง',
    description: 'มีอิสระเต็มที่ในการตัดสินใจกดรับหรือปฏิเสธงานตามที่คุณต้องการ',
    iconName: 'CheckCircle2',
    tag: 'อิสระ 100%',
  },
  {
    id: 'flexible_time',
    title: 'ทำงานเมื่อสะดวก',
    description: 'จัดสรรเวลาทำงานได้ตามไลฟ์สไตล์ ไร้ข้อผูกมัดหรือการบังคับชั่วโมง',
    iconName: 'Clock',
    tag: 'เวลาของคุณเอง',
  },
  {
    id: 'early_access',
    title: 'สิทธิ์ทดลองใช้งานก่อนใคร',
    description: 'เข้าใช้งานและทดสอบระบบจริงก่อนเปิดตัวอย่างเป็นทางการให้คนทั่วไป',
    iconName: 'Zap',
    tag: 'Exclusive Access',
  },
  {
    id: 'first_priority',
    title: 'รับงานก่อนผู้สมัครรุ่นถัดไป',
    description: 'ได้รับสิทธิ์ในการแมตช์งานและรับงานลูกค้าก่อน Agent รุ่นถัดไป',
    iconName: 'Award',
    tag: 'สิทธิพิเศษรุ่นแรก',
  },
  {
    id: 'platform_co_create',
    title: 'ร่วมเสนอความเห็นพัฒนาระบบ',
    description: 'เสียงของคุณมีผลต่อการพัฒนาฟีเจอร์และทิศทางของแพลตฟอร์ม QHub',
    iconName: 'MessageSquarePlus',
    tag: 'ร่วมเติบโตไปด้วยกัน',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'การสมัครเป็น Agent รุ่นแรก (Founding Agent) มีค่าใช้จ่ายหรือไม่?',
    answer: 'ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้น! ฟรีค่าสมัคร ฟรีค่ารายปี และไม่มีค่าธรรมเนียมเปิดบัญชี',
  },
  {
    question: 'จำเป็นต้องรับงานขั้นต่ำกี่งาน หรือทำชั่วโมงขั้นต่ำหรือไม่?',
    answer: 'ไม่มีการบังคับขั้นต่ำ คุณสามารถเลือกรับงานเมื่อคุณสะดวก และกดปฏิเสธงานได้ตามความสมัครใจ',
  },
  {
    question: 'ระบบแบ่งรายได้ (Revenue Sharing) ทำงานอย่างไร?',
    answer: 'QHub ใช้ระบบแบ่งรายได้ตามระดับ Tier โดยเริ่มตั้งแต่ Bronze (Agent ได้รับ 80%) ไปจนถึง Diamond (Agent ได้รับ 88%) ยิ่งคุณมีผลงานดี รีวิวสูง ระดับ Tier จะปรับขึ้นเพื่อเพิ่มส่วนแบ่งของคุณ',
  },
  {
    question: 'เมื่อกดสนใจสมัคร จะดำเนินการอย่างไรต่อ?',
    answer: 'เมื่อคุณกดปุ่มสนใจสมัคร ระบบจะนำคุณไปยังแบบฟอร์มลงทะเบียนรับสมัคร Agent รุ่นแรก (ที่ลิงก์ https://jazzy-pavlova-d74e09.netlify.app/) กรุณากรอกข้อมูลส่วนตัวเพื่อรับสิทธิ์เข้าใช้งานก่อนใคร',
  },
  {
    question: 'แพลตฟอร์ม QHub จะเปิดใช้งานจริงเมื่อไหร่?',
    answer: 'พร้อมเปิดใช้งานจริงในเดือน กันยายน 2569 โดยผู้สมัครรุ่นแรกจะได้รับสิทธิ์ทดลองระบบและเตรียมความพร้อมก่อนใคร',
  },
];

import {
  IconAccItem,
  IconAroundHome,
  IconDoctor,
  IconHomeCool,
  IconLandScape,
  IconRoof,
  IconSupport,
  IconTechnology,
  IconToilet,
} from 'assets/icon/Icon';
import MockImg from 'assets/images/mockImg.png';
import MockQR from 'assets/images/mockQR.png';

export interface IListSolution {
  id: number;
  icon: any;
  text: string;
  subTitle: string;
  image: any;
  qrCode: any;
  detail: string;
  listDetail: string[];
}

export const listSolution: IListSolution[] = [
  {
    id: 1,
    icon: IconDoctor,
    text: 'คลีนิค\nหมอบ้าน',
    subTitle: 'ชั้น 1 Living Design Studio',
    detail: `     บริการทีมสถาปนิกผู้เชี่ยวชาญของเอสซีจี ที่ให้คำปรึกษาทุกเรื่องบ้าน พร้อมบริการออกแบบบ้าน ปรับปรุง ต่อเติม คุมงบประมาณได้เพื่อความลงตัวเหมาะกับรูปแบบการใช้ชิวิต ให้บ้านในฝันสวยดั่งใจ`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: ['นัดหมายปรึกษาสถาปนิก', 'บริการออกแบบบ้าน', 'แบบบ้านสำเร็จรูป'],
  },
  {
    id: 2,
    icon: IconRoof,
    text: 'หลังคาพลังงาน\nแสงอาทิตย์',
    subTitle: 'ชั้น 1 Home & Living Solution',
    detail: `     อากาศจะร้อนแค่ไหน ก็เปิดแอร์ได้ไม่ต้องกลัวเปลือง ด้วยการติด SCG Solar Roof Solutions เพราะสามารถช่วยได้ลดค่าไฟได้สูงสุดถึง 60% มีแพคเกจหลากหลาย ที่ออกแบบให้เหมาะกับการใช้งานของแต่ละครอบครัว`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'งานประมาณการหลังคา ซ่อมรั่ว รื้อ เปลี่ยน หลังคา',
      'ระบบหลังคา อุปกรณ์หลังคา',
      'ฉนวนกันความร้อน',
      'ระบบระบายอากาศ Active Airflow, Active Air Quality',
      'ระบบบ้านกันเสียง ',
      'SCG Solar Roof Solutions ',
      'วัสดุตกแต่งผนังภายนอก ผนังภายใน ',
      'พื้น รั้ว เชิงชาย ',
      'วัสดุบล็อคปูพื้น ปูผนัง',
      'โรงรถ กันสาด ระแนงบังตา',
    ],
  },
  {
    id: 3,
    icon: IconHomeCool,
    text: 'ระบบ\nบ้านเย็น',
    subTitle: 'ชั้น 1 Home & Living Solution',
    detail: `     นวัตกรรมถ่ายเทอากาศภายในบ้าน Active AIRflow™ System แก้ปัญหาบ้านร้อนอบอ้าวให้ถูกจุด ด้วยหลักการระบายและถ่ายเทความร้อนจากตัวบ้านและโถงหลังคา ช่วยให้บ้านเย็นลง 2-5 องศา และป้องกันฝุ่น PM 2.5เข้าสู่ตัวบ้าน`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'งานประมาณการหลังคา ซ่อมรั่ว รื้อ เปลี่ยน หลังคา',
      'ระบบหลังคา อุปกรณ์หลังคา',
      'ฉนวนกันความร้อน',
      'ระบบระบายอากาศ Active Airflow, Active Air Quality',
      'ระบบบ้านกันเสียง ',
      'SCG Solar Roof Solutions ',
      'วัสดุตกแต่งผนังภายนอก ผนังภายใน ',
      'พื้น รั้ว เชิงชาย ',
      'วัสดุบล็อคปูพื้น ปูผนัง',
      'โรงรถ กันสาด ระแนงบังตา',
    ],
  },
  {
    id: 4,
    icon: IconLandScape,
    text: 'ตกแต่งภูมิทัศน์\nรอบบ้าน',
    subTitle: 'ชั้น 1 Outdoor & Garden Solution',
    detail: `     เติมเต็มคำว่าสวนให้สมบูรณ์ ด้วยบริการออกแบบและตกแต่งสวนหลากหลายสไตล์ อีกทั้งยังช่วยแนะนำการเลือกใช้วัสดุต่างๆที่เหมาะสมกับพันธุ์ไม้ เพิ่มพื้นที่สีเขียวที่ตอบโจทย์ทุกความต้องการ`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'ปิดโพรงใต้บ้าน',
      'บริการออกแบบตกแต่งสวน',
      'บริการทาสีนอกบ้าน',
      'สินค้า Windsor',
      'ราวกันตก',
      'เฟอร์นิเจอร์ outdoor/ ศาลา',
    ],
  },
  {
    id: 5,
    icon: IconToilet,
    text: 'ห้องน้ำ\nเพื่อสุขภาพ',
    subTitle: 'ชั้น 1 Care Living Solution',
    detail: `       ห้องน้ำที่มาพร้อมกับเทคโนโลยีที่ทันสมัย ทำงานด้วยระบบเซ็นเซอร์ ที่จะช่วยอำนวยความสะดวกต่างๆ เพิ่มความสะอาด และเพิ่มความปลอดภัยในห้องน้ำ ช่วยสร้างสุขภาวะที่ดีสำหรับคุณและคนในบ้าน`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'ออกแบบห้องน้ำวัยเก๋า',
      'ออกแบบห้องนอนวัยเก๋า',
      'เตียงและเครื่องนอนวัยเก๋า',
      'ลิฟท์บ้าน & Stair Lift',
      'พื้นลดแรงกระแทก',
      'สินค้าเพื่อสุขภาพ และสินค้า Hygienic',
    ],
  },
  {
    id: 6,
    icon: IconAroundHome,
    text: 'พื้นที่\nนอกบ้าน',
    subTitle: 'ชั้น 1 Outdoor & Garden Solution',
    detail: `      พื้นที่พักผ่อนหย่อนใจที่ไม่ต้องเดินทางออกจากบ้านไปไกล แค่ก้าวเท้าออกจากบ้านมานั่งจิบกาแฟ คุยกับครอบครัว,เพื่อนฝูง ช่วยเพิ่มบรรยากาศภายนอกให้ดูรื่นรมย์ และอบอุ่นมากขึ้น`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'ปิดโพรงใต้บ้าน ',
      'บริการออกแบบตกแต่งสวน',
      'บริการทาสีนอกบ้าน',
      'สินค้า Windsor',
      'ราวกันตก',
      'เฟอร์นิเจอร์ outdoor/ ศาลา',
    ],
  },
  {
    id: 7,
    icon: IconSupport,
    text: 'บริการผู้ช่วย',
    subTitle: 'ชั้น 1 Care Living Solution',
    detail: `     อำนวยความสะดวกสบายให้แก่บุคคลภายในครอบครัวของคุณ โดยเฉพาะสมาชิกที่ใช้รถเข็น ผู้สูงอายุ หรือภรรยาที่กำลังตั้งท้อง ให้มีความสะดวกสบาย ปลอดภัย และได้อยู่ใกล้ชิดกับบุคคลในครอบครัวกันตลอดเวลา`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'ออกแบบห้องน้ำวัยเก๋า',
      'ออกแบบห้องนอนวัยเก๋า',
      'เตียงและเครื่องนอนวัยเก๋า',
      'ลิฟท์บ้าน & Stair Lift',
      'พื้นลดแรงกระแทก',
      'สินค้าเพื่อสุขภาพ และสินค้า Hygienic',
    ],
  },
  {
    id: 8,
    icon: IconTechnology,
    text: 'สินค้าเทคโนโลยี',
    subTitle: 'ชั้น 1 SCG Home Selected ',
    detail: `     คัดสรรสินค้า Smart & Gadget เพื่อคุณและบ้าน พร้อมของตกแต่งบ้านมาไว้ที่นี้ ด้วยสินค้าหลากหลายแบรนด์ทั้งไทยและต่างประเทศ Exclusive เพื่อคนรักบ้าน`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: ['สินค้าตกแต่งบ้าน', 'สินค้า Smart Gadget'],
  },
  {
    id: 9,
    icon: IconAccItem,
    text: 'เครื่องใช้\nสำหรับ\nคนรักบ้าน',
    subTitle: 'ชั้น 1 Home & Décor Boutique',
    detail: `     ศูนย์รวมสินค้ากลุ่ม House Brand Product เช่น ครัวสำเร็จรูป ห้องน้ำ พื้น ประตู หน้าต่าง และกลุ่มเครื่องใช้ภายในบ้าน ที่จะช่วยแต่งเติมฟังค์ชั่นการใช้งานในบ้านของคุณให้ครบครัน`,
    image: MockImg,
    qrCode: MockQR,
    listDetail: [
      'ครัวสำเร็จรูป ',
      'ห้องน้ำ ',
      'พื้น ',
      'ประตู ',
      'หน้าต่าง & ผ้าม่าน',
      'เครื่องใช้ และตกแต่งภายในบ้าน',
    ],
  },
];

import MockQR from 'assets/images/mockQR.png';
import {IListSolution} from 'pages/interactive/model/listSolution';

import F1_Z1 from 'assets/zoneImages/f1_z1.png';
import F1_Z2 from 'assets/zoneImages/f1_z2.png';
import F1_Z3 from 'assets/zoneImages/f1_z3.png';
import F1_Z4 from 'assets/zoneImages/f1_z4.png';
import F1_Z5 from 'assets/zoneImages/f1_z5.png';
import F1_Z6 from 'assets/zoneImages/f1_z6.png';
import F1_Z7 from 'assets/zoneImages/f1_z7.png';

import F2_Z8 from 'assets/zoneImages/f2_z8.png';
import F2_Z9 from 'assets/zoneImages/f2_z9.png';
import F2_Z10 from 'assets/zoneImages/f2_z10.png';

import F3_Z11 from 'assets/zoneImages/f3_z11.png';
import F3_Z12 from 'assets/zoneImages/f3_z12.png';
import F3_Z13 from 'assets/zoneImages/f3_z13.png';

// plan right
import P_F1_Z1 from 'assets/floorImages/p_f1_z1.png';
import P_F1_Z2 from 'assets/floorImages/p_f1_z2.png';
import P_F1_Z3 from 'assets/floorImages/p_f1_z3.png';
import P_F1_Z4 from 'assets/floorImages/p_f1_z4.png';
import P_F1_Z5 from 'assets/floorImages/p_f1_z5.png';
import P_F1_Z6 from 'assets/floorImages/p_f1_z6.png';
import P_F1_Z7 from 'assets/floorImages/p_f1_z7.png';

import P_F2_Z8 from 'assets/floorImages/p_f2_z8.png';
import P_F2_Z9 from 'assets/floorImages/p_f2_z9.png';
import P_F2_Z10 from 'assets/floorImages/p_f2_z10.png';

import P_F3_Z11 from 'assets/floorImages/p_f3_z11.png';
import P_F3_Z12 from 'assets/floorImages/p_f3_z12.png';
import P_F3_Z13 from 'assets/floorImages/p_f3_z13.png';

export const bodyPlan: {[key: string]: IListSolution} = {
  z1: {
    id: 1,
    text: 'Care Living Solutin',
    subTitle: 'ชั้น 1',
    image: F1_Z1,
    qrCode: MockQR,
    listDetail: [
      'ออกแบบห้องน้ำวัยเก๋า',
      'ออกแบบห้องนอนวัยเก๋า',
      'เตียงและเครื่องนอนวัยเก๋า',
      'ลิฟท์บ้าน & Stair Lift',
      'พื้นลดแรงกระแทก',
      'สินค้าเพื่อสุขภาพ และสินค้า Hygienic',
    ],
    svgPlan: P_F1_Z1,
    detail: `     นวัตกรรมเพื่อบ้านสำหรับผู้ที่ให้ความสำคัญเรื่องสุขภาพ  พร้อมออกแบบที่อยู่อาศัยกลุ่ม Smart Elderly  ตอบโจทย์เรื่องการอยู่อาศัยที่ดีขึ้นและปลอดภัย`,
  },
  z2: {
    id: 2,
    text: 'Home Inspiration Lounge',
    subTitle: 'ชั้น 1',
    image: F1_Z2,
    qrCode: MockQR,
    listDetail: ['Specialty Coffee จาก Espresso Man'],
    svgPlan: P_F1_Z2,
    detail: `     ลิ้มลอง Specialty Coffee จาก Espresso Man กาแฟชั้นดี พร้อมบาริสต้าชั้นเยี่ยม ที่จะนำให้ทุกคนดื่มด่ำทั้งรสและกลิ่นจากกาแฟได้อย่างลงตัว`,
  },
  z3: {
    id: 3,
    text: 'Living Design Studio',
    subTitle: 'ชั้น 1',
    image: F1_Z3,
    qrCode: MockQR,
    listDetail: ['นัดหมายปรึกษาสถาปนิก', 'บริการออกแบบบ้าน', 'แบบบ้านสำเร็จรูป'],
    svgPlan: P_F1_Z3,
    detail: `     บริการทีมสถาปนิกผู้เชี่ยวชาญของเอสซีจี ที่ให้คำปรึกษาทุกเรื่องบ้าน พร้อมบริการออกแบบบ้านให้ลงตัวเหมาะกับรูปแบบการใช้ชิวิต `,
  },
  z4: {
    id: 4,
    text: 'SCG Home Selected',
    subTitle: 'ชั้น 1',
    image: F1_Z4,
    qrCode: MockQR,
    listDetail: ['สินค้าตกแต่งบ้าน', 'สินค้า Smart Gadget'],
    svgPlan: P_F1_Z4,
    detail: `     สินค้าเพื่อบ้าน และของตกแต่งบ้านเพื่อเติมเต็มไอเดียตกแต่งบ้าน ด้วยสินค้าจากแบรนด์ไทยและต่างประเทศ`,
  },
  z5: {
    id: 5,
    text: 'Home & Decor Boutique',
    subTitle: 'ชั้น 1',
    image: F1_Z5,
    qrCode: MockQR,
    listDetail: [
      'ครัวสำเร็จรูป ',
      'ห้องน้ำ ',
      'พื้น ',
      'ประตู ',
      'หน้าต่าง & ผ้าม่าน',
      'เครื่องใช้ และตกแต่งภายในบ้าน',
    ],
    svgPlan: P_F1_Z5,
    detail: `     สินค้ากลุ่ม House Brand Product เช่น ครัวสำเร็จรูป ห้องน้ำ พื้น ประตู หน้าต่าง และกลุ่มเครื่องใช้ ที่หลากหลาย`,
  },
  z6: {
    id: 6,
    text: 'Outdoor & Garden Solution',
    subTitle: 'ชั้น 1',
    image: F1_Z6,
    qrCode: MockQR,
    listDetail: [
      'ปิดโพรงใต้บ้าน ',
      'บริการออกแบบตกแต่งสวน',
      'บริการทาสีนอกบ้าน',
      'สินค้า Windsor',
      'ราวกันตก',
      'เฟอร์นิเจอร์ outdoor/ ศาลา',
    ],
    svgPlan: P_F1_Z6,
    detail: `     บริการงานปรับภูมิทัศน์นอกบ้าน   ตั้งแต่การปรับปรุงพื้นที่ Landscape ปิดโพรงใต้บ้าน ต่อเติมพื้นที่ ออกแบบตกแต่งสวน พร้อมบริการติดตั้งครบวงจร `,
  },
  z7: {
    id: 7,
    text: 'Home & Living Solution',
    subTitle: 'ชั้น 1',
    image: F1_Z7,
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
    svgPlan: P_F1_Z7,
    detail: `     บริการงานติดตั้ง ต่อเติม ซ่อมแซมจาก SCG   ในทุกส่วนของบ้าน เช่น งานหลังคา ,ระบบผนัง/ฝ้า/พื้น , ระบบระบายอากาศ Active Airflow, ระบบบ้านกันเสียง,ระบบบ้านสมาร์ท พร้อม SCG Solar Roof Solutions  เพื่อให้การอยู่อาศัยที่ดีขึ้นด้วยนวัตกรรม `,
  },
  z9: {
    id: 9,
    text: 'Cotto Life',
    subTitle: 'ชั้น 2',
    image: F2_Z8,
    qrCode: MockQR,
    listDetail: [
      'สินค้ากระเบื้องปูพื้น ผนัง',
      'สุขภัณฑ์ห้องน้ำ ก๊อกน้ำ',
      'แผ่นปูพื้น LT',
      'สินค้า Geoluxe',
      'Cotto Italia',
    ],
    svgPlan: P_F2_Z8,
    detail: `     รวบรวมสินค้ากระเบื้อง สุขภัณฑ์ ก๊อกน้ำ ที่ใหญ่ที่สุดพร้อมกับบริการติดตั้งเต็มรูปแบบ   เพียงคลิก WWW.COTTOLife.COM`,
  },
  z10: {
    id: 10,
    text: 'Home Idea & Book Hub',
    subTitle: 'ชั้น 2',
    image: F2_Z9,
    qrCode: MockQR,
    listDetail: ['หนังสือไอเดียเรื่องบ้าน ทั้งไทยและต่างประเทศ'],
    svgPlan: P_F2_Z9,
    detail: `     ศูนย์หนังสือขนาดใหญ่ทั้งไทยและต่างประเทศ กว่า 250 หัวเรื่องที่เต็มไปด้วย วัตถุดิบสร้างแรงบันดาลใจ  พร้อมพื้นที่สำหรับนั่งชิลล์`,
  },
  z11: {
    id: 11,
    text: 'Design Studio & Meeting Room',
    subTitle: 'ชั้น 2',
    image: F2_Z10,
    qrCode: MockQR,
    listDetail: [],
    svgPlan: P_F2_Z10,
    detail: `     บริการพื้นที่การทำงานที่ตอบโจทย์ทุกรูปแบบของสถาปนิก   อินทีเรียร์ดีไซน์เนอร์ ภูมิสถาปนิก หรือนักออกแบบ`,
  },
  z12: {
    id: 12,
    text: 'ExSpace',
    subTitle: 'ชั้น 3',
    image: F3_Z11,
    qrCode: MockQR,
    listDetail: [],
    svgPlan: P_F3_Z11,
    detail: `     สถานที่จัดอบรม กิจกรรม หรืออยากสังสรรค์ เวิร์คช็อป สัมมนา แบบครบวงจร  พร้อมบริการเสริมด้าน อาหาร ของว่าง และเครื่องดื่ม`,
  },
  z13: {
    id: 13,
    text: 'Home Smile',
    subTitle: 'ชั้น 3',
    image: F3_Z12,
    qrCode: MockQR,
    listDetail: ['บริการปรับปรุง ต่อเติมบ้าน ด้วยทีมผู้เชี่ยวชาญ'],
    svgPlan: P_F3_Z12,
    detail: `     บริการปรับปรุง ต่อเติมบ้าน ด้วยทีมช่างฝีมือดี  ที่ทำให้คุณได้รับความสะดวกสบาย ง่าย ครบ จบที่เดียวและการรับประกันผลงาน`,
  },
  z14: {
    id: 14,
    text: 'Younique',
    subTitle: 'ชั้น 3',
    image: F3_Z13,
    qrCode: MockQR,
    listDetail: ['บริการออกแบบภายใน ครบวงจร'],
    svgPlan: P_F3_Z13,
    detail: `     ออกแบบเฟอร์นิเจอร์และของแต่งบ้านสำหรับทุกมุมห้องแบบไม่รู้เบื่อกับ DooDeco และ “ยูนีค” (YOUNIQUE) โดย “อินเด็กซ์ ลิฟวิ่งมอลล์” (Index Living Mall) `,
  },
};

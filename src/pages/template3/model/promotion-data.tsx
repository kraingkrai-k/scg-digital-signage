import MockQR from 'assets/images/mockQR.png';

import Pro1 from 'assets/promotion/1.png';
import Pro2 from 'assets/promotion/2.png';
import Pro3 from 'assets/promotion/3.png';

import Pro4 from 'assets/promotion/4.jpg';
import Pro5 from 'assets/promotion/5.jpg';
import Pro6 from 'assets/promotion/6.jpg';

export interface ISectionPromotion {
  title: string;
  subTitle: string;
  meta: string;

  qrCode: any;
  banner: any;
  item: any;
}

export const sectionPromotion: ISectionPromotion[] = [
  {
    title: 'SCG Active AIRflow System โซลูชั่นเพื่อแก้บ้านร้อน อบอ้าว',
    subTitle: 'ชั้น1 ที่โซน Home & Living Solution',
    item: Pro1,
    banner: Pro1,
    meta: `
- สิทธิพิเศษ 2 ต่อ เมื่อใช้ SCG Active AIRflow System เพื่อให้บ้านไม่ร้อนอบอ้าว อากาศถ่ายเทได้ดี
- พิเศษต่อที่ 1 จ่ายค่าสำรวจเพียง 2,000 บาท รับส่วนลดคืน 3,000 บาท เมื่อใช้บริการติดตั้ง
- พิเศษต่อที่ 2  รับส่วนลด 10% ทุก Package  ราคาเริ่มต้น Package เพียง  29,900 บาท
- โปรโมชั่น หมดเขต 1 เม.ย.– 2 พ.ค. 65 และไม่สามารถใช้ร่วมกับโปรฯอื่นๆได้
- ทางบริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่างหน้า
      `,
    qrCode: MockQR,
  },
  {
    title: 'SCG Active AIR Quality นวัตกรรมกรองอากาศดีเข้าสู่บ้าน',
    subTitle: 'ชั้น1 ที่โซน Home & Living Solution',
    item: Pro2,
    banner: Pro2,
    meta: `
- สิทธิพิเศษ 2 ต่อ เมื่อใช้ SCG Active AIR Quality นวัตกรรมจัดการคุณภาพอากาศภายในบ้าน เพื่อสร้างอากาศดี สะอาด ปลอดฝุ่นและ  PM 2.5
- พิเศษต่อที่ 1 จ่ายค่าสำรวจเพียง 2,000 บาท รับส่วนลดคืน 3,000 บาท เมื่อใช้บริการติดตั้ง
- พิเศษต่อที่ 2  รับส่วนลด 10% ทุก Package  ราคาเริ่มต้น Package เพียง  19,900 บาท
- โปรโมชั่น หมดเขต 1 เม.ย.– 2 พ.ค. 65 และไม่สามารถใช้ร่วมกับโปรฯอื่นๆได้
- ทางบริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่างหน้า
      `,
    qrCode: MockQR,
  },
  {
    title: 'SCG Solar Roof Solutions โซลูชั่นเพื่อบ้านประหยัดพลังงาน',
    subTitle: 'ชั้น1 ที่โซน Home & Living Solution',
    item: Pro3,
    banner: Pro3,
    meta: `
- สิทธิพิเศษ 2 ต่อ เมื่อใช้ SCG Solar Roof Solutions โซลูชั่นเพื่อบ้านประหยัดพลังงาน จบปัญหาค่าไฟแพง
- พิเศษต่อที่ 1 จ่ายค่าสำรวจเพียง 2,000 บาท รับส่วนลดคืน 3,000 บาท เมื่อใช้บริการติดตั้ง
- พิเศษต่อที่ 2 รับส่วนลดงานติดตั้งสูงสุด 20,000* บาท
*เมื่อมียอดซื้อครบทุก 30,000 บาท รับส่วนลด 1,500 บาท
- โปรโมชั่น หมดเขต 1 เม.ย.– 2 พ.ค. 65 และไม่สามารถใช้ร่วมกับโปรฯอื่นๆได้
- ทางบริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่างหน้า
    `,
    qrCode: MockQR,
  },
  {
    title: 'โซลูชั่นตกแต่งภายนอก DECAAR by SCG',
    subTitle: 'ชั้น1 ที่โซน Home & Living Solution',
    item: Pro4,
    banner: Pro4,
    meta: `
HOT มาแรง!
กรณีซื้อเฉพาะสินค้า
  เมื่อซื้อสินค้ากลุ่มตกแต่ง ที่ร่วมรายการ
ครบทุกๆ 10,000 บาท รับส่วนลดท้ายบิล 500 บาท (สูงสุด 10,000 บาท)
กรณีซื้อพร้อมบริการติดตั้ง
- ส่วนลดค่าสำรวจ 599 บาท
- รับส่วนลด 4,000 บาทเฉพาะลูกค้าที่ใช้บริการติดตั้ง  50 ตารางเมตร ขึ้นไป กับโซลูชั่น ที่ร่วมรายการ
    1) ผนังตกแต่งเคมิล (KMEW)
    2) ผนัง/ฝ้าตกแต่งเอสซีจี วูด-ดี (SCG WOOD-D)
    3) ผนัง/รั้ว ตกแต่งเอสซีจี เฟรทเวิร์ค (SCG FRETWORK)
    4) ผนัง/ระแนง ตกแต่งไลท์วูด (Litewood by Fameline)
    `,
    qrCode: MockQR,
  },
  {
    title: 'พื้นไม้เทียม (Wood Plastic Composite) พร้อมบริการติดตั้ง',
    subTitle: 'ชั้น1 ที่โซน Home & Living Solution',
    item: Pro5,
    banner: Pro5,
    meta: `
NEW!

- ส่วนลดค่าสำรวจ 599 บาท
- สินค้าพร้อมบริการติดตั้ง ราคาพิเศษ 2,699* บาทต่อตร.ม.
หมายเหตุ *ปริมาณขั้นต่ำ 30 ตารางเมตร ราคาติดตั้งรวมแผ่น อุปกรณ์ ค่าแรงติดตั้ง  ไม่รวมฐานราก
    `,
    qrCode: MockQR,
  },
  {
    title: 'บล็อก SCG HAPPY SPACE MENU พร้อมบริการติดตั้ง',
    subTitle: 'ชั้น1 ที่โซน Home & Living Solution',
    item: Pro6,
    banner: Pro6,
    meta: `
- ส่วนลดค่าสำรวจ 499 บาท
- สินค้าพร้อมบริการติดตั้ง ราคาพิเศษ เริ่มต้น 1,080* บาทต่อตร.ม. 

หมายเหตุ *ปริมาณขั้นต่ำ 30 ตารางเมตร ราคาติดตั้งรวมแผ่น อุปกรณ์ ค่าแรงติดตั้ง  ไม่รวมฐานราก
`,
    qrCode: MockQR,
  },
];

import MockQR from 'assets/images/mockQR.png';

import Pro1 from 'assets/promotion/1.png';
import Pro2 from 'assets/promotion/2.png';
import Pro3 from 'assets/promotion/3.png';

import Pro4 from 'assets/promotion/4.jpg';
import Pro5 from 'assets/promotion/5.jpg';
import Pro6 from 'assets/promotion/6.jpg';

export interface ISectionPromotion {
  title: string;
  floor: number;
  zone: string;
  meta: string;

  qrCode: any;
  banner: any;
  item: any;
}

export const sectionPromotion: ISectionPromotion[] = [
  {
    zone: 'z1',
    item: Pro1,
    banner: Pro1,
    meta: `     สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วยการเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย`,
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro2,
    banner: Pro2,
    meta: `     สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วยการเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย`,
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro3,
    banner: Pro3,
    meta: `     สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วยการเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย`,
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro4,
    banner: Pro4,
    meta: `     สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วยการเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย`,
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro5,
    banner: Pro5,
    meta: `     สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วยการเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย`,
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro6,
    banner: Pro6,
    meta: `     สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วยการเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย`,
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
];

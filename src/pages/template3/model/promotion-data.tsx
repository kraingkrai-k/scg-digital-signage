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
    meta: 'WIP',
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro2,
    banner: Pro2,
    meta: 'WIP',
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro3,
    banner: Pro3,
    meta: 'WIP',
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro4,
    banner: Pro4,
    meta: 'WIP',
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro5,
    banner: Pro5,
    meta: 'WIP',
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
  {
    zone: 'z1',
    item: Pro6,
    banner: Pro6,
    meta: 'WIP',
    floor: 1,
    qrCode: MockQR,
    title: 'WIP',
  },
];

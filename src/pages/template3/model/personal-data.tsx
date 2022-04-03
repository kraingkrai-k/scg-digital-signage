import F_35_50_1 from 'assets/template3/f-35-50/1.png';
import F_35_50_2 from 'assets/template3/f-35-50/2.png';
import F_35_50_3 from 'assets/template3/f-35-50/3.png';
import F_35_50_4 from 'assets/template3/f-35-50/4.png';

import F_Less_35_1 from 'assets/template3/f-less-35/1.png';
import F_Less_35_2 from 'assets/template3/f-less-35/2.png';
import F_Less_35_3 from 'assets/template3/f-less-35/3.png';
import F_Less_35_4 from 'assets/template3/f-less-35/4.png';
import F_Less_35_5 from 'assets/template3/f-less-35/5.png';

import F_Over_50_1 from 'assets/template3/f-over-50/1.png';
import F_Over_50_2 from 'assets/template3/f-over-50/2.png';
import F_Over_50_3 from 'assets/template3/f-over-50/3.png';
import F_Over_50_4 from 'assets/template3/f-over-50/4.png';

import M_35_50_1 from 'assets/template3/m-35-50/1.png';
import M_35_50_2 from 'assets/template3/m-35-50/2.png';
import M_35_50_3 from 'assets/template3/m-35-50/3.png';

import M_Less_35_1 from 'assets/template3/m-less-35/1.png';
import M_Less_35_2 from 'assets/template3/m-less-35/2.png';
import M_Less_35_3 from 'assets/template3/m-less-35/3.png';
import M_Less_35_4 from 'assets/template3/m-less-35/4.png';
import M_Less_35_5 from 'assets/template3/m-less-35/5.png';

import M_Over_50_1 from 'assets/template3/m-over-50/1.png';
import M_Over_50_2 from 'assets/template3/m-over-50/2.png';
import M_Over_50_3 from 'assets/template3/m-over-50/3.png';
import M_Over_50_4 from 'assets/template3/m-over-50/4.png';

export interface ISectionPersonal {
  id: number;
  meta: string;
  sex: 'M' | 'F';
  age: number;
  size: number;
  type: 'video' | 'images';
  source: {
    floor: number;
    zone: string;
    item: any;
  }[];
}

export const sectionPersonal: ISectionPersonal[] = [
  {
    id: 6,
    meta: 'male over 50',
    type: 'images',
    sex: 'M',
    age: 49,
    size: 3,
    source: [
      {floor: 1, zone: 'z5', item: M_Over_50_1},
      {floor: 1, zone: 'z4', item: M_Over_50_2},
      {floor: 1, zone: 'z6', item: M_Over_50_3},
      {floor: 1, zone: 'z1', item: M_Over_50_4},
    ],
  },
  {
    id: 5,
    meta: 'male 35-50',
    type: 'images',
    sex: 'M',
    age: 34,
    size: 2,
    source: [
      {floor: 1, zone: 'z5', item: M_35_50_1},
      {floor: 1, zone: 'z4', item: M_35_50_2},
      {floor: 1, zone: 'z6', item: M_35_50_3},
    ],
  },
  {
    id: 4,
    meta: 'male less 35',
    type: 'images',
    sex: 'M',
    age: 1,
    size: 4,
    source: [
      {floor: 1, zone: 'z1', item: M_Less_35_1},
      {floor: 1, zone: 'z4', item: M_Less_35_2},
      {floor: 1, zone: 'z7', item: M_Less_35_3},
      {floor: 1, zone: 'z6', item: M_Less_35_4},
      {floor: 1, zone: 'z5', item: M_Less_35_5},
    ],
  },
  {
    id: 3,
    meta: 'female over 50',
    type: 'images',
    sex: 'F',
    age: 49,
    size: 3,
    source: [
      {floor: 1, zone: 'z4', item: F_Over_50_1},
      {floor: 1, zone: 'z1', item: F_Over_50_2},
      {floor: 1, zone: 'z6', item: F_Over_50_3},
      {floor: 1, zone: 'z5', item: F_Over_50_4},
    ],
  },
  {
    id: 2,
    meta: 'female 35-50',
    type: 'images',
    sex: 'F',
    age: 34,
    size: 3,
    source: [
      {floor: 1, zone: 'z4', item: F_35_50_1},
      {floor: 1, zone: 'z7', item: F_35_50_2},
      {floor: 1, zone: 'z6', item: F_35_50_3},
      {floor: 1, zone: 'z5', item: F_35_50_4},
    ],
  },
  {
    id: 1,
    meta: 'female less 35',
    type: 'images',
    sex: 'F',
    age: 1,
    size: 4,
    source: [
      {floor: 1, zone: 'z1', item: F_Less_35_1},
      {floor: 1, zone: 'z4', item: F_Less_35_2},
      {floor: 1, zone: 'z7', item: F_Less_35_3},
      {floor: 1, zone: 'z6', item: F_Less_35_4},
      {floor: 1, zone: 'z5', item: F_Less_35_5},
    ],
  },
];

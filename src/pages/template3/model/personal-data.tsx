import F35_50_1 from 'assets/template3/f-35-50/1.png';
import F35_50_2 from 'assets/template3/f-35-50/2.png';
import F35_50_3 from 'assets/template3/f-35-50/3.png';
import F35_50_4 from 'assets/template3/f-35-50/4.png';

import F_Less_35_1 from 'assets/template3/f-less-35/1.png';
import F_Less_35_2 from 'assets/template3/f-less-35/2.png';
import F_Less_35_3 from 'assets/template3/f-less-35/3.png';
import F_Less_35_4 from 'assets/template3/f-less-35/4.png';
import F_Less_35_5 from 'assets/template3/f-less-35/5.png';

import F_Over_50_1 from 'assets/template3/f-over-50/1.png';
import F_Over_50_2 from 'assets/template3/f-over-50/2.png';
import F_Over_50_3 from 'assets/template3/f-over-50/3.png';
import F_Over_50_4 from 'assets/template3/f-over-50/4.png';

export interface ISectionPersonal {
  id: number;
  meta: string;
  sex: 'M' | 'F';
  age: number;
  type: 'video' | 'images';
  source: {
    zone: string;
    item: any;
  }[];
}

export const sectionPersonal: ISectionPersonal[] = [
  {
    id: 1,
    meta: 'female less 35',
    type: 'video',
    sex: 'F',
    age: 1,
    source: [
      {zone: 'z1', item: F_Less_35_1},
      {zone: 'z1', item: F_Less_35_2},
      {zone: 'z1', item: F_Less_35_3},
      {zone: 'z1', item: F_Less_35_4},
      {zone: 'z1', item: F_Less_35_5},
    ],
  },
  {
    id: 2,
    meta: 'female 35-50',
    type: 'video',
    sex: 'F',
    age: 34,
    source: [
      {zone: 'z1', item: F35_50_1},
      {zone: 'z1', item: F35_50_2},
      {zone: 'z1', item: F35_50_3},
      {zone: 'z1', item: F35_50_4},
    ],
  },
  {
    id: 3,
    meta: 'female over 50',
    type: 'video',
    sex: 'F',
    age: 49,
    source: [
      {zone: 'z1', item: F_Over_50_1},
      {zone: 'z1', item: F_Over_50_2},
      {zone: 'z1', item: F_Over_50_3},
      {zone: 'z1', item: F_Over_50_4},
    ],
  },
];

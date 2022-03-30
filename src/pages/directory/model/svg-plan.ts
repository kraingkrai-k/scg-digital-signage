import MockImg from 'assets/images/mockImg.png';
import MockQR from 'assets/images/mockQR.png';
import {ReactComponent as SvgPlan} from 'assets/images/mockMap.svg';

type TBodyPlan = {
  [key: string]: {
    title: string;
    floor: string;
    image: any;
    metaText: string[];
    qrCode: any;
    svgPlan: any;
  };
};

export const bodyPlan: TBodyPlan = {
  z1: {
    title: 'Care Living Solutin',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z2: {
    title: 'Home Inspiration Lounge',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z3: {
    title: 'Living Design Studio',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z4: {
    title: 'SCG Home Selected',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z5: {
    title: 'Home & Decor Boutique',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z6: {
    title: 'Outdoor & Garden Solution',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z7: {
    title: 'Home & Living Solution',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z9: {
    title: 'Cotto Life',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z10: {
    title: 'Home Idea & Book Hub',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z11: {
    title: 'Design Studio & Meeting Room',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z12: {
    title: 'ExSpace',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z13: {
    title: 'Home Smile',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
  z14: {
    title: 'doo Deco',
    floor: '1',
    image: MockImg,
    qrCode: MockQR,
    metaText: ['ปรึกษาผู้เชี่ยวชาญสร้างบ้าน', 'ปรับปรุงบ้าน'],
    svgPlan: SvgPlan,
  },
};

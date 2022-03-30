import {useEffect} from 'react';
import {COLORS} from 'core/utils/constant';

const color = {
  zoneInActive: COLORS.holder1,
  zoneActive: COLORS.red,
  txtInActive: COLORS.red,
  txtActive: COLORS.greyText,
};

const valuesZone = ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z9', 'z10', 'z11', 'z12', 'z13', 'z14'];
const valuesTxt = [
  'z1-text',
  'z2-text',
  'z3-text',
  'z4-text',
  'z5-text',
  'z6-text',
  'z7-text',
  'z9-text',
  'z10-text',
  'z11-text',
  'z12-text',
  'z13-text',
  'z14-text',
];

const useMapSvg = (handlerOpenModal: (zone: string) => void) => {
  const resetDom = (exclude: string) => {
    valuesZone.forEach((x) => {
      if (x !== exclude) {
        const ele = document.getElementById(x);
        ele?.setAttribute('fill', color.zoneInActive);
      }
    });

    valuesTxt.forEach((x) => {
      const fillStr = exclude + '-text';
      if (x !== fillStr) {
        const eleTxt = document.getElementById(x);
        eleTxt?.setAttribute('fill', color.txtInActive);
      }
    });
  };

  const setDomReuse = (e: any) => {
    if (e?.srcElement) {
      e.srcElement.setAttribute('fill', color.zoneActive);
      return;
    }
    e?.setAttribute('fill', color.zoneActive);
  };

  const mapZoneSelected = (z: string) => {
    const dom = document.getElementById(z);

    switch (z) {
      case 'z1':
        handlerZ1(dom);
        break;
      case 'z2':
        handlerZ2(dom);
        break;
      case 'z3':
        handlerZ3(dom);
        break;
      case 'z4':
        handlerZ4(dom);
        break;
      case 'z5':
        handlerZ5(dom);
        break;
      case 'z6':
        handlerZ6(dom);
        break;
      case 'z7':
        handlerZ7(dom);
        break;
      case 'z9':
        handlerZ9(dom);
        break;
      case 'z10':
        handlerZ10(dom);
        break;
      case 'z11':
        handlerZ11(dom);
        break;
      case 'z12':
        handlerZ12(dom);
        break;
      case 'z13':
        handlerZ13(dom);
        break;
      case 'z14':
        handlerZ14(dom);
        break;
      default:
        break;
    }
  };

  const handlerZ1 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z1-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z1');
  };

  const handlerZ2 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z2-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z2');
  };

  const handlerZ3 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z3-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z3');
  };

  const handlerZ4 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z4-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z4');
  };

  const handlerZ5 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z5-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z5');
  };

  const handlerZ6 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z6-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z6');
  };

  const handlerZ7 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z7-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z7');
  };

  const handlerZ9 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z9-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z9');
  };

  const handlerZ10 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z10-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z10');
  };

  const handlerZ11 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z11-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z11');
  };

  const handlerZ12 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z12-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z12');
  };

  const handlerZ13 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z13-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z13');
  };

  const handlerZ14 = (e: any) => {
    setDomReuse(e);
    const txt = document.getElementById('z14-text');
    txt?.setAttribute('fill', color.txtActive);
    resetDom('z14');
  };

  // section SVG
  const svgZone1Click = () => handlerOpenModal('z1');
  const svgZone2Click = () => handlerOpenModal('z2');
  const svgZone3Click = () => handlerOpenModal('z3');
  const svgZone4Click = () => handlerOpenModal('z4');
  const svgZone5Click = () => handlerOpenModal('z5');
  const svgZone6Click = () => handlerOpenModal('z6');
  const svgZone7Click = () => handlerOpenModal('z7');
  const svgZone9Click = () => handlerOpenModal('z9');
  const svgZone10Click = () => handlerOpenModal('z10');
  const svgZone11Click = () => handlerOpenModal('z11');
  const svgZone12Click = () => handlerOpenModal('z12');
  const svgZone13Click = () => handlerOpenModal('z13');
  const svgZone14Click = () => handlerOpenModal('z14');

  useEffect(() => {
    const z1 = document.getElementById('z1');
    z1?.addEventListener('click', svgZone1Click);

    const z2 = document.getElementById('z2');
    z2?.addEventListener('click', svgZone2Click);

    const z3 = document.getElementById('z3');
    z3?.addEventListener('click', svgZone3Click);

    const z4 = document.getElementById('z4');
    z4?.addEventListener('click', svgZone4Click);

    const z5 = document.getElementById('z5');
    z5?.addEventListener('click', svgZone5Click);

    const z6 = document.getElementById('z6');
    z6?.addEventListener('click', svgZone6Click);

    const z7 = document.getElementById('z7');
    z7?.addEventListener('click', svgZone7Click);

    const z9 = document.getElementById('z9');
    z9?.addEventListener('click', svgZone9Click);

    const z10 = document.getElementById('z10');
    z10?.addEventListener('click', svgZone10Click);

    const z11 = document.getElementById('z11');
    z11?.addEventListener('click', svgZone11Click);

    const z12 = document.getElementById('z12');
    z12?.addEventListener('click', svgZone12Click);

    const z13 = document.getElementById('z13');
    z13?.addEventListener('click', svgZone13Click);

    const z14 = document.getElementById('z14');
    z14?.addEventListener('click', svgZone14Click);

    return () => {
      z1?.removeEventListener('click', svgZone1Click);
      z2?.removeEventListener('click', svgZone2Click);
      z3?.removeEventListener('click', svgZone3Click);
      z4?.removeEventListener('click', svgZone4Click);
      z5?.removeEventListener('click', svgZone5Click);
      z6?.removeEventListener('click', svgZone6Click);
      z7?.removeEventListener('click', svgZone7Click);
      z9?.removeEventListener('click', svgZone9Click);
      z10?.removeEventListener('click', svgZone10Click);
      z11?.removeEventListener('click', svgZone11Click);
      z12?.removeEventListener('click', svgZone12Click);
      z13?.removeEventListener('click', svgZone13Click);
      z14?.removeEventListener('click', svgZone14Click);
    };
    // eslint-disable-next-line
  }, []);

  return {
    resetDom,
    mapZoneSelected,
  };
};

export default useMapSvg;

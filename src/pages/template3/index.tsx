import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import {useHistory, useLocation} from 'react-router-dom';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
import NavVideoBar, {INavVideoBar} from 'component/NavVideoBar';
import {XPTemplate} from 'component/XPRecommend';
import Promotion from 'component/Promotion';
import {Title45} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import MyModal from 'component/Modal';
import ModalPromotion from 'component/ModalPromotion';

import {ISectionPersonal, sectionPersonal} from './model/personal-data';
import {ISectionPromotion} from './model/promotion-data';
import {flashSaleData} from './model/flash-sale-data';

dayjs.extend(isBetween);

const Template3: React.FC = (): React.ReactElement => {
  const {push} = useHistory();
  const {state}: any = useLocation();

  const [visible, setVisible] = useState<boolean>(false);
  const [personal, serPersonal] = useState<ISectionPersonal>({} as ISectionPersonal);
  const [promotion, serPromotion] = useState<ISectionPromotion>({} as ISectionPromotion);
  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);

  const handlerPromotionClick = (x: ISectionPromotion) => {
    serPromotion(x);
    handlerOpenModal();
  };

  useEffect(() => {
    if (state?.age) {
      const find = sectionPersonal.find((x) => x.sex === state?.sex && state?.age > x.age);
      if (find) {
        serPersonal(find);
      }
    }
    // eslint-disable-next-line
  }, [state]);

  useEffect(() => {
    const findFlashSale = flashSaleData.find((x) => dayjs().isBetween(x.start, x.end));
    if (findFlashSale) {
      setFlashSale(findFlashSale);
    }
    // eslint-disable-next-line
  }, []);

  const handlerProductClick = () => {
    push('/interactive');
  };

  const handlerCloseModal = () => {
    setVisible(false);
  };

  const handlerOpenModal = () => {
    setVisible(true);
  };

  const handlerContentClick = (x: any) => {
    push('/directory', {
      zone: x?.zone,
      tab: x?.floor,
    });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${BGFooter})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'fill',
      }}
    >
      <MyModal onCancel={handlerCloseModal} onOK={handlerOpenModal} visible={visible}>
        <ModalPromotion promotion={promotion} />
      </MyModal>

      <Box sx={{height: '10%', position: 'relative'}}>
        <NavVideoBar {...flashSale} />
      </Box>

      <XPTemplate>
        <Title45>
          “ น้อง XP <span style={{color: COLORS.red}}>เลือกสินค้าและบริการ</span>
        </Title45>
        <Title45>
          <span style={{color: COLORS.red}}>ที่เหมาะกับ</span> คุณลูกค้ามาให้แล้วค่ะ ”
        </Title45>
      </XPTemplate>

      <Carousel height="32vh" animation="slide" indicators={false} autoPlay={true} interval={5000}>
        {personal?.source?.map?.((x: any, i: number) => (
          <Box
            key={i}
            onClick={() => handlerContentClick(x)}
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${x.item})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </Carousel>

      {/* <Box sx={{width: '100%', height: '32vh', zIndex: 1, position: 'relative'}}>
        <Box
          onClick={() => handlerContentClick(personal.source?.[maxRandom])}
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${personal.source?.[maxRandom].item})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Box> */}

      <Promotion onPromotionClick={handlerPromotionClick} onProductClick={handlerProductClick} />
      <Footer />
    </Box>
  );
};

export default Template3;

import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import {useHistory} from 'react-router-dom';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
import NavVideoBar from 'component/NavVideoBar';
import NavbarShape from 'component/NavbarShape';
import {XPTemplate} from 'component/XPRecommend';
import Promotion from 'component/Promotion';
import {Title45} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import MyModal from 'component/Modal';
import ModalPromotion from 'component/ModalPromotion';
import {AppContext} from 'core/context';

import {ISectionPersonal, sectionPersonal} from './model/personal-data';
import {ISectionPromotion} from './model/promotion-data';

const template3Timer = 15000;
const Template3: React.FC = (): React.ReactElement => {
  const {state} = useContext(AppContext);
  const {push} = useHistory();
  const [visible, setVisible] = useState<boolean>(false);

  const [personal, serPersonal] = useState<ISectionPersonal>({} as ISectionPersonal);
  const [maxRandom, setMaxRandom] = useState<number>(0);
  const [promotion, serPromotion] = useState<ISectionPromotion>({} as ISectionPromotion);

  let template3_timer: any;

  const watchTemplate3 = () => {
    template3_timer = setInterval(() => {
      push('/');
    }, template3Timer);
  };

  const handlerStillActive = () => {
    clearInterval(template3_timer);
    watchTemplate3();
  };

  const handlerPromotionClick = (x: ISectionPromotion) => {
    serPromotion(x);
    handlerOpenModal();
  };

  useEffect(() => {
    if (state.personalData) {
      const fetch = state.personalData;
      const find = sectionPersonal.find((x) => x.sex === fetch.sex && fetch.age > x.age);
      if (find) {
        serPersonal(find);
        const random = Math.round(Math.random() * find.size);
        setMaxRandom(random)
      }
    }
  }, [state.personalData]);

  useEffect(() => {
    handlerStillActive();
    return () => {
      clearInterval(template3_timer);
    };

    // eslint-disable-next-line
  }, []);

  const handlerProductClick = () => {
    push('/directory');
  };

  const handlerCloseModal = () => {
    setVisible(false);
  };

  const handlerOpenModal = () => {
    setVisible(true);
  };

  const handlerContentClick = (x: any) => {
    push('/directory', {
      zone: x.zone,
      tab: x.floor,
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
        <NavVideoBar />
        {/* workaround keep layout */}
        <Box sx={{opacity: 0}}>
          <NavbarShape />
        </Box>
        {/* keep layout */}
      </Box>

      <XPTemplate>
        <Title45>
          “ น้อง XP <span style={{color: COLORS.red}}>เลือกสินค้าและบริการ</span>
        </Title45>
        <Title45>
          <span style={{color: COLORS.red}}>ที่เหมาะกับ</span> คุณลูกค้ามาให้แล้วค่ะ ”
        </Title45>
      </XPTemplate>

      {/* <Carousel height="32vh" animation="slide" indicators={false} autoPlay={false}>
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
      </Carousel> */}

      <Box sx={{width: '100%', height: '32vh'}}>
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
      </Box>

      <Promotion onPromotionClick={handlerPromotionClick} onProductClick={handlerProductClick} />
      <Footer />
    </Box>
  );
};

export default Template3;

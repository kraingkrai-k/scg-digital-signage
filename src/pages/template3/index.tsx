import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import {useHistory} from 'react-router-dom';

import BGFooter from 'assets/images/bg-footer.png';
// import MockImg from 'assets/images/mockImg.png';

import Footer from 'component/Footer';
import Navbar from 'component/Navbar';
import NavbarShape from 'component/NavbarShape';
import {XPTemplate} from 'component/XPRecommend';
import Promotion from 'component/Promotion';
import {Title45} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import MyModal from 'component/Modal';
import ModalPromotion from 'component/ModalPromotion';
import {AppContext} from 'core/context';
import {ISectionPersonal, sectionPersonal} from './model/personal-data';

const Template3: React.FC = (): React.ReactElement => {
  const {state} = useContext(AppContext);
  const {push} = useHistory();
  const [visible, setVisible] = useState<boolean>(false);

  const [personal, serPersonal] = useState<ISectionPersonal>({} as ISectionPersonal);

  const handlerPromotionClick = () => {
    handlerOpenModal();
  };

  useEffect(() => {
    if (state.personalData) {
      const fetch = state.personalData;
      // console.log('hi data', state.personalData);

      const find = sectionPersonal.find((x) => x.sex === fetch.sex && fetch.age > x.age);
      if (find) {
        serPersonal(find);
      }
    }
  }, [state.personalData]);

  const handlerProductClick = () => {
    push('/directory');
  };

  const handlerCloseModal = () => {
    setVisible(false);
  };

  const handlerOpenModal = () => {
    setVisible(true);
  };

  const handlerContentClick = (zone: string) => {
    console.log('click', zone, personal);
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
        <ModalPromotion />
      </MyModal>

      <Box sx={{height: '10%', position: 'relative'}}>
        <Navbar />
        <NavbarShape />
      </Box>

      <XPTemplate>
        <Title45>
          “ น้อง XP <span style={{color: COLORS.red}}>เลือกสินค้าและบริการ</span>
        </Title45>
        <Title45>
          <span style={{color: COLORS.red}}>ที่เหมาะกับ</span> คุณลูกค้ามาให้แล้วค่ะ ”
        </Title45>
      </XPTemplate>

      <Carousel height="32vh" animation="slide" indicators={false} autoPlay interval={5000}>
        {personal?.source?.map?.((x: any, i: number) => (
          <Box
            key={i}
            onClick={() => handlerContentClick(x.zone)}
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${x.item})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></Box>
        ))}
      </Carousel>

      <Promotion onPromotionClick={handlerPromotionClick} onProductClick={handlerProductClick} />
      <Footer />
    </Box>
  );
};

export default Template3;

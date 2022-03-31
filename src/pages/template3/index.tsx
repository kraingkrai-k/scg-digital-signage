import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';

import BGFooter from 'assets/images/bg-footer.png';

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

const Template3: React.FC = (): React.ReactElement => {
  const {state} = useContext(AppContext);
  const [visible, setVisible] = useState<boolean>(false);

  const handlerPromotionClick = () => {
    handlerOpenModal();
  };

  useEffect(() => {
    if (state.personalData) {
      console.log('hi data', state.personalData);
    }
  }, [state.personalData]);

  const handlerProductClick = () => {
    console.log('product !!');
  };

  const handlerCloseModal = () => {
    setVisible(false);
  };

  const handlerOpenModal = () => {
    setVisible(true);
  };

  return (
    <Box sx={{height: '100vh', width: '100%'}}>
      <MyModal onCancel={handlerCloseModal} onOK={handlerOpenModal} visible={visible}>
        <ModalPromotion />
      </MyModal>

      <Box sx={{height: '14%', position: 'relative'}}>
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

      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          backgroundImage: `url(${BGFooter})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          objectFit: 'fill',
        }}
      >
        <Box
          sx={{
            bgcolor: 'green',
            width: '100%',
            height: '36vh',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Personal Consent
        </Box>

        <Promotion onPromotionClick={handlerPromotionClick} onProductClick={handlerProductClick} />
        <Footer />
      </Box>
    </Box>
  );
};

export default Template3;

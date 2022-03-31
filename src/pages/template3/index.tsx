import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import { useHistory } from 'react-router-dom';

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

const mock = [
  {
    name: 'Random Name #1',
    description: 'red',
  },
  {
    name: 'Random Name #2',
    description: 'green',
  },
  {
    name: 'Random Name #3',
    description: 'blue',
  },
];

const Template3: React.FC = (): React.ReactElement => {
  const {state} = useContext(AppContext);
  const {push} = useHistory()
  const [visible, setVisible] = useState<boolean>(false);

  const handlerPromotionClick = () => {
    handlerOpenModal();
  };

  useEffect(() => {
    if (state.personalData) {
      // console.log('hi data', state.personalData);
    }
  }, [state.personalData]);

  const handlerProductClick = () => {
    push('/directory')
  };

  const handlerCloseModal = () => {
    setVisible(false);
  };

  const handlerOpenModal = () => {
    setVisible(true);
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

      <Carousel height="33vh" animation="slide" autoPlay interval={5000}>
        {mock.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: item.description,
              // backgroundImage: `url(${MockImg})`,
              // backgroundSize: 'cover',
              // backgroundRepeat: 'no-repeat',
              // objectFit: 'fill',
            }}
          >
            <Title45 sx={{color: 'white'}}>
              Hi mock: {state?.personalData?.age} & {state?.personalData?.sex}
            </Title45>
          </Box>
        ))}
      </Carousel>

      <Promotion onPromotionClick={handlerPromotionClick} onProductClick={handlerProductClick} />
      <Footer />
    </Box>
  );
};

export default Template3;

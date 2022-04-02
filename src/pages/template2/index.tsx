import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';

// @ts-ignore
import V2 from 'assets/video/v-tem2.mp4';
import BGFooter from 'assets/images/bg-footer.png';
import {COLORS} from 'core/utils/constant';

import Footer from 'component/Footer';
import Navbar from 'component/Navbar';
import NavbarShape from 'component/NavbarShape';
import {XPTemplate} from 'component/XPRecommend';
import Promotion from 'component/Promotion';
import {Title45} from 'component/common/Font.styles';
import ModalPromotion from 'component/ModalPromotion';
import MyModal from 'component/Modal';
import Video from 'component/VideoPlayer';
import {ISectionPromotion} from 'pages/template3/model/promotion-data';
import {flashSaleData} from 'pages/template3/model/flash-sale-data';
import NavVideoBar, {INavVideoBar} from 'component/NavVideoBar';

const Template2: React.FC = (): React.ReactElement => {
  const {push} = useHistory();
  const [visible, setVisible] = useState<boolean>(false);
  const [promotion, serPromotion] = useState<ISectionPromotion>({} as ISectionPromotion);
  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);

  useEffect(() => {
    const findFlashSale = flashSaleData.find((x) => dayjs().isBetween(x.start, x.end));
    if (findFlashSale) {
      setFlashSale(findFlashSale);
    }
  }, []);

  const handlerPromotionClick = (x: ISectionPromotion) => {
    serPromotion(x);
    handlerOpenModal();
  };

  const handlerProductClick = () => push('/interactive');

  const handlerVideoEnded = () => {
    // push('/')
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
        <ModalPromotion promotion={promotion} />
      </MyModal>

      <Box sx={{height: '10%', position: 'relative'}}>
        <NavVideoBar {...flashSale} />
        {/* workaround keep layout */}
        <Box sx={{opacity: 0}}>
          <NavbarShape />
        </Box>
        {/* keep layout */}
      </Box>

      <XPTemplate>
        <Title45>
          “ มาตรงนี้ให้ <span style={{color: COLORS.red}}>น้อง XP</span>
        </Title45>

        <Title45>ช่วยแนะนำบริการได้ค่ะ ”</Title45>
      </XPTemplate>

      <Box
        sx={{
          bgcolor: COLORS.holder,
          width: '100%',
          height: '30vh',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Video onEnded={handlerVideoEnded} source={V2} />
      </Box>

      <Promotion onPromotionClick={handlerPromotionClick} onProductClick={handlerProductClick} />
      <Footer />
    </Box>
  );
};

export default Template2;

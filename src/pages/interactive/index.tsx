import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
// import Navbar from 'component/Navbar';
import NavbarShape from 'component/NavbarShape';
import {XPInteractive} from 'component/XPRecommend';
import SmartSolution from './component/SmartSolution';
import Directory from './component/Directory';
import {Title45} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import Ads from './component/Ads';
import NavVideoBar, {INavVideoBar} from 'component/NavVideoBar';
import { flashSaleData } from 'pages/template3/model/flash-sale-data';

const interactiveTimer = 15000;

const Interactive: React.FC = (): React.ReactElement => {
  const {push} = useHistory();

  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);

  let interactive_timer: NodeJS.Timer | null = null;

  const handlerStillActive = () => {
    interactive_timer && clearInterval(interactive_timer);

    if (interactive_timer) {
      interactive_timer = setInterval(() => {
        push('/');
      }, interactiveTimer);
    }
  };

  useEffect(() => {
    const findFlashSale = flashSaleData.find((x) => dayjs().isBetween(x.start, x.end));
    if (findFlashSale) {
      setFlashSale(findFlashSale);
    }

    interactive_timer = setInterval(() => {
      push('/');
    }, interactiveTimer);

    return () => {
      interactive_timer && clearInterval(interactive_timer);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Box
      onClick={handlerStillActive}
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${BGFooter})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'fill',
      }}
    >
      <Box sx={{height: '10%', position: 'relative'}}>
        <NavVideoBar {...flashSale} />
        {/* workaround keep layout */}
        <Box sx={{opacity: 0}}>
          <NavbarShape />
        </Box>
        {/* keep layout */}

        {/* <Navbar />
        <NavbarShape /> */}
      </Box>

      <XPInteractive>
        <Title45>
          “ น้อง XP <span style={{color: COLORS.red}}>เลือกสินค้าและบริการ</span>
        </Title45>
        <Title45>
          <span style={{color: COLORS.red}}>ที่เหมาะกับคุณลูกค้ามา</span> ให้แล้วค่ะ ”
        </Title45>
      </XPInteractive>

      <Box
        sx={{
          width: '100%',
          height: '45vh',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          direction: 'row',
        }}
      >
        <Box sx={{width: '100%'}}>
          <SmartSolution />
        </Box>
        <Box sx={{ml: '1%', width: '65%', height: '67%'}}>
          <Directory />
          <Ads />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Interactive;

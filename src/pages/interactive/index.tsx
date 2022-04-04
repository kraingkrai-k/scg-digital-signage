import React, {useEffect, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
import {XPInteractive} from 'component/XPRecommend';
import SmartSolution from './component/SmartSolution';
import Directory from './component/Directory';
import {Title45} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import Ads from './component/Ads';
import NavVideoBar, {INavVideoBar} from 'component/NavVideoBar';
import {flashSaleData} from 'pages/template3/model/flash-sale-data';

// const interactiveTimer = 15000;
const interactiveTimer = 180000; // 3min

const Interactive: React.FC = (): React.ReactElement => {
  const {push} = useHistory();

  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);
  const [flashSaleShow, setFlashSaleShow] = useState<boolean>(false);

  let interactive_timer: {current: NodeJS.Timer | null} = useRef(null);

  const handlerStillActive = () => {
    interactive_timer?.current && clearInterval(interactive_timer.current);

    if (interactive_timer) {
      interactive_timer.current = setInterval(() => {
        push('/');
      }, interactiveTimer);
    }
  };

  useEffect(() => {
    const findFlashSale = flashSaleData.find((x) => dayjs().isBetween(x.start, x.end));
    if (findFlashSale) {
      setFlashSale(findFlashSale);
    }

    interactive_timer.current = setInterval(() => {
      push('/');
    }, interactiveTimer);

    return () => {
      interactive_timer?.current && clearInterval(interactive_timer.current);
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
        <NavVideoBar {...flashSale} setFlashSaleShow={setFlashSaleShow} />
      </Box>

      <XPInteractive flashSaleShow={flashSaleShow}>
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

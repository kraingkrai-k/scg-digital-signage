import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory, useLocation} from 'react-router-dom';
import dayjs from 'dayjs';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
// import Navbar from 'component/Navbar';
import NavbarShape from 'component/NavbarShape';
import {XPDirectory} from 'component/XPRecommend';
import {Title40} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import Tabs from './component/Tabs';
import Content from './component/Content';
import NavVideoBar, { INavVideoBar } from 'component/NavVideoBar';
import { flashSaleData } from 'pages/template3/model/flash-sale-data';

const directoryTimer = 15000;

const Directory: React.FC = (): React.ReactElement => {
  const {state}: any = useLocation();
  const {push} = useHistory();

  const [floor, setFloor] = useState<number>(1);
  const [zone, setZone] = useState<number>(-1);
  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);

  let directory_timer: NodeJS.Timer | null = null;

  const handlerStillActive = () => {
    // @ts-ignore
    clearInterval(directory_timer);

    if (directory_timer) {
      directory_timer = setInterval(() => {
        push('/');
      }, directoryTimer);
    }
  };

  useEffect(() => {
    if (state?.tab) {
      setFloor(state.tab);
    }

    if (state?.zone) {
      setZone(state.zone);
    }
  }, [state]);

  useEffect(() => {
    const findFlashSale = flashSaleData.find((x) => dayjs().isBetween(x.start, x.end));
    if (findFlashSale) {
      setFlashSale(findFlashSale);
    }

    directory_timer = setInterval(() => {
      push('/');
    }, directoryTimer);

    return () => {
      directory_timer && clearInterval(directory_timer);
    };

    // eslint-disable-next-line
  }, []);

  const handlerSetZone = (x: number) => {
    setZone(x);
  };

  const handlerSetFloor = (x: number) => {
    setFloor(x);
  };

  // scale interactive page
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
      </Box>

      <XPDirectory>
        <Title40>
          “ เลือกโซนที่สนใจจาก <span style={{color: COLORS.red}}>แผนผัง</span>
        </Title40>
        <Title40>
          <span style={{color: COLORS.red}}>หรือ จากสินค้าและบริการ</span>ได้เลยนะคะ”
        </Title40>
      </XPDirectory>

      <Box
        sx={
          {
            // position: 'absolute',
            // width: '100%',
            // backgroundImage: `url(${BGFooter})`,
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // objectFit: 'fill',
          }
        }
      >
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
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(137.79deg, #FFFFFF 3.68%, #E1E1E1 87.1%)',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
              borderRadius: '0px 0px 4px 4px',
              ml: '2%',
              mr: '2%',
            }}
          >
            <Box sx={{width: '100%'}}>
              <Tabs floor={floor} setFloor={handlerSetFloor} />
              <Content floor={floor} zone={zone} setFloor={handlerSetFloor} setZone={handlerSetZone} />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Directory;

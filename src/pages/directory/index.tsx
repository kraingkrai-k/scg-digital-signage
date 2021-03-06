import React, {useEffect, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory, useLocation} from 'react-router-dom';
import dayjs from 'dayjs';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
import {XPDirectory} from 'component/XPRecommend';
import {Title40} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import Tabs from './component/Tabs';
import Content from './component/Content';
import NavVideoBar, {INavVideoBar} from 'component/NavVideoBar';
import {flashSaleData} from 'pages/template3/model/flash-sale-data';

// const directoryTimer = 15000;
const directoryTimer = 180000; // 3min

const Directory: React.FC = (): React.ReactElement => {
  const {state}: any = useLocation();
  const {push} = useHistory();

  const [floor, setFloor] = useState<number>(1);
  const [zone, setZone] = useState<number>(-1);
  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);
  const [flashSaleShow, setFlashSaleShow] = useState<boolean>(false);

  let directory_timer: {current: NodeJS.Timer | null} = useRef(null);

  const handlerStillActive = () => {
    directory_timer?.current && clearInterval(directory_timer.current);

    directory_timer.current = setInterval(() => {
      push('/');
    }, directoryTimer);
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

    directory_timer.current = setInterval(() => {
      push('/');
    }, directoryTimer);

    return () => {
      directory_timer?.current && clearInterval(directory_timer.current);
    };

    // eslint-disable-next-line
  }, [directory_timer]);

  const handlerSetZone = (x: number) => {
    setZone(x);
  };

  const handlerSetFloor = (x: number) => {
    setFloor(x);
  };

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

      <XPDirectory flashSaleShow={flashSaleShow}>
        <Title40>
          ??? ?????????????????????????????????????????????????????? <span style={{color: COLORS.red}}>??????????????????</span>
        </Title40>
        <Title40>
          <span style={{color: COLORS.red}}>???????????? ??????????????????????????????????????????????????????</span>?????????????????????????????????
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

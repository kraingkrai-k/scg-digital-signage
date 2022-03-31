import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory, useLocation} from 'react-router-dom';

import BGFooter from 'assets/images/bg-footer.png';

import Footer from 'component/Footer';
import Navbar from 'component/Navbar';
import NavbarShape from 'component/NavbarShape';
import {XPDirectory} from 'component/XPRecommend';
import {Title40} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import Tabs from './component/Tabs';
import Content from './component/Content';

import './index.css';

const directoryTimer = 15000;
const Directory: React.FC = (): React.ReactElement => {
  const {state}: any = useLocation();
  const {push} = useHistory();

  const [floor, setFloor] = useState<number>(1);
  const [zone, setZone] = useState<number>(-1);

  let directory_timer: any;

  const watchDirectory = () => {
    directory_timer = setInterval(() => {
      push('/');
    }, directoryTimer);
  };

  const handlerStillActive = () => {
    clearInterval(directory_timer);
    watchDirectory();
  };

  useEffect(() => {
    if (state?.tab) {
      setFloor(state.tab);
    }

    if (state?.zone) {
      setZone(state.zone);
    }
    watchDirectory();
    return () => {
      clearInterval(directory_timer);
    };

    // eslint-disable-next-line
  }, [state]);

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
        <Navbar />
        <NavbarShape />
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

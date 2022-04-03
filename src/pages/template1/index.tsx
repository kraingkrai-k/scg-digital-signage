import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';

// @ts-ignore
import V1 from 'assets/video/v-tem1.mp4';
import {COLORS} from 'core/utils/constant';
import Footer from 'component/Footer';
import Button from 'component/Button';
import Video from 'component/VideoPlayer';
import {INavVideoBar, NavVideoBarTemp1} from 'component/NavVideoBar';
import {flashSaleData} from 'pages/template3/model/flash-sale-data';

const Template1: React.FC = (): React.ReactElement => {
  const {push} = useHistory();

  const handlerProductClick = () => push('/interactive');
  const [flashSale, setFlashSale] = useState<INavVideoBar>({} as INavVideoBar);

  useEffect(() => {
    const findFlashSale = flashSaleData.find((x) => dayjs().isBetween(x.start, x.end));
    if (findFlashSale) {
      setFlashSale(findFlashSale);
    }
  }, []);

  return (
    <Box sx={{height: '98vh', width: '100%', bgcolor: COLORS.red}}>
      <Box sx={{height: '10%', position: 'relative'}}>
        <NavVideoBarTemp1 {...flashSale} />
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '55%',
        }}
      >
        <Video onEnded={() => push('/template2')} source={V1} />
        <Box
          sx={{
            background: 'linear-gradient(180deg, #EC1C24 10.42%, rgba(236, 28, 36, 0) 100%)',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
            height: '3vh',
            mt: '-3vh',
          }}
        />
      </Box>

      <Box
        sx={{
          height: '5%',
          alignItems: 'flex-start',
          display: 'flex',
          justifyContent: 'center',
          mt: '2%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Button invert={false} onClick={handlerProductClick} />
      </Box>

      <Footer />
    </Box>
  );
};

export default Template1;

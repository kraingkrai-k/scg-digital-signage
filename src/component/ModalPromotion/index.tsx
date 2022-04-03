import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import QRCode from 'react-qr-code';

import {Title17, Title30} from 'component/common/Font.styles';
import {IconPin} from 'assets/icon/Icon';
import {ISectionPromotion} from 'pages/template3/model/promotion-data';
import {COLORS} from 'core/utils/constant';
import {BASE_URL_MOBILE} from 'core/utils/env';

interface IModalPromotion {
  promotion: ISectionPromotion;
}

const ModalPromotion: React.FC<IModalPromotion> = ({promotion}): React.ReactElement => {
  return (
    <Box sx={{height: '100%', width: '100%'}}>
      <Box
        sx={{
          width: '100%',
          backgroundImage: `url(${promotion?.banner})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          height: '15vh',
          mb: '3%',
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'grid',
              ml: '7%',
              width: '100%',
            }}
          >
            <Title30>{promotion.title}</Title30>

            <Box sx={{display: 'flex', alignItems: 'center', mt: '2%'}}>
              <SvgIcon
                component={IconPin}
                inheritViewBox
                sx={{
                  width: {
                    monitor43: '45px',
                    desktop: '35px',
                  },
                  height: {
                    monitor43: '45px',
                    desktop: '35px',
                  },
                }}
              />
              <Title17>{promotion.subTitle}</Title17>
            </Box>

            <Box
              sx={{
                mt: '4%',
                mb: '2vh',
                lineHeight: '1.6',
              }}
            >
              <Title17 sx={{fontWeight: 400, whiteSpace: 'break-spaces'}}>{promotion?.meta}</Title17>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} mt="2%">
          <Box sx={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            <Box
              sx={{
                border: '2px solid #D5AF26',
                boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
                background: COLORS.white,
                borderRadius: '6px',
                p: '12px',
                pb: 0,
              }}
            >
              <Box sx={{display: 'grid'}}>
                <Title17 sx={{textAlign: 'center'}}>แสกนรับสิทธิ์</Title17>
                <Box sx={{margin: '12px'}}>
                  <QRCode value={`${BASE_URL_MOBILE}/${promotion.qrCode}`} size={100} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalPromotion;

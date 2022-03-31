import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';

import {Title14, Title17, Title30} from 'component/common/Font.styles';
import {IconPin} from 'assets/icon/Icon';
import {ISectionPromotion} from 'pages/template3/model/promotion-data';

interface IModalPromotion {
  promotion: ISectionPromotion;
}

const ModalPromotion: React.FC<IModalPromotion> = ({promotion}): React.ReactElement => {
  return (
    <Box sx={{height: '100%', width: '100%'}}>
      <Box
        sx={{
          height: '40%',
          width: '100%',
          backgroundImage: `url(${promotion?.banner})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'grid',
              ml: '10%',
              width: '80%',
            }}
          >
            <Title30>เตรียมพบกับ Flash Sale 13:00 - 15:00</Title30>

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
              <Title17>
                ชั้น {promotion?.floor} โซน {promotion?.zone}
              </Title17>
            </Box>

            <Box
              sx={{
                mt: '4%',
                letterSpacing: '0.1rem',
                fontSize: {
                  monitor43: '16px',
                  desktop: '15px',
                },
              }}
            >
              {promotion?.meta}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box sx={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            <Box
              sx={{
                border: '2px solid #D5AF26',
                boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
                borderRadius: '6px',
                p: 2,
              }}
            >
              <Box sx={{display: 'grid'}}>
                <Title14 sx={{textAlign: 'center'}}>แสกนรับสิทธิ์</Title14>
                <Box
                  sx={{
                    backgroundImage: `url(${promotion?.qrCode})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    height: '150px',
                    width: '150px',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalPromotion;

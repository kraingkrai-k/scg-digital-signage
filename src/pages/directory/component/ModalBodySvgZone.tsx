import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {Title17, Title20, Title30} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';

import MockImg from 'assets/images/mockImg.png';
import MockQR from 'assets/images/mockQR.png';
import {ReactComponent as IconMap} from 'assets/images/mockMap.svg';

interface IModalBodySvgZone {
  zone: string;
}

export const ModalBodySvgZone: React.FC<IModalBodySvgZone> = ({zone}): React.ReactElement => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          // gap: 6,
          gridTemplateColumns: 'repeat(2, 1fr)',
          height: '70%',
          position: 'relative',
          // width: '100%',
          ml: '5%',
          mr: '10%',
          mt: '5%',
        }}
      >
        <Box
          sx={{
            width: '80%',
            // ml: '7%',
            mt: '10%',
            overflowY: 'scroll',
          }}
        >
          <Box sx={{display: 'flex', gap: 3, alignItems: 'center'}}>
            {/* <SvgIcon component={data.icon} inheritViewBox sx={{width: '18%', height: '18%'}} /> */}

            <Box sx={{display: 'grid', justifyItems: 'baseline'}}>
              <Title30 sx={{color: COLORS.red}}>{'data.text'}</Title30>

              <Title17>ชั้น 1 Living Design Studio</Title17>
            </Box>
          </Box>

          <Box sx={{alignItems: 'center', justifyContent: 'center'}}>
            <Box
              sx={{
                backgroundImage: `url(${MockImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                objectFit: 'contain',
                height: {
                  monitor43: '500px',
                  desktop: '300px',
                },
                width: {
                  monitor43: '100%',
                  desktop: '100%',
                },
                mt: '7%',
                mb: '10%',
              }}
            />

            <Box
              sx={{
                letterSpacing: '0.1rem',
                lineHeight: '1.4',
              }}
            >
              <Title17 sx={{fontWeight: 400}}>
                ถ้าคุณกำลังมีปัญหาเรื่องบ้านแต่ไม่รู้ว่าควรปรึกษาใคร เราขอแนะนำ{' '}
                <span style={{fontWeight: 700}}>"คลินิคหมอบ้าน"</span>{' '}
                ที่จะมาช่วยไขทุกข้อข้องใจเรื่องบ้านกับผู้เชี่ยวชาญจากเอสซีจีไม่ว่าจะเป็นสร้างบ้านใหม่ปรับปรุงหรือต่อเติมบ้านเก่า
              </Title17>
            </Box>
          </Box>
        </Box>

        <Box sx={{mt: '1%'}}>
          <SvgIcon component={IconMap} inheritViewBox sx={{width: '110%', height: '70%'}} />

          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              top: {
                monitor43: '50%',
                desktop: '60%',
              },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${MockQR})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                objectFit: 'contain',
                height: '100px',
                width: '100px',
              }}
            />

            <Box sx={{display: 'grid'}}>
              <Title17 sx={{fontWeight: 400}}>สแกน QR</Title17>
              <Title17 sx={{fontWeight: 400}}>เพื่อเปิดบนมือถือ</Title17>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ml: '5%'}}>
        <Title20>สินค้าและบริการแนะนำ</Title20>

        <Box sx={{mt: '1%', display: 'flex'}}>
          <Box
            sx={{
              minWidth: {
                monitor43: '600px',
                desktop: '400px',
                lg: '200px',
              },
            }}
          >
            <li>
              <Title17 sx={{fontWeight: 400}}>ปรึกษาผู้เชี่ยวชาญสร้างบ้าน</Title17>
            </li>

            <li>
              <Title17 sx={{fontWeight: 400}}>ปรับปรุงบ้าน</Title17>
            </li>
          </Box>

          <Box>
            <li>
              <Title17 sx={{fontWeight: 400}}>ปรึกษาผู้เชี่ยวชาญสร้างบ้าน</Title17>
            </li>

            <li>
              <Title17 sx={{fontWeight: 400}}>ปรับปรุงบ้าน</Title17>
            </li>
          </Box>
        </Box>
      </Box>
    </>
  );
};

import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {ReactComponent as FooterShape} from 'assets/icon/footerShape.svg';
import {ReactComponent as Social} from 'assets/icon/social.svg';
import Logo from 'assets/icon/logo.png';
import {Title30} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';

const Footer: React.FC = (): React.ReactElement => {
  return (
    <Box sx={{overflowY: 'hidden', width: '100%', maxHeight: '30%'}}>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100vw',
        }}
      >
        <SvgIcon
          component={FooterShape}
          inheritViewBox
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          width: {
            monitor43: '280px',
            desktop: '190px',
          },
          height: {
            monitor43: '200px',
            desktop: '160px',
          },
          ml: {
            monitorr43: '2%',
            desktop: '4%',
          },
          bottom: {
            monitor43: '1.8%',
            desktop: '1.4%',
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          display: 'grid',
          bottom: '6%',
          justifyItems: 'end',
          width: '100%',
          height: '10%',
        }}
      >
        <SvgIcon
          component={Social}
          inheritViewBox
          sx={{
            width: '35%',
            height: '90%',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          display: 'grid',
          right: '3%',
          bottom: '3%',
          justifyItems: 'end',
        }}
      >
        <Title30>รับข่าวสารและโปรโมชั่นก่อนใคร</Title30>

        <Title30>
          ผ่านช่องทาง Social Media <span style={{color: COLORS.red}}>SCGHOMEExperience</span>
        </Title30>
      </Box>
    </Box>
  );
};

export default Footer;

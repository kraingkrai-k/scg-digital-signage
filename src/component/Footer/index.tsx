import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {ReactComponent as FooterShape} from 'assets/icon/footerShape.svg';
import Logo from 'assets/icon/logo.png';
import QRIG from 'assets/qr-social/IG.png';
import QRFB from 'assets/qr-social/FB.png';
import QRYT from 'assets/qr-social/Youtube.png';

import {Title14, Title30} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';
import {IconTitleIG, IconTitleFB, IconTitleYT} from 'assets/icon/Icon';

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
          width: '220px',
          height: '220px',
          ml: '2%',
          bottom: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          bottom: '9%',
          right: '3%',
          gap: '12px',
        }}
      >
        <IconSocial title="Facebook" qr={QRFB} icon={<IconTitleFB sx={{width: '16px', height: '16px'}} />} />
        <IconSocial title="Instagram" qr={QRIG} icon={<IconTitleIG sx={{width: '16px', height: '16px'}} />} />
        <IconSocial title="Youtube" qr={QRYT} icon={<IconTitleYT sx={{width: '16px', height: '16px'}} />} />
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

interface IIconSocial {
  icon: any;
  title: string;
  qr: any;
}

const IconSocial = (props: IIconSocial) => (
  <Box
    sx={{
      display: 'flex',
      borderRadius: '8px',
      flexDirection: 'column',
      bgcolor: COLORS.white,
      alignItems: 'center',
      overflowY: 'hidden',
    }}
  >
    <Box sx={{display: 'flex', alignItems: 'center', mt: '12px', position: 'relative'}}>
      {props.icon}
      <Title14 sx={{ml: '2px', fontWeight: 700}}>{props.title}</Title14>
    </Box>
    <Box
      sx={{
        backgroundImage: `url(${props.qr})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100px',
        height: '100px',
        mt: '-3%',
      }}
    />
  </Box>
);

export default Footer;

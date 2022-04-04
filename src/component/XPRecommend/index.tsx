import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import BGFooter from 'assets/images/bg-footer.png';
import {ReactComponent as IconXPTemplate} from 'assets/icon/xpTemplate.svg';
import {ReactComponent as IconXPDirectory} from 'assets/icon/xpDirectory.svg';
import {ReactComponent as IconXPInteractive} from 'assets/icon/xpInteractive.svg';

interface IXPTemplate {
  children: any;
  flashSaleShow: boolean;
}

export const XPTemplate: React.FC<IXPTemplate> = ({children, flashSaleShow}): React.ReactElement => (
  <Box
    sx={{
      backgroundImage: `url(${BGFooter})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      objectFit: 'contain',
      height: '15vh',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
      }}
    >
      <Box sx={{display: 'grid', width: '100%', justifyContent: 'end'}}>{children}</Box>
      <Box
        sx={{
          width: {
            monitor43: '30%',
            desktop: flashSaleShow ? '24%' : '30%',
          },
          height: {
            monitor43: '35%',
            desktop: flashSaleShow ? '24%' : '35%',
          },
          right: {
            monitor43: 0,
            desktop: flashSaleShow ? '4%' : '3%',
          },
          position: 'absolute',
          top: {
            monitor43: 0,
            desktop: flashSaleShow ? '5%' : '-2%',
          },
          zIndex: 1,
        }}
      >
        <SvgIcon component={IconXPTemplate} inheritViewBox sx={{width: '100%', height: '100%'}} />
      </Box>
    </Box>
  </Box>
);

export const XPInteractive: React.FC = ({children}): React.ReactElement => (
  <Box
    sx={{
      backgroundImage: `url(${BGFooter})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      objectFit: 'contain',
      height: '15vh',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
      }}
    >
      <Box sx={{display: 'grid', width: '100%', justifyContent: 'end'}}>{children}</Box>

      <Box
        sx={{
          width: {
            monitor43: '30%',
            desktop: '30%',
          },
          height: {
            monitor43: '35%',
            desktop: '25%',
          },
          position: 'absolute',
          right: {
            monitor43: '4%',
            desktop: '3%',
          },
          top: {
            monitor43: 0,
            desktop: '7%',
          },
          zIndex: 1,
        }}
      >
        <SvgIcon component={IconXPInteractive} inheritViewBox sx={{width: '100%', height: '100%'}} />
      </Box>
    </Box>
  </Box>
);

export const XPDirectory: React.FC = ({children}): React.ReactElement => (
  <Box
    sx={{
      backgroundImage: `url(${BGFooter})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      objectFit: 'contain',
      height: '15vh',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
      }}
    >
      <Box sx={{display: 'grid', width: '100%', justifyContent: 'end'}}>{children}</Box>

      <Box
        sx={{
          width: {
            monitor43: '30%',
            desktop: '25%',
          },
          height: {
            monitor43: '35%',
            desktop: '30%',
          },
          position: 'absolute',
          right: {
            monitor43: 0,
            desktop: '5%',
          },
          zIndex: 1,
        }}
      >
        <SvgIcon component={IconXPDirectory} inheritViewBox sx={{width: '100%', height: '100%'}} />
      </Box>
    </Box>
  </Box>
);

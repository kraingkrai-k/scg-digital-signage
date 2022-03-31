import React from 'react';
import Box from '@mui/material/Box';
import VideoPlayer from '../VideoPlayer';
// @ts-ignore
import flashSaleVideo from 'assets/video/flash_sale.mp4';

interface INavVideoBar {
  center?: boolean;
}

const NavVideoBar: React.FC<INavVideoBar> = ({center = false}): React.ReactElement => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <VideoPlayer source={flashSaleVideo} loop={true} onEnded={() => {}} />
    </Box>
  );
};

export default NavVideoBar;

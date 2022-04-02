import React from 'react';
import Box from '@mui/material/Box';

import Navbar from 'component/Navbar';
import VideoPlayer from '../VideoPlayer';

export interface INavVideoBar {
  video?: any;
}

const NavVideoBar: React.FC<INavVideoBar> = ({video}): React.ReactElement => {

  if (!video) {
    return <Navbar />
  }

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <VideoPlayer source={video} loop={true} onEnded={() => { }} />
    </Box>
  );
};

export default NavVideoBar;

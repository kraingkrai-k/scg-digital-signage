import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import Navbar, {NavbarTemplate1} from 'component/Navbar';
import VideoPlayer from '../VideoPlayer';

export interface INavVideoBar {
  video?: any;
}

const MyComponent = React.forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} {...props}>
      <VideoPlayer source={props?.source} loop={true} onEnded={() => {}} />
    </div>
  );
});

const NavVideoBar: React.FC<INavVideoBar> = ({video}): React.ReactElement => {
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    if (video) {
      setTimeout(() => {
        setFade(true);
      }, 5000);
    } else {
      setFade(false);
    }
  }, [video]);

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      {fade ? (
        <Fade in={fade} unmountOnExit timeout={{enter: 3000}}>
          <MyComponent source={video} loop={true} onEnded={() => {}} />
        </Fade>
      ) : (
        <Navbar />
      )}
    </Box>
  );
};

export default NavVideoBar;

export const NavVideoBarTemp1: React.FC<INavVideoBar> = ({video}): React.ReactElement => {
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    if (video) {
      setTimeout(() => {
        setFade(true);
      }, 5000);
    } else {
      setFade(false);
    }
  }, [video]);

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      {fade ? (
        <Fade in={fade} unmountOnExit timeout={{enter: 3000}}>
          <MyComponent source={video} loop={true} onEnded={() => {}} />
        </Fade>
      ) : (
        <NavbarTemplate1 />
      )}
    </Box>
  );
};

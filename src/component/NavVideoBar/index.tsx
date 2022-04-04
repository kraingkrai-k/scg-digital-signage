import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import Navbar, {NavbarTemplate1} from 'component/Navbar';
import VideoPlayer from '../VideoPlayer';
import NavbarShape from 'component/NavbarShape';

export interface INavVideoBar {
  video?: any;
  setFlashSaleShow?: (x: boolean) => void;
}

const MyComponent = React.forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} {...props}>
      <VideoPlayer source={props?.source} loop={true} onEnded={() => {}} />
      <Box sx={{opacity: 0}}>
        <NavbarShape />
      </Box>
    </div>
  );
});

const NavVideoBar: React.FC<INavVideoBar> = ({video, setFlashSaleShow}): React.ReactElement => {
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    if (video) {
      setTimeout(() => {
        setFade(true);
        setFlashSaleShow && setFlashSaleShow(true);
      }, 5000);
    } else {
      setFade(false);
      setFlashSaleShow && setFlashSaleShow(false);
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
        <Fade in={fade} unmountOnExit timeout={{enter: 3000}} style={{height: '100%', width: '100%'}}>
          <MyComponent source={video} loop={true} onEnded={() => {}} />
        </Fade>
      ) : (
        <>
          <Navbar />
          <NavbarShape />
        </>
      )}
    </Box>
  );
};

export default NavVideoBar;

const MyComponentTemp1 = React.forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} {...props}>
      <VideoPlayer source={props?.source} loop={true} onEnded={() => {}} />
    </div>
  );
});

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
        <Fade in={fade} unmountOnExit timeout={{enter: 3000}} style={{height: '100%', width: '100%'}}>
          <MyComponentTemp1 source={video} loop={true} onEnded={() => {}} />
        </Fade>
      ) : (
        <NavbarTemplate1 />
      )}
    </Box>
  );
};

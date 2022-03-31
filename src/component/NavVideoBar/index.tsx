import React from "react";
import Box from "@mui/material/Box";
import VideoPlayer from '../VideoPlayer';
// @ts-ignore
import flashSaleVideo from 'assets/video/flash_sale.mp4';

interface INavVideoBar {
  center?: boolean
}

const NavVideoBar: React.FC<INavVideoBar> = ({center = false}): React.ReactElement => {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      lineHeight: {
        monitor43: '0.8',
        lg: '1.2',
      },
      background: 'linear-gradient(180deg, #EC1C24 0%, #CA060D 100%)',
      display: 'flex',
      justifyContent: center ? 'center' : 'stretch',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        ml: center ? '0%' : '7%',
      }}>
        <VideoPlayer source={flashSaleVideo}  onEnded={() => {}}/>
      </Box>
    </Box>
  )
}

export default NavVideoBar

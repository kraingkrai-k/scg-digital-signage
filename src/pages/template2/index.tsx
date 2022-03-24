import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
// import BGFooter from "assets/images/bg-footer.png";
import {ReactComponent as StarIcon} from "assets/images/test.svg";
// import StarIcon from "assets/images/test.png";

import {NavbarShape} from "assets/icon/Icon";
import XPCaption from "component/XPCaption";
import SvgIcon from "@mui/material/SvgIcon";

const Template2: React.FC = (): React.ReactElement => {

    const width = window.screen.width
    const height = window.screen.height

    const aspect = width / height;
    console.log('as', aspect)

    const adjustedHeight = Math.ceil(width / aspect);
    console.log('adjustedHeight', adjustedHeight)

    return (
        <>
            {/* @ts-ignore */}
            <SvgIcon component={StarIcon}
                inheritViewBox
                sx={{width: '100vw', height: '100%'}}
                viewBox={`0 0 ${width} ${adjustedHeight}`}
            />


            {/* <Box
                sx={{
                    width: 'auto',
                    height: '100vh',
                    backgroundImage: `url(${StarIcon})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
            /> */}
        </>
    )
    // return (
    //     <Box sx={{height: '100vh', width: '100%'}}>

    //         <Box sx={{height: '11vh'}}>
    //             <Navbar />
    //         </Box>

    //         <Box sx={{maxHeight: '11vh'}}>
    //             <XPCaption />
    //         </Box>

    //     </Box>
    // )
};

export default Template2;

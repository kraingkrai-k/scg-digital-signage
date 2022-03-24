import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
// import BGFooter from "assets/images/bg-footer.png";
import {ReactComponent as Template2svg} from "assets/images/template2.svg";
// import Template2svg from "assets/images/test.png";

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
            <div style={{width: '100%', height: '100%'}}>
                <div>
                    {/* @ts-ignore */}
                    <SvgIcon component={Template2svg}
                        inheritViewBox
                        sx={{width: '100vw', height: '100vh'
                        , objectFit: 'contain'
                    }}
                        // sx={{width: '216rem'}}
                        viewBox={`0 0 ${width} ${adjustedHeight}`}
                    />
                </div>
            </div>

            {/* <Box
                sx={{
                    width: 'auto',
                    height: '100vh',
                    backgroundImage: `url(${Template2svg})`,
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

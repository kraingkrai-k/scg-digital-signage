import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
import BGFooter from "assets/images/bg-footer.png";
import XPRecommend from "component/XPRecommend";
import Promotion from "component/Promotion";

const Template2: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box
                sx={{
                    height: '14%',
                    position: 'relative',
                }}>
                <Navbar />

                <Box sx={{
                    width: '35%',
                    borderTop: `4vh solid ${COLORS.redBorder}`,
                    borderLeft: '100px solid transparent',
                    float: 'right',
                }} />
            </Box>

            <Box
                sx={{
                    backgroundImage: `url(${BGFooter})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat',
                    objectFit: 'contain',
                    height: '20vh',
                }}
            >
                <XPRecommend />
            </Box>

            <Box sx={{position: 'absolute', width: '100%'}}>
                <Box
                    sx={{
                        bgcolor: 'green',
                        width: '100%',
                        height: '36vh',
                        position: 'relative',
                        zIndex: 1,
                    }}>
                    Video
                </Box>

                <Promotion />
            </Box>

            {/* <Box> */}
                <Box
                    sx={{
                        backgroundImage: `url(${BGFooter})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'fill',
                        width: '100vw',
                        height: '100%'
                    }}
                >
                    <Promotion />

                
            {/* <Box
                sx={{
                    // marginTop: '-15%',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}
            >
                <Footer />
            </Box> */}

                </Box>
            {/* </Box> */}

            <Box
                sx={{
                    // marginTop: '-15%',
                    position: 'absolute',
                    // bottom: 0,
                    width: '100%'
                }}
            >
                <Footer />
            </Box>
        </Box>
    )
};

export default Template2;

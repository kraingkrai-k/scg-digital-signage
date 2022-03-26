import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
import BGFooter from "assets/images/bg-footer.png";
import {NavbarShape} from "assets/icon/Icon";
import XPRecommend from "component/XPRecommend";
import Promotion from "component/Promotion";

const Template2: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box
                sx={{
                    height: '14%',
                    bgcolor: 'green',
                    position: 'relative',
                    zIndex: -1
                }}>
                {/* <Navbar />

                <Box sx={{
                    width: '35%',
                    // background: 'linear-gradient(180deg, #EC1C24 0%, #CA060D 100%)',
                    borderImage: 'linear-gradient(to left, #EC1C24, #CA060D)',
                    borderTop: '35px solid',
                    borderLeft: '100px solid transparent',
                    // background: 'green',
                    float: 'right',
                }} /> */}
            </Box>

            <Box>
                <XPRecommend />
            </Box>

            <Box
                sx={{
                    backgroundImage: `url(${BGFooter})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'fill',
                    width: '100vw',
                    height: '50%'
                }}
            >
                <Promotion />
            </Box>


            <Box sx={{marginTop: '-10%'}}>
                <Footer />
            </Box>

        </Box>
    )
};

export default Template2;

import React from "react";
import Box from "@mui/material/Box";

import BGFooter from "assets/images/bg-footer.png";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPDirectory} from "component/XPRecommend";
import {Title45} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";

const Directory: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '14%', position: 'relative'}}>
                <Navbar />
                <NavbarShape />
            </Box>

            <XPDirectory>
                <Title45>
                    “ เลือกโซนที่สนใจจาก <span style={{color: COLORS.red}}>แผนผัง</span>
                </Title45>
                <Title45>
                    <span style={{color: COLORS.red}}>หรือ จากสินค้าและบริการ</span>ได้เลยนะคะ”
                </Title45>
            </XPDirectory>

            <Box sx={{
                position: 'absolute',
                width: '100%',
                backgroundImage: `url(${BGFooter})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                objectFit: 'fill',
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '70vh',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        direction: 'row',
                    }}>

                    <Box sx={{width: '100%'}}>
                    </Box>
                    <Box sx={{ml: '1%', width: '50%', height: '65%'}}>
                        {/* <Directory /> */}
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    )
};

export default Directory;

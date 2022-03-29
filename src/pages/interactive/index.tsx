import React from "react";
import Box from "@mui/material/Box";

import BGFooter from "assets/images/bg-footer.png";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPInteractive} from "component/XPRecommend";
import SmartSolution from "./component/SmartSolution";
import Directory from "./component/Directory";
import {Title45} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";

const Interactive: React.FC = (): React.ReactElement => {

    // * banner 10%, xp 15%, card 45%, footer 30%
    return (
        <Box sx={{
            height: '100vh', width: '100%',
            backgroundImage: `url(${BGFooter})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'fill',
        }}>
            <Box sx={{height: '10%', position: 'relative'}}>
                <Navbar />
                <NavbarShape />
            </Box>

            <XPInteractive>
                <Title45>
                    “ น้อง XP <span style={{color: COLORS.red}}>เลือกสินค้าและบริการ</span>
                </Title45>
                <Title45>
                    <span style={{color: COLORS.red}}>ที่เหมาะกับคุณลูกค้ามา</span> ให้แล้วค่ะ ”
                </Title45>
            </XPInteractive>

            <Box
                sx={{
                    width: '100%',
                    height: '45vh',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    direction: 'row',
                }}>

                <Box sx={{width: '100%'}}>
                    <SmartSolution />
                </Box>
                <Box sx={{ml: '1%', width: '65%', height: '67%'}}>
                    <Directory />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
};

export default Interactive;

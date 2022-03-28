import React from "react";
import Box from "@mui/material/Box";

import BGFooter from "assets/images/bg-footer.png";
import {COLORS} from "core/utils/constant";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPTemplate} from "component/XPRecommend";
import Promotion from "component/Promotion";
import {Title45} from "component/common/Font.styles";

const Template2: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '14%', position: 'relative'}}>
                <Navbar />
                <NavbarShape />
            </Box>

            <XPTemplate>
                <Title45>
                    “ มาตรงนี้ให้ <span style={{color: COLORS.red}}>น้อง XP</span>
                </Title45>

                <Title45>
                    ช่วยแนะนำบริการได้ค่ะ ”
                </Title45>
            </XPTemplate>

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
                        bgcolor: COLORS.holder,
                        width: '100%',
                        height: '36vh',
                        position: 'relative',
                        zIndex: 1,

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Title45 sx={{color: COLORS.white}}>
                        Video Consent
                    </Title45>
                </Box>

                <Promotion />
                <Footer />
            </Box>
        </Box>
    )
};

export default Template2;

import React from "react";
import Box from "@mui/material/Box";

import BGFooter from "assets/images/bg-footer.png";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPRecommendTemp3} from "component/XPRecommend";
import Promotion from "component/Promotion";

const Template3: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '14%', position: 'relative'}}>
                <Navbar />
                <NavbarShape />
            </Box>

            <XPRecommendTemp3 />

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
                        bgcolor: 'green',
                        width: '100%',
                        height: '36vh',
                        position: 'relative',
                        zIndex: 1,
                    }}>
                    Personal Consent
                </Box>

                <Promotion />
                <Footer />
            </Box>
        </Box>
    )
};

export default Template3;

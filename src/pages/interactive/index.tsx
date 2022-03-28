import React from "react";
import Box from "@mui/material/Box";

import BGFooter from "assets/images/bg-footer.png";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPRecommendTemp3} from "component/XPRecommend";
import SmartSolution from "./component/SmartSolution";
import Directory from "./component/Directory";

const Interactive: React.FC = (): React.ReactElement => {

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
                        width: '100%',
                        height: '70vh',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        direction: 'row',
                    }}>

                    <Box sx={{width: '100%'}}>
                        <SmartSolution />
                    </Box>
                    <Box sx={{ml: '1%', width: '50%', height: '65%'}}>
                        <Directory />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    )
};

export default Interactive;

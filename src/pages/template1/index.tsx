import React from "react";
import Box from "@mui/material/Box";

import Navbar from "./component/Navbar";
import Section4 from "./component/Section4";
import Section2 from "./component/Section2";
import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";

const Template1: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '11.1%'}}>
                <Navbar />
            </Box>
            <Box sx={{height: '59.9%', backgroundColor: COLORS.red}}>
                <Box sx={{height: '90%'}}>
                    <Section2 />
                </Box>
                <Box sx={{height: '10%'}}>
                    <Section4 />
                </Box>
            </Box>

            <Box sx={{
                height: {
                    xl: '29%',
                    lg: '29%'
                }, backgroundColor: COLORS.red
            }}>
                <Footer />
            </Box>
        </Box>
    )
};

export default Template1;

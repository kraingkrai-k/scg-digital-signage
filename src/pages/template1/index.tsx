import React from "react";
import Box from "@mui/material/Box";

import footer from 'assets/images/footer.png'
import Navbar from "./component/Navbar";
import Section4 from "./component/Section4";
import Section2 from "./component/Section2";
import {COLORS} from "core/utils/constant";

const Template1: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '11.1%'}}>
                <Navbar />
            </Box>
            <Box sx={{
                height: '71.4%',
                backgroundColor: COLORS.red,
            }}>
                <Box sx={{height: '90%'}}>
                    <Section2 />
                </Box>
                <Box sx={{height: '10%'}}>
                    <Section4 />
                </Box>
            </Box>

            <Box sx={{height: '17.6%', backgroundColor: COLORS.red}}>
                <img
                    alt="footer"
                    src={footer}
                    style={{width: '100%', height: '100%', objectFit: 'fill'}}
                />
            </Box>
        </Box>
    )
};

export default Template1;

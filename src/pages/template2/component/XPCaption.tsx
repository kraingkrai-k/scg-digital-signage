import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
import BGFooter from "assets/images/bg-footer.png";
import {NavbarShape} from "assets/icon/Icon";

const XPCaption: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100vh', width: '100%'}}>

            <Box sx={{height: '11vh'}}>
                <Navbar />
            </Box>

        </Box>
    )
};

export default XPCaption;

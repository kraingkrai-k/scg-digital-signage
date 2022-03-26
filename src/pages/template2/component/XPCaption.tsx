import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Navbar from "component/Navbar";

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

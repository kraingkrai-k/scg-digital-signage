import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
import BGFooter from "assets/images/bg-footer.png";
import {IconXPCaption, NavbarShape} from "assets/icon/Icon";
import {Title45} from "component/common/Font.styles";

const XPCaption: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{height: '100%', width: '100%'}}>
            <Box sx={{display: 'flex'}}>

                <Title45>
                    “ มาตรงนี้ให้ น้อง XP
                    ช่วยแนะนำบริการได้ค่ะ ”
                </Title45>


                <IconXPCaption sx={{height: '30%', width: '30%'}} />
            </Box>
        </Box>
    )
};

export default XPCaption;

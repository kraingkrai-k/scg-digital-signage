import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import {ReactComponent as IconXPCaption} from "assets/icon/bodyXP.svg";

import {Title45} from "component/common/Font.styles";
import SvgIcon from "@mui/material/SvgIcon";

const XPRecommend: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{
            // height: '100%', 
            // width: '100%',
            // paddingTop: '24px',
            // paddingBottom: '24px',
            position: 'relative',
        }}>
            <Box sx={{
                display: 'grid',
                marginLeft: '15%',
                position: 'relative',
                paddingTop: '24px',
                paddingBottom: '24px',
            }}>

                <Title45>
                    “ มาตรงนี้ให้ <span style={{color: COLORS.red}}>น้อง XP</span>
                </Title45>

                <Title45>
                    ช่วยแนะนำบริการได้ค่ะ ”
                </Title45>
            </Box>
            {/* <IconXPCaption sx={{
                // height: '100%',
                // width: '100%',
                position: 'absolute',
                right: 0,
            }} /> */}

            <Box sx={{
                width: '300px',
                height: '300px',
                position: 'absolute',
                right: 0,
                top: '-15%',
                zIndex: -1
            }}>
                <SvgIcon
                    component={IconXPCaption}
                    inheritViewBox
                    sx={{width: '100%', height: '100%'}}
                />
            </Box>
            <Box
                sx={{
                    bgcolor: 'green',
                    // position: 'absolute',
                    // top: '100%',
                    width: '100%',
                    height: '36vh',
                    // opacity: 0.5
                }}>
                Video
            </Box>
        </Box>
    )
};

export default XPRecommend;

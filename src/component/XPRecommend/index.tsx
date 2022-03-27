import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import {COLORS} from "core/utils/constant";
import {ReactComponent as IconXPCaption} from "assets/icon/bodyXP.svg";
import {Title45} from "component/common/Font.styles";

const XPRecommend: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
        }}>
            <Box sx={{display: 'grid'}}>

                <Title45>
                    “ มาตรงนี้ให้ <span style={{color: COLORS.red}}>น้อง XP</span>
                </Title45>

                <Title45>
                    ช่วยแนะนำบริการได้ค่ะ ”
                </Title45>
            </Box>

            <Box sx={{
                width: {
                    monitor43: '30%',
                    lg: '300px',
                },
                height: {
                    monitor43: '35%',
                    lg: '300px',
                },
                position: 'absolute',
                right: 0,
                top: '5%',
                zIndex: 1
            }}>
                <SvgIcon
                    component={IconXPCaption}
                    inheritViewBox
                    sx={{width: '100%', height: '100%'}}
                />
            </Box>
        </Box>
    )
};

export default XPRecommend;

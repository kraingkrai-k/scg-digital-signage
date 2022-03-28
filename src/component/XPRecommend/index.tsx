import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import BGFooter from "assets/images/bg-footer.png";
import {ReactComponent as IconXPCaption} from "assets/icon/bodyXP.svg";

import {COLORS} from "core/utils/constant";
import {Title45} from "component/common/Font.styles";

const XPRecommend: React.FC = (): React.ReactElement => {

    return (
        <Box
            sx={{
                backgroundImage: `url(${BGFooter})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                objectFit: 'contain',
                height: '20vh',
            }}
        >
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
                        lg: '40%',
                    },
                    height: {
                        monitor43: '35%',
                        lg: '35%',
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
        </Box>
    )
};

export default XPRecommend;


export const XPRecommendTemp3: React.FC = (): React.ReactElement => {

    return (
        <Box
            sx={{
                backgroundImage: `url(${BGFooter})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                objectFit: 'contain',
                height: '20vh',
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'inherit',
            }}>
                <Box sx={{display: 'grid'}}>
                    <Title45>
                        “ น้อง XP <span style={{color: COLORS.red}}>เลือกสินค้าและบริการ</span>
                    </Title45>
                    <Title45>
                        <span style={{color: COLORS.red}}>ที่เหมาะกับคุณลูกค้า</span> มาให้แล้วค่ะ ”
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
        </Box>
    )
};

export const XPRecommendDirectory: React.FC = (): React.ReactElement => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${BGFooter})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                objectFit: 'contain',
                height: '20vh',
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'inherit',
            }}>
                <Box sx={{display: 'grid'}}>
                    <Title45>
                    “ เลือกโซนที่สนใจจาก 

                        “ น้อง XP <span style={{color: COLORS.red}}>แผนผัง</span>
                    </Title45>
                    <Title45>
                        <span style={{color: COLORS.red}}>หรือ จากสินค้าและบริการ</span>ได้เลยนะคะ” 
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
        </Box>
    )
};

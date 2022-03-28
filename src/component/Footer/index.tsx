import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import {ReactComponent as FooterShape} from "assets/icon/footerShape.svg";
import {ReactComponent as Social} from "assets/icon/social.svg";
import Logo from "assets/icon/logo.png";
import {Title30} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";

const Footer: React.FC<{}> = (): React.ReactElement => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${Logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    width: {
                        monitor43: '360px',
                        lg: '180px',
                    },
                    height: {
                        monitor43: '360px',
                        lg: '180px',
                    },
                    mt: {
                        monitorr43: '7%',
                        lg: '8%',
                    },
                    ml: {
                        monitorr43: '2%',
                        lg: '8%',
                    },
                    bottom: 0
                }}
            />

            <Box sx={{
                textAlign: 'end',
            }}>
                <SvgIcon
                    component={Social}
                    inheritViewBox
                    sx={{
                        width: {
                            monitor43: '1040px',
                            lg: '400px',
                        },
                        height: {
                            monitor43: '440px',
                            lg: '150px',
                        },
                        position: 'absolute',
                        mt: {
                            monitor43: '-9%',
                            lg: '-7%',
                        },
                        right: {
                            monitor43: 35,
                            lg: 45,
                        },
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    display: 'grid',
                    right: '3%',
                    bottom: 40
                }}>
                    <Title30>
                        รับข่าวสารและโปรโมชั่นก่อนใคร
                    </Title30>

                    <Title30>
                        ผ่านช่องทาง Social Media <span style={{color: COLORS.red}}>SCGHOMEExperience</span>
                    </Title30>
                </Box>
            </Box>

            <SvgIcon
                component={FooterShape}
                inheritViewBox
                sx={{
                    width: '100%',
                    height: {
                        monitor43: '30vh',
                        lg: '25vh',
                    },
                }}
            />
        </Box>
    )
};

export default Footer;

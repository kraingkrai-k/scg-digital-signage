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
                        desktop: '240px',
                        lg: '180px',
                    },
                    height: {
                        monitor43: '360px',
                        desktop: '240px',
                        lg: '180px',
                    },
                    ml: {
                        monitorr43: '2%',
                        desktop: '7.5%',
                        lg: '8%',
                    },
                    bottom: {
                        monitorr43: 0,
                        desktop: -15,
                        lg: -10,
                    }
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
                            desktop: '520px',
                            lg: '400px',
                        },
                        height: {
                            monitor43: '400px',
                            desktop: '200px',
                            lg: '150px',
                        },
                        position: 'absolute',
                        mt: {
                            monitor43: '-9%',
                            desktop: '-7%',
                            lg: '-7%',
                        },
                        right: {
                            monitor43: 35,
                            desktop: 45,
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
                        desktop: '25vh',
                        lg: '25vh',
                    },
                }}
            />
        </Box>
    )
};

export default Footer;

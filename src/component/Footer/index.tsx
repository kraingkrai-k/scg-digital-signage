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
                        monitor43: '400px',
                        lg: '120px',
                    },
                    height: {
                        monitor43: '400px',
                        lg: '120px',
                    },
                    mt: '5%',
                    ml: '5%',
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
                            lg: '300px',
                        },
                        height: {
                            monitor43: '440px',
                            lg: '120px',
                        },
                        position: 'absolute',
                        mt: '-10%',
                        right: 15,
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
                    height: '30vh',
                }}
            />
        </Box>
    )
};

export default Footer;

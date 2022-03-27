import React from "react";
import Box from "@mui/material/Box";

import SvgIcon from "@mui/material/SvgIcon";
import {ReactComponent as FooterShape} from "assets/icon/footerShape.svg";
import {ReactComponent as Social} from "assets/icon/social.svg";
import Logo from "assets/icon/logo.png";
import {Title30} from "component/common/Font.styles";

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
                    width: '120px',
                    height: '120px',
                    mt: '8%',
                    ml: '5%',
                }}
            />

            <Box sx={{
                textAlign: 'end',
            }}>
                <SvgIcon
                    component={Social}
                    inheritViewBox
                    sx={{
                        width: '300px',
                        height: '120px',
                        position: 'absolute',
                        mt: '-10%',
                        right: 15,
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    display: 'grid',
                    right: 15,
                }}>
                    <Title30>
                        รับข่าวสารและโปรโมชั่นก่อนใคร
                    </Title30>

                    <Title30>
                        ผ่านช่องทาง Social Media SCGHOMEExperience
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

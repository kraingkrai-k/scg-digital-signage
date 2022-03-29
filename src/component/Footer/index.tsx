import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

// import {ReactComponent as FooterShape} from "assets/icon/footerShape.svg";
import {ReactComponent as Social} from "assets/icon/social.svg";
import Logo from "assets/icon/logo.png";
import {Title30} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";
import {FooterShape, FooterShapeLeft} from "assets/icon/Icon";
import GroupFooter from "assets/images/groupFooter.svg";

// TODO - WIP
const Footer: React.FC<{}> = (): React.ReactElement => {

    return (
        <Box sx={{overflowY: 'hidden', width: '100%', maxHeight: '30%'}}>

            {/* <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100vw'
                }}
            >
                <FooterShape sx={{width: '100vw', height: '20vh', objectFit:'fill'}} />
            </Box> */}

            {/* <Box sx={{position: 'absolute', bottom: -10}}>
                <FooterShapeLeft sx={{width: '120%', height: 'auto'}} />
            </Box> */}

            {/* <Box sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '15%',
                backgroundImage: `url(${GroupFooter})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                objectFit: 'fill',
            }} /> */}

        </Box>
    )
    return (
        <SvgIcon
            component={FooterShape}
            inheritViewBox
            sx={{
                width: '100px',
                height: {
                    monitor43: '30vh',
                    desktop: '400px',
                    lg: '25vh',
                },
            }}
        />
    )

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'end',
                // justifyContent: 'flex-start',
                width: '100%',
                height: '20%',
            }}
        >
            {/* <Box
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
            /> */}

            <Box sx={{
                textAlign: 'end',
            }}>
                <SvgIcon
                    component={Social}
                    inheritViewBox
                    sx={{
                        // width: {
                        //     monitor43: '1040px',
                        //     desktop: '520px',
                        // },
                        // height: {
                        //     monitor43: '400px',
                        //     desktop: '200px',
                        // },
                        // position: 'absolute',
                        // mt: {
                        //     monitor43: '-9%',
                        //     desktop: '-7%',
                        //     lg: '-7%',
                        // },
                        // right: {
                        //     monitor43: 35,
                        //     desktop: 45,
                        //     lg: 45,
                        // },
                    }}
                // sx={{
                //     width: {
                //         monitor43: '1040px',
                //         desktop: '520px',
                //         lg: '400px',
                //     },
                //     height: {
                //         monitor43: '400px',
                //         desktop: '200px',
                //         lg: '150px',
                //     },
                //     position: 'absolute',
                //     mt: {
                //         monitor43: '-9%',
                //         desktop: '-7%',
                //         lg: '-7%',
                //     },
                //     right: {
                //         monitor43: 35,
                //         desktop: 45,
                //         lg: 45,
                //     },
                // }}
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
                    width: '100px',
                    height: {
                        monitor43: '30vh',
                        desktop: '400px',
                        lg: '25vh',
                    },
                }}
            />
        </Box>
    )
};

export default Footer;

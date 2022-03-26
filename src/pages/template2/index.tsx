import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import {COLORS} from "core/utils/constant";
import Footer from "component/Footer";
import Navbar from "component/Navbar";
import BGFooter from "assets/images/bg-footer.png";
import {NavbarShape} from "assets/icon/Icon";
import XPRecommend from "component/XPRecommend";
import Promotion from "component/Promotion";

const Template2: React.FC = (): React.ReactElement => {
    // start ipad only
    // const matches = useMediaQuery('(min-width:1024px)');

    // if (!matches) {
    //     return <>Not Supported</>
    // }

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '11.1%', bgcolor: 'green'}}>
                {/* <Navbar />

                <Box sx={{
                    width: '35%',
                    // background: 'linear-gradient(180deg, #EC1C24 0%, #CA060D 100%)',
                    borderImage: 'linear-gradient(to left, #EC1C24, #CA060D)',
                    borderTop: '35px solid',
                    borderLeft: '100px solid transparent',
                    // background: 'green',
                    float: 'right',
                }} /> */}
            </Box>

            <Box>
                <XPRecommend />
            </Box>

            <Box
                // sx={{
                //     height: '100%',
                //     width: '100%',
                // }}
            >
                <Promotion />
            </Box>


            {/* <Box sx={{height: '100%'}}>
                <Promotion />
            </Box> */}

            {/* <Box sx={{height: '59.9%'}}>
                <Box sx={{height: '90%'}}>
                    Section2
                </Box>
                <Box sx={{height: '10%'}}>
                    Section4
                </Box>
            </Box>

            <Box sx={{
                height: {
                    xl: '29%',
                    lg: '29%'
                },
            }}>
                <Box
                    sx={{
                        backgroundImage: `url(${BGFooter})`,
                        backgroundSize: 'contain',
                        position: 'absolute',
                        width: {
                            xl: '100%',
                            lg: '100%',
                        },
                    }}
                >
                    <Footer />
                </Box>
            </Box> */}
        </Box>
    )
};

export default Template2;

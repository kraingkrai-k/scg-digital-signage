import React from "react";
import Box from "@mui/material/Box";

import footer from 'assets/images/footer.png'
import SvgIcon from "@mui/material/SvgIcon";
// import {FooterShape} from "assets/icon/Icon";
import {ReactComponent as FooterShape} from "assets/icon/footerShape.svg";
import {ReactComponent as Social} from "assets/icon/social.svg";
// import {ReactComponent as Logo} from "assets/icon/logo.svg";
import Logo from "assets/icon/logo.png";
import BGFooter from "assets/images/bg-footer.png";

// interface IFooter {}

const Footer: React.FC<{}> = (): React.ReactElement => {

    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${Logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    mt: '3%',
                    // bottom: 0
                }}
            />

            <SvgIcon
                component={Social}
                inheritViewBox
                sx={{
                    // width: '100%',
                    width: '300px',
                    height: '120px',
                    position: 'absolute',
                    right: 0,
                    float: 'right'
                }}
            />

            <SvgIcon
                component={FooterShape}
                inheritViewBox
                sx={{
                    width: '100%',
                    height: '240px',
                    // position: 'relative',
                }}
            />
        </Box>
    )
    // return (
    //     <Box sx={{height: '100%'}}>
    //         <img
    //             alt="footer"
    //             src={footer}
    //             style={{width: '100%', height: '100%', objectFit: 'fill'}}
    //         />
    //     </Box>
    // )
};

export default Footer;

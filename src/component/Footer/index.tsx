import React from "react";
import Box from "@mui/material/Box";

import SvgIcon from "@mui/material/SvgIcon";
import {ReactComponent as FooterShape} from "assets/icon/footerShape.svg";
import {ReactComponent as Social} from "assets/icon/social.svg";
import Logo from "assets/icon/logo.png";

const Footer: React.FC<{}> = (): React.ReactElement => {

    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${Logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    mt: '6.5%',
                    ml: '5%',
                }}
            />

            <SvgIcon
                component={Social}
                inheritViewBox
                sx={{
                    width: '300px',
                    height: '120px',
                    position: 'absolute',
                    // mt: '1%',
                    right: 15,
                }}
            />

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

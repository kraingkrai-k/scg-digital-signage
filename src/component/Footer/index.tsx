import React from "react";
import Box from "@mui/material/Box";

import footer from 'assets/images/test.png'

// interface IFooter {}

const Footer: React.FC<{}> = (): React.ReactElement => {
    return (
        <Box sx={{height: '100%'}}>
            <img
                alt="footer"
                src={footer}
                style={{width: '100%', height: '100%', objectFit: 'fill'}}
            />
        </Box>
    )
};

export default Footer;

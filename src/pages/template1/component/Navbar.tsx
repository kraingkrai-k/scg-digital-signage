import React from "react";
import Box from "@mui/material/Box";

import NavbarText from "component/NavbarText";

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <Box
            sx={{
                height: '100%', width: '100%', lineHeight: {
                    xl: '1',
                    lg: '0.7',
                },
                background: 'linear-gradient(180deg, #3F3F3F 14.8%, #0A0202 142.11%)',
                display: 'grid',
                alignItems: 'center'
            }}
        >
            <NavbarText />
        </Box>
    )
};

export default Navbar;

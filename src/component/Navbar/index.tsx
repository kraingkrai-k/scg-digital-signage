import React from "react";
import Box from "@mui/material/Box";

import NavbarText from "component/NavbarText";

const NavbarBG: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{
            height: '100%', 
            width: '100%',
            lineHeight: '0.8',
            background: 'linear-gradient(180deg, #EC1C24 0%, #CA060D 100%)',
            display: 'flex',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '7%',
            }}>
                <NavbarText isTemplate1={false} />
            </Box>
        </Box>
    )
};

export default NavbarBG;

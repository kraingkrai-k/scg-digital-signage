import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";

import NavbarText from "component/NavbarText";

const NavbarBG: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{
            height: '100%', width: '100%',
            lineHeight: '1',
            background: 'linear-gradient(180deg, #EC1C24 0%, #CA060D 100%)',
            paddingLeft: '2.5%',
        }}>
            <NavbarText isTemplate1={false} />
        </Box>
    )
};

export default NavbarBG;

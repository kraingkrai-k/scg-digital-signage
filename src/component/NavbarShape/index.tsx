import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";

const NavbarShape: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{
            width: '35%',
            borderTop: `4vh solid ${COLORS.redBorder}`,
            borderLeft: '100px solid transparent',
            float: 'right',
            mt: '-0.1%'
        }}
        />
    )
};

export default NavbarShape;

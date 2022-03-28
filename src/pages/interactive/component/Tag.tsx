import React from "react";
import Box from "@mui/material/Box";
import {COLORS} from "core/utils/constant";
import {Title30} from "component/common/Font.styles";

const Tag: React.FC = ({children}): React.ReactElement => {

    return (
        <Box sx={{
            height: '100%',
            width: '35%',
            // p: '24px',
            borderTop: `7vh solid ${COLORS.gold}`,
            borderRight: '100px solid transparent',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
        }}>
            {children}
        </Box>
    )
};

export default Tag;

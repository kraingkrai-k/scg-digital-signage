import React from "react";
import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';

import {COLORS} from "core/utils/constant";

export const WrapTag = styled(Box)(({theme}) => ({
    height: 'auto',
    position: 'relative',
}));

const Tag: React.FC = ({children}): React.ReactElement => {

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            ml: '10%'
        }}>
            <Box sx={{
                position: 'absolute',
                bottom: {
                    monitor43: 0,
                    desktop: 15,
                },
                color: COLORS.white
            }}>
                {children}
            </Box>
        </Box>
    )
};

export default Tag;

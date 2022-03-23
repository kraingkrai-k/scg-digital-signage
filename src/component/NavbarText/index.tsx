import React from "react";
import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';

export const Text = styled('span')(({theme}) => `
font-size: 50px;
    .italic {
        font-size: 36px;
    }
    .sub-italic {
        font-size: 30px;
    }

${theme.breakpoints.only('monitor43')}{
 
};
${theme.breakpoints.only('desktop')}{
  
};
${theme.breakpoints.only('xl')}{
  
};
${theme.breakpoints.only('lg')}{
   
};
`);

const NavbarContainer: React.FC = (props): React.ReactElement => {
    return (
        <Box sx={{display: 'inline'}}>
            <Text {...props}>ครบ</Text>
        </Box>
    )
};

export default NavbarContainer;

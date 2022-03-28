import React from "react";
import Box from "@mui/material/Box";

import NavbarText from "component/NavbarText";
interface INavbar {
    center?: boolean
    template1?: boolean
}

const Navbar: React.FC<INavbar> = ({center = false, template1 = false}): React.ReactElement => {
    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            lineHeight: {
                monitor43: '0.8',
                lg: '1.2',
            },
            background: 'linear-gradient(180deg, #EC1C24 0%, #CA060D 100%)',
            display: 'flex',
            pl: center ? '0%' : '7%',
            justifyContent: center ? 'center' : 'stretch',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <NavbarText isTemplate1={template1} />
            </Box>
        </Box>
    )
};

export const NavbarTemplate1: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            lineHeight: {
                monitor43: '1',
                lg: '1.2',
            },
            background: 'linear-gradient(180deg, #3F3F3F 14.8%, #0A0202 142.11%)',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <NavbarText isTemplate1={true} />
            </Box>
        </Box>
    )
};


export default Navbar;

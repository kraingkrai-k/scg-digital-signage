import React from "react";
import Box from "@mui/material/Box";
import {useHistory} from "react-router-dom";

import {NavbarTemplate1} from "component/Navbar";
import {COLORS} from "core/utils/constant";
import {Title45} from "component/common/Font.styles";
import Footer from "component/Footer";
import Button from "component/Button";

const Template1: React.FC = (): React.ReactElement => {
    const {push} = useHistory()

    const handlerProductClick = () => push('/template2')

    return (
        <Box sx={{height: '98vh', width: '100%', bgcolor: COLORS.red}}>
            <Box sx={{height: '10%', position: 'relative'}}>
                <NavbarTemplate1 />
            </Box>

            <Box
                sx={{
                    bgcolor: COLORS.holder,
                    width: '100%',
                    height: '55%',
                    position: 'relative',
                    zIndex: 1,

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Title45 sx={{color: COLORS.white}}>
                    Video Consent
                </Title45>
            </Box>

            <Box
                sx={{
                    height: '5%',
                    alignItems: 'flex-start',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '2%'
                }}
            >
                <Button invert={false} onClick={handlerProductClick} />
            </Box>

            <Footer />
        </Box>
    )
};

export default Template1;

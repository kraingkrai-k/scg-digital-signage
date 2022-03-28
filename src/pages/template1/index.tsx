import React from "react";
import Box from "@mui/material/Box";
import {useHistory} from "react-router-dom";

import BGFooter from "assets/images/bg-footer.png";

import {NavbarTemplate1} from "component/Navbar";
import {COLORS} from "core/utils/constant";
import {Title45} from "component/common/Font.styles";
import Footer from "component/Footer";
import Button from "component/Button";

const Template1: React.FC = (): React.ReactElement => {
    const {push} = useHistory()

    const handlerProductClick = () => push('/template2')

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '14%', position: 'relative'}}>
                <NavbarTemplate1 />
            </Box>

            <Box sx={{
                position: 'absolute',
                width: '100%',
                backgroundImage: `url(${BGFooter})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                objectFit: 'fill',
            }}>
                <Box
                    sx={{
                        bgcolor: COLORS.holder,
                        width: '100%',
                        height: '80vh',
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
                        height: '100%',
                        alignItems: 'flex-start',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '1%'
                    }}
                >
                    <Button invert={true} onClick={handlerProductClick} />
                </Box>
                <Footer />
            </Box>
        </Box>
    )
};

export default Template1;

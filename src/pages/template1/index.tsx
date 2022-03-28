import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import {useHistory} from "react-router-dom";

import BGFooter from "assets/images/bg-footer.png";

import useDimension from "hooks/useDimension";
import './template1.css'
import {NavbarTemplate1} from "component/Navbar";
import {COLORS} from "core/utils/constant";
import {Title45} from "component/common/Font.styles";
import Footer from "component/Footer";
import Button from "component/Button";

const Template1: React.FC = (): React.ReactElement => {
    const {push} = useHistory()
    const {width, adjustedHeight} = useDimension()

    const handlerClick = () => push('/template2')

    useEffect(() => {
        const btnControl = document.getElementById('button')

        btnControl?.addEventListener('click', handlerClick)

        return () => {
            btnControl?.removeEventListener('click', handlerClick)
        }
    }, [])

    // return (
    //     <Box sx={{width: '100%', height: '100vh'}}>
    //         <SvgIcon component={Template1svg}
    //             inheritViewBox
    //             sx={{
    //                 width: '100%',
    //                 height: '130%',
    //                 position: 'relative'
    //             }}
    //             viewBox={`0 0 ${width} ${adjustedHeight}`}
    //         />

    //         <Box
    //             sx={{
    //                 position: 'absolute',
    //                 top: {
    //                     lg: '14%',
    //                     xl: '14%',
    //                     desktop: '14%',
    //                     monitor43: '14%',
    //                 },
    //             }}
    //         >
    //             <Box sx={{
    //                 height: {
    //                     lg: '630px',
    //                     xl: '630px',
    //                     desktop: '840px',
    //                     monitor43: '1681px',
    //                 },
    //             }}
    //             >
    //                 <video
    //                     muted
    //                     loop
    //                     style={{width: '100vw', height: 'inherit', objectFit: 'fill'}}
    //                     src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    //                     autoPlay={true}
    //                 />
    //             </Box>
    //         </Box>
    //     </Box>
    // )

    const handlerProductClick = () => {

    }

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

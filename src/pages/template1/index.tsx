import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import {useHistory} from "react-router-dom";

// TODO - use SVG instead
// import Navbar from "./component/Navbar";
// import Section4 from "./component/Section4";
// import Section2 from "./component/Section2";
// import {COLORS} from "core/utils/constant";
// import Footer from "component/Footer";

import useDimension from "hooks/useDimension";
import {ReactComponent as Template1svg} from "assets/images/template1.svg";

import './template1.css'

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

    return (
        <Box sx={{width: '100%', height: '100vh'}}>
            <SvgIcon component={Template1svg}
                inheritViewBox
                sx={{
                    width: '100%',
                    height: '130%',
                    position: 'relative'
                }}
                viewBox={`0 0 ${width} ${adjustedHeight}`}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: {
                        lg: '14%',
                        xl: '14%',
                        desktop: '14%',
                        monitor43: '14%',
                    },
                }}
            >
                <Box sx={{
                    height: {
                        lg: '630px',
                        xl: '630px',
                        desktop: '840px',
                        monitor43: '1681px',
                    },
                }}
                >
                    <video
                        muted
                        loop
                        style={{width: '100vw', height: 'inherit', objectFit: 'fill'}}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        autoPlay={true}
                    />
                </Box>
            </Box>
        </Box>
    )
};

export default Template1;

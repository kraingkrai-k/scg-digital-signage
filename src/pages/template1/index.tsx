import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import {useHistory} from "react-router-dom";

// import Navbar from "./component/Navbar";
// import Section4 from "./component/Section4";
// import Section2 from "./component/Section2";
// import {COLORS} from "core/utils/constant";
// import Footer from "component/Footer";

import {ReactComponent as Template1svg} from "assets/images/template1.svg";

import './template1.css'

const Template1: React.FC = (): React.ReactElement => {
    const {push} = useHistory()

    const width = window.screen.width
    const height = window.screen.height

    const aspect = width / height;
    const adjustedHeight = Math.ceil(width / aspect);

    return (
        <Box
            sx={{width: '100%', height: '100vh'}}
            onClick={() => push('/template2')}
        >
            <SvgIcon component={Template1svg}
                inheritViewBox
                sx={{
                    width: '100%',
                    height: '130%',
                }}
                viewBox={`0 0 ${width} ${adjustedHeight}`}
            />
        </Box>
    )
};

export default Template1;

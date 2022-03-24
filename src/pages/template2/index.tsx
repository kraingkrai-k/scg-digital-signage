import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";

// import {COLORS} from "core/utils/constant";
// import Footer from "component/Footer";
// import Navbar from "component/Navbar";
// import BGFooter from "assets/images/bg-footer.png";
import {ReactComponent as Template2svg} from "assets/images/template2.svg";
// import Template2svg from "assets/images/test.png";

// import {NavbarShape} from "assets/icon/Icon";
// import XPCaption from "component/XPCaption";
import SvgIcon from "@mui/material/SvgIcon";

import './template2.css'
import {useHistory} from "react-router-dom";

const TIME_OUT = 10000

const Template2: React.FC = (): React.ReactElement => {
    const [isStillActive, setIsStillActive] = useState<number>(0)
    const {push} = useHistory()
    let timeout: any

    useEffect(() => {
        // clearTimeout(timeout)
        // timeout = setTimeout(() => {
        //     push('/')
        // }, TIME_OUT)

        // return () => {
        //     clearTimeout(timeout)
        // }
    }, [isStillActive])

    const handlerStillActive = () => {
        setIsStillActive(isStillActive + 1)
    }

    const width = window.screen.width
    const height = window.screen.height

    const aspect = width / height;

    const adjustedHeight = Math.ceil(width / aspect);

    return (
        <Box
            sx={{width: '100%', height: '100vh'}}
            onClick={handlerStillActive}
        >
            <SvgIcon
                component={Template2svg}
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

export default Template2;

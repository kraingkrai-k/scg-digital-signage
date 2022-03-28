import React, {useState} from "react";
import Box from "@mui/material/Box";

import BGFooter from "assets/images/bg-footer.png";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPDirectory} from "component/XPRecommend";
import {Title45} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";
import Tabs from "./component/Tabs";
import Content from "./component/Content";

const Directory: React.FC = (): React.ReactElement => {
    const [floor, setFloor] = useState<number>(1)
    const [zone, setZone] = useState<number>(1)


    const handlerSetZone = (x: number) => {
        console.log('zone:', x)
        setZone(x)
    }

    const handlerSetFloor = (x: number) => {
        console.log('floor:', x)
        setFloor(x)
    }

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '14%', position: 'relative'}}>
                <Navbar />
                <NavbarShape />
            </Box>

            <XPDirectory>
                <Title45>
                    “ เลือกโซนที่สนใจจาก <span style={{color: COLORS.red}}>แผนผัง</span>
                </Title45>
                <Title45>
                    <span style={{color: COLORS.red}}>หรือ จากสินค้าและบริการ</span>ได้เลยนะคะ”
                </Title45>
            </XPDirectory>

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
                        width: '100%',
                        height: {
                            monitor43: '85vh',
                            desktop: '85vh',
                        },
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        direction: 'row',
                    }}>

                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(137.79deg, #FFFFFF 3.68%, #E1E1E1 87.1%)',
                        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
                        borderRadius: '0px 0px 4px 4px',
                        ml: '2%',
                        mr: '2%',
                    }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '50px',
                            }}
                        >
                            <Tabs
                                floor={floor}
                                setFloor={handlerSetFloor}
                            />
                            <Content
                                floor={floor}
                                zone={zone}
                                setZone={handlerSetZone}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{pt: '5%'}}>
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
};

export default Directory;

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";

import {COLORS} from "core/utils/constant";
import {Title14, Title17, Title30, Title35} from "component/common/Font.styles";
import {IconPin} from "assets/icon/Icon";
import MockQR from "assets/images/mockQR.png";

const ModalPromotion: React.FC = (): React.ReactElement => {
    return (
        <Box sx={{height: '100%', width: '100%'}}>
            <Box sx={{
                height: '40%',
                width: '100%',
                bgcolor: COLORS.holder,

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: '2%',
            }}>
                <Title35 sx={{color: COLORS.white}}>
                    Promotion Banner
                </Title35>
            </Box>


            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box sx={{
                        display: 'grid',
                        ml: '10%',
                        mt: '5%',
                        width: '80%',
                    }}>
                        <Title30>
                            เตรียมพบกับ Flash Sale 13:00 - 15:00
                        </Title30>

                        <Box sx={{display: 'flex', alignItems: 'center', mt: '2%'}}>
                            <SvgIcon
                                component={IconPin}
                                inheritViewBox
                                sx={{
                                    width: {
                                        monitor43: '45px',
                                        desktop: '35px',
                                    },
                                    height: {
                                        monitor43: '45px',
                                        desktop: '35px',
                                    },
                                }}
                            />
                            <Title17>
                                ชั้น 1 โซน Care Living Solution
                            </Title17>
                        </Box>

                        <Box sx={{
                            mt: '4%', letterSpacing: '0.1rem',
                            fontSize: {
                                monitor43: '16px',
                                desktop: '15px',
                            }
                        }}>
                            สุดคุ้ม! สุด Cool! หน้าร้อนแต่บ้านต้องเย็น เตรียมรับมืออากาศร้อนบ้านร้อน อบอ้าว แก้ได้ด้วย
                            การเลือกวัสดุแต่งบ้านให้บ้านเย็น ช่วยลดอุณหภูมิ คลายความร้อน ระบายความร้อนภายในบ้าน และที่สำคัญยังช่วยประหยัดไฟอีกด้วย ร้อนนี้ SCG Home Onlineยกสินค้าพร้อม
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box sx={{display: 'grid', justifyContent: 'center', mt: '15%', alignItems: 'center'}}>
                        <Box sx={{
                            border: '2px solid #D5AF26',
                            boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
                            borderRadius: '6px',
                            p: 2
                        }}>
                            <Box sx={{display: 'grid'}}>
                                <Title14 sx={{textAlign: 'center'}}>
                                    แสกนรับสิทธิ์
                                </Title14>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${MockQR})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        objectFit: 'cover',
                                        height: '150px',
                                        width: '150px',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
};

export default ModalPromotion;

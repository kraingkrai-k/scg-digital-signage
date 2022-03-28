import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SvgIcon from "@mui/material/SvgIcon";

import {Title14, Title17, Title20, Title30} from "component/common/Font.styles";
import {IconCloseModal} from "assets/icon/Icon";
import {COLORS} from "core/utils/constant";
import {IListSolution} from "pages/interactive/model/listSolution";

import MockImg from "assets/images/mockImg.png";
import MockQR from "assets/images/mockQR.png";
import {ReactComponent as IconMap} from "assets/images/mockMap.svg";

export interface IMyModal {
    onOK: () => void
    onCancel: () => void
    visible: boolean
    children: React.ReactNode
}

const MyModal: React.FC<IMyModal> = ({onCancel, onOK, visible, children}): React.ReactElement => {
    return (
        <Modal
            open={visible}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: {
                    monitor43: '80%',
                    desktop: '80%',
                },
                bgcolor: 'background.paper',
                display: 'flex'
            }}>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                }}>
                    {children}

                    <Box
                        onClick={onCancel}
                        sx={{
                            bgcolor: COLORS.red,
                            cursor: 'pointer',
                            position: 'absolute',
                            bottom: '3%',
                            right: '3%',
                            width: '10%',
                            p: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            borderRadius: '10px',
                        }}>

                        <SvgIcon
                            component={IconCloseModal}
                            inheritViewBox
                            sx={{
                                width: {
                                    monitor43: '80px',
                                    desktop: '40px',
                                },
                                height: {
                                    monitor43: '80px',
                                    desktop: '40px',
                                },
                            }}
                        />
                        <Title20 sx={{color: COLORS.white}}>
                            ปิดหน้าต่าง
                        </Title20>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
};

export const ModalBodySolution: React.FC<{data: IListSolution}> = ({data}): React.ReactElement => {
    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    width: '100%',
                    height: '70%',
                }}
            >
                <Box sx={{
                    width: '80%',
                    ml: '10%',
                    mt: '7%',
                }}>
                    <Box sx={{display: 'flex', gap: 4, alignItems: 'center'}}>
                        <Box sx={{
                            width: '30%',
                            height: '30%',
                        }}>
                            {data.icon}
                        </Box>

                        <Box sx={{display: 'grid'}}>
                            <Title30 sx={{color: COLORS.red}}>
                                {data.text}
                            </Title30>

                            <Title17>
                                ชั้น 1 Living Design Studio
                            </Title17>
                        </Box>
                    </Box>

                    <Box sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                        <Box
                            sx={{
                                backgroundImage: `url(${MockImg})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'repeat',
                                objectFit: 'contain',
                                height: '300px',
                                width: '100%',
                                mt: '1.5%'
                            }}
                        />

                        <Box sx={{mt: '2%', letterSpacing: '0.1rem', lineHeight: '1.6'}}>
                            <Title14>
                                ถ้าคุณกำลังมีปัญหาเรื่องบ้านแต่ไม่รู้ว่าควรปรึกษาใคร เราขอแนะนำ <span style={{fontWeight: 700}}>"คลินิคหมอบ้าน"</span> ที่จะมาช่วยไขทุกข้อข้องใจเรื่องบ้านกับผู้เชี่ยวชาญจากเอสซีจีไม่ว่าจะเป็นสร้างบ้านใหม่ปรับปรุงหรือต่อเติมบ้านเก่า
                            </Title14>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    flex: 1,
                    mt: '5%',
                }}>
                    <SvgIcon
                        component={IconMap}
                        inheritViewBox
                        sx={{width: '100%', height: '90%'}}
                    />

                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        top: {
                            monitor43: '50%',
                            desktop: '60%',
                        }
                    }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${MockQR})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'repeat',
                                objectFit: 'contain',
                                height: '200px',
                                width: '200px',
                            }}
                        />

                        <Box sx={{display: 'grid'}}>
                            <Title14>
                                สแกน QR
                            </Title14>
                            <Title14 >
                                เพื่อเปิดบนมือถือ
                            </Title14>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{
                ml: '5%',
                mt: '3%',
            }}>
                <Title17>
                    สินค้าและบริการแนะนำ
                </Title17>

                <Box sx={{mt: '1%', display: 'flex'}}>
                    <Box sx={{
                        minWidth: {
                            monitor43: '600px',
                            desktop: '400px',
                            lg: '200px',
                        }
                    }}>
                        <li>
                            <Title14>
                                ปรึกษาผู้เชี่ยวชาญสร้างบ้าน
                            </Title14>
                        </li>

                        <li>
                            <Title14>
                                ปรับปรุงบ้าน
                            </Title14>
                        </li>
                    </Box>

                    <Box>
                        <li>
                            <Title14>
                                ปรึกษาผู้เชี่ยวชาญสร้างบ้าน
                            </Title14>
                        </li>

                        <li>
                            <Title14>
                                ปรับปรุงบ้าน
                            </Title14>
                        </li>
                    </Box>
                </Box>
            </Box>
        </>
    )
};

export default MyModal;

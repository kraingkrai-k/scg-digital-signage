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
                p: 4,
                display: 'flex'
            }}>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    ml: '3%',
                    mt: '2%',
                }}>
                    {children}

                    <Box
                        onClick={onCancel}
                        sx={{
                            bgcolor: COLORS.red,
                            cursor: 'pointer',
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                            width: '10%',
                            p: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            borderRadius: '10px',
                        }}>
                        <IconCloseModal sx={{

                        }} />
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
                    gap: 8,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    width: '100%',
                    height: '70%',
                }}
            >
                <Box sx={{flex: 0.6}}>
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
                                mt: '5%'
                            }}
                        />

                        <Box sx={{mt: '2%'}}>
                            <Title14>
                                ถ้าคุณกำลังมีปัญหาเรื่องบ้านแต่ไม่รู้ว่าควรปรึกษาใคร เราขอแนะนำ <span style={{fontWeight: 700}}>"คลินิคหมอบ้าน"</span> ที่จะมาช่วยไขทุกข้อข้องใจเรื่องบ้านกับผู้เชี่ยวชาญจากเอสซีจีไม่ว่าจะเป็นสร้างบ้านใหม่ปรับปรุงหรือต่อเติมบ้านเก่า
                            </Title14>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{flex: 1}}>
                    <SvgIcon
                        component={IconMap}
                        inheritViewBox
                        sx={{width: '100%', height: '80%'}}
                    />

                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        top: '50%'
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


            <Box>
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

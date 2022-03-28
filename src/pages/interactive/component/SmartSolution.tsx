import React, {useState} from "react";
import Box from "@mui/material/Box";

import Tag from "./Tag";
import {Title30, Title20, Title17} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";
import {IconDoctor} from "assets/icon/Icon";
import Modal from "@mui/material/Modal";

interface IBoxSolution {
    children: React.ReactNode
    text: string
    id: any
}

const sizeIcon = {width: '40%', height: '40%', float: 'right'}

const BoxSolution = ({children, text, id}: IBoxSolution) => {
    return (
        <Box id={id} sx={{
            width: '320px',
            height: '320px',
            background: 'linear-gradient(180deg, #CECECE 0%, #EEEEEE 0.01%, #FFFFFF 68.75%)',
            boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            borderRadius: '12px',
            p: '16px',
            cursor: 'pointer',
        }}>
            {children}
            <Box sx={{
                float: 'left',
                position: 'absolute',
                bottom: 0
            }}>
                <Box sx={{
                    display: 'flex',
                    p: '16px',
                }}>
                    <Title17 sx={{whiteSpace: 'break-spaces'}}>
                        {text}
                    </Title17>
                </Box>
            </Box>
        </Box>
    )
}

const listSolution = [
    {
        id: 1,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "คลีนิค\nหมอบ้าน"
    },
    {
        id: 2,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "หลังคาพลังงาน\nแสงอาทิตย์"
    },
    {
        id: 3,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "ระบบ\nบ้านเย็น"
    },
    {
        id: 4,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "ตกแต่งภูมิทัศน์\nรอบบ้าน"
    },
    {
        id: 5,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "ห้องน้ำ\nเพื่อสุขภาพ"
    },
    {
        id: 6,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "พื้นที่\nนอกบ้าน"
    },
    {
        id: 7,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "บริการผู้ช่วย"
    },
    {
        id: 8,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "สินค้าเทคโนโลยี"
    },
    {
        id: 9,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "เครื่องใช้\nสำหรับ\nคนรักบ้าน"
    },
]

const SmartSolution: React.FC = (): React.ReactElement => {

    const [modal, setModal] = useState({
        visible: false
    })

    const handlerOpenModal = () => {
        setModal(prevState => ({
            ...prevState,
            visible: true
        }))
    }

    const handlerCloseModal = () => {
        setModal(prevState => ({
            ...prevState,
            visible: false
        }))
    }

    return (
        <Box sx={{
            height: '100%', width: '100%',
            background: 'linear-gradient(138.42deg, #ECECEC 20.09%, #A3A3A3 100%)',
            boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
            // transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        }}>
            <Modal
                open={modal.visible}
                onClose={handlerCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Title20>
                        Text in a modal
                    </Title20>
                    <Title20 sx={{mt: 2}}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Title20>
                </Box>
            </Modal>

            <Box>
                <Tag>
                    <Title30
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            color: COLORS.white
                        }}>
                        SMART <span style={{fontWeight: 400}}>SOLUTION</span>
                    </Title30>
                </Tag>
            </Box>

            <Box sx={{
                pl: '2%',
                pr: '2%',
            }}>
                <Box
                    sx={{
                        pt: '1%',
                        pb: '2%',
                    }}
                >
                    <Title20>
                        สินค้าและบริการที่ตอบโจทย์ทุกเรื่องบ้าน
                    </Title20>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        justifyItems: 'center',
                        gap: 4,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                >
                    {listSolution.map(x => (
                        <BoxSolution id={x.id} text={x.text}>
                            {x.icon}
                        </BoxSolution>
                    ))}
                </Box>
            </Box>
        </Box>
    )
};

export default SmartSolution;

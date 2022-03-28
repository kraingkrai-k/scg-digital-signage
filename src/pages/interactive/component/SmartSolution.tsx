import React, {useState} from "react";
import Box from "@mui/material/Box";

import {Title30, Title20, Title17} from "component/common/Font.styles";
import MyModal, {ModalBodySolution} from "component/Modal";
import {COLORS} from "core/utils/constant";

import {IListSolution, listSolution} from "../model/listSolution";
import Tag, {WrapTag} from "./Tag";
interface IBoxSolution {
    children: React.ReactNode
    text: string
    id: any
    onClick: (x: any) => void
}

const BoxSolution = ({children, text, id, onClick}: IBoxSolution) => {
    return (
        <Box
            id={id}
            onClick={onClick}
            sx={{
                width: {
                    monitor43: '320px',
                    desktop: '200px',
                },
                height: {
                    monitor43: '320px',
                    desktop: '200px',
                },
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
                    pb: '16px',
                }}>
                    <Title17 sx={{whiteSpace: 'break-spaces'}}>
                        {text}
                    </Title17>
                </Box>
            </Box>
        </Box>
    )
}


type IState = {
    visible: boolean
    data: IListSolution
}

const SmartSolution: React.FC = (): React.ReactElement => {

    const [modal, setModal] = useState<IState>({
        visible: false,
        data: {} as IListSolution
    })

    const handlerOpenModal = (data: IListSolution) => {
        setModal(prevState => ({
            ...prevState,
            visible: true,
            data
        }))
    }

    const handlerCloseModal = () => {
        setModal(prevState => ({
            ...prevState,
            visible: false
        }))
    }

    const handlerOKModal = () => {
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
        }}>
            <MyModal
                onOK={handlerOKModal}
                onCancel={handlerCloseModal}
                visible={modal.visible}
            >
                <ModalBodySolution data={modal.data} />
            </MyModal>

            <WrapTag sx={{
                width: {
                    monitor43: '30%',
                    desktop: '30%',
                },
                borderTop: {
                    monitor43: `7vh solid ${COLORS.gold}`,
                    desktop: `7vh solid ${COLORS.gold}`,
                },
                borderRight: {
                    monitor43: '80px solid transparent',
                    desktop: '80px solid transparent',
                },
            }}
            >
                <Tag>
                    <Title30>
                        SMART <span style={{fontWeight: 400}}>SOLUTION</span>
                    </Title30>
                </Tag>
            </WrapTag>

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
                        <BoxSolution id={x.id} text={x.text} onClick={() => handlerOpenModal(x)}>
                            {x.icon}
                        </BoxSolution>
                    ))}
                </Box>
            </Box>
        </Box>
    )
};

export default SmartSolution;

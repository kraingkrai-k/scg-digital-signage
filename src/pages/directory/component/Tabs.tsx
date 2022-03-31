import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import {TouchBackNavigator} from "assets/icon/Icon";
import {Title14, Title17} from "component/common/Font.styles";
import { useHistory } from "react-router-dom";

interface ITab {
    onClick: (floor: number) => void
    active: boolean
    floor: number
    title: string
}

export const Tab: React.FC<ITab> = ({active, floor, title, onClick}): React.ReactElement => {
    return (
        <Box
            onClick={active ? () => { } : () => onClick(floor)}
            sx={{
                width: '33%',
                background: active ? 'linear-gradient(180deg, #EC1C24 0%, #D0121A 100%)' : 'linear-gradient(195.17deg, #A6A6A6 2.43%, #E1E1E1 89.2%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: active ? COLORS.white : COLORS.balck,
                cursor: 'pointer',
                gap: 1
            }}>
            <Title14 sx={{
                alignSelf: 'flex-start',
                mt: {
                    monitor43: "7%",
                    desktop: "7%",
                }
            }}>
                ชั้น
            </Title14>

            <Box sx={{
                fontSize: {
                    monitor43: '50px',
                    desktop: '50px',
                },
                fontWeight: 700,
                // gap: 4
                minWidth: '40px',
                flexWrap: 'wrap',
            }}>
                {floor}
            </Box>

            <Title17 sx={{whiteSpace: 'break-spaces', lineHeight: '1.3'}}>
                {title}
            </Title17>
        </Box>
    )
}

interface ITabs {
    floor: number
    setFloor: (floor: number) => void
}

const Tabs: React.FC<ITabs> = ({floor, setFloor}): React.ReactElement => {
    const {goBack} = useHistory()

    const handlerBack = () => goBack()

    return (
        <Box sx={{display: 'flex'}}>
            <Box
                onClick={handlerBack}
                sx={{
                    width: '30px',
                    height: 'auto',
                    p: 4,
                    bgcolor: COLORS.grey,
                    cursor: 'pointer',
                }}>
                <TouchBackNavigator
                    sx={{
                        width: {
                            monitor43: '100%',
                            desktop: '100%',
                        },
                        height: {
                            monitor43: '100%',
                            desktop: '100%',
                        },
                    }}
                />
            </Box>

            <Box sx={{display: 'flex', width: '100%'}}>
                <Tab
                    active={floor === 1}
                    floor={1}
                    title={`ศูนย์รวมทุก\nโซลูชั่นเรื่องบ้าน`}
                    onClick={setFloor}
                />
                <Tab
                    active={floor === 2}
                    floor={2}
                    title={`"Cotto Life\nกระเบื้อง สุขภัณฑ์`}
                    onClick={setFloor}
                />
                <Tab
                    active={floor === 3}
                    floor={3}
                    title={`บริการออกแบบ\nภายในครบวงจร`}
                    onClick={setFloor}
                />
            </Box>
        </Box>
    )
};

export default Tabs;

import React from "react";
import Box from "@mui/material/Box";
import {useHistory} from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";

import {Title14, Title20, Title30, Title35} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";
import {IconDirectoryNavigator} from "assets/icon/Icon";

import Tag, {WrapTag} from "./Tag";

const Directory: React.FC = (): React.ReactElement => {
    const {push} = useHistory()

    const handlerDirectoryClick = (floor: number) => {
        push('/directory', {tab: floor})
    }

    return (
        <Box sx={{
            height: '100%', width: '100%',
            background: 'linear-gradient(138.42deg, #ECECEC 20.09%, #A3A3A3 100%)',
            boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
        }}>
            <WrapTag sx={{
                width: {
                    monitor43: '30%',
                    desktop: '35%',
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
                        DIRECTORY
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
                        เลือกชั้นเพื่อค้นหาโซนและสินค้า
                    </Title20>
                </Box>

                <Box sx={{display: 'grid', gap: 1}}>
                    <DirectoryNavigator
                        onClick={handlerDirectoryClick}
                        floor={1}
                        title="ศูนย์รวมทุกโซลูชั่นเรื่องบ้าน"
                        subTitle="ปรึกษาหมอบ้าน, แบบบ้านตามฝัน, สินค้าตกแต่งบ้าน, ระบบบ้านเย็น, หลังคา"
                    />

                    <DirectoryNavigator
                        onClick={handlerDirectoryClick}
                        floor={2}
                        title="Cotto Life"
                        subTitle="สินค้ากระเบื้องปูผนัง, สุขภัณฑ์ ห้องน้ำ แผ่นปูพื้น LT, สินค้า Geoluxe"
                    />

                    <DirectoryNavigator
                        onClick={handlerDirectoryClick}
                        floor={3}
                        title="ศูนย์รวมทุกโซลูชั่นเรื่องบ้าน"
                        subTitle="บริการปรับปรุงต่อเติมบ้าน โดยทีมผู้เชี่ยวชาญ"
                    />
                </Box>
            </Box>
        </Box>
    )
};

interface IDirectoryNavigator {
    onClick: (floor: number) => void
    floor: number
    title: string
    subTitle: string
}

const DirectoryNavigator: React.FC<IDirectoryNavigator> = ({floor, title, subTitle, onClick}): React.ReactElement => {
    return (
        <Box
            onClick={() => onClick(floor)}
            sx={{
                background: 'linear-gradient(180deg, #CECECE 0%, #EEEEEE 0.01%, #FFFFFF 68.75%)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
                display: 'flex',
                m: '12px',
                cursor: 'pointer',
            }}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                p: '14px'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        ml: '4%',
                        minWidth: {
                            monitor43: '200px',
                            desktop: '130px',
                        },
                    }}>
                    <Title14 sx={{
                        alignSelf: 'flex-start',
                        fontWeight: 700
                    }}>
                        ชั้น
                    </Title14>

                    <Box sx={{
                        fontSize: {
                            monitor43: '148px',
                            desktop: '104px',
                        },
                        fontWeight: 700
                    }}>
                        {floor}
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: 'grid',
                        alignItems: 'center',
                        p: '14px',
                    }}
                >
                    <Title35>
                        {title}
                    </Title35>
                    <Title20 sx={{mt: '2%', fontWeight: 400}}>
                        {subTitle}
                    </Title20>
                </Box>
            </Box>


            <Box sx={{
                bgcolor: COLORS.red,
                width: '5%',
                float: 'right',
                display: 'flex',
                alignItems: 'center',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
            }}>
                <SvgIcon
                    component={IconDirectoryNavigator}
                    inheritViewBox
                    sx={{
                        width: {
                            monitor43: '60px',
                            desktop: '40px',
                        },
                        height: {
                            monitor43: '60px',
                            desktop: '40px',
                        },
                    }}
                />
            </Box>
        </Box>
    )
}

export default Directory;

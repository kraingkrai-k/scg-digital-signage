import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";

import {Title17, Title20} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";

import {IListZone, listZone1, listZone2, listZone3} from "../model/content";

interface IZone {
    zone: number
    floor: number
    onClick: (zone: number) => void
}

const mapZoneWithFloor = (zone: number) => ({
    1: listZone1,
    2: listZone2,
    3: listZone3,
}[zone])

const Zone: React.FC<IZone> = ({zone, floor, onClick}): React.ReactElement => {
    const [zoneActive, setZoneActive] = useState<IListZone[]>(listZone1)

    useEffect(() => {
        setZoneActive(mapZoneWithFloor(floor) as IListZone[])
    }, [floor])

    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, #BABABA 0%, #E4E4E4 100%)',
                width: '100%',
                borderRadius: {
                    monitor43: '12px',
                    desktop: '12px',
                },
                mt: {
                    monitor43: '5%',
                    desktop: '5%',
                },
                pt: {
                    monitor43: '5%',
                    desktop: '5%',
                },
                pb: {
                    monitor43: '5%',
                    desktop: '5%',
                },
            }}
        >
            <Title20 sx={{
                textAlign: 'center',
                display: 'block',
                pb: '2%',
            }}>
                เลือกโซนจากสินค้าหรือบริการ
            </Title20>
            <Box
                sx={{
                    display: 'grid',
                    justifyItems: 'center',
                    gap: 2,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    textAlign: 'center',
                }}
            >
                {zoneActive.map(x => {
                    const acitve = x.id === zone
                    return (
                        <Box
                            key={x.id}
                            onClick={acitve ? () => { } : () => onClick(x.id)}
                            sx={{
                                cursor: 'pointer',
                                display: 'grid',
                                alignItems: 'center',
                                width: {
                                    monitor43: '160px',
                                    desktop: '120px',
                                },
                                height: {
                                    monitor43: '160px',
                                    desktop: '120px',
                                },
                                p: {
                                    monitor43: 2,
                                    desktop: 2,
                                },
                                borderRadius: {
                                    monitor43: '12px',
                                    desktop: '12px',
                                },
                                background: acitve ? COLORS.red : COLORS.white,
                                color: acitve ? COLORS.white : COLORS.balck,
                            }}
                        >
                            <Title17 sx={{whiteSpace: 'break-spaces'}}>
                                {x.text}
                            </Title17>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
};

export default Zone;

import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import {ReactComponent as FloorPlan1} from "assets/images/floorPlan1.svg";
import {ReactComponent as FloorPlan2} from "assets/images/floorPlan2.svg";
import {ReactComponent as FloorPlan3} from "assets/images/floorPlan3.svg";
import Zone from "./Zone";
import MetaFooter from "./MetaFooter";

interface IContent {
    floor: number
    zone: number
    setZone: (zone: number) => void
}

const mapFloorSvg = (zone: number): any => ({
    1: FloorPlan1,
    2: FloorPlan2,
    3: FloorPlan3,
}[zone])

const Content: React.FC<IContent> = ({floor, zone, setZone}): React.ReactElement => {
    return (
        <Box
            sx={{
                display: 'grid',
                justifyItems: 'center',
                gap: 2,
                gridTemplateColumns: 'repeat(2, 1fr)',
                mt: '1%'
            }}
        >
            <Box sx={{width: '100%', display: 'block', textAlign: 'center'}}>
                <SvgIcon
                    component={mapFloorSvg(floor)}
                    inheritViewBox
                    sx={{
                        width: {
                            monitor43: '1500px',
                            desktop: '1000px',
                        },
                        height: {
                            monitor43: '1500px',
                            desktop: '1000px',
                        },
                    }}
                />
                <MetaFooter />
            </Box>

            <Box sx={{width: '80%'}}>
                <Zone
                    floor={floor}
                    zone={zone}
                    onClick={setZone}
                />
            </Box>
        </Box>
    )
};

export default Content;

import React from "react";
import Box from "@mui/material/Box";

import {IconBallLoon, IconXP} from "assets/icon/Icon";

const Section2: React.FC = (): React.ReactElement => {

    return (
        <div style={{height: '100%'}}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    height: '100%'
                }}
            >
                <Box>
                    <IconXP
                        sx={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
                <Box>
                    <IconBallLoon sx={{
                        width: '50%',
                        height: '50%',
                    }} />
                </Box>
            </Box>
            <Box style={{position: 'relative'}}>
                <Box
                    sx={{
                        position: 'absolute',
                        height: 200,
                        width: '100%',
                        bottom: 0,
                        background: 'linear-gradient(180deg, #EC1C24 10.42%, rgba(236, 28, 36, 0) 100%)',
                        transform: 'matrix(1, 0, 0, -1, 0, 0)',
                    }}
                />
            </Box>
        </div>
    )
};

export default Section2;

import React from "react";
import Box from "@mui/material/Box";

import {IconBallLoon, IconXP} from "assets/icon/Icon";

const Section2: React.FC = (): React.ReactElement => {

    return (
        <div style={{height: '100%', overflowY: 'hidden'}}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    height: '100%',
                    marginTop: '1.5%',
                    justifyItems: 'start'
                }}
            >
                <IconXP
                    sx={{
                        width: "100%",
                        height: {
                            xl: '90%',
                            lg: '100%'
                        },
                        alignItems: 'flex-end'
                    }}
                />
                <Box
                    // sx={{marginLeft: '-10%'}}
                    sx={{
                        justifyItems: 'start'
                    }}
                >
                    <IconBallLoon sx={{
                        width: '100%',
                        height: '35%',
                    }} />
                </Box>
            </Box>
            <Box style={{position: 'relative'}}>
                <Box
                    sx={{
                        position: 'absolute',
                        height: '10vh',
                        width: '100%',
                        bottom: 20,
                        background: 'linear-gradient(180deg, #EC1C24 10.42%, rgba(236, 28, 36, 0) 100%)',
                        transform: 'matrix(1, 0, 0, -1, 0, 0)',
                        // backgroundColor: 'green'
                    }}
                />
            </Box>
        </div>
    )
};

export default Section2;

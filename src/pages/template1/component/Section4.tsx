import React from "react";
import Box from "@mui/material/Box";

import Button from "component/Button";

const Section4: React.FC = (): React.ReactElement => {

    const handlerOnClick = () => {
        console.log('hi')
    }

    return (
        <>
            <Box
                sx={{
                    height: '100%',
                    alignItems: 'flex-start',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box>
                    <Button onClick={handlerOnClick} />
                </Box>
            </Box>
        </>
    )
};

export default Section4;

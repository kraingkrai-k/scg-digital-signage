import React from "react";
import Box from "@mui/material/Box";

import ButtonProduct from "component/ButtonProduct";

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
                    <ButtonProduct onClick={handlerOnClick} />
                </Box>
            </Box>
        </>
    )
};

export default Section4;

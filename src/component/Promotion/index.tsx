import React from "react";
import Box from "@mui/material/Box";
import Button from "component/Button";

// import SvgIcon from "@mui/material/SvgIcon";

const Promotion: React.FC = (): React.ReactElement => {

    const handlerProductClick = () => {
        console.log('product')
    }

    return (
        <Box>
            <Box
                sx={{
                    height: '16vh',
                    bgcolor: 'red',
                    m: '24px',
                    mb: '14px',
                }}
            >
                Promotion
            </Box>

            <Box
                sx={{
                    height: '100%',
                    alignItems: 'flex-start',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >

                <Button invert={true} onClick={handlerProductClick} />
            </Box>
        </Box>
    )
};

export default Promotion;

import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Button from "component/Button";
import {Title45} from "component/common/Font.styles";

const Promotion: React.FC = (): React.ReactElement => {

    const handlerProductClick = () => {
        console.log('product')
    }

    return (
        <Box>
            <Box
                sx={{
                    height: '16vh',
                    bgcolor: COLORS.holder,
                    m: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Title45 sx={{color : COLORS.white}}>
                    Promotion
                </Title45>
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

import React from "react";
import Box from "@mui/material/Box";

import {COLORS} from "core/utils/constant";
import Button from "component/Button";
import {Title45} from "component/common/Font.styles";

interface IPromotion {
    onPromotionClick: () => void
    onProductClick: () => void
}

const Promotion: React.FC<IPromotion> = ({onPromotionClick, onProductClick}): React.ReactElement => {
    return (
        <Box>
            <Box
                onClick={onPromotionClick}
                sx={{
                    // height: {
                    //     monitor43: '20vh',
                    //     desktop: '20vh',
                    //     lg: '16vh',
                    // },
                    height: '15vh',
                    bgcolor: COLORS.holder,
                    m: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Title45 sx={{color: COLORS.white}}>
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
                <Button invert={true} onClick={onProductClick} />
            </Box>
        </Box>
    )
};

export default Promotion;

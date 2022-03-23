import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import IconTouchApp from "assets/images/touch_app.png";
import {Title35} from "component/common/Font.styles";

interface IButtonProduct {
    onClick: () => void
}

const ButtonProduct: React.FC<IButtonProduct> = ({onClick}): React.ReactElement => {
    return (
        <Box
            sx={{
                width: '100%',
                background: 'linear-gradient(180deg, #CFCFCF 0%, #E6E6E6 100%)',
                boxShadow: '0px 7px 24px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px',
                cursor: 'pointer',
                marginTop: '12px'
            }}
            onClick={onClick}
        >
            <Box sx={{height: '58px', display: 'flex'}}>
                <Grid
                    direction="row"
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{margin: '0 12px 0 12px'}}
                >
                    <Grid item>
                        <Title35>
                            แตะเพื่อ
                        </Title35>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={{
                                backgroundImage: `url(${IconTouchApp})`,
                                backgroundSize: 'contain',
                                width: '32px',
                                height: '32px',
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Title35>
                            ดูสินค้าและบริการ
                        </Title35>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default ButtonProduct;

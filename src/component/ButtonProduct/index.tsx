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
                marginBottom: '24px'
            }}
            onClick={onClick}
        >
            <Box sx={{
                display: 'flex', padding: {
                    xl: '14px 16px 14px 16px',
                    lg: '10px 12px 10px 12px'
                }
            }}>
                <Grid
                    direction="row"
                    container
                    justifyContent="center"
                    alignItems="center"
                // sx={{}}
                // sx={{padding: 12}}
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
                                width: {
                                    xl: '48px',
                                    lg: '32px',
                                },
                                height: {
                                    xl: '48px',
                                    lg: '32px',
                                },
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

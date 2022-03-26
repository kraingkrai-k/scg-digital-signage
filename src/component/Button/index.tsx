import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {Title35} from "component/common/Font.styles";
import {TouchAppWhite} from "assets/icon/Icon";
import {COLORS} from "core/utils/constant";

interface IButton {
    onClick: () => void
    invert?: boolean
}

const Button: React.FC<IButton> = ({onClick, invert = false}): React.ReactElement => {

    return (
        <Box sx={{display: 'flex'}}>
            <Box
                sx={{
                    width: '100%',
                    background: invert ? 'linear-gradient(335.2deg, #AC0C12 17.94%, #D5020C 72.04%)' : 'linear-gradient(180deg, #CFCFCF 0%, #E6E6E6 100%)',
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
                    >
                        <Grid item>
                            <Title35 sx={{color: invert ? COLORS.white : COLORS.greyText}}>
                                แตะเพื่อ
                            </Title35>
                        </Grid>
                        <Grid item>
                            <TouchAppWhite
                                sx={{
                                    width: {
                                        xl: '48px',
                                        lg: '32px',
                                    },
                                    height: {
                                        xl: '48px',
                                        lg: '32px',
                                    },
                                }}
                                invert={invert}
                            />
                        </Grid>
                        <Grid item>
                            <Title35 sx={{color: invert ? COLORS.white : COLORS.greyText}}>
                                {invert ? "ค้นหาสินค้าและบริการ" : "ดูสินค้าและบริการ"}
                            </Title35>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
};

export default Button;

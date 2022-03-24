import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {Text} from "component/NavbarText";
import {COLORS} from "core/utils/constant";

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <Box
            sx={{
                height: '100%', width: '100%', lineHeight: {
                    xl: '1',
                    lg: '0.7',
                },
                background: 'linear-gradient(180deg, #3F3F3F 14.8%, #0A0202 142.11%)',
                display: 'grid',
                alignItems: 'center'
            }}
        >
            <div>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Text style={{color: COLORS.red}}>
                            ครบ
                        </Text>
                    </Grid>
                    <Grid item>
                        <Text style={{color: COLORS.red}}>
                            <span className="italic">
                                ทุกโซโลชัน
                            </span>
                        </Text>
                    </Grid>
                    <Grid item>
                        <Text style={{marginLeft: '1rem', color: COLORS.white}}>
                            <span className="sub-italic">
                                เรื่องบ้าน ที่เดียวจบ...
                            </span>
                        </Text>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" alignItems="flex-start">
                    <Grid item>
                        <Text sx={{color: COLORS.white}}>
                            <span className="sub-italic">
                                ที่ SCG HOME Experience
                            </span>
                        </Text>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
};

export default Navbar;

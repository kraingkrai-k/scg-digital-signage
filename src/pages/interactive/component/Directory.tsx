import React from "react";
import Box from "@mui/material/Box";

import Tag from "./Tag";
import {Title20, Title30} from "component/common/Font.styles";
import {COLORS} from "core/utils/constant";

const Directory: React.FC = (): React.ReactElement => {

    return (
        <Box sx={{
            height: '100%', width: '100%',
            background: 'linear-gradient(138.42deg, #ECECEC 20.09%, #A3A3A3 100%)',
            boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
            // transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        }}>
            <Box>
                <Tag>
                    <Title30
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            color: COLORS.white
                        }}>
                        DIRECTORY
                    </Title30>
                </Tag>
            </Box>

            <Box sx={{
                pl: '2%',
                pr: '2%',
            }}>
                <Box
                    sx={{
                        pt: '1%',
                        pb: '2%',
                    }}
                >
                    <Title20>
                        เลือกชั้นเพื่อค้นหาโซนและสินค้า
                    </Title20>
                </Box>

            </Box>
        </Box>
    )
};

export default Directory;

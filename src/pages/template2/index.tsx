import React from "react";
import Box from "@mui/material/Box";

import footer from 'assets/images/footer.png'

const Template2: React.FC = (): React.ReactElement => {
    // start ipad only
    // const matches = useMediaQuery('(min-width:1024px)');

    // if (!matches) {
    //     return <>Not Supported</>
    // }

    return (
        <Box sx={{height: '100vh', width: '100%'}}>
            <Box sx={{height: '11.14%'}}>
                {/* <Navbar /> */}
                Navbar
            </Box>
            <Box sx={{height: '69.02%'}}>
                <Box sx={{height: '57.32%'}}>
                    Content
                </Box>

                <Box sx={{height: '42.68%'}}>
                    {/* <Section4 /> */}
                    Section4
                    {/* OK */}
                </Box>
            </Box>
            <Box sx={{height: '19.84%'}}>
                <img
                    alt="footer"
                    src={footer}
                    style={{width: '100%', objectFit: 'fill'}}
                />
            </Box>
        </Box>
    )
};

export default Template2;

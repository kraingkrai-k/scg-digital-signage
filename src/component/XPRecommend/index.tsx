import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import BGFooter from "assets/images/bg-footer.png";
import {ReactComponent as IconXPTemplate} from "assets/icon/xpTemplate.svg";
import {ReactComponent as IconXPDirectory} from "assets/icon/xpDirectory.svg";
import {ReactComponent as IconXPInteractive} from "assets/icon/xpInteractive.svg";

export const XPTemplate: React.FC = ({children}): React.ReactElement => (
    <Box
        sx={{
            backgroundImage: `url(${BGFooter})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            objectFit: 'contain',
            height: '20vh',
        }}
    >
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
        }}>
            <Box sx={{display: 'grid'}}>
                {children}
            </Box>

            <Box sx={{
                width: {
                    monitor43: '30%',
                    desktop: '30%',
                    lg: '300px',
                },
                height: {
                    monitor43: '35%',
                    desktop: '35%',
                    lg: '300px',
                },
                right: {
                    monitor43: 0,
                    desktop: '5%',
                },
                position: 'absolute',
                top: '5%',
                zIndex: 1
            }}>
                <SvgIcon
                    component={IconXPTemplate}
                    inheritViewBox
                    sx={{width: '100%', height: '100%'}}
                />
            </Box>
        </Box>
    </Box>
)

export const XPInteractive: React.FC = ({children}): React.ReactElement => (
    <Box
        sx={{
            backgroundImage: `url(${BGFooter})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            objectFit: 'contain',
            height: '20vh',
        }}
    >
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
        }}>
            <Box sx={{display: 'grid'}}>
                {children}
            </Box>

            <Box sx={{
                width: {
                    monitor43: '30%',
                    desktop: '30%',
                    lg: '300px',
                },
                height: {
                    monitor43: '35%',
                    desktop: '35%',
                    lg: '300px',
                },
                position: 'absolute',
                right: {
                    monitor43: 0,
                    desktop: '5%',
                },
                top: '5%',
                zIndex: 1
            }}>
                <SvgIcon
                    component={IconXPInteractive}
                    inheritViewBox
                    sx={{width: '100%', height: '100%'}}
                />
            </Box>
        </Box>
    </Box>
)

export const XPDirectory: React.FC = ({children}): React.ReactElement => (
    <Box
        sx={{
            backgroundImage: `url(${BGFooter})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            objectFit: 'contain',
            height: '20vh',
        }}
    >
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
        }}>
            <Box sx={{display: 'grid'}}>
                {children}
            </Box>

            <Box sx={{
                width: {
                    monitor43: '30%',
                    desktop: '30%',
                    lg: '300px',
                },
                height: {
                    monitor43: '35%',
                    desktop: '35%',
                    lg: '300px',
                },
                position: 'absolute',
                right: {
                    monitor43: 0,
                    desktop: '5%',
                },
                top: '5%',
                zIndex: 1
            }}>
                <SvgIcon
                    component={IconXPDirectory}
                    inheritViewBox
                    sx={{width: '100%', height: '100%'}}
                />
            </Box>
        </Box>
    </Box>
)
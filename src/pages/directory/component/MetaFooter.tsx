import React from "react";
import Box from "@mui/material/Box";

import {Title20} from "component/common/Font.styles";
import {IconMetaToilet, IconMetaFireExits, IconMetaInfo} from "assets/icon/Icon";
import SvgIcon from "@mui/material/SvgIcon";


interface IMetaIcon {
    icon: any
    text: string
}

const MetaIcon: React.FC<IMetaIcon> = ({icon, text}) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <SvgIcon
            component={icon}
            inheritViewBox
            sx={{
                width: {
                    monitor43: '45px',
                    desktop: '35px',
                },
                height: {
                    monitor43: '45px',
                    desktop: '35px',
                },
            }}
        />
        <Title20 sx={{
            ml: {
                monitor43: '5%',
                desktop: '5%',
            },
            width: {
                monitor43: '200px',
                desktop: '120px',
                lg: '100px',
            },
            fontWeight: 400
        }}>
            {text}
        </Title20>
    </Box>
)

const MetaFooter: React.FC = (): React.ReactElement => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: {
                    monitor43: '5%',
                    desktop: '5%'
                },
                left: {
                    monitor43: '5%',
                    desktop: '5%'
                },
                lineHeight: '2',
            }}
        >

            <Box sx={{display: 'flex', gap: 2}}>
                <MetaIcon
                    icon={IconMetaToilet}
                    text="ห้องน้ำ"
                />
                <MetaIcon
                    icon={IconMetaFireExits}
                    text="ทางหนีไฟ"
                />
                <MetaIcon
                    icon={IconMetaInfo}
                    text="ประชาสัมพันธ์"
                />
            </Box>
            <Title20 sx={{fontWeight: 400}}>
                หากไม่พบสินค้าหรือบริการ สามารถติดต่อพนักงานได้ตลอดเลยนะคะ
            </Title20>
        </Box>
    )
};

export default MetaFooter;

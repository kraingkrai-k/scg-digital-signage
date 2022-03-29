import React from "react";
import Box from "@mui/material/Box";

import {Title14} from "component/common/Font.styles";
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
            gap: 1
        }}
    >
        <SvgIcon
            component={icon}
            inheritViewBox
            sx={{
                width: {
                    monitor43: '30px',
                    desktop: '20px',
                },
                height: {
                    monitor43: '30px',
                    desktop: '20px',
                },
            }}
        />
        <Box sx={{
            fontSize: {
                monitor43: '15px',
                desktop: '15px',
            },
            fontWeight: 400
        }}>
            {text}
        </Box>
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
            <Title14>
                หากไม่พบสินค้าหรือบริการ สามารถติดต่อพนักงานได้ตลอดเลยนะคะ
            </Title14>
        </Box>
    )
};

export default MetaFooter;

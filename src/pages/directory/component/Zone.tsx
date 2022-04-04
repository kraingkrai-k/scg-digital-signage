import React from 'react';
import Box from '@mui/material/Box';

import {Title17, Title20} from 'component/common/Font.styles';
import {COLORS} from 'core/utils/constant';

import {IListZone, listZone} from '../model/content';

interface IZone {
  zone: number;
  onClick: (x: IListZone) => void;
}

const Zone: React.FC<IZone> = ({zone, onClick}): React.ReactElement => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(360deg, #BABABA 0%, #E4E4E4 100%)',
        width: '100%',
        borderRadius: {
          monitor43: '12px',
          desktop: '12px',
        },
        mt: {
          monitor43: '5%',
          desktop: '5%',
        },
        pt: {
          monitor43: '5%',
          desktop: '5%',
        },
        pb: '4%'
      }}
    >
      <Title20
        sx={{
          textAlign: 'center',
          display: 'block',
          pb: '5%',
        }}
      >
        เลือกโซนจากสินค้าหรือบริการ
      </Title20>
      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          // gap: ,
          gridTemplateColumns: 'repeat(3, 1fr)',
          textAlign: 'center',
        }}
      >
        {listZone.map((x) => {
          const acitve = x.id === zone;
          return (
            <Box
              key={x.id}
              onClick={acitve ? () => {} : () => onClick(x)}
              sx={{
                cursor: 'pointer',
                display: 'grid',
                alignItems: 'center',
                width: {
                  monitor43: '100px',
                  desktop: '80px',
                },
                height: {
                  monitor43: '100px',
                  desktop: '80px',
                },
                p: 1,
                mb: 2,
                borderRadius: '12px',
                background: acitve ? COLORS.red : COLORS.white,
                color: acitve ? COLORS.white : COLORS.balck,
              }}
            >
              <Title17 sx={{whiteSpace: 'break-spaces', lineHeight: 1.4}}>{x.text}</Title17>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Zone;

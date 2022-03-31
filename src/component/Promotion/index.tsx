import React from 'react';
import Box from '@mui/material/Box';

import Button from 'component/Button';
import {ISectionPromotion, sectionPromotion} from 'pages/template3/model/promotion-data';
import Carousel from 'react-material-ui-carousel';

interface IPromotion {
  onPromotionClick: (x: ISectionPromotion) => void;
  onProductClick: () => void;
}

const Promotion: React.FC<IPromotion> = ({onPromotionClick, onProductClick}): React.ReactElement => {
  return (
    <Box>
      <Box
        sx={{
          height: '16vh',
          m: '24px',
          cursor: 'pointer',
        }}
      >
        <Carousel height="16vh" animation="slide" indicators={false} autoPlay={false} interval={5000}>
          {sectionPromotion.map?.((x: ISectionPromotion, i: number) => (
            <Box
              key={i}
              onClick={() => onPromotionClick(x)}
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${x.item})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
        </Carousel>
      </Box>

      <Box
        sx={{
          height: '100%',
          alignItems: 'flex-start',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button invert={true} onClick={onProductClick} />
      </Box>
    </Box>
  );
};

export default Promotion;

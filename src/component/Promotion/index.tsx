import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';

import Button from 'component/Button';
import {ISectionPromotion, sectionPromotion} from 'pages/template3/model/promotion-data';
import {COLORS} from 'core/utils/constant';

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
        <Carousel
          height="16vh"
          animation="slide"
          autoPlay={true}
          interval={5000}
          indicatorIconButtonProps={{
            style: {
              padding: '2px',
              color: '#C0C0C0',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: COLORS.red,
            },
          }}
          indicatorContainerProps={{
            style: {
              position: 'absolute',
              borderRadius: '60px',
              paddingLeft: '12px',
              paddingRight: '12px',
              zIndex: 1,
              bottom: '5%',
            },
          }}
        >
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

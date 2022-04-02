import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import {useHistory} from 'react-router-dom';

import {sectionPersonal} from 'pages/template3/model/personal-data';

const Ads: React.FC = (): React.ReactElement => {
  const {push} = useHistory();
  const [random, setRandom] = useState<number>(0);

  useEffect(() => {
    setRandom(Math.round(Math.random() * 5));
  }, []);

  const handlerContentClick = (x: any) => {
    push('/directory', {
      zone: x?.zone,
      tab: x?.floor,
    });
  };

  return (
    <Box
      sx={{
        height: '47%',
        width: '95%',
        mt: '3%',
        borderRadius: '12px',
      }}
    >
      <Carousel height="15vh" animation="slide" indicators={false} autoPlay={true} interval={5000}>
        {sectionPersonal[random].source.map?.((x: any, i: number) => (
          <Box
            key={i}
            onClick={() => handlerContentClick(x)}
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
  );
};

export default Ads;

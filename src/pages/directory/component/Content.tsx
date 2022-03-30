import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {ReactComponent as FloorPlan1} from 'assets/images/floorPlan1.svg';
import {ReactComponent as FloorPlan2} from 'assets/images/floorPlan2.svg';
import {ReactComponent as FloorPlan3} from 'assets/images/floorPlan3.svg';
import MyModal from 'component/Modal';

import MetaFooter from './MetaFooter';
import useMapSvg from '../hooks/uesMapSvg';
import {IListZone} from '../model/content';

import Zone from './Zone';
import {ModalBodySvgZone} from './ModalBodySvgPlan';

interface IContent {
  floor: number;
  zone: number;
  setFloor: (floor: number) => void;
  setZone: (zone: number) => void;
}

type IState = {
  visible: boolean;
  zone: string;
};

const sizePlan = {
  ml: '4%',
  width: {
    monitor43: '1500px',
    desktop: '100%',
  },
  height: {
    monitor43: '1500px',
    desktop: '80%',
  },
};

const Content: React.FC<IContent> = ({floor, setFloor, zone, setZone}): React.ReactElement => {
  const [modal, setModal] = useState<IState>({
    visible: false,
    zone: '',
  });

  const handlerOpenModal = (zone: string) => {
    setModal((prevState) => ({
      ...prevState,
      visible: true,
      zone,
    }));
  };

  const {mapZoneSelected} = useMapSvg(handlerOpenModal);

  const handlerCloseModal = () => {
    setModal((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  const handlerOKModal = () => {
    setModal((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  const handlerZoneClick = (x: IListZone) => {
    setFloor(x.floor);
    mapZoneSelected(x.zone);
    setZone(x.id);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        gap: 4,
        gridTemplateColumns: 'repeat(2, 1fr)',
        mt: '3%',
      }}
    >
      <MyModal onOK={handlerOKModal} onCancel={handlerCloseModal} visible={modal.visible}>
        <ModalBodySvgZone zone={modal.zone} />
      </MyModal>
      <Box sx={{width: '100%', mt: '10%'}}>
        {/* workaround keep dom element */}
        <Box sx={{width: '100%', height: '100%', display: floor === 1 ? 'auto' : 'none'}}>
          <SvgIcon component={FloorPlan1} inheritViewBox sx={{...sizePlan}} />
        </Box>

        <Box sx={{width: '100%', height: '100%', display: floor === 2 ? 'auto' : 'none'}}>
          <SvgIcon component={FloorPlan2} inheritViewBox sx={{...sizePlan}} />
        </Box>

        <Box sx={{width: '100%', height: '100%', display: floor === 3 ? 'auto' : 'none'}}>
          <SvgIcon component={FloorPlan3} inheritViewBox sx={{...sizePlan}} />
        </Box>
        {/* workaround keep dom element */}

        <MetaFooter />
      </Box>

      <Box sx={{width: '90%'}}>
        <Zone zone={zone} onClick={handlerZoneClick} />
      </Box>
    </Box>
  );
};

export default Content;

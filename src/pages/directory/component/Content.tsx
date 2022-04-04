import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {ReactComponent as FloorPlan1} from 'assets/images/floorPlan1.svg';
import {ReactComponent as FloorPlan1_No} from 'assets/images/floorPlan1_No.svg';
import {ReactComponent as FloorPlan2} from 'assets/images/floorPlan2.svg';
import {ReactComponent as FloorPlan3} from 'assets/images/floorPlan3.svg';
import MyModal, {ModalBodySolution} from 'component/Modal';
import {ZONE} from 'core/utils/env';

import MetaFooter from './MetaFooter';
import useMapSvg from '../hooks/uesMapSvg';
import {IListZone} from '../model/content';

import Zone from './Zone';
import {IListSolution} from 'pages/interactive/model/listSolution';
import {bodyPlan} from '../model/svg-plan';
import {useEffect} from 'react';
import {IconPinHere} from 'assets/icon/Icon';

const CURRENT_ZONE = ZONE === 'A';

interface IContent {
  floor: number;
  zone: number;
  setFloor: (floor: number) => void;
  setZone: (zone: number) => void;
}

type IState = {
  visible: boolean;
  zone: string;
  data: IListSolution;
};

const sizePlan = {
  ml: '4%',
  width: '100%',
  height: '95%',
};

const Content: React.FC<IContent> = ({floor, setFloor, zone, setZone}): React.ReactElement => {
  const [modal, setModal] = useState<IState>({
    visible: false,
    zone: '',
    data: {} as IListSolution,
  });

  const handlerOpenModal = (zone: string) => {
    const data = bodyPlan[zone];
    setModal((prevState) => ({
      ...prevState,
      visible: true,
      zone,
      data,
    }));
  };

  const {mapZoneSelected} = useMapSvg(handlerOpenModal);

  const handlerCloseModal = () => {
    setModal((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  useEffect(() => {
    if (zone && zone !== -1) {
      mapZoneSelected(zone as any);
    }
    // eslint-disable-next-line
  }, [zone]);

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
      // sx={{
      //   display: 'grid',
      //   width: '100%',
      //   justifyItems: 'end',
      //   // gap: 4,
      //   gridTemplateColumns: 'repeat(2, 1fr)',
      //   mt: '3%',
      // }}
      sx={{
        display: 'flex',
        width: '100%',
        justifyItems: 'end',
        gap: 6,
        gridTemplateColumns: 'repeat(2, 1fr)',
        mt: '3%',
      }}
    >
      <MyModal onOK={handlerOKModal} onCancel={handlerCloseModal} visible={modal.visible}>
        <ModalBodySolution data={modal.data} isZone={true} />
      </MyModal>
      <Box sx={{width: '100%', mt: '7%'}}>
        {/* workaround keep dom element */}
        <Box sx={{width: '100%', height: '100%', display: floor === 1 ? 'auto' : 'none', position: 'relative'}}>
          <SvgIcon component={CURRENT_ZONE ? FloorPlan1_No : FloorPlan1} inheritViewBox sx={{...sizePlan}} />
          {CURRENT_ZONE && <IconPinHere sx={{width: '56px', height: '69px', position: 'absolute', top: '44%', left: '60%'}} />}
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

      <Box sx={{width: '60%', mr: '20px'}}>
        <Zone zone={zone} onClick={handlerZoneClick} />
      </Box>
    </Box>
  );
};

export default Content;

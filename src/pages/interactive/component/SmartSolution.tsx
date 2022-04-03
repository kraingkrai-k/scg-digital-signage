import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {Title30, Title20, Title17} from 'component/common/Font.styles';
import MyModal, {ModalBodySolution} from 'component/Modal';
import {COLORS} from 'core/utils/constant';

import {IListSolution, listSolution} from '../model/listSolution';
import Tag, {WrapTag} from './Tag';

interface IBoxSolution {
  children: any;
  text: string;
  onClick: (x: any) => void;
}

const BoxSolution = ({children, text, onClick}: IBoxSolution) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: {
          monitor43: '320px',
          desktop: '150px',
        },
        height: {
          monitor43: '320px',
          desktop: '150px',
        },
        background: 'linear-gradient(180deg, #CECECE 0%, #EEEEEE 0.01%, #FFFFFF 68.75%)',
        boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        borderRadius: '12px',
        p: '16px',
        cursor: 'pointer',
      }}
    >
      {/* <SvgIcon
                component={children}
                inheritViewBox
                sx={{
                    float: 'right',
                    width: {
                        monitor43: '75px',
                        desktop: '65px',
                    },
                    height: {
                        monitor43: '75px',
                        desktop: '65px',
                    },
                }}
            /> */}
      <Box
        sx={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <img alt={text} src={children} height="100%" />
      </Box>
      <Box
        sx={{
          float: 'left',
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            pb: '16px',
          }}
        >
          <Title17 sx={{whiteSpace: 'break-spaces'}}>{text}</Title17>
        </Box>
      </Box>
    </Box>
  );
};

type IState = {
  visible: boolean;
  data: IListSolution;
};

const SmartSolution: React.FC = (): React.ReactElement => {
  const [modal, setModal] = useState<IState>({
    visible: false,
    data: {} as IListSolution,
  });

  const handlerOpenModal = (data: IListSolution) => {
    setModal((prevState) => ({
      ...prevState,
      visible: true,
      data,
    }));
  };

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

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        background: 'linear-gradient(138.42deg, #ECECEC 20.09%, #A3A3A3 100%)',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.12)',
      }}
    >
      <MyModal onOK={handlerOKModal} onCancel={handlerCloseModal} visible={modal.visible}>
        <ModalBodySolution data={modal.data} />
      </MyModal>

      <WrapTag
        sx={{
          width: {
            monitor43: '30%',
            desktop: '50%',
          },
          borderTop: {
            monitor43: `4vh solid ${COLORS.greyText}`,
            desktop: `4vh solid ${COLORS.greyText}`,
          },
          borderRight: {
            monitor43: '5vh solid transparent',
            desktop: '5vh solid transparent',
          },
        }}
      >
        <Tag>
          <Title30>
            SMART <span style={{fontWeight: 400}}>SOLUTION</span>
          </Title30>
        </Tag>
      </WrapTag>

      <Box
        sx={{
          pl: '2%',
          pr: '2%',
        }}
      >
        <Box
          sx={{
            pt: '2%',
            pb: '4%',
          }}
        >
          <Title20>สินค้าและบริการที่ตอบโจทย์ทุกเรื่องบ้าน</Title20>
        </Box>

        <Box
          sx={{
            display: 'grid',
            justifyItems: 'center',
            gap: 4,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {listSolution.map((x) => (
            <React.Fragment key={x.id}>
              <BoxSolution text={x.text} onClick={() => handlerOpenModal(x)}>
                {x.icon}
              </BoxSolution>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SmartSolution;

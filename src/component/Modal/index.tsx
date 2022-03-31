import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SvgIcon from '@mui/material/SvgIcon';

import {Title17, Title20, Title30} from 'component/common/Font.styles';
import {IconCloseModal} from 'assets/icon/Icon';
import {COLORS} from 'core/utils/constant';
import {IListSolution} from 'pages/interactive/model/listSolution';

import {Grid} from '@mui/material';

export interface IMyModal {
  onOK: () => void;
  onCancel: () => void;
  visible: boolean;
  children: React.ReactNode;
}

const MyModal: React.FC<IMyModal> = ({onCancel, onOK, visible, children}): React.ReactElement => {
  return (
    <Modal open={visible} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '94%',
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
          }}
        >
          {children}

          <Box
            onClick={onCancel}
            sx={{
              bgcolor: COLORS.red,
              cursor: 'pointer',
              float: 'right',
              m: '24px',
              minWidth: '20%',
              p: '24px',
              pt: '28px',
              pb: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: '10px',
            }}
          >
            <SvgIcon
              component={IconCloseModal}
              inheritViewBox
              sx={{
                width: {
                  monitor43: '50px',
                  desktop: '24px',
                },
                height: {
                  monitor43: '50px',
                  desktop: '24px',
                },
              }}
            />
            <Title20 sx={{color: COLORS.white}}>ปิดหน้าต่าง</Title20>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export const ModalBodySolution: React.FC<{data: IListSolution; isZone?: boolean}> = ({
  data,
  isZone = false,
}): React.ReactElement => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          height: '70%',
          position: 'relative',
          ml: '5%',
          mr: '8%',
          mt: '5%',
        }}
      >
        <Box
          sx={{
            width: '85%',
            mt: '10%',
            overflowY: 'scroll',
          }}
        >
          <Box sx={{display: 'flex', gap: 3, alignItems: 'center'}}>
            {!isZone ? <SvgIcon component={data.icon} inheritViewBox sx={{width: '18%', height: '18%'}} /> : <></>}

            <Box sx={{display: 'grid', justifyItems: 'baseline'}}>
              <Title30 sx={{color: COLORS.red}}>{data.text}</Title30>

              <Title17>{data.subTitle}</Title17>
            </Box>
          </Box>

          <Box sx={{alignItems: 'center', justifyContent: 'center'}}>
            <Box
              sx={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: {
                  monitor43: '500px',
                  desktop: '300px',
                },
                width: {
                  monitor43: '100%',
                  desktop: '100%',
                },
                mt: '7%',
                mb: '8%',
              }}
            />

            <Box
              sx={{
                letterSpacing: '0.1rem',
                lineHeight: '1.4',
                mb: '10%',
              }}
            >
              <Title17 sx={{fontWeight: 400, textAlign: 'justify', whiteSpace: 'break-spaces'}}>{data.detail}</Title17>
            </Box>
          </Box>
        </Box>

        <Box sx={{mt: '1%'}}>
          <SvgIcon component={data.svgPlan} inheritViewBox sx={{width: '110%', height: '70%'}} />

          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              top: {
                monitor43: '50%',
                desktop: '60%',
              },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${data.qrCode})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                objectFit: 'contain',
                height: '140px',
                width: '140px',
              }}
            />

            <Box sx={{display: 'grid'}}>
              <Title17 sx={{fontWeight: 400}}>สแกน QR</Title17>
              <Title17 sx={{fontWeight: 400}}>เพื่อเปิดบนมือถือ</Title17>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ml: '5%'}}>
        <Title20>สินค้าและบริการแนะนำ</Title20>

        <Grid container ml="1%" mt="1%" width="88%" rowSpacing={1}>
          {data.listDetail.map((x, i) => (
            <Grid item xs={6} key={i}>
              <li>
                <Title17 sx={{fontWeight: 400}}>{x}</Title17>
              </li>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MyModal;

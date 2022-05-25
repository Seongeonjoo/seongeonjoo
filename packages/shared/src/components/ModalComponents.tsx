import React, { CSSProperties } from 'react';
import { autocompleteClasses, Button, Modal, Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { VerticalInterval } from '../components/LayoutComponents';
import { Icons } from '../components/IconContainer';
import { CustomButton } from '../components/ButtonComponents';

type ModalType = 'normal' | 'confirm';
export const ModalComponents: React.FC<{
  open: boolean;
  content: string;
  type?: ModalType;
  hideBackdrop?: boolean;
  title?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  style?: CSSProperties;
}> = (props) => {
  const type = props.type || 'normal';
  const confirmLabel = type == 'normal' ? '확인' : '예';

  const handlerConfirm = (event: React.MouseEvent<HTMLElement>) => {
    if (props.onConfirm) props.onConfirm();
  };

  const handlerExit = (event: React.MouseEvent<HTMLElement>) => {
    if (props.onClose) props.onClose();
  };

  const handlerModalClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (props.onClose) props.onClose();
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={handlerModalClose}
        hideBackdrop={props.hideBackdrop}
      >
        <ModalBoxContainer>
          <Stack justifyContent={'space-between'} flexDirection={'column'}>
            <Box style={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                style={{ width: '24px', height: '24px' }}
                onClick={handlerExit}
              >
                {<Icons.Exit />}
              </Button>
            </Box>

            <Box sx={{ pb: '32px' }}>
              {props.children ? (
                <>
                  {props.title ? (
                    <h2>{props.title}</h2>
                  ) : (
                    <VerticalInterval size={'40px'} />
                  )}
                  {props.children}
                </>
              ) : (
                <>
                  {props.title ? (
                    <h2 style={{ textAlign: 'center' }}>{props.title}</h2>
                  ) : (
                    <VerticalInterval size={'40px'} />
                  )}
                  <p style={{ textAlign: 'center' }}>{props.content}</p>
                </>
              )}
            </Box>

            <Stack justifyContent={'center'} direction={'row'} spacing={'10px'}>
              {type === 'confirm' && (
                <CustomButton
                  type={'small'}
                  label={'아니오'}
                  onClick={handlerExit}
                />
              )}
              <CustomButton label={confirmLabel} onClick={handlerConfirm} />
            </Stack>
          </Stack>
        </ModalBoxContainer>
      </Modal>
    </>
  );
};

const ModalBoxContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '480px',
  backgroundColor: 'white',
  borderRadius: '20px',
  margin: '18px 220px 18px 0',
  padding: '40px 40px 60px',
});

export const Modalfront: React.FC<{
  open: boolean;
  content: string;
  type?: ModalType;
  hideBackdrop?: boolean;
  title?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  style?: CSSProperties;
}> = (props) => {
  const handlerExit = (event: React.MouseEvent<HTMLElement>) => {
    if (props.onClose) props.onClose();
  };
  
  const handlerModalClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (props.onClose) props.onClose();
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={handlerModalClose}
        hideBackdrop={props.hideBackdrop}
      >
        <ModalFrontBoxContainer>
          <Stack justifyContent={'space-between'} flexDirection={'column'}>
            <Box sx={{ pb: '32px' }}>
              {props.children ? (
                <>
                  {props.title ? (
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h2 style={{ marginTop: 0 }}>{props.title}</h2>
                      <Button
                        style={{ width: '24px', height: '24px' }}
                        onClick={handlerExit}
                      >
                        {<Icons.Exit />}
                      </Button>
                    </Box>
                  ) : (
                    <VerticalInterval size={'40px'} />
                  )}
                  {props.children}
                </>
              ) : (
                <>
                  {props.title ? (
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ marginTop: 0 }}>{props.title}</h2>
                    <Button
                      style={{ width: '24px', height: '24px' }}
                      onClick={handlerExit}
                    >
                      {<Icons.Exit />}
                    </Button>
                  </Box>
                  ) : (
                    <VerticalInterval size={'40px'} />
                  )}
                  <p style={{ textAlign: 'center' }}>{props.content}</p>
                </>
              )}
            </Box>
          </Stack>
        </ModalFrontBoxContainer>
      </Modal>
    </>
  );
};

const ModalFrontBoxContainer = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '480px',
  margin: '18px 220px 18px 0',
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '30px 30px 30px;',
  '& .MuiTabPanel-root':{ 
    padding: '20px 2px  10px 2px'
  },
  '& .Mui-selected': {
    background: '#000'
  },
  '@media (min-width: 320px) and (max-width: 1000px)' : {
    bottom: '0',
    top: 'auto',
    transform: 'translateX(-50%)',
    width: '100%',
    maxHeight: 'calc(100% - 20px)',
    margin: '0',
    borderRadius: '20px 20px 0 0',
  }
});
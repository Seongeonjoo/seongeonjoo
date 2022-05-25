import React, {CSSProperties} from "react"
import {Button, Modal, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/styles";
import {VerticalInterval} from "~/components/LayoutComponents";
import {Icons} from "~/components/IconContainer"
import {ButtonComponents} from "~/components/ButtonComponents";

type ModalType = "normal" | "confirm";
export const ModalComponents: React.FC<{
  open: boolean,
  content: string,
  type?: ModalType,
  hideBackdrop?: boolean,
  title?: string,
  onConfirm?: () => void,
  onClose?: () => void,
  style?: CSSProperties,
}> = props => {
  const type = props.type || "normal";
  const confirmLabel = type == "normal" ? "확인" : "예";

  const handlerConfirm = (event: React.MouseEvent<HTMLElement>) => {
    if (props.onConfirm) props.onConfirm()
  }

  const handlerExit = (event: React.MouseEvent<HTMLElement>) => {
    if (props.onClose) props.onClose()
  }

  const handlerModalClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (props.onClose) props.onClose()
  }

  return <>
    <Modal
      open={props.open}
      onClose={handlerModalClose}
      hideBackdrop={props.hideBackdrop}
    >
      <ModalBoxContainer>
        <Stack justifyContent={"space-between"} flexDirection={"column"}>
          <Box style={{display: "flex", justifyContent: "right"}}>
            <Button style={{width: "24px", height: "24px"}} onClick={handlerExit}>
              {<Icons.Exit/>}
            </Button>
          </Box>

          <Box sx={{pb: "32px"}}>
            {
              props.children ? <>
                {
                  props.title ? <h2>{props.title}</h2> : <VerticalInterval size={"40px"}/>
                }
                {props.children}
              </> : <>
                {
                  props.title ?
                    <h2 style={{textAlign: "center"}}>{props.title}</h2> :
                    <VerticalInterval size={"40px"}/>
                }
                <p style={{textAlign: "center"}}>{props.content}</p>
              </>
            }
          </Box>

          <Stack justifyContent={"center"} direction={"row"} spacing={"10px"}>
            {
              type === "confirm" && <ButtonComponents type={"sub"} label={"아니오"} onClick={handlerExit}/>
            }
            <ButtonComponents label={confirmLabel} onClick={handlerConfirm}/>
          </Stack>
        </Stack>
      </ModalBoxContainer>
    </Modal>
  </>
}

const ModalBoxContainer = styled(Box)({
  position: 'absolute',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "480px",
  backgroundColor: "white",
  borderRadius: '20px',
  margin: "18px 220px 18px 0",
  padding: "40px 40px 60px",
})
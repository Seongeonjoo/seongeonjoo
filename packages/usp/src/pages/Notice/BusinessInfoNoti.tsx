/* eslint-disable array-callback-return */
// import React from "react"
import * as styles from './styles';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import BreadCrumb from '../../components/BreadCrumb';
import Typography from '@mui/material/Typography';
import { Modalfront } from 'shared/components/ModalComponents';
import { TabPanel } from '@mui/lab';
import {  CustomCheckBoxs,  CustomButton,} from 'shared/components/ButtonComponents';
import { CustomTabs } from 'shared/components/LayoutComponents';
import { CardActionArea,  CardContent,  CardMedia,  Chip,  Card, styled } from '@mui/material';
import { checkBoxParamTrain, checkBoxParamBus } from '~/pages/Temp/DummyData';
import { fetchBusinessInfoNoti, fetchBusinessInfoNotiDelete, fetchBusinessInfoNotiGet, fetchEduInfoNotiGet, fetchGetCommCode } from "~/fetches";
import { useCallback } from "react";

export interface CodeType {
  code: string;
  codeGroup: string;
  codeNm: string;
  codeType?: string;
  createdDt?: number;
  creatorId?: string;
  enabled?: boolean;
  remark?: any;
  sortOrder?: number;
  updatedDt?: number;
  updaterId?: string;
}


function BusinessInfoNoti() {
  const InfoModal = () => {
    type modalType = 'normal' | 'confirm' | 'none';
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<modalType>('none');
    const [data, setData] = useState(false);
    const handlerModalOpen = (type: modalType) => {
      setOpen(true);
    };
    const ModalTab = () => {
      const [busiList, setBusi]:any = useState([]);
      const [eduList, setEdu]:any = useState([]);

      const getList = () => {
        fetchBusinessInfoNotiGet().then((res:any) => {
          console.log(res)
          setBusi(res);
        })
        fetchEduInfoNotiGet().then((res:any)=>{
          console.log(res);
          setEdu(res);
        })
      }
      useEffect(() => {
        getList();
      },[]);

      const [busiTotal,setBusiTotal] = useState(busiList.length);
      const [eduTotal,setEduTotal] = useState(eduList.length);
      
      useEffect(()=>{
        if(busiList.length>5){
          setBusiTotal(5)
        }else{
          setBusiTotal(busiList.length)
        }
        
        if(eduList.length>5){
          setEduTotal(5)
        }else{
          setEduTotal(eduList.length)
        }
      },[eduList,busiList])
      
      const pre = (i:number) =>{
        setI(i-1)
      }
      const next = (i:number) => {
        setI(i+1)
      }

      const [i, setI] = useState(0);
      return (
      <>
      {busiTotal>0 || eduTotal>0?
        <div css={styles.modalCustom}>
          <CustomTabs tabs={[`????????????(${busiTotal})`, `????????????(${eduTotal})`]} onClick={()=>setI(0)}>
            {busiTotal>0?
            <TabPanel value={`????????????(${busiTotal})`} >
                <Stack direction="row" spacing={1} css={styles.tagstyle}>
                  <div>
                    <Chip className="blue" label={busiList[i].recomendCl} />
                    <Chip className="wh" variant="outlined" label={busiList[i].pblancSttus} />
                  </div> 
                  <Chip
                    label={'?????? D-' + busiList[i].rmndrDay}
                    className="green"
                    />
                </Stack>
                <Typography variant="h6" component="div">
                  {busiList[i].pblancNm}
                </Typography>
                <hr className="m20"/>
                <div className="modal_text">
                  {busiList[i].pblancSumry}
                </div>
                {i>0?
                  <div onClick={() => {pre(i)}}>??????</div>
                  :null}
                {i<busiTotal-1? 
                  <div onClick={() => {next(i)}}>??????</div>
                  :null}
            </TabPanel>:null
            }
            {/* ???????????? ???????????? api ?????? */}
            {eduTotal>0?
            <TabPanel value={`????????????(${eduTotal})`} >
              <Card css={styles.modalCard}>
                <CardActionArea>
                  <Stack direction="row" className="tag" spacing={1}>
                    <div>
                      <Chip className="blue" label={'???????????????'} />
                      <Chip className="wh" variant="outlined" label={'?????? D-' + 1} />
                    </div>
                    <Chip
                      label={'????????????'}
                      className="green"
                      />
                  </Stack>
                  <CardMedia component="img" height="267" image={'/images/main/list_img01.png'} alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      AI ?????? ???????????? ???????????? ??????
                    </Typography>
                    <p className="sub_txt icon01">??? 20 ??????</p>
                    <p className="sub_txt icon02">???????????? 17??????</p>
                    <p className="sub_txt icon03">
                      ???????????? 2021-12-01 ~ 2021-12-15
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </TabPanel>:null
            }
          </CustomTabs>
        </div>:null}
      </>
      );
    };
    return (
      <>
        <div onClick={() => {
            handlerModalOpen('normal');
          }}>
          ???????????????
        </div>
        {/* <CustomButton
          style={{background:'url(/images/common/return.png) 18px center no-repeat', paddingLeft: '50px'}}
          label={'?????????????????? ??????'}
          type={'wauto'}
          color={'outlinedblack'}
          onClick={() => {
            handlerModalOpen('normal');
          }}
        /> */}
        <Modalfront
          open={open}
          type={'normal'}
          title={'??????????????????'}
          content={type.toString() + ' ??????'}
          onConfirm={() => {
            setOpen(false);
          }}
          onClose={() => { setOpen(false); if (data) setData(false);}}
          >
          <ModalTab />
        </Modalfront>
      </>
    );
  };

  const [bus,setBus] = useState<string[]>([]);
  const [train,setTrain] = useState<string[]>([]);

  const CustomCheckBoxsBus = useCallback(() => {
    return (
      <>
        <CustomCheckBoxs
          row
          checkbox={checkBoxParamBus}
          onClick={(s: string[]) => {
            if (s.length > 0) console.log(s);
            setBus(s);
          }}
          />
      </>
    );
  },[]);
  
  const CustomCheckBoxsTrain = useCallback(() => {
    return (
      <>
        <CustomCheckBoxs
          row
          checkbox={checkBoxParamTrain}
          onClick={(s: string[]) => {
            if (s.length > 0) console.log(s);
            setTrain(s);
          }}
          />
      </>
    );
  },[]);

  const save = () => {
    var infoNtcnList: { recomendClCd: string; recomendClTypeCd: string | undefined; }[] = [];
    if(bus.length>0){
      bus.map((bus:any)=>{
        const newArray = recommendClCode.filter(function(element){
          return element.codeNm === bus;
        });
        let infoNtcn = {
          recomendClCd : newArray[0].code,
          recomendClTypeCd : newArray[0].codeType
        };
        infoNtcnList.push(infoNtcn);
      })
    }
    //????????????api ??????**************
    // if(train.length>0){
    //   train.map((train:any)=>{
    //     const newArray = recommendClCode.filter(function(element){
    //       return element.codeNm === train;
    //     });
    //     let infoNtcn = {
    //       recomendClCd : newArray[0].code,
    //       recomendClTypeCd : newArray[0].codeType
    //     };
    //     infoNtcnList.push(infoNtcn);
    //   })
    // }
    console.log(infoNtcnList);
    fetchBusinessInfoNoti(infoNtcnList);
    
  }

  const [recommendClCode,setRecommendClCode] = useState<CodeType[]>([]);
  // ?????? ??????
  const getCommCode = () => {
      fetchGetCommCode("RECOMEND_CL")
        .then((res) => {
          setRecommendClCode(res);
        })
        .catch((e) => {
          console.log('%c getCommCode[???????????? ??????]' + e,);
        });
    
  };
  useEffect(()=>{
    getCommCode();
  },[])


  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit">??????????????????</h2>
              <p>
                ???????????? ?????? ??? ?????? ????????? ??????????????????. <br />
                ????????? ????????? ????????? ????????? ????????? ????????? ????????? ????????????.
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
      <div className="content">
          <div css={styles.detal_list}>
            <div className="Check_listbox">
              <Stack spacing={6} direction="column" className="sub_tit">
                <Typography variant="h4" component="div">
                  ?????? ??????
                </Typography>
              </Stack>
              <CustomCheckBoxsBus />
              <Stack
                spacing={6}
                direction="column"
                className="sub_tit"
                sx={{ mt: 4 }}
              >
                <Typography variant="h4" component="div">
                  ?????? ??????
                </Typography>
              </Stack>
                <CustomCheckBoxsTrain />
            </div>
              <Stack spacing={2} direction="row" css={styles.btnGroup} sx={{ mt: 8 }}>
                <InfoModal />
                <CustomButton
                  style={{background:'url(/images/common/return.png) 18px center no-repeat', paddingLeft: '50px'}}
                  label={'?????????????????? ??????'}
                  type={'wauto'}
                  color={'outlinedblack'}
                  onClick={() => {
                    fetchBusinessInfoNotiDelete();
                  }}
                />
              <CustomButton label={'??????'} type={'frontNomal'} onClick={()=>save()}/>
            </Stack>
          </div>
      </div>
      </Box>
    </div>
  );
}


export default BusinessInfoNoti;

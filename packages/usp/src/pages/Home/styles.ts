import { css } from '@emotion/react';

export const container = css`
  letter-spacing: -0.04em;
  .full-page-controls{
    display: none;
  }
  .blue{
    color: #4063EC;
  }
  .MuiTypography-root{
    font-weight: 800;
    letter-spacing: -0.04em;
  }
  .MuiTypography-h2{
    font-size: 80px;
  }
  .content{
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 0px;
  }
  .MuiTypography-h5 {
    font-size: 24px; 
    font-weight: 800;
    margin-bottom: 20px;
  }
  .data{
    margin-left: 10px;
    font-size: 16px;
    > em {
      font-style: normal;
      font-weight: bold;
      color: #4063EC;
    }
  }
  hr{
    margin-top: 60px;
    margin-bottom: 60px;
    border: none;
    border-top: 1px solid #ccc;
    width: 100%;
  }
  .md_btn{
    color: #fff;
    border: 1px solid #fff;
    width: 220px;
    height: 55px;
    border-radius: 0;
    margin-top: 10px;
    background-color: rgba(0,0,0,0);
  }
  .content{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .content{
      padding: 0 15px;
      width: 100%;
    }
    hr{
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .MuiTypography-h2{
      font-size: 36px;
    }
    .md_btn{
      display: none;
    }
  }
`;

export const maincont01 = css`
  position: relative;
  overflow: hidden;
  display: block;
  color: #fff;
  height: 100vh;
  .main_benner{
    text-align: center;
    background-color: #000;
    height: 100%;
    width: 100%;
    > img {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      height: 100%;
    }
  }
  .main_txtbox{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    max-width: 1080px;
    width: 100%;
    display: flex;
    .main_tit{
      flex: 1;
      font-size: 80px;
      letter-spacing: -4px;
      font-weight: 100;
      strong {
        font-weight: 800;
      }
    }
    p {
      flex: 1;    
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1.8;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .main_txtbox{
      padding: 0 15px;
      text-align: left;
      flex-direction: column;
      .main_tit{
        font-size: 50px;
        lineheight: 60px;
        margin-bottom: 40px;
      }
      p {
        position: relative;
        line-height: 1.8;
      }
    }
  }
`;

export const maincont02 = css`
  position: relative;
  height: 100vh;
  background-color: #1F2437;
  color: #fff;
  .swiper-button-next, .swiper-button-prev{
    display: none;
  }
  .MuiTypography-h2{
    margin-bottom: 93px;
    position: relative;
    .title_icon{
      position: absolute;
      top: 10px;
      right: -73px;
      width: 83px;
      height: 100px;
      background: url('/images/main/main_titleicon01.png') no-repeat;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTypography-h2{
      margin-bottom: 68px;
      position: relative;
      .title_icon{
        position: absolute;
        top: 0px;
        right: -43px;
        width: 43px;
        height: 53px;
        background: url('/images/main/main_titleicon01.png') no-repeat;
        background-size: 100%;
      }
    }
  }
`;

export const slide_cont = css`
.swiper-container{
  padding: 0 10px 80px;
}
.MuiCardContent-root{
  height: 145px;
}
  .swiper-pagination-bullets{
    position: absolute;
    bottom: 0;
    display: block;
    z-index: 99;
    width: auto;
    height: 20px;
    text-align: left;
    &:after{
      content: '';
      margin-left: 3px;
      padding-right: 13px;
      background: url('/images/common/stop.png') bottom no-repeat;
    }
    .swiper-pagination-bullet{
      display: inline-block;
      width: 60px;
      height: 2px;
      background-color: #fff;
      margin-right: 10px;
      opacity: 1;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active{
      background-color: #1CCDCC;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .swiper-pagination-bullets{
      text-align: left;
      .swiper-pagination-bullet{
        width: 40px;
      }
    }
  }
`;
export const slide_cont02 = css`
.swiper-container{
  padding: 0 5px 50px;
}
  .swiper-pagination-bullets{
    position: absolute;
    bottom: 0;
    display: block;
    z-index: 99;
    width: auto;
    height: 20px;
    .swiper-pagination-bullet{
      display: inline-block;
      width: 60px;
      height: 2px;
      background-color: #ccc;
      margin-right: 10px;
      opacity: 1;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active{
      background-color: #1CCDCC;
    }
  }
  .MuiCard-root-hotslide .MuiTypography-root{
    color: #000;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .swiper-pagination-bullets{
      .swiper-pagination-bullet{
        width: 40px;
      }
    }
  }
`;
export const hotslide = css`
  display: flex;
  background-color: rgba(0,0,0,0);
  border-radius: 15px;
  color: #fff;
  max-width: 380px;
  box-shadow: 0px 2px 3px 1px rgb(0, 0, 0, 0.3);
  .black{
    color: #222;
  }
  .sub_txt{
    color: #8F929B;
    line-height:1;
    font-size: 14px;
    margin: 7px 0;
  }
  .MuiTypography-root{
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -1.2px; 
  }
  .tag{
    position: absolute;
    top:0;
    z-index: 2;
    justify-content: space-between;
    width: 100%;
    .wh{ background-color:#fff; color: #333; border-radius: 0 15px 0 10px;}
    .blue{ background-color:#4063EC; color: #fff; border-radius: 15px 0 10px 0; }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTypography-h5 {
      font-size: 22px; 
    }
    .MuiSelect-select{
      font-size: 14px;
    }
    .MuiTypography-root{
      font-size: 16px;
    }
    .swiper-pagination-bullets{
      .swiper-pagination-bullet{
        width: 40px;
      }
    }
  }
`;


export const maincont03 = css`
  position: relative;
  height: 100vh;
  background-color: #F5F5F5;
  .MuiTypography-h2{
    padding-bottom: 430px;
  }
  img.char01{
    position: absolute;
    top: 150px;
  }
  .hotslide {
    .MuiTypography-root{
      color: #333;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    img.char01{
      display: none;
    }
    .MuiTypography-h2{
      padding-bottom: 0;
    }
  }
`;

export const stack = css`
  justify-content:space-between;
  flex-direction: row;
  @media (min-width: 320px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const radioBox = css`
.txt{
  font-size: 20px;
  line-height: 34px;
  color: #666;
  margin-bottom: 60px;
}
dl{
  display: flex;
  padding-bottom: 70px;
  position: relative;
  &.arrow{
    &:after{
      content: '';
      position: absolute;
      width: 40px;
      height: 20px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      background: url(/images/common/row.png) bottom no-repeat;
    }
  }
  dt {
    span {
      display: block;
      font-size: 13px;
      color: #4063EC;
      margin-bottom: 5px;
    }
    strong{
      font-size: 22px;
    }
  }
  dd{
    max-width: 480px;
    .MuiFormControlLabel-root{
      padding: 10px 0;
    }
    &.center{
      .MuiFormControlLabel-label{
        padding: 25px 0;
      }
    }
  }

}
  .MuiFormGroup-root{
    flex-direction: row;
    .MuiButtonBase-root{
      display: none;
    }
  }
  .MuiFormControlLabel-label{
    margin-left: 15px;
    text-align: center;
    width: 140px;
    height: 80px;
    line-height: 1.6;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    padding: 13px 0;
    > div{
      span{
        display: block;
        font-size: 14px;
        color: #707070;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    margin-top: 0;
    .txt{
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
      margin-top: 0;
    }
    dl{
      flex-direction: column;
      dt {
        strong{
          font-size: 20px;
        }
      }
      dd{
        margin-top : 15px;
        margin-left: 0;
        .MuiFormControlLabel-label{
          padding: 12px 0;
          font-size: 14px;
          line-height: 1.2;
          height: 60px;
        }
        &.center{
          .MuiFormControlLabel-label{
            padding: 20px 0;
          }
        }
      }
    }
  }
`;

export const maincont04 = css`
  position: relative;
  overflow: hidden;
  display: flex;
  height: 100vh;
  background-color: #4063EC;
  color: #fff;
  > div {
    position: relative;
    flex: 0 0 50%;
    img {
      height: 100%;
    }
    &:first-child{
      position: relative;
    }
    .content{
      max-width: 630px;
      left: auto;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .sub_txt01{
    color: #C6D0F9;
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 100px;
  }
  .sub_txt02{
    color: #fff;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 75px;
    .em{
      color: #A0B1F6;
      display: block;
      font-size: 14px;
    }
  }
  .count{
    color: #C6D0F9;
    b{
      color: #fff;
    }
    margin-bottom: 32px;
  }
  .MuiTypography-h4{
    font-size: 40px;
    display: flex;
    > div{
      width: 160px;
      margin: 35px 0;
    }
  }
  hr{
    border-top: 1px solid #4FDFC5;
  }
  .MuiTypography-h2{
    position: relative;
    .title_icon{
      position: absolute;
      top: 90px;
      left: 230px;
      width: 113px;
      height: 91px;
      background: url('/images/main/main_titleicon02.png') no-repeat;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    flex-direction: column;
    > div {
      flex: 0 0 30%;
      height: 100%;
      &:first-child{
        flex: 0 0 70%;
        padding-top: 50px;
      }
      .content{
        max-width: 100%;
      }
      img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: auto;
      }
    }
    .sub_txt01{
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 50px;
    }
    .sub_txt02{
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 50px;
      .em{
        font-size: 13px;
      }
    }
    .count{
      margin-bottom: 0;
    }
    .MuiTypography-h4{
      font-size: 28px;
      display: flex;
      > div{
        width: 150px;
        margin: 25px 0;
      }
    }
    hr{
      display: none;
    }
    .MuiTypography-h2{
      position: relative;
      .title_icon{
        top: 0px;
        left: 220px;
        width: 50px;
        height: 40px;
        background-size: 100%;
      }
    }
  }
`;

export const back_slide = css`
  .swiper-container{
    position: absolute;
    height: 100vh;
    width: 100vh;
  }
  .swiper-slide{
    background-position: center;
    background-size: cover;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    position: absolute;
    bottom: 20%;
    left: -630px;
    display: block;
    z-index: 99;
    width: auto;
    height: 20px;
    &:after{
      content: '';
      padding-right: 13px;
      margin-left: 3px;
      background: url('/images/common/stop.png') bottom no-repeat;
    }
    .swiper-pagination-bullet{
      display: inline-block;
      width: 60px;
      height: 2px;
      background-color: #fff;
      margin-right: 10px;
      opacity: 1;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active{
      background-color: #1CCDCC;
    }
  }
  // 슬라이드 화살표 영역
  .swiper-button-next:after,.swiper-button-prev:after{
    display: none;
  }
  .swiper-button-next{
    left: -80px;
    bottom: 20%;
    top: auto;
    background: url('/images/common/next01.png') no-repeat;
    width: 8px;
    height: 13px;
  }
  .swiper-button-prev{
    left: -105px;
    bottom: 20%;
    top: auto;
    background: url('/images/common/prev01.png') no-repeat;
    width: 8px;
    height: 13px;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .swiper-container{
      height: 100%;
      width: 100%;
      text-align: center;
      .swiper-slide{
        overflow: hidden;
      }
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
      bottom: 110%;
      left: 20px;
      width: auto;
      height: 20px;
      .swiper-pagination-bullet{
        width: 40px;
        margin-right: 10px;
        border-radius: 0;
      }
    }
  }
`;

export const maincont05 = css`
  position: relative;
  height: 100vh;
  background-color: #1F2437;
  color: #fff;
  .MuiTypography-h2{
    position: relative;
    > span{
      color: #6E7384;
    }
    .title_icon{
      position: absolute;
      top: -15px;
      right: -50px;
      width: 130px;
      height: 140px;
      background: url('/images/main/main_titleicon03.png') no-repeat;
    }
  }
  .right_cont{
    width: 50%;
    .btn{
      justify-content: end;
      > button{
        display: block;
        height: 56px;
        width: 220px;
        border-radius: 0;
        line-height: 1.5; 
        color: #fff;
        border: 1px solid #fff;
        background-color: #1f2437;
      }
    }
  }
  .MuiTypography-h4{
    font-size: 40px;
    display: flex;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .sub_txt01{
    font-size: 20px;
    line-height: 34px;
    color: #BCBDC3;
    margin-bottom: 60px;
  }
  .sub_txt02{
    font-size: 20px;
    line-height: 40px;
    color: #fff;
    margin-bottom: 70px;
  }
  .em{
    color: #8F929B;
  }
  .txt_box{
    flex: 0 0 50%;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTypography-h2{
      margin-right: 0;
      .title_icon{
        top: -8px;
        right: -30px;
        width: 65px;
        height: 65px;
        background-size: 100%;
      }
    }
    .right_cont{
      width: 100%;
      .btn{
        justify-content: start;
        > button{
          height: 48px;
          width: 165px;
          line-height: 1.5; 
          font-size: 15px;
        }
      }
    }
    .MuiTypography-h4{
      margin-top: 60px;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .sub_txt01{
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 24px;
    }
    .sub_txt02{
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 12px;
    }
    .em{
      color: #8F929B;
    }
    .txt_box{
      flex: 0 0 100%;
    }
  }
`;

export const main05_slide = css`
  flex: 0 0 50%;
  position: relative;
  margin-top: 80px;
  .swiper-container{
    width: 570px;
    height: 390px;
  }
  .swiper-slide{
    background-position: center;
    background-size: cover;
    img {
      height: 100%;
    }
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    position: absolute;
    bottom: 0%;
    left: -680px;
    display: block;
    z-index: 99;
    width: auto;
    height: 20px;
    &:after{
      content: '';
      padding-right: 13px;
      margin-left: 3px;
      background: url('/images/common/stop.png') bottom no-repeat;
    }
    .swiper-pagination-bullet{
      display: inline-block;
      width: 60px;
      height: 2px;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 0;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      background-color: #1CCDCC;
    }
  }
  // 슬라이드 화살표 영역
  .swiper-button-next:after,.swiper-button-prev:after{
    display: none;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    flex: 0 0 100%;
    margin-top: 0;
    .swiper-container{
      height: 196px;
      width: 300px;
      margin:0;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
      bottom: -10%;
      left: 0;
      width: 100%;
      height: 20px;
      text-align: left;
      .swiper-pagination-bullet{
        display: inline-block;
        width: 40px;
        height: 2px;
        background-color: #fff;
        margin-right: 10px;
        border-radius: 0;
      }
      .swiper-pagination-bullet-active{
        background-color: #1CCDCC;
      }
    }
    // 슬라이드 화살표 영역
    .swiper-button-next:after,.swiper-button-prev:after{
      display: none;
    }
  }
`;

export const btnstyle = css`
button{
  border-radius: 0;
  font-weight: Bold;
  font-size: 16px;
  padding: 16px 36px;
  letter-spacing: -0.4px;
}
button.lg{
  min-width: 200px;
}
button.md{
  border-radius: 4px;
  font-weight: normal;
  padding: 8px 16px;
}
.blue{
  background-color: #4063EC;
}
.gray{
  background-color: #ADAEB2;
}
.gray:hover{
  background-color: #9B9B9B;
}
.sky{
  background-color: #EBEFFD;
  color: #4063EC;
}
.sky:hover{
  background-color: #d4deff
}
`;
export const link = css`
  a{
    color: blue;
  }
`;

export const btnGroup = css`
  justify-content: center;
  > button{
    display: block;
    height: 60px;
    border-radius: 40px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5; 
    background-color: #4063EC;
    &.linebtn {
      border: 1px solid #fff;
      background-color: #1f2437;
    }
    &.green{
      background-color: #1CCDCC;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    > button{
      font-size: 16px;
    }
  }
`;
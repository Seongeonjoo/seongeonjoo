import { css } from '@emotion/react';

export const container = css`
  position: relative;
  background-color: #1f2437;
  height: 100%;
`;

export const backPass = css`
position: absolute;
top: 40px;
left: 0;
  &:before{
    content:'';
    display: inline-block;
    background: url('/images/common/pass_left.png');
    width: 7px;
    height: 14px;
    margin-right: 16.5px;
    @media (min-width: 320px) and (max-width: 1000px) {
      display: none;
    }
  }
`;
export const content = css`
  position: relative;
  color: #fff;
  background-color: #1f2437;
  padding: 100px 160px;
  max-width: 1260px;
  margin: 0 auto;
  .tit {
    h1 {
    font-size: 43px;
    letter-spacing: -1.2px;
    }
  }
  .confirm_tit {
    margin: 147px auto 0;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 100px;
      letter-spacing: -0.6px;
    }
  }
  
  .MuiStepLabel-label.Mui-active,.MuiStepLabel-label.Mui-completed{
    color: #1CCDCC;
    border: none;
  }
  .MuiStepIcon-root.Mui-completed,.MuiStepIcon-root.Mui-active{
    color: #1CCDCC;
    border: none;
    .MuiStepIcon-text{
      font-weight: bold;
    }
  }
  .MuiStepIcon-root{
    border: 1px solid #fff;
    border-radius: 20px;
  }
  .MuiStepLabel-alternativeLabel{
    color: #fff;
  }
  .css-nen11g-MuiStack-root{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    padding: 20px 15px 60px;
    .tit {
      h1 {
      font-size: 32px;
      }
    }
  }
`;
export const btnGroup = css`
  justify-content: center;
  > button{
    height: 60px;
    border-radius: 40px;
    width: 220px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5; 
    background-color: #4063EC;
    &.linebtn {
      border: 1px solid #fff;
      background-color: #1f2437;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    > button{
      font-size: 16px;
    }
  }
`;
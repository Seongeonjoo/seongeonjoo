import { css } from '@emotion/react';

export const container = css`
  position: relative;
  background-color: #1f2437;
  height: 100vh;
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
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    display: none;
  }
`;
export const content = css`
  position: relative;
  color: #fff;
  padding: 100px 160px;
  max-width: 1260px;
  margin: 0 auto;
  .tit {
    h1 {
    font-size: 43px;
    letter-spacing: -1.2px;
    }
  }
  .sub_tit {
    h2 {
    font-size: 32px;
    letter-spacing: -1.2px;
    }
    p{
      font-size: 14px;
      color: #8f929b;
      line-height: 30px;
      margin-bottom: 30px;
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
  .MuiFormGroup-root{
    display: block;
    position: relative;
    > div{
      flex: 0 0 50%;
      border-bottom: 1px solid #515668;
      padding: 10px 0;
    }
    span.gt{
      &:after{
        content:'';
        display: inline-block;
        background: url('/images/common/pass_right.png') no-repeat;
        width: 5px;
        height: 12px;
        margin-left: 10px;
        padding-right: 15px;
      }
      &.blue {
        color: #1CCDCC;
      }
      &.gray {
        color: #707070;
      }
    }
  }
  .MuiCheckbox-root, .MuiInputLabel-root, .MuiFormControlLabel-root{
    color: #fff;
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
  .Mui-checked{
    color: #fff;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    padding: 40px 15px;
    .tit {
      h1 {
      font-size: 32px;
      }
    }
  }
`;

export const listbox = css`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

export const errbox = css`
  position: absolute;
  text-align: right;
  color: #fedc00;
  right: 0;
  top: 0; 
  padding-top: 22px;
`;

export const singTextbox = css`
  display: flex;
  margin-bottom: 80px;
  .inputtxt{
    margin-top: 20px;
    width: 160px;
  }
  label{
    &.Mui-focused {
      color: #fff;
    }
  }
  .MuiOutlinedInput-root {
    color: #fff;
    fieldset {
      border-color: #707070;
    }
    &:hover{
      fieldset {
        border-color: #fff;
      }
    }
  }
  .MuiFormLabel-asterisk{
    color: #1CCDCC;
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
`;
export const modalpop = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 780px;
  background-color: #fff;
  box-shadow: 24;
  padding: 40px;
  border-radius: 20px;
  h2 {
    font-size: 20px; 
    font-weight: bold;
    > button{
      color: #707070;
      position: absolute;
      right: 20px;
    }
  }
  p{
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 16px;
    height: 400px;
    overflow: auto;
  }
`;
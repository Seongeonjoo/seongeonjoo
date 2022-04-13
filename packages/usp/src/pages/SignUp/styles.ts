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
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  padding: 200px 80px;
  max-width: 1260px;
  margin: 0 auto;
  .tit {
    h1 {
    font-size: 43px;
    letter-spacing: -1.2px;
    }
    p{
      font-size: 14px;
      color: #8f929b;
      line-height: 30px;
      margin-bottom: 70px;
      letter-spacing: -0.6px;
    }
  }
  & .MuiCard-root{
    padding: 10px 20px 40px;
    text-align: center;
    min-width: 381px;
    letter-spacing: -1.2px;
    h3 {
      font-size: 20px;
      margin-bottom: 12px;
    }
    p {
      margin: 0;
    }
  }
  & .MuiGrid-root{
    margin-left: 0;
  }
  & .MuiGrid-item{
    display: flex;
    padding-left: 0;
    .img {
      img{
        width:100px;
        height: 100px;
      }
      margin-right: 20px;
    }
    .cont {
      margin-top: 22px;
      > div {
        font-size: 18px;
        font-weight: bold;
      }
      > p {
        letter-spacing: -0.4px;
      }
    }
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
export const signbtn = css`
  height: 60px;
  button{
    font-size: 16px;
    line-height: 1;
    border-radius: 50px;
    background-color: #4063ec;
    width: 220px;
    font-weight: bold;
    margin: 0 auto;
  }
`

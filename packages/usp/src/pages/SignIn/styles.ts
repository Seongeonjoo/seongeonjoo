import { css } from '@emotion/react';

export const container = css`
  position: relative;
  background-color: #1f2437;
  height: 100%;
`;
export const content = css`
  position: relative;
  background-color: #1f2437;
  color: #fff;
  text-align: center;
  padding: 70px 20px;
  max-width: 505px;
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
  @media (min-width: 320px) and (max-width: 1000px) {
    padding: 20px 15px 60px;
    .tit {
      h1 {
      font-size: 32px;
      }
    }
  }
`;
export const signinput = css`
  & .MuiInputLabel-root {
    color: #fff;
    .Mui-focused{
      color: #fff;
    }
  }
`
export const linkbtn = css`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 23px auto 35px;
> a {
  color: #ccc;
  line-height: 1;
  border-right:1px solid #707070;
  padding-right: 20px;
  margin-left: 17px;
  font-size: 14px;
  &:last-child{
    border-right: none;
  }
}
`

export const signbtn = css`
  height: 60px;
  margin-bottom: 60px;
  button{
    font-size: 16px;
    line-height: 1;
    border-radius: 50px;
    background-color: #4063ec;
  }
`

export const snsicon = css`
  margin: 0 auto 65px;
  width: max-content;
  button{
    border-radius: 50px;
    min-width:50px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    &.kakao{background: url('/images/common/kakao_icon.png')}
    &.naver{background: url('/images/common/naver_icon.png')}
    &.google{background: url('/images/common/google_icon.png')}
  }
`

export const error = css`
  color: #fedc00;
  line-height: 16px;
  letter-spacing: -1.2px; 
`
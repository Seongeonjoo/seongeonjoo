import { css } from '@emotion/react';

export const container = css`
display: none;
width: 100%;
height: 100%;
position: relative;

.footer {
  width: 100%;
  margin: 0 auto;
  height: 453px; /* footer의 높이 */
  position: absolute;  
  bottom: 0;
  left: 0;
  background-color: #fff;
}

@media (min-width: 320px) and (max-width: 1000px) {
    
`;

export const slide_cont = css`
  height: 80px;
  padding: 30px 0;
  border-bottom: 1px solid #CCC;
  border-top: 1px solid #CCC;
`;

export const box01 = css`
  flex: 0 0 80%;
  padding: 60px 20% 80px;
  border-right: 1px solid #CCC;
  nav{
    > ul{
      display: flex;
      font-size: 14px;
      > li {
        width: 140px;
        button{
          font-weight: bold;
          margin-bottom: 15px;
          font-size: 15px;
        }
        > ul{
          > li {
            margin: 10px 0;
          }
        }
      }
    }
  }
`;
export const box02 = css`
  flex: 0 0 20%;
  padding: 30px 0;
  border-right: 1px solid #CCC;
`;
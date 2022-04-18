import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  max-width: 550px;
  margin-left: -330px;
  font-size: 18px;
  letter-spacing: -0.2px;
  z-index: 999;
`;

export const menu = css`
  display: flex;
  li {
    line-height: 2;
    flex: 1;
    background-color: #ccc;
    text-align: center;
    button {
      font-weight: bold;
      color: #fff;
      background-color: rgb(0, 0, 0, 0);
      box-shadow: none;
      border: none;
      &.active{
        border-bottom: 2px solid #fff;
      }
    }
      }
      > ul {
        display: flex;
        position: absolute;
        bottom: -40px;
        left: 0;
        background-color: #ccc;
        height: 40px;
        justify-content: center;
        width: 100%;
        > li {
          line-height: 1.6;
          margin: 5px 20px;
          flex: initial;
          a.active {
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
    button.active + ul {
      display: flex;
    }
  }
`;

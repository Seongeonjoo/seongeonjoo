import { css } from '@emotion/react';

export const container = css`
  position: relative;
  display: flex;
  padding: 17px 40px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-bottom: 1px solid #707070;
  justify-content: space-between;
  z-index: 999;
  font-size: 14px;
`;

export const containerFactor = css`
  position: relative;
  display: flex;
  padding: 17px 40px;
  background-color: #160909;
  color: #fff;
  border-bottom: 1px solid #707070;
  justify-content: space-between;
  z-index: 999;
  font-size: 14px;
`;

export const sideon = css`
  display: flex;
  flex: 1;
  > p {
    margin-right: 10px;
    em.on{
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #2DC11C;
      border-radius: 10px;
      margin-left: 4px;
    }
  }
`;
export const portal = css`
  display: flex;
  flex: 0 0 60%;
  justify-content: center;
  > li{
    margin: 0 10px;
  }
  > li a{
    color: #ccc;
    font-size: 14px;
  }
`;

export const utility = css`
  display: flex;
  flex: 1;
  justify-content: end;
  > li{
    margin: 0 10px;
  }
  > li a{
    color: #fff;
  }
`;

export const space = css`
  flex: 1;
`;
export const item = css`
  flex: 1;
`;

import { css } from '@emotion/react';
export const container = css`
  margin-top: 131px;
  padding-bottom: 120px;
  .content {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
  }
  .txtblue {
    color: #4063ec;
  }
  @media (min-width: 320px) and (max-width: 820px) {
    margin-top: 131px;
    padding-bottom: 60px;
  }
`;

export const sub_cont01 = css`
  position: relative;
  display: block;
  color: #fff;
  .benner {
    text-align: center;
    background-color: #1f2437;
    width: 100%;
  }
  .txtbox {
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    .tit {
      font-size: 48px;
      letter-spacing: -4px;
      font-weight: 800;
      margin-bottom: 23px;
      margin-top: 0;
    }
    p {
      line-height: 1.8;
    }
  }
  .search_btn {
    position: absolute;
    right: 0;
    border-radius: 30px;
    width: 140px;
    height: 60px;
    background-color: #4063ec;
    font-size: 18px;
  }

  .bottom_card {
    height: 60px;
    max-width: 1260px;
    width: 100%;
    padding: 14px 18px 14px 20px;
    margin: 0 auto;
    border-radius: 15px 15px 0 0;
    background-color: #f5f5f5;
    > p {
      line-height: 1.75;
      font-family: NotoSansCJKKR;
      margin: 4px 0;
      font-weight: bold;
      color: #222;
      letter-spacing: -0.64px;
    }
    .tag {
      .MuiChip-root {
        border-radius: 5px;
        font-size: 14px;
        &.blue {
          background-color: #4063ec;
          color: #fff;
        }
        &.wh {
          background-color: #fff;
          color: #707070;
          border: 1px solid #ccc;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 820px) {
    .txtbox {
      .tit {
        font-size: 28px;
        margin-bottom: 19px;
      }
      p {
        font-size: 14px;
        line-height: 2;
      }
    }
    .search_btn {
      width: 80px;
      height: 50px;
      font-size: 16px;
    }
    .bottom_card {
      height: 48px;
      padding: 9px 15px 9px 15px;
      > p {
        margin: 4px 0;
        letter-spacing: -0.56px;
        font-size: 14px;
        line-height: 1.5;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 10px;
      }
      .tag {
        .MuiChip-root {
          font-size: 12px;
          height: 30px;
        }
      }
    }
  }
`;
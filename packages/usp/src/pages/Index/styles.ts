import { css } from '@emotion/react';

export const container = css`
  .blue{
    color: #4063EC;
  }
  .MuiTypography-root{
    font-weight: 800;
  }
  .content{
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 0px;
  }
`;

export const maincont01 = css`
  position: relative;
  overflow: hidden;
  display: block;
  color: #fff;
  .main_benner{
    text-align: center;
    background-color: #170E47;
    height: 840px;
    width: 100%;
    > img {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      width: auto;
      height: 840px;
    }
  }
  .main_txtbox{
    position: absolute;
    max-width: 1080px;
    width: 100%;
    top: 270px;
    left: 50%;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
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
  .swifebtn{
    position: absolute;
    bottom: 70px;
    right: -70px;
    background-color: #4063EC;
    color: #fff;
    border-radius: 100%;
    line-height: 1.2;
    font-size: 12px;
    width: 80px;
    height: 80px;
  }
`;


export const maincont02 = css`
  height: 840px;
  background-color: #1F2437;
  color: #fff;
  .md_btn{
    color: #fff;
    border: 1px solid #fff;
    width: 220px;
    height: 55px;
    border-radius: 0;
    margin-top: 10px;
  }
`;

export const hotslide = css`
  display: flex;
  background-color: rgba(0,0,0,0);
  border-radius: 15px;
  color: #fff;
  width: 380px;
  .sub_txt{
    color: #707070;
    line-height:1;
    font-size: 14px;
    margin: 7px 0;
  }
`;

export const maincont03 = css`
  position: relative;
  height: 1331px;
  background-color: #F5F5F5;
  img.char01{
    position: absolute;
    top: 150px;
  }
`;
export const maincont04 = css`
  height: 840px;
  background-color: #4063EC;
  color: #fff;
`;
export const maincont05 = css`
  height: 892px;
  background-color: #1F2437;
  color: #fff;
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

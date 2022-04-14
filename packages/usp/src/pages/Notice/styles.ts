import { css } from '@emotion/react';

export const container = css`
  margin-top: 131px;
  .blue{
    color: #4063EC;
  }
  .content{
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0px;
  }
`;
export const sub_cont01 = css`
  position: relative;
  display: block;
  color: #fff;
  .benner{
    text-align: center;
    background-color: #1F2437;
    min-height: 460px;
    width: 100%;
  }
  .txtbox{
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    .tit{
      font-size: 48px;
      letter-spacing: -4px;
      font-weight: 800;
      margin-bottom: 23px;
    }
    p {
      line-height: 1.8;
    }
  }
  .search_btn{
    position: absolute;
    right: 0;
    border-radius: 30px;
    width: 140px;
    height: 60px;
    background-color: #4063EC;
    font-size: 18px;
  }
`;
export const input_w = css`
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  .MuiOutlinedInput-root{
    background-color: #fff;
    border-radius: 30px;
    height: 60px;
    width: 780px;
  }
  .MuiInputLabel-root{
    line-height: 1.8em;
    padding-left: 30px;
    color: #707070;
    
  }
  .Mui-ficused{
    display: none;
    .MuiInputLabel-root{
      display: none;
      font-size: 0;
    }
    .MuiOutlinedInput-root{
      font-size: 0;
    }
  }
`;

export const bread = css`
  
`;

export const table = css`
  width: 780px;
  margin: 0 auto;
`;

export const sub_cont02 = css`
  height: 840px;
  background-color: #fff;
  color: #333;
  .md_btn{
    color: #333;
    border: 1px solid #333;
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

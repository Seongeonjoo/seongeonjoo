import { css } from '@emotion/react';
export const container = css`
  margin-top: 131px;
  padding-bottom: 120px;
  .content {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
  }
  .swiper-container-pointer-events {
    padding: 10px;
  }
  .swiper-container {
    padding-bottom: 10px;
  }
  .txtblue {
    color: #4063ec;
  }
  em {
    font-style: normal;
  }
  .date {
    font-family: Roboto;
    color: #8f929b;
    line-height: 1;
    font-size: 14px;
    letter-spacing: -0.56px;
    margin: 7px 0;
    display: block;
    span{
      display: inline-block;
      height: 14px;
      margin-right: 14px;
      padding-right: 14px;
      border-right: 1px solid #ccc;
      &:last-child{
        border-right: none; 
      }
    }
    em {
      margin-left: 5px;
      height: 14px;
      display: inline-block;
      color: #333;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    margin-top: 60px;
    padding-bottom: 60px;
  }
`;

export const tagstyle = css`
  position: relative;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  .MuiChip-root {
    margin-left: 10px;
    border-radius: 5px;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .wh {
    background-color: #fff;
    color: #333;
  }
  .blue {
    background-color: #4063ec;
    color: #fff;
  }
  .green {
    background-color: #1ccdcc;
    color: #fff;
  }
`;

export const detal_list = css`
  margin: 0 auto;
  max-width: 1260px;
  .mb10{
    margin-bottom: 10px;
  }
  .modalbtn{
    background-color:#ccc;
  }
  .date{
    margin: 10px 0 0;
  }
  .right_tag{
    position:absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    color: #222;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.64px;
    & .blue{
      color: #4063ec;
    }
    & .green{
      color: #1ccdcc;
    }
  }
  .sub_tit {
    .MuiTypography-root {
      font-family: 'NotoSansCJKKR';
      font-size: 28px;
      font-weight: bold;
      font-stretch: normal;
      line-height: 1.71;
      letter-spacing: -1.12px;
    }
  }
  .MuiList-root {
    margin-top: 20px;
    padding-top: 0;
    border-top: 1px solid #1f2437;
    .MuiListItem-root {
      padding: 28px 20px;
      border-bottom: 1px solid #e0e0e0;
      // &:last-child {
      //   border: none;
      // }
    }
  }
  .css-w4z10b-MuiStack-root {
    display: inline-block;
    .MuiChip-root {
      border-radius: 5px;
      .MuiChip-label {
        padding: 6px 10px;
      }
    }
    .new {
      background-color: #1ccdcc;
      color: #fff;
    }
    .blue {
      background-color: #4063ec;
      color: #fff;
    }
    .item{
      background-color: #f5f5f5;
    }
    .wh{
      background-color: #fff;
      border: 1px solid #ccc;
    }
  }
  .tit_body {
    display: flex;
    .MuiTypography-body1 {
      font-weight: 800;
      font-size: 20px;
      margin-bottom: 5px;
      color: #333;
      display: block;
    }
  }
  .MuiTypography-body2 {
    .body2 {
      font-family: 'NotoSansCJKKR';
      line-height: 1.75;
      letter-spacing: -0.64px;
      font-size: 16px;
      color: #707070;
      margin-bottom: 15px;
    }
  }
  .MuiButton-root:hover {
    background-color: #ccc;
  }
  .MuiListItem-root {
    padding: 10px 0;
  }
  .MuiListItemText-root {
    padding-right: 80px;
  }
  .Check_listbox {
    .MuiFormControl-root{
      width: 100%;
      .MuiFormGroup-root {
        margin-top: 25px;
        .MuiFormControlLabel-root {
          flex: 0 0 12.1%;
          margin-left: 0;
          margin-right: 5px;
          height: 50px;
         align-items: flex-start;
        }
        .MuiCheckbox-root {
          padding: 5px 15px 0 0;
        }
        .MuiTypography-root {
          letter-spacing: -0.64px;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .right_tag{
      right: 15px;
      font-size: 14px;
    }
    .sub_tit {
      .MuiTypography-root {
        font-size: 24px;
        line-height: 48px;
        letter-spacing: -0.96px;
      }
    }
    .MuiChip-root {
      .MuiChip-label {
        padding: 6px 10px;
      }
    }
    .MuiList-root {
      .MuiListItem-root {
        flex-wrap: wrap;
        padding: 15px 0;
      }
      .MuiListItemText-root {
        flex: 0 0 100%;
      }
      .MuiListItemAvatar-root {
        flex: 0 0 100%;
        margin: 0 auto 10px;
        text-align: center;
        img {
          height: 230px;
        }
      }
    }
    .tit_body {
      display: flex;
      align-items: baseline;
      .MuiTypography-body1 {
        font-size: 16px;
        margin-bottom: 12px;
        padding-top: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .MuiTypography-body2 {
      font-size: 14px;
      > span {
        margin-bottom: 10px;
      }
    }
    .Check_listbox {
      .MuiFormControl-root{
        .MuiFormGroup-root {
          .MuiFormControlLabel-root {
            flex: 0 0 48%;
            height: 40px;
          }
          .MuiCheckbox-root {
            padding: 3px 10px 0 0;
          }
          .MuiTypography-root {
            letter-spacing: -0.56px;
            font-size: 14px;
            line-height: 1.8;
          }
        }
      }
    }
  }
`;

export const login_cont = css`
  max-width: 460px;
  margin: 0 auto;
  .input_form{
    dl{
      display: flex;
      height: 48px;
      margin-bottom: 10px;
      align-items: center;
      max-width: 100%;
      dt{
        flex: 0 0 40%;
      }
      dd{
        flex: 0 0 60%;
        margin: 0;
        .MuiOutlinedInput-root{
          height: 48px;
          min-width: 100%;
        }
      }
    }
  }
  .txt_line{
    display: flex;
    color: #e0e0e0;
    margin: 40px 0;
    hr{
      border-top: 1px solid #e0e0e0;
      flex: 1;
      border-bottom: 0;
    }
    span{
      display: inline-block;
      margin: 0 10px;
      height: 24px;
      width: 32px;
      letter-spacing: -0.64px;
    }
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
  @media (min-width: 320px) and (max-width: 1000px) {
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
export const input_w = css`
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  padding-top: 20px;
  .MuiOutlinedInput-root {
    background-color: #fff;
    border-radius: 30px;
    height: 60px;
    width: 100%;
  }
  .MuiInputLabel-root {
    line-height: 1.8em;
    padding-left: 30px;
    color: #707070;
  }
  .Mui-ficused {
    display: none;
    .MuiInputLabel-root {
      display: none;
      font-size: 0;
    }
    .MuiOutlinedInput-root {
      font-size: 0;
    }
  }
  .MuiAutocomplete-root {
    width: 100%;
  }
  .css-16awh2u-MuiAutocomplete-root
    .MuiOutlinedInput-root
    .MuiAutocomplete-input {
    padding: 7.5px 4px 7.5px 30px;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    padding-top: 20px;
    .MuiOutlinedInput-root {
      height: 50px;
    }
    .css-16awh2u-MuiAutocomplete-root
      .MuiOutlinedInput-root
      .MuiAutocomplete-input {
      padding: 5px 4px 8px 15px;
      font-size: 14px;
    }
  }
`;
export const detal_btn = css`
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  button {
    margin-top: 20px;
    background-color: rgba(0 0 0 /0);
    color: #fff;
    border: none;
    font-size: 15px;
    border-bottom: 1px solid #fff;
    border-radius: 0;
  }
`;

export const teble_detal = css`
  text-align: right;
  max-width: 780px;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
`;

export const table02 = css`
  display: flex;
  height: 210px;
  border-radius: 15px;
  overflow: hidden;
  .MuiTableCell-root {
    border: 0;
    padding: 0;
  }
  dl {
    flex: 1;
    &:first-of-type {
      dd {
        border-left: none;
      }
    }
    dt {
      font-size: 18px;
      font-weight: 800;
      padding: 12px;
      text-align: center;
      border-bottom: 1px solid #e0e0e0;
    }
    dd {
      margin-left: 0;
      padding: 20px;
      overflow: auto;
      text-align: left;
      height: 166px;
      border-left: 1px solid #e0e0e0;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #d7dae6;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
      }
      > div {
        margin-bottom: 10px;
      }
      .MuiRadio-root {
        padding: 5px;
      }
      .MuiFormControlLabel-root{
        margin-right: 0;
        margin-bottom: 10px;
        padding-left: 5px;
      }
    }
  }
  .MuiCheckbox-root {
    padding: 0;
    margin-right: 10px;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .table_form {
      th {
        font-size: 14px;
      }
      td {
        padding: 10px;
      }
    }
    .MuiTableCell-root {
      padding: 8px;
    }
  }
`;

export const table = css`
  display: flex;
  height: 280px;
  border-radius: 15px;
  .MuiTableHead-root {
    th {
      font-size: 18px;
      font-weight: 800;
      padding: 12px;
    }
    td {
      padding: 20px;
    }
  }
  tbody {
    overflow: auto;
  }
  .MuiCheckbox-root {
    padding: 0;
    margin-right: 10px;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTableHead-root {
      th {
        font-size: 14px;
      }
      td {
        padding: 10px;
      }
    }
    .MuiTableCell-root {
      padding: 8px;
    }
  }
`;

export const bread = css`
  position: relative;
  max-width: 1260px;
  margin: 0 auto;
  .css-1wuw8dw-MuiBreadcrumbs-separator {
    color: #707070;
  }
  ol {
    position: absolute;
    top: 30px;
    right: 0;
    justify-content: flex-end;
  }
  .home {
    display: block;
    width: 15px;
    height: 15px;
    background: url('/images/common/home.png') no-repeat;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    display: none;
  }
`;

export const detal_tab = css`
  background-color: #1f2437;
  .MuiTabs-indicator{
    display: none;
  }
  .MuiBox-root {
    padding: 0;
  }
  .MuiTabs-root {
    max-width: 1260px;
    margin: 0 auto;
  }
  .MuiTabs-flexContainer {
    .MuiButtonBase-root {
      display: flex;
      padding: 11px 32px;
      font-size: 16px;
      font-family: NotoSansCJKKR;
      line-height: 1;
      border-radius: 10px 10px 0 0;
      color: #707070;
      background-color: #e0e0e0;
      border-right: 1px solid #000;
      flex-direction: row;
      letter-spacing: -0.64px;
      font-weight: 500;
      > em{
        margin-left: 4px;
        font-size: 14px;
      }
    }
    .Mui-selected {
      color: #222;
      background-color: #fff;
      > em{
        color: #4063ec;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTabs-flexContainer {
      padding: 0 15px;
      > button {
        flex: 1;
        font-size: 16px;
      }
    }
  }
`;

export const sub_cont02 = css`
  min-height: 840px;
  background-color: #fff;
  color: #333;
  .MuiTypography-h5 {
    height: auto;
    font-family: NotoSansCJKKR;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: -0.96px;
    margin-bottom: 20px;
  }
  .md_btn {
    color: #333;
    border: 1px solid #333;
    width: 220px;
    height: 55px;
    border-radius: 0;
    margin-top: 10px;
  }
  .data {
    height: 24px;
    font-size: 16px;
    font-style: normal;
    line-height: 3;
    letter-spacing: -4px;
    margin-left: 10px;
    display: inline-block;
    > em {
      height: 19px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.64px;
      color: #4063ec;
    }
  }
  .MuiSelect-select {
    padding: 8px 40px 8px 20px;
    margin-right: 10px;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTypography-h5 {
      font-size: 22px;
    }
    .MuiSelect-select {
      font-size: 14px;
    }
  }
`;

export const sub_list = css`
  margin-top: 60px;
  .css-w4z10b-MuiStack-root {
    .MuiChip-root {
      border-radius: 5px;
      .MuiChip-label {
        padding: 6px 10px;
      }
    }
    .new {
      background-color: #1ccdcc;
      color: #fff;
    }
    .blue {
      background-color: #4063ec;
      color: #fff;
    }
  }
  .MuiList-root {
    width: 100%;
    height: 100%;
    .MuiListItemText-root {
      position: relative;
      flex: 0 0 70%;
      margin: 0;
    }
  }
  .MuiTypography-body1 {
    display: block;
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 5px;
    padding-top: 10px;
    color: #333;
  }
  .MuiTypography-body2 {
    .body2 {
      font-family: NotoSansCJKKR;
      line-height: 1.75;
      letter-spacing: -0.64px;
      font-size: 16px;
      display: block;
      color: #707070;
      margin-bottom: 15px;
    }
    .MuiTypography-root{
      display: block;
      margin-bottom: 15px;
    }
  }
  .MuiButton-root:hover {
    background-color: #ccc;
  }
  .MuiListItem-root {
    padding: 10px 0;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    margin-top: 60px;
    .MuiChip-root {
      margin-top: 10px;
      .MuiChip-label {
        padding: 6px 10px;
      }
    }
    .MuiList-root {
      .MuiListItem-root {
        margin-bottom: 40px;
        flex-wrap: wrap;
      }
      .MuiListItemText-root {
        flex: 0 0 100%;
      }
      .MuiListItemAvatar-root {
        flex: 0 0 100%;
        margin: 0 auto 10px;
        img {
          height: 230px;
        }
      }
    }
    .MuiTypography-body1 {
      font-size: 18px;
      margin-bottom: 12px;
      padding-top: 20px;
    }
    .MuiTypography-body2 {
      font-size: 14px;
      > span {
        margin-bottom: 10px;
      }
    }
  }
  .css-11k5jid-MuiStack-root > :not(style) + :not(style) {
    margin: 0;
  }
`;
export const slide_cont02 = css`
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .swiper-container {
    padding: 10px 0 50px;
  }
  .swiper-pagination-bullets {
    position: absolute;
    bottom: 0;
    display: block;
    z-index: 99;
    width: 100%;
    text-align: center;
    height: 20px;
    .swiper-pagination-bullet {
      display: inline-block;
      width: 60px;
      height: 2px;
      background-color: #ccc;
      margin-right: 10px;
      opacity: 1;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active {
      background-color: #1ccdcc;
    }
  }
  .MuiCard-root-hotslide .MuiTypography-root {
    color: #000;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        width: 40px;
      }
    }
  }
`;
export const hotslide = css`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 15px;
  color: #fff;
  max-width: 380px;
  box-shadow: none;
  // box-shadow: 0px 2px 3px 1px rgb(0, 0, 0, 0.3);
  .black {
    color: #222;
  }
  .MuiCardContent-root {
    padding: 16px 3px;
  }
  .sub_txt {
    color: #8f929b;
    line-height: 1;
    font-size: 14px;
    margin: 7px 0;
  }
  .MuiTypography-root {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -1.2px;
    color: #333;
    margin-bottom: 16px;
  }
  .tag {
    position: absolute;
    top: 0;
    z-index: 2;
    justify-content: space-between;
    width: 100%;
    border: solid 1px var(--pinkish-grey);
    .wh {
      background-color: #fff;
      color: #333;
      border-radius: 0 15px 0 10px;
    }
    .blue {
      background-color: #4063ec;
      color: #fff;
      border-radius: 15px 0 10px 0;
    }
  }
  .MuiCardActionArea-root {
    > img {
      border-radius: 15px;
      border: solid 1px rgba(204, 204, 204, 0.35);
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTypography-h5 {
      font-size: 22px;
    }
    .MuiSelect-select {
      font-size: 14px;
    }
    .MuiTypography-root {
      font-size: 16px;
    }
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        width: 40px;
      }
    }
  }
`;
// 모달부분
export const modalCard = css`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 15px;
  color: #fff;
  max-width: 100%;
  box-shadow: none;
  .black {
    color: #222;
  }
  .MuiCardContent-root {
    padding: 16px 3px;
  }
  .sub_txt {
    color: #222;
    line-height: 1;
    font-size: 14px;
    margin: 7px 0;
    &.icon01 {
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 10px;
        display: inline-block;
        background: url('/images/common/card_icon01.png') center bottom
          no-repeat;
      }
    }
    &.icon02 {
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 10px;
        display: inline-block;
        background: url('/images/common/card_icon02.png') center center
          no-repeat;
      }
    }
    &.icon03 {
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 10px;
        display: inline-block;
        background: url('/images/common/card_icon03.png') center center
          no-repeat;
      }
    }
  }
  .MuiTypography-root {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -1.2px;
    color: #333;
    margin-bottom: 16px;
  }
  .tag {
    position: absolute;
    top: 0;
    z-index: 2;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    .MuiChip-root {
      margin-left: 10px;
      border-radius: 5px;
      &:first-of-type {
        margin-left: 0;
      }
    }
    .wh {
      background-color: #fff;
      color: #333;
    }
    .blue {
      background-color: #4063ec;
      color: #fff;
    }
    .green {
      background-color: #1ccdcc;
      color: #fff;
    }
  }
  .MuiCardActionArea-root {
    > img {
      border-radius: 15px;
      border: solid 1px rgba(204, 204, 204, 0.35);
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiTypography-h5 {
      font-size: 22px;
    }
    .MuiSelect-select {
      font-size: 14px;
    }
    .MuiTypography-root {
      font-size: 16px;
    }
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        width: 40px;
      }
    }
  }
`;

export const detal_txtBox = css`
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  line-height: 1.89;
  .MuiTypography-h5 {
    line-height: 1.71;
    font-size: 28px;
  }
  .text01 {
    margin-top: 32px;
    margin-bottom: 50px;
  }
  > p {
    font-size: 18px;
    margin: 0;
  }
  .bold {
    font-weight: 500;
  }
  
  @media (min-width: 320px) and (max-width: 1000px) {
    padding-bottom: 30px;
    margin-bottom: 30px;
    .MuiTypography-h5 {
      line-height: 1.5;
      font-size: 20px;
    }
    .text01 {
      margin-top: 24px;
      margin-bottom: 30px;
      font-size: 14px;
    }
    > p {
      font-size: 14px;
    }
  }
`;

export const table01 = css`
  margin-top: 60px;
  margin-bottom: 63px;
  letter-spacing: -0.64px;
  table {
    border-top: 1px solid #222;
    width: 100%;
    border-spacing: 0;
    tr {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      padding: 20px 20px;
      text-align: left;
      width: 20%;
      background-color: #f5f5f5;
    }
    td {
      width: 30%;
      padding: 18px 20px;
      &.table_input{
        padding: 6px 8px;
        .MuiInputBase-root{
          height: 48px;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    overflow: scroll;
    margin-bottom: 40px;
    table {
      width: 200%;
      margin-bottom: 15px;
    }
  }
`;
export const table_02 = css`
  margin-top: 12px;
  table {
    border-top: 1px solid #1f2437;
    max-width: 540px;
    width: 100%;
    border-spacing: 0;
    text-align: center;
    tr {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      padding: 18px 20px;
      background-color: #f5f5f5;
      width: 70%;
      text-align: center;
      &:first-of-type {
        width: 30%;
        border-right: 1px solid #e0e0e0;
      }
    }
    td {
      padding: 18px 20px;
      width: 70%;
      &:first-of-type {
        width: 30%;
        border-right: 1px solid #e0e0e0;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    overflow: scroll;
    margin-bottom: 40px;
    table {
      width: 200%;
      margin-bottom: 15px;
    }
  }
`;

export const table04 = css`
  max-width: 100%;
  letter-spacing: -0.64px;
  .MuiTypography-h6{
    font-size: 18px;
    margin-bottom: 15px;
  }
  table {
    border-top: 1px solid #222;
    width: 100%;
    border-spacing: 0;
    margin-bottom: 40px;
    tr {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      padding: 20px 20px;
      text-align: left;
      width: 20%;
      background-color: #f5f5f5;
    }
    td {
      display: flex;
      justify-content: space-between;
      width: 80%;
      padding: 0 20px;
      line-height: 3.5;
      align-items: center;
      &.table_input{
        padding: 6px 8px;
        .MuiInputBase-root{
          height: 48px;
        }
      }
      .blue{
        color:#4063ec;
        &:after {
          content: '';
          width: 8px;
          height: 11px;
          margin-left: 9px;
          display: inline-block;
          background: url('/images/common/gt_blue.png') no-repeat;
        }
      }
      .MuiFormGroup-root{
        width: 250px;
        justify-content: space-between;
      }
    }
  }
  .blue{
    color:#4063ec;
    &:after {
      content: '';
      width: 8px;
      height: 11px;
      margin-left: 9px;
      display: inline-block;
      background: url('/images/common/gt_blue.png') no-repeat;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    margin-bottom: 40px;
    table {
      margin-bottom: 15px;
      th {
      width: 40%;
      }
      td {
        width: 60%;
        &.table_input{
          padding: 6px 8px;
          .MuiInputBase-root{
            height: 48px;
          }
        }
      }
    }
  }
`;

export const table03 = css`
  max-width: 940px;
  margin: 0 auto;
  letter-spacing: -0.64px;
  .MuiTypography-h6{
    font-size: 18px;
    margin-bottom: 15px;
  }
  table {
    border-top: 1px solid #222;
    width: 100%;
    border-spacing: 0;
    margin-bottom: 40px;
    tr {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      padding: 20px 20px;
      text-align: left;
      width: 20%;
      background-color: #f5f5f5;
    }
    td {
      display: flex;
      justify-content: space-between;
      width: 80%;
      padding: 0 20px;
      line-height: 3.5;
      align-items: center;
      &.table_input{
        padding: 6px 8px;
        .MuiInputBase-root{
          height: 48px;
        }
      }
      .blue{
        color:#4063ec;
        &:after {
          content: '';
          width: 8px;
          height: 11px;
          margin-left: 9px;
          display: inline-block;
          background: url('/images/common/gt_blue.png') no-repeat;
        }
      }
      .MuiFormGroup-root{
        width: 250px;
        justify-content: space-between;
      }
    }
  }
  .blue{
    color:#4063ec;
    &:after {
      content: '';
      width: 8px;
      height: 11px;
      margin-left: 9px;
      display: inline-block;
      background: url('/images/common/gt_blue.png') no-repeat;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    margin-bottom: 40px;
    table {
      margin-bottom: 15px;
      th {
      width: 40%;
      }
      td {
        width: 60%;
        &.table_input{
          padding: 6px 8px;
          .MuiInputBase-root{
            height: 48px;
          }
        }
      }
    }
  }
`;
export const memout = css`
  margin-top: 40px;
  text-align: right;
  a {
    &:after {
      content: '';
      width: 8px;
      height: 11px;
      color: #707070;
      margin-left: 9px;
      display: inline-block;
      background: url('/images/common/gt_gray.png') no-repeat;
    }
  }
`;
export const text_list01 = css`
  margin-bottom: 60px;
  dl {
    margin-bottom: 40px;
    dt {
      line-height: 1.67;
      letter-spacing: -0.72px;
      font-weight: 500;
      margin-bottom: 8px;
      font-size: 18px;
      &:before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin: 3px 10px 3px 0;
        border-radius: 100%;
        background-color: #707070;
      }
    }
    dd {
      margin-inline-start: 15px;
      line-height: 1.75;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    margin-bottom: 40px;
    dl {
      dt {
        letter-spacing: -0.64px;
        margin-bottom: 8px;
        font-size: 16px;
        &:before {
          background-color: rgba(28, 205, 204);
        }
      }
      dd {
        font-size: 14px;
        line-height: 26px;
      }
    }
  }
`;

export const detal_img = css`
  margin-top: 20px;
  .img_box {
    width: 100%;
    min-height: 200px;
    height: auto;
    margin-bottom: 16px;
    background-color: #ccc;
    // back 색깔 임시
  }
  .txt_box {
    margin-top: 30px;
    margin-bottom: 60px;
    line-height: 1.63;
    letter-spacing: -0.64px;
  }
`;

export const box_type = css`
  width: 100%;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-bottom: 40px;
  padding: 24px 40px;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: -0.72px;
  .MuiStack-root {
    flex-wrap: wrap;
  }
  strong {
    height: 20px;
    min-width: 120px;
    margin-right: 40px;
    padding-right: 40px;
    border-right: 1px solid #ccc;
    line-height: 1;
    &.noline{
      border-right: none;
      padding-right: 0;
      margin-right: 30px;
    }
  }
  .flexmo {
    flex-direction: row;
  }
  .link_type {
    display: flex;
    align-items: end;
    &:before {
      content: '';
      width: 24px;
      height: 24px;
      margin-right: 18px;
      display: inline-block;
      background: url('/images/common/icon_link.png') no-repeat;
    }
    a {
      text-decoration: underline;
      margin-right: 30px;
    }
  }
  .snsbox{
    text-align: center;
    .MuiTypography-h6{
      font-size: 20px;
      font-weight: bold;
      letter-spacing: -0.8px;
    }
    > p{
      line-height: 1.75;
      letter-spacing: -0.64px;
      font-size: 16px;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    .MuiStack-root {
      display: block;
      flex-wrap: wrap;
    }
    .flexmo {
      flex-direction: column;
    }
    margin-bottom: 40px;
    padding: 20px 15px;
    font-size: 16px;
    letter-spacing: -0.64px;
    strong {
      font-size: 16px;
      height: 20px;
      margin-right: 0;
      padding-right: 0;
      border-right: none;
      margin-bottom: 15px;
      width: 100%;
    }
    .link_type {
      margin-left: 20px;
    }
  }
`;
//sns icon
export const snsicon = css`
  margin: 0 auto;
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

//답변박스
export const qna_box = css`
  background-color: #f2f3f8;
  padding: 30px 40px;
  border-top: 1px solid #1f2437;
  dl{
    display: flex;
    &+ dl {
      margin-top: 10px;
    }
    dt {
      min-width: 62px;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: -0.72px;
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 6px;
        display: inline-block;
        background: url('/images/common/icon_gna.png') no-repeat;
      }
    }
    dd{
      margin-left: 62px;
      line-height: 1.75;
      letter-spacing: -0.64px;
      .date{
        margin-top: 33px;
      }
    }
  }
  
`;

// 이전 다음 리스트 페이지네이션 버튼
export const bottom_list = css`
  margin-bottom: 40px;
  padding-top: 0;
  border-top: 1px solid #ccc;
  > a, .pagelist{
    display: flex;
    align-items: center;
    padding: 28px 20px;
    border-bottom: 1px solid #e0e0e0;
    .txt01 {
      margin-right: 48px;
    }
    .txt02 {
      margin: 0;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.43;
      letter-spacing: 0.01071em;
      color: rgba(0, 0, 0, 0.6);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .next {
    &:before {
      content: '';
      width: 15px;
      height: 10px;
      margin-right: 18px;
      display: inline-block;
      background: url('/images/common/arrow_next.png') no-repeat;
    }
  }
  .prev {
    &:before {
      content: '';
      width: 15px;
      height: 10px;
      margin-right: 18px;
      display: inline-block;
      background: url('/images/common/arrow_prev.png') no-repeat;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    border-top: 1px solid #e0e0e0;
    > li {
      padding: 28px 15px;
      .txt01 {
        margin-right: 20px;
        min-width: 85px;
        font-size: 14px;
      }
    }
    button {
      min-width: 14px;
      height: 8px;
      margin-right: 15px;
      padding: 0;
    }
  }
`;

//sns 아이콘버튼
export const btnMinSns = css`
  justify-content: end;
  margin-top: 40px;
  > button {
    height: 40px;
    border-radius: 40px;
    min-width: 40px;
    &.face {
      background: url('/images/common/pace_icon_min.png') no-repeat;
    }
    &.kakao {
      background: url('/images/common/kakao_icon_min.png') no-repeat;
    }
    &.insta {
      background: url('/images/common/insta_icon_min.png') no-repeat;
    }
    &.nomal {
      padding: 11px 26px 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
      font-size: 13px;
      font-weight: normal;
      line-height: 2;
      letter-spacing: -0.52px;
      color: #707070;
    }
    & + button {
      margin-left: 10px;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    justify-content: center;
    > button {
      font-size: 16px;
    }
  }
`;

// 파일 다운로드 버튼
export const btnDown = css`
  justify-content: left;
  flex-direction: column;
  button {
    height: 48px;
    border-radius: 24px;
    padding: 14px 24px;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    border: solid 1px #ccc;
    color: #333;
    letter-spacing: -0.56px;
    font-weight: 500;
    margin-right: 6px;
    > span {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:before {
      content: '';
      width: 20px;
      height: 20px;
      margin-right: 6px;
      background: url('/images/common/icon_download.png') no-repeat;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    button {
      margin-bottom: 10px;
      > span {
        max-width: 200px;
      }
    }
  }
`;

// 버튼속성그룹
export const btnGroup = css`
  justify-content: center;
  > button {
    height: 60px;
    border-radius: 40px;
    width: 220px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    background-color: #fff;
    padding: 17px 36px;
    &.blue {
      background-color: #4063ec;
      width: 100%;
      color: #fff;
    }
    &.linebtn {
      border: 1px solid #4063ec;
      background-color: #fff;
      &.mini {
        width: 140px;
      }
    }
    &.linebtn02 {
      border: 1px solid #222;
      color: #222;
      background-color: #fff;
    }
    &.blue02 {
      background-color: #4063ec;
      color: #fff;
      min-width: 140px;
      width: auto;
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    > button {
      font-size: 16px;
      &.blue02 {
        width: 100%;
        height: 52px;
      }
    }
  }
`;
//사업정보관리 모달부분
export const modalCustom = css`
  .MuiTabs-indicator{
    background-color: #000;
  }
  .css-1itvg3i-stylesFactory{
    border-color: #000;
  }
  .css-1980fso-MuiButtonBase-root-MuiTab-root-TabContainer{
    color: #707070;
    border: none;
    &.Mui-selected{
      color: #fff;
    }
  }
  .MuiTypography-h6{
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    height:100vh;
    .MuiTypography-h6{
      font-size: 16px;
      line-height: 28px;
    }
    .modal_text{
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export const modalpop = css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 780px;
  background-color: #fff;
  box-shadow: 24;
  padding: 24px 15px 20px;
  border-radius: 20px 20px 0 0;
  h2 {
    font-size: 20px;
    font-weight: bold;
    > button {
      color: #707070;
      position: absolute;
      right: 20px;
    }
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  .MuiTabs-indicator{
    background-color: #000;
  }
  .css-275fjj-stylesFactory {
    position: relative;
    max-width: 470px;
    margin: 30px auto 0;
    .MuiFormControlLabel-root {
      right: 0;
      top: 0;
      position: absolute;
    }
    .MuiCheckbox-root {
      padding: 0 5px 0 0;
    }
  }
`;

// 더보기 버튼 컴포넌트랑 같이
export const bottom_btn = css`
  button{
    &:after {
      content: '';
      background: url('/images/common/arr_row.png') no-repeat;
      width: 12px;
      height: 8px;
      margin-left: 10px;
    }
  }
`;

export const btnstyle = css`
  button {
    border-radius: 0;
    font-weight: Bold;
    font-size: 16px;
    padding: 16px 36px;
    letter-spacing: -0.4px;
  }
  button.lg {
    min-width: 200px;
  }
  button.md {
    border-radius: 4px;
    font-weight: normal;
    padding: 8px 16px;
  }
  .blue {
    background-color: #4063ec;
  }
  .gray {
    background-color: #adaeb2;
  }
  .gray:hover {
    background-color: #9b9b9b;
  }
  .sky {
    background-color: #ebeffd;
    color: #4063ec;
  }
  .sky:hover {
    background-color: #d4deff;
  }
`;
export const link = css`
  a {
    color: blue;
  }
`;

// 이벤트부분
export const event_list = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  > a {
    margin-bottom: 44px;
    margin-right: 60px;
    max-width: 380px;
    &:nth-of-type(3n){
      margin-right: 0;
    }
  }
  .MuiCard-root{
    background-color: rgba(0, 0, 0, 0);
    border-radius: 15px;
    color: #fff;
    box-shadow: none;
  }
  .MuiCardContent-root {
    padding: 16px 0px;
    .date {
    font-family: Roboto;
    color: #8f929b;
    line-height: 1;
    font-size: 14px;
    letter-spacing: -0.56px;
    margin: 7px 0;
    display: block;
    &.noline{
      > em{
        border: none;
      }
    }
    > em {
      color: #333;
      margin-left: 5px;
    }
  }
  }
  .MuiTypography-root {
    font-family: NotoSansCJKKR;
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -1.3px;
    color: #333;
    margin-bottom: 16px;
  }
  .tag {
    position: absolute;
    top: 1px;
    right: 1px;
    z-index: 1;
    justify-content: end;
    width: 100%;
    .blue {
      background-color: #4063ec;
      color: #fff;
      border-radius: 0 15px 0 10px;
    }
  }
  .MuiCardActionArea-root {
    > img {
      border-radius: 15px;
      border: solid 1px rgba(204, 204, 204, 0.35);
    }
  }
  @media (min-width: 720px) and (max-width: 1200px) {
    > a {
      margin-right: 0;
      &:nth-of-type(even){
        margin-left: 30px;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 720px) {
    > a {
      margin-bottom: 40px;
      margin-right: 0;
      margin-left: 0;
    }
    .tag {
      font-size: 12px;
    }
    .MuiTypography-h5 {
      font-size: 22px;
    }
    .MuiSelect-select {
      font-size: 14px;
    }
    .MuiTypography-root {
      font-size: 16px;
    }
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        width: 40px;
      }
    }
  }
`;

export const picker_card = css`
  display: flex;
  max-width: 780px;
  margin: 20px auto 0;
  background-color: #fff;
  border-radius: 10px;
  border: solid 1px #e0e0e0;
  color: #333;
  text-align: center;
  dl {
    border-right: 1px solid #ccc;
    width: 100%;
    &:last-of-type{
      border: none;
    }
    dt{
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      padding: 10px 0;
      font-weight: 800;
      letter-spacing: -0.72px;
    }
    dd{
      text-align: center;
      margin-left: 0;
      display: inline-block;
      padding: 20px;
      width: 100%;
      .MuiInputBase-root{
        height: 48px;
      }
      .MuiFormControl-root{
        width: 100%;
      }
      .MuiFormControlLabel-root{
        flex: 0 0 48%;
        height: 30px;
        margin: 0;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    border: none;
    flex-direction: column;
    .MuiInputBase-root{
      height: 46px;
    }
    dl {
      border: none;
      dt{
        border-bottom: none;
        font-size: 16px;
        padding: 10px 0;
        text-align: left;
      }
      dd{
        padding: 16px 0 0;
        margin-bottom: 16px;
      }
    }
  }
`;


export const inputBox = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  .inputtxt{
    font-family: NotoSansCJKKR;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.67;
    letter-spacing: -0.72px;
    font-weight: 500;
    & em{
      color: #1ccdcc;
      margin-left: 4px;
    }
  }
  label{
    color: #222;
    &.Mui-focused {
      color: #222;
    }
  }
  .MuiOutlinedInput-root {
    color: #222;
    fieldset {
      border-color: #ccc;
    }
    &:hover{
      fieldset {
        border-color: #1976d2;
      }
    }
  }
  .MuiFormLabel-asterisk{
    color: #1CCDCC;
  }
  textarea{
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d7dae6;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
    }
    > div {
      margin-bottom: 10px;
    }
    .MuiRadio-root {
      padding: 5px;
    }
    .MuiFormControlLabel-root{
      margin-right: 0;
      margin-bottom: 10px;
      padding-left: 5px;
    }
  }
  .count{
    margin-top: 8px;
    text-align: right;
    font-size: 14px;
    color: #666;
  }
  Button{
    margin: 0;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    label{
      font-size: 14px;
    }
    input {
      padding: 15px 14px;
    }
  }
`;
export const modal_Box = css`
  width: 560px;
  padding: 30px 50px 0;
  .tit_text{
    text-align: center;
    letter-spacing: -0.64px;
    margin-bottom: 30px;
  }
  .modal_Card{
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 32px 30px 30px;
    .tit{
      letter-spacing: -0.64px;
      font-weight: bold;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      &:before{
        content: '';
        display: inline-block;
        background: url('/images/common/icon_info.png') no-repeat;
        width: 24px;
        height: 24px;
        margin-right: 10px;
        background-size: 100%;
      }
    }
    > ul{
        li{
          font-size: 14px;
          letter-spacing: -0.56px;
          line-height: 1.86;
          margin-bottom: 6px;
          &:before{
            content: '';
            display: inline-block;
            width: 4px;
            height: 4px;
            margin: 5px 8px 4px 0;
            background-color: #707070;
            border-radius: 10px;
          }
        }
      }
  }
`;
export const modal_inputBox = css`
  position: relative;
  display: flex;
  margin: 0 auto 10px;
  .inputtxt{
    flex: 1;
    font-size: 16px;
    line-height: 1.67;
    letter-spacing: -0.72px;
    font-weight: 500;
    & em{
      color: #1ccdcc;
      margin-left: 4px;
    }
  }
  .MuiTextField-root{
    flex: 1;
    .MuiInputBase-root{
      height: 48px;
      .MuiTypography-root{
        color: #1ccdcc;
      }
      .MuiInputBase-input:-webkit-autofill{
        padding: 12px 14px;
      }
    }
    .MuiFormHelperText-root{
      color: #1ccdcc;
      font-size: 14px;
    }
  }

  label{
    height: 48px;
    color: #222;
    &.Mui-focused {
      color: #222;
    }
  }
  .MuiOutlinedInput-root {
    color: #222;
    fieldset {
      border-color: #ccc;
    }
    &:hover{
      fieldset {
        border-color: #1976d2;
      }
    }
  }
  .MuiFormLabel-asterisk{
    color: #1CCDCC;
  }
  textarea{
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d7dae6;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
    }
    > div {
      margin-bottom: 10px;
    }
    .MuiRadio-root {
      padding: 5px;
    }
    .MuiFormControlLabel-root{
      margin-right: 0;
      margin-bottom: 10px;
      padding-left: 5px;
    }
  }
  .count{
    margin-top: 8px;
    text-align: right;
    font-size: 14px;
    color: #666;
  }
  Button{
    margin: 0;
  }
  @media (min-width: 320px) and (max-width: 1000px) {
    label{
      font-size: 14px;
    }
    input {
      padding: 15px 14px;
    }
  }
`;

export const deletTag = css`
  Button{
    padding: 0 15px;
  }
  .MuiChip-root{
    height: 50px;
    border-radius: 30px;
    padding: 0 15px;
  }
  .MuiChip-label{
    margin-top: 2px;
    padding-right: 10px;
  }
`;
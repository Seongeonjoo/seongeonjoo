import { css } from '@emotion/react';
export const bread = css`
  position: relative;
  max-width: 1260px;
  margin: 0 auto;
  z-index: 1;
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
  @media (min-width: 320px) and (max-width: 820px) {
    display: none;
  }
`;

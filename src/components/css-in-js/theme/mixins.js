import { css } from 'styled-components';

export function textColorGradient(gradient) {
  return css`
    background: ${gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
}

export function fontface(fontname, filename, url) {
  return css`
    @font-face {
      font-family: ${fontname};
      src: url('${url}/${filename}.woff') format('woff'),
      url('${url}/${filename}.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  `;
}

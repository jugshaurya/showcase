import { css } from 'styled-components';

export function textColorGradient(gradient) {
  return css`
    background: ${gradient};
    background-clip: text;
  `;
}

export function fontface(font_family, url) {
  return css`
    @font-face {
      font-family: ${font_family};
      font-display: fallback;
      src: url('${url}/${font_family}.woff') format('woff'),
        url('${url}/${font_family}.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  `;
}

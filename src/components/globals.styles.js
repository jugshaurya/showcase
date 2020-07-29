import { createGlobalStyle } from 'styled-components';
import * as Styles from '../theme';

const GlobalStyles = createGlobalStyle`
  /* adding local fonts  */
  ${Styles.fontface(Styles.font_gabriela, Styles.font_path)}
  ${Styles.fontface(Styles.font_gloriahallelujah, Styles.font_path)}
  ${Styles.fontface('robotomono', Styles.font_path)}

  *{
    box-sizing: border-box;
  }
  
  html {
    overflow-x: hidden;
  }

  body, html{
    font-size: calc(12px + 0.5vw)

  }
  
  body {
    background: ${Styles.black};
    color: ${Styles.white};
    padding: 0;
    margin: 0;
    font-size: ${Styles.text_medium};
  }

  h1,
  h2 {
    font-family: ${Styles.font_gloriahallelujah};
  }

  h1 {
    font-size: ${Styles.h1};
  }
  h2{
    font-size: ${Styles.h2}
  }
  h3 {
    font-size: ${Styles.h3}
  }

  h4 {
    font-size: ${Styles.h4}
  }

  p {
    .heading {
      font-size: ${Styles.p}
    }
    .medium {
      font-size: ${Styles.p}
    }
    .caption {
      font-size: ${Styles.copyright};
    }
    .small {
      font-size: ${Styles.copyright};
    }
  }

  * {
    font-family: ${Styles.font_gabriela};
    /* for mozilla firefox */
    scrollbar-color: ${Styles.green} ${Styles.black};
    scrollbar-width: thin;
  }

  /* for chrome */
  *::-webkit-scrollbar {
    width: 0.2rem;
  }

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  *::-webkit-scrollbar-thumb {
    background: ${Styles.g_};
    border-radius: 10px;
  }

  body::-webkit-scrollbar {
    width: 0.3rem;
  }

`;

export default GlobalStyles;

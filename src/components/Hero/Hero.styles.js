import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';

export const Showcase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 100px;
`;

export const ShowcaseTop = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-end;
  grid-template-columns: 80px 200px 230px;
  margin-left: auto;
  position: relative;
  @media ${Styles.device.laptopL} {
    grid-template-columns: 80px 180px 200px;
  }
  @media ${Styles.device.laptop} {
    grid-template-columns: 80px 160px 200px;
  }
  @media ${Styles.device.ipad} {
    grid-template-columns: 80px 140px 200px;
  }
  @media ${Styles.device.mobileL} {
    grid-template-columns: 60px 50px 150px;
    justify-content: flex-end;
    padding-top: 100px;
  }
  @media ${Styles.device.mobileM} {
    grid-template-columns: 50px 70px 150px;
    justify-content: flex-end;
    padding-top: 100px;
  }
  @media ${Styles.device.mobileS} {
    grid-template-columns: 50px 70px 150px;
    padding-top: 10px;
  }
`;

export const ShowcaseText = styled.div`
  font-size: ${Styles.text_small};
  color: ${Styles.gray};
  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text_xsmall};
  }
`;

export const ShowcaseBar = styled.div`
  grid-column: span ${(props) => props.span};
  height: 6px;
  border-radius: 7px;

  align-self: center;
  background: ${Styles.g_blueGreen};
  width: ${(props) => props.w};
  margin: 0 10px;
`;

export const ShowcaseMainText = styled.div`
  grid-column: span ${(props) => props.span};
  font-size: ${Styles.text_xxlarge};
  line-height: ${Styles.text_xlarge};
  background: ${Styles.g_blackOrange};
  background: ${Styles.white};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text_xlarge};
  }
`;

export const ShowcaseBottom = styled.div`
  display: grid;
  grid-template-columns: 80px 200px 230px;
  @media ${Styles.device.laptopL} {
    grid-template-columns: 80px 180px 200px;
  }
  @media ${Styles.device.laptop} {
    grid-template-columns: 80px 160px 200px;
  }
  @media ${Styles.device.ipad} {
    grid-template-columns: 80px 140px 200px;
  }
  @media ${Styles.device.mobileL} {
    grid-template-columns: 60px 50px 150px;
  }

  @media ${Styles.device.mobileM} {
    grid-template-columns: 50px 70px 150px;
  }
  /* border: 3px solid red; */
`;
export const ShowcaseLogos = styled.div`
  grid-column: span ${(props) => props.span};
  display: grid;
  justify-content: center;
  align-items: flex-end;
  grid-template-columns: repeat(7, 1fr);

  padding-bottom: 15px;
`;

/**
* Note: Add here as well whatever exported
export {
   Showcase,
   ShowcaseTop,
   ShowcaseText,
   ShowcaseBar,
   ShowcaseMainText,
   ShowcaseBottom,
   ShowcaseLogos,
 };

 */

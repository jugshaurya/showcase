import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex } from '../css-in-js/shared';

export const Article = styled.article`
  position: relative;
  @media ${Styles.device.laptopL} {
    margin-top: -100px;
  }
  @media ${Styles.device.ipad} {
    margin-top: -200px;
  }
  @media ${Styles.device.mobileL} {
    margin-top: -20px;
  }
`;

export const Cards = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  perspective: 6000;
  @media ${Styles.device.laptopL} {
    gap: 70px;
  }
  @media ${Styles.device.ipad} {
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
  }
  @media ${Styles.device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
  @media ${Styles.device.mobileL} {
    gap: 10px;
  }
  @media ${Styles.device.mobileM} {
    gap: 80px;
  }
`;

export const Card = styled.div`
  position: relative;
  &.primary {
    transform: translateY(0px);
  }
  &.secondary {
    transform: translateY(100px);
    @media ${Styles.device.mobileL} {
      transform: translateY(0);
    }
    @media ${Styles.device.mobileL} {
      order: 1;
    }
  }
  &.tertiary {
    transform: translateY(200px);
    @media ${Styles.device.ipad} {
      display: none;
    }
  }
`;

export const CardContent = styled.div`
  width: 70%;
  margin: 60px auto;
  text-align: center;

  @media ${Styles.device.laptopL} {
    width: 80%;
  }
  @media ${Styles.device.laptop} {
    width: 100%;
  }

  @media ${Styles.device.ipad} {
    width: 80%;
  }
  @media ${Styles.device.mobileL} {
    width: 70%;
  }
  @media ${Styles.device.mobileM} {
    width: 75%;
  }
`;

export const CardTitle = styled.div`
  font-family: ${Styles.font_gabriela};
  background: ${(props) => props.color};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${Styles.device.laptop} {
    font-size: ${Styles.text_small};
  }
`;

export const CardMain = styled(Flex)`
  font-size: ${Styles.text_medium};
  margin: 40px auto;

  @media ${Styles.device.laptop} {
    margin: 20px auto;
  }
`;

export const CardSubTitle = styled.div`
  font-family: ${Styles.font_gloriahallelujah};
`;

export const CardDesc = styled.p`
  color: ${(props) => props.color};
  text-align: left;
  padding-left: 40px;
  margin-bottom: 20px;
  font-family: ${Styles.font_normal};
  font-size: 0.6em;
  position: relative;

  &::before {
    content: '🌱';
    display: inline-block;
    font-size: ${Styles.text};
    position: absolute;
    top: 0;
    left: 15px;
  }
  @media ${Styles.device.laptop} {
    font-size: 0.57em;
    font-family: monospace;
  }

  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text_xxsmall};
  }
  @media ${Styles.device.mobileM} {
    font-size: ${Styles.text_xxxsmall};
  }
`;

// export {
//   Article,
//   Cards,
//   Card,
//   CardContent,
//   CardTitle,
//   CardMain,
//   CardSubTitle,
//   CardDesc,
// };

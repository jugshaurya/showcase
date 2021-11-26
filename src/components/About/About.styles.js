import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import {
  Container,
  Flex,
  rotate,
  Icon,
  FloatingImage,
} from '../css-in-js/shared';

export const AboutMe = styled(Container)`
  margin: 250px auto 0;
  text-align: center;

  @media ${Styles.device.ipad} {
    margin-top: 200px;
  }
  @media ${Styles.device.mobileL} {
    margin-top: 100px;
  }
`;

export const AboutBackground = styled(FloatingImage)`
  transform: rotate(4deg);
  @media ${Styles.device.mobileL} {
    transform: scale(1.2);
  }
  @media ${Styles.device.mobileM} {
    transform: scale(1.4);
  }
`;

export const RotateBox = styled.div`
  position: absolute;
  width: 335px;
  height: 303px;
  top: 600px;
  left: 40px;
  background: ${Styles.green};
  border-radius: 39px;
  transform: rotate(60deg);
  z-index: -2;
  animation: ${rotate} 4s linear infinite;

  @media ${Styles.device.laptopL} {
    width: 305px;
    height: 373px;
  }

  @media ${Styles.device.laptop} {
    width: 205px;
    height: 273px;
    top: 450px;
  }

  @media ${Styles.device.ipad} {
    width: 155px;
    height: 223px;
    left: 100px;
    top: 420px;
  }
  @media ${Styles.device.mobileL} {
    /* display: none; */
    /* animation: none; */
    width: 150px;
    height: 100px;
    left: 0px;
    opacity: 0.7;
  }
  @media ${Styles.device.mobileM} {
  }
  @media ${Styles.device.mobileS} {
  }
`;

export const H3 = styled.h3`
  font-weight: 500;
  color: ${Styles.blue};
  font-family: ${Styles.font_normal};
  text-align: center;
`;

export const ShauIcon = styled(Icon)`
  width: 200px;
  height: 200px;
  @media ${Styles.device.laptop} {
    width: 150px;
    height: 150px;
  }
  @media ${Styles.device.ipad} {
    margin: 20px auto;
  }
  @media ${Styles.device.mobileL} {
    width: 100px;
    height: 100px;
  }
`;

export const Description = styled.p`
  width: 60%;
  margin: 0 auto;
  font-size: ${Styles.text_small};
  line-height: ${Styles.text_medium};
  font-family: ${Styles.font_normal};

  @media ${Styles.device.laptopL} {
    font-size: ${Styles.text_xsmall};
  }
  @media ${Styles.device.laptop} {
    width: 70%;
  }
  @media ${Styles.device.ipad} {
    width: 75%;
  }
  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text_xxxsmall};
    width: 95%;
  }
  @media ${Styles.device.mobileM} {
    font-size: 0.6em;
    width: 100%;
  }
`;

export const Milestone = styled.div`
  width: 60%;
  margin-left: auto;
  margin-top: 100px;
  @media ${Styles.device.laptopL} {
    margin-top: 70px;
  }
  @media ${Styles.device.ipad} {
    margin-top: 40px;
    width: 70%;
  }
  @media ${Styles.device.mobileL} {
    width: 90%;
    margin: initial auto;
  }
`;

export const MilestoneLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: ${Styles.font_gloriahallelujah};
  font-size: ${Styles.text_xlarge};
  line-height: ${Styles.text_large};
  background: ${Styles.g_blackOrange};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${Styles.device.ipad} {
    font-size: ${Styles.text_medium};
  }
  @media ${Styles.device.mobileM} {
    font-size: ${Styles.text};
  }
`;

export const MilestonePlace = styled.div`
  font-size: ${Styles.text_small};
  span {
    background: ${Styles.g_blueGreen3};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media ${Styles.device.ipad} {
    font-size: ${Styles.text_xxsmall};
  }
`;

export const Map = styled.div`
  position: relative;
  margin-top: 260px;
  @media ${Styles.device.ipad} {
    margin-top: 160px;
  }
`;

export const MapOverlay = styled(Flex)`
  padding-top: 100px;
  width: 50%;
  margin-left: auto;
  margin-right: 20px;

  @media ${Styles.device.laptopL} {
    margin-right: 40px;
  }
  @media ${Styles.device.laptop} {
    margin: 0 auto;
  }
  @media ${Styles.device.mobileL} {
    padding-top: 10px;
    width: 100%;
  }
`;

export const MapOverlayTitle = styled.div`
  font-family: ${Styles.font_robotomono};
  margin-bottom: 100px;
  background: ${Styles.g_pinkBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Styles.device.mobileL} {
    margin-bottom: 50px;
  }
`;

export const MapOverlayLogos = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);

  width: 90%;
  margin: 0 auto;
  @media ${Styles.device.laptop} {
    width: 100%;
  }
  @media ${Styles.device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MapOverlayLogo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 50px 120px;
  @media ${Styles.device.mobileL} {
    grid-template-columns: 30px 70px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const IconText = styled.span`
  font-family: ${Styles.font_gloriahallelujah};
`;

// export {
//   AboutMe,
//   AboutBackground,
//   RotateBox,
//   H3,
//   Description,
//   Milestone,
//   MilestoneLink,
//   MilestonePlace,
//   Map,
//   MapOverlay,
//   MapOverlayTitle,
//   MapOverlayLogos,
//   MapOverlayLogo,
//   IconText,
// };

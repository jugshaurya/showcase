import styled from 'styled-components';
import { Flex } from '../css-in-js/shared';
import * as Styles from '../css-in-js/theme';

export const ExperienceSection = styled.section`
  position: relative;
  margin-top: 200px;
`;

export const Cards = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
`;

export const Card = styled.div`
  position: relative;
  padding: 10px;
`;

export const CardContent = styled.div`
  width: 80%;
  margin: 60px auto;
  text-align: center;
  @media ${Styles.device.laptopL} {
    padding: 0;
    margin: 0 auto;
    margin-top: 40px;
  }
  @media ${Styles.device.laptop} {
  }
`;

export const CardTitle = styled.div`
  font-size: ${Styles.text_xxsmall};
  font-family: ${Styles.font_gabriela};
  background: ${(props) => props.color};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardMain = styled(Flex)`
  font-size: ${Styles.text};
  margin: 40px auto;
  flex-direction: column;
`;

export const CardSubTitle = styled.div`
  font-family: ${Styles.font_gloriahallelujah};
  font-size: ${Styles.text_xxsmall};
  background: ${(props) => props.color};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardDesc = styled.p`
  /* border: 3px solid red; */
  color: ${(props) => props.color};
  text-align: left;
  padding-left: 40px;
  margin-left: 80px;
  margin-bottom: 20px;
  font-family: ${Styles.font_normal};
  font-size: 0.6em;
  position: relative;
  width: 70%;
  &::before {
    content: '🌱';
    display: inline-block;
    font-size: ${Styles.text};
    position: absolute;
    top: 0;
    left: 15px;
  }

  @media ${Styles.device.laptopL} {
    width: 80%;
    margin-left: 50px;
    font-size: 0.5em;
  }
`;

export const CardBottom = styled(Flex)`
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const CardLinks = styled(Flex)``;
export const CardLink = styled.a``;
export const CardDate = styled.div`
  font-size: ${Styles.text_xxsmall};
  color: ${Styles.gray};
`;

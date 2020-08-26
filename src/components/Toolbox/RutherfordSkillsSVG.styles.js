import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import { Flex } from '../styles-in-js/shared';

export const SkillsSVG = styled.svg`
  width: 70%;
  height: auto;
  #bulb-with-shadow {
    color: ${Styles.gray};
    cursor: pointer;
    /* TODO: Adding a title attr like feeling here - Not working check it */
    &::after {
      border: 3px solid red;
      content: 'Click me, I changes colors like Chameleon';
    }
  }

  @media ${Styles.device.mobileL} {
    width: 100%;
    transform: scale(1.1);
  }
`;

export const SkillsSVGBox = styled(Flex)`
  margin-top: -160px;

  @media ${Styles.device.mobileL} {
    margin-top: -100px;
  }
`;

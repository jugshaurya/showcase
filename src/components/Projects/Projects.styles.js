import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import { Flex } from '../styles-in-js/shared';

export const ProjectSection = styled.section`
  position: relative;
  margin-top: 160px;
`;

export const ProjectsShowcase = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(1, fr);
  gap: 170px;

  @media ${Styles.device.mobileL} {
    gap: 100px;
  }
`;

export const ProjectShowcase = styled(Flex)`
  justify-content: space-between;
  position: relative;
  @media ${Styles.device.laptop} {
    flex-direction: column;
  }
`;

export const MacDemo = styled(Flex)`
  position: relative;
  max-height: 1000px;
  max-width: 600px;
  width: 45%;
  @media ${Styles.device.laptop} {
    order: -1;
    position: absolute;
    bottom: 100px;
    right: 40px;
  }
  @media ${Styles.device.mobileL} {
    position: relative;
    top: 0;
    left: 0;
    border: 6px double ${Styles.gray};
    border-radius: 25px;
    overflow: hidden;
    width: 90%;
  }
`;

export const Mac = styled.img`
  position: absolute;
  top: -32px;
  left: 0;
  align-self: start;
  @media ${Styles.device.laptop} {
    display: none;
  }
`;

export const Gif = styled.img`
  width: 90%;
  height: 90%;
  border: 10px double gray;
  border-radius: 5px;
  background-size: cover;
  @media ${Styles.device.laptop} {
    width: 100%;
    height: 100%;
  }
  @media ${Styles.device.mobileL} {
    border: none;
    width: 90%;
    height: 90%;
  }
`;

import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex } from '../css-in-js/shared';

export const EditorLayout = styled.div`
  width: 50%;
  @media ${Styles.device.laptop} {
    width: 100%;
  }
`;

export const EditorTop = styled(Flex)`
  justify-content: flex-end;
  border: 10px double ${Styles.gray};
  width: 100%;
  border-radius: 25px;
  padding: 5px 10px;
  background: ${Styles.background};

  @media ${Styles.device.laptop} {
    width: 80%;
    margin: 0 auto;
  }
`;

export const EditorTitle = styled.div`
  color: ${(props) => props.color};
  margin-right: auto;
  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text_xsmall};
    padding-left: 10px;
  }
`;

export const Dot = styled(Flex)`
  font-family: ${Styles.font_normal};
  font-size: ${Styles.text_xxxsmall};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
  font-weight: bold;
  color: ${Styles.black};
  &.green {
    background: ${Styles.green};
    @media ${Styles.device.mobileL} {
      cursor: pointer;
    }
  }
  &.yellow {
    background: ${Styles.yellow};
  }
  &.red {
    background: ${Styles.red};
  }
`;

export const EditorStyles = styled.div`
  position: relative;
  border: 6px double ${(props) => props.color};
  border-radius: 25px;
  background: ${Styles.background};
  padding: 10px 20px;
  * {
    font-family: ${Styles.font_robotomono};
  }
  @media ${Styles.device.laptop} {
    min-height: 80vh;
  }
  @media ${Styles.device.ipad} {
    min-height: 70vh;
  }
  @media ${Styles.device.mobileL} {
    min-height: 40vh;
    padding: 2px;
    /* TODO: add a animation here */

    &.show-editor {
      display: block;
    }
    &.hide-editor {
      display: none;
    }
    border: 6px double gray;
    * {
      font-size: ${Styles.text_xsmall};
    }
  }
`;

export const EditorBottom = styled(Flex)`
  width: 100%;
  border-radius: 25px;
  padding: 5px 10px;
  margin-top: 10px;
  justify-content: space-between;
  @media ${Styles.device.mobileL} {
    flex-direction: column;
  }
`;

export const ProjectTechStack = styled(Flex)`
  @media ${Styles.device.mobileL} {
    margin-top: 10px;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const ProjectLinks = styled(Flex)`
  @media ${Styles.device.mobileL} {
    margin-top: 20px;
  }
`;

export const Button = styled(Flex)`
  padding: 5px 10px;
  text-decoration: none;
  border: 1px dashed ${Styles.gray};
  border-radius: 10px;
  color: ${Styles.white};
  font-size: ${Styles.text_xxsmall};
  margin: 0 10px;
  font-family: ${Styles.font_gabriela};
  background: ${Styles.black20};

  @media ${Styles.device.laptop} {
    background: ${Styles.black};
    border: 4px double ${(props) => props.color};
  }
  @media ${Styles.device.mobileL} {
    background: ${Styles.black};
    border: 4px double gray;
  }
`;

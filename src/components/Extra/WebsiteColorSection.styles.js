import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex } from '../css-in-js/shared';

export const WebsiteColors = styled(Flex)`
  padding: 20px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 160px;
  width: fit-content;
  border: 3px dotted ${Styles.gray};
  border-radius: 22px;
  background: ${Styles.codeblocks_output_border};
  flex-wrap: wrap;

  @media ${Styles.device.mobileL} {
    margin-bottom: 60px;
    display: none;
  }
`;

export const WebsiteColor = styled.div`
  position: relative;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  transform: rotate(45deg);
  margin: -2px;
  background: ${(props) => props.color};

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }

  &:active {
    border: 10px double ${Styles.codeblocks_output_border};
  }

  &:before {
    border: 1px solid ${Styles.gray};
    pointer-events: none;
    position: absolute;
    text-align: center;
    content: 'Copy it';
    font-size: 12px;
    width: 100px;
    border-radius: 10px;
    padding: 10px;
    left: 50%;
    bottom: -100%;
    background: ${Styles.background};
    transition: transform 0.5s;
    transform: rotate(45deg);
  }

  @media ${Styles.device.ipad} {
    &::before {
      display: none;
    }
    margin: -5px 10px;
  }

  @media ${Styles.device.mobileL} {
    width: 24px;
    height: 24px;
  }
`;

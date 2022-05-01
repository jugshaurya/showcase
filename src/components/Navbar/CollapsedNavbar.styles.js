import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex, rotate } from '../css-in-js/shared';

import { Link } from 'gatsby';

export const NavbarCurtain = styled.div`
  width: 50vw;
  top: 2%;
  right: 45%;
  position: fixed;
  z-index: 10;
  overflow-x: hidden;
  transition: height 0.2s;
  background-color: ${Styles.black};
`;

export const CurtainContent = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const CrossButton = styled.span`
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: ${Styles.text_xxlarge};
  animation: ${rotate} 5s linear infinite;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 14px 0;
  text-decoration: none;
  font-size: ${Styles.text_medium};
  color: ${Styles.gray};
  &.active {
    position: relative;
    color: ${Styles.twitterBlue};
  }
`;

/**
 * Note: Add here as well whatever exported
 export { NavbarCurtain, CurtainContent, CrossButton, NavLink };
 */

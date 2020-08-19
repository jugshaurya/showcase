import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import { Flex } from '../styles-in-js/shared';
import { Link } from 'gatsby';

export const SiteLogo = styled.img`
  width: 60px;
  height: 60px;
  @media ${Styles.device.ipad} {
    height: 48px;
    width: 48px;
  }
`;

export const Nav = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  min-height: 150px;
  &.hide-on-mobile {
    display: flex;
  }
  &.show-on-mobile {
    display: none;
  }

  @media ${Styles.device.mobileL} {
    min-height: 100px;
    &.hide-on-mobile {
      display: none;
    }
    &.show-on-mobile {
      display: flex;
    }
  }
`;

export const NavList = styled(Flex)``;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${Styles.gray};
  margin: 0 10px;
  &.active {
    position: relative;
    color: ${Styles.green};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 70%;
      height: 5px;
      border-radius: 7px;
      background: ${Styles.blue};
    }
  }

  @media ${Styles.device.laptop} {
    font-size: ${Styles.text_small};
  }
  @media ${Styles.device.ipad} {
    font-size: ${Styles.text_xsmall};
  }
`;

export const Bars = styled(Flex)`
  font-size: ${Styles.text};
`;

export const Bar = styled.div`
  margin: 2px 0;
  height: 5px;
  width: 30px;
  border-radius: 10px;
  background: ${Styles.white};
`;

/**
 * Note: Add here as well whatever exported
 export { SiteLogo, Nav, NavList, NavItem, Bars, Bar };
 */

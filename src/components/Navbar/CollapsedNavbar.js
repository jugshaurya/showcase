import React from 'react';
import { Link } from 'gatsby';

import styled, { keyframes } from 'styled-components';
import { Flex } from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

const CollapsedNavbar = ({
  toggleNavbar,
  height,
  links,
  setActive,
  active,
}) => {
  return (
    <NavbarCurtain style={{ height }}>
      <CrossButton
        role="button"
        tabIndex="0"
        className="closebtn"
        onClick={() => toggleNavbar(false)}
        onKeyPress={() => toggleNavbar(false)}
      >
        &times;
      </CrossButton>
      <CurtainContent fd={'column'}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={active === link.href ? 'active' : ''}
            onClick={() => {
              setActive(link.href);
              toggleNavbar(false);
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </CurtainContent>
    </NavbarCurtain>
  );
};

export default CollapsedNavbar;

const NavbarCurtain = styled.div`
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  overflow-x: hidden;
  transition: height 0.2s;
  background-color: ${Styles.black};
`;

const CurtainContent = styled(Flex)`
  position: absolute;
  top: 10%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CrossButton = styled.span`
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: ${Styles.text_xxlarge};
  animation: ${rotate} 5s linear infinite;
`;

const NavLink = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 14px 0;
  text-decoration: none;
  font-size: ${Styles.text};
  color: ${Styles.gray};
  &.active {
    position: relative;
    color: ${Styles.green};
  }
`;

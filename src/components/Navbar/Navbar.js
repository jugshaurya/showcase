import React, { useState } from 'react';
import { Link } from 'gatsby';

import CollapsedNavbar from './CollapsedNavbar';

import Logo from '../../static/logo/logo-green.svg';
import '../../styles/navbar.scss';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Stats',
    href: '/#stats',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Skills',
    href: '/#skills',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Experience',
    href: '/#experience',
  },
  {
    name: 'Contacts',
    href: '/#contacts',
  },
];

import styled from 'styled-components';
import { Container, Flex } from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

const SiteLogo = styled.div`
  width: 60px;
  height: 60px;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
`;

const NavList = styled(Flex)`
  border: 3px solid ${Styled.gray};
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: ${Styles.text};
  color: ${Styled.gray};
  margin: 0 10px;
  &.active {
    position: relative;
    color: ${Styled.green};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 40px;
      height: 6px;
      border-radius: 7px;
      background: ${Styled.blue};
    }
  }
`;

const Bars = styled(Flex)`
  font-size: ${Styles.text};
`;

const Bar = styled.div`
  margin: 2px 0;
  height: 6px;
  width: 30px;
  border-radius: 10px;
  background: ${Styles.white};
`;

const ThreeBars = ({ toggleNavbar }) => {
  return (
    <Bars
      jc={'space-between'}
      role="button"
      tabIndex="0"
      onClick={() => toggleNavbar(true)}
      onKeyPress={() => toggleNavbar(true)}
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <Bar />
      <Bar style={{ transform: 'translateX(6px)' }} />
      <Bar style={{ transform: 'translateX(12px)' }} />
    </Bars>
  );
};

const Navbar = ({ defaultRoute }) => {
  const [active, setActive] = useState(defaultRoute || '/');
  const [collapseHeight, setCollapseHeight] = useState(0);
  const toggleNavbar = (val) =>
    val ? setCollapseHeight(100) : setCollapseHeight(0);

  return (
    <Nav>
      <Container height={'12vh'} className="hide-on-mobile">
        <Flex jc={'space-between'}>
          <SiteLogo src={Logo} alt="site Logo" />
          <NavList>
            {links.map((link) => (
              <NavItem
                key={link.name}
                to={link.href}
                className={active === link.href ? 'active' : ''}
                onClick={() => setActive(link.href)}
              >
                {link.name}
              </NavItem>
            ))}
          </NavList>
        </Flex>
      </Container>
      <Container height={'12vh'} className="show-on-mobile">
        <Flex jc={'space-between'}>
          <SiteLogo src={Logo} alt="site Logo" />
          <ThreeBars toggleNavbar={toggleNavbar} />
        </Flex>
      </Container>
      <CollapsedNavbar
        toggleNavbar={toggleNavbar}
        height={`${collapseHeight}%`}
        links={links}
        setActive={setActive}
        active={active}
      />
    </Nav>
  );
};

export default Navbar;

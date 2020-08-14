import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { Container, Flex } from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

import CollapsedNavbar from './CollapsedNavbar';
import Logo from '../../static/logo/logo-green.svg';

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

const Navbar = ({ defaultRoute }) => {
  const [active, setActive] = useState(defaultRoute || '/');
  const [collapseHeight, setCollapseHeight] = useState(0);
  const toggleNavbar = (val) =>
    val ? setCollapseHeight(100) : setCollapseHeight(0);

  // TODO: Change navbar Background on Scroll
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const changeNavbarBackground = (e) => {
      const Yoffset = Math.round(window.scrollY / 2);
      if (Yoffset < 150) {
      } else {
      }
    };

    window.addEventListener('scroll', changeNavbarBackground);
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, []);

  return (
    <>
      {/* hide-on-mobile */}
      <Nav as="nav" className="hide-on-mobile" id="navbar">
        <Container>
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
      </Nav>
      {/* show-on-mobile */}
      <Nav as="nav" className="show-on-mobile" id="navbar">
        <Container>
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
    </>
  );
};

export default Navbar;

const SiteLogo = styled.img`
  width: 60px;
  height: 60px;
  /* border: 3px solid red; */
  @media ${Styles.device.laptopL} {
  }
  @media ${Styles.device.laptop} {
  }
  @media ${Styles.device.ipad} {
    height: 48px;
    width: 48px;
  }
  @media ${Styles.device.mobileL} {
  }
  @media ${Styles.device.mobileM} {
  }
  @media ${Styles.device.mobileS} {
  }
`;

const Nav = styled(Flex)`
  /* position: fixed; */
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

  @media ${Styles.device.laptopL} {
  }
  @media ${Styles.device.laptop} {
  }
  @media ${Styles.device.ipad} {
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
  @media ${Styles.device.mobileM} {
  }
  @media ${Styles.device.mobileS} {
  }
`;

const NavList = styled(Flex)`
/* font-family:${Styles.font_gabriela} */
`;

const NavItem = styled(Link)`
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

  @media ${Styles.device.laptopL} {
  }
  @media ${Styles.device.laptop} {
    font-size: ${Styles.text_small};
  }
  @media ${Styles.device.ipad} {
    font-size: ${Styles.text_xsmall};
  }
  @media ${Styles.device.mobileL} {
  }
  @media ${Styles.device.mobileM} {
  }
  @media ${Styles.device.mobileS} {
  }
`;

const Bars = styled(Flex)`
  font-size: ${Styles.text};
`;

const Bar = styled.div`
  margin: 2px 0;
  height: 5px;
  width: 30px;
  border-radius: 10px;
  background: ${Styles.white};
`;

const ThreeBars = ({ toggleNavbar }) => {
  return (
    <Bars
      fd={'column'}
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

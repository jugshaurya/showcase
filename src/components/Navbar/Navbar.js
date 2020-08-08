import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/logo/logo-green.svg';
import '../../styles/navbar.scss';
import CollapsedNavbar from './CollapsedNavbar';

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
  const [collapseState, setCollapsedState] = useState({
    isCollapsedNavOpen: false,
    height: 0,
  });

  const toggleNavbar = (val) => {
    setCollapsedState({
      ...collapseState,
      isCollapsedNavOpen: val,
      height: val ? 100 : 0,
    });
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links-list">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={() => setActive(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-cross" onClick={() => toggleNavbar(true)}>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="bars">
          <div className="bar"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"> </div>
        </div>
      </div>
      <CollapsedNavbar
        toggleNavbar={toggleNavbar}
        height={`${collapseState.height}%`}
        links={links}
        setActive={setActive}
        active={active}
      />
    </nav>
  );
};

export default Navbar;

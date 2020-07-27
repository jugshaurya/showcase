import React, { useState } from 'react';
import { Link } from 'gatsby';
import GraphqlIcon from '../static/icons/graphql.svg';
import '../styles/navbar.scss';

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
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={GraphqlIcon} alt="Logo" />
        </div>
        <div className="links-list">
          {links.map((link) => (
            <Link
              to={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={() => setActive(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

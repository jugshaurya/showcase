import React from 'react';

import {
  NavbarCurtain,
  CurtainContent,
  CrossButton,
  NavLink,
} from './CollapsedNavbar.styles';

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

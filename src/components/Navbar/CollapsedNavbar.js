import React from 'react';
import { Link } from 'gatsby';
import '../../styles/collapsedNavbar.scss';

const CollapsedNavbar = ({
  toggleNavbar,
  height,
  links,
  setActive,
  active,
}) => {
  return (
    <div id="myNav" className="overlay" style={{ height }}>
      <span
        role="button"
        tabIndex="0"
        className="closebtn"
        onClick={() => toggleNavbar(false)}
        onKeyPress={() => toggleNavbar(false)}
      >
        &times;
      </span>

      <div
        role="button"
        tabIndex="0"
        className="overlay-content"
        onClick={() => toggleNavbar(false)}
        onKeyPress={() => toggleNavbar(false)}
      >
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
  );
};

export default CollapsedNavbar;

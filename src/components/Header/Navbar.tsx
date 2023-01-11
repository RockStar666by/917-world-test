import React from 'react';
import { StyledNavbar, NavList } from './Header.styles';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavList>
        <li>
          <a href=''>Lifetime ISA</a>
        </li>
        <li>
          <a href=''>Blog</a>
        </li>
        <li>
          <a href=''>Pact</a>
        </li>
        <li>
          <a href=''>Purpose</a>
        </li>
      </NavList>
    </StyledNavbar>
  );
};

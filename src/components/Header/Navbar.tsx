import React from 'react';
import { StyledNavbar, NavList } from './Header.styles';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavList>
        <li>
          <a href='#lifetime'>Lifetime ISA</a>
        </li>
        <li>
          <a href='#blog'>Blog</a>
        </li>
        <li>
          <a href='#pact'>Pact</a>
        </li>
        <li>
          <a href='#purpose'>Purpose</a>
        </li>
      </NavList>
    </StyledNavbar>
  );
};

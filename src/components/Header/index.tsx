import React from 'react';
import { Logo } from './Logo';
import { HeaderContainer, StyledHeader } from './Header.styles';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
    </StyledHeader>
  );
};

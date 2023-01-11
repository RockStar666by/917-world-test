import React from 'react';
import { StyledLogo, LogoLink, LogoText } from './Header.styles';

export const Logo = () => {
  return (
    <StyledLogo>
      <LogoLink href='#'>
        <LogoText>
          Nude<sup>®</sup>
        </LogoText>
      </LogoLink>
    </StyledLogo>
  );
};

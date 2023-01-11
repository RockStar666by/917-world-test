import styled from 'styled-components';

// ------------------ Header

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #fdf7f0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`;

// ------------------ Logo

export const StyledLogo = styled.div`
  width: 91px;
  height: 54px;
  font-family: 'Times New Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 54px;
  letter-spacing: 1.6px;
`;

export const LogoText = styled.p`
  margin: 0;
  sup {
    font-size: 10px;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: #3e3e42;
`;

// ------------------ Navbar

export const StyledNavbar = styled.nav`
  width: 100%;
  max-width: 400px;
  margin-bottom: 14px;
`;

export const NavList = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;

  li a {
    display: block;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.32px;
    color: #3e3e42;
    text-decoration: none;
    &:hover {
      box-sizing: border-box;
      border-bottom: 1px solid #3e3e42;
    }
    &.active {
      box-sizing: border-box;
      border-bottom: 1px solid grey;
      color: grey;
    }
  }
`;

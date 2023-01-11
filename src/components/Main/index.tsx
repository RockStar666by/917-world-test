import React from 'react';
import { Description } from '../Description';
import { Downloads } from '../Downloads';
import { Secondary } from '../SecondaryText';
import {
  StyledMain,
  MainContainer,
  MainArticle,
  MainAside
} from './Main.styles';

export const Main = () => {
  return (
    <StyledMain>
      <MainContainer>
        <MainArticle>
          <Description />
          <Secondary />
          <Downloads />
        </MainArticle>
        <MainAside></MainAside>
      </MainContainer>
    </StyledMain>
  );
};

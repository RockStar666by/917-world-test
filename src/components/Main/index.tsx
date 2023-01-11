import React from 'react';
import { Description } from '../Description';
import { Downloads } from '../Downloads';
import { Partners } from '../Partners';
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
          <Partners />
        </MainArticle>
        <MainAside></MainAside>
      </MainContainer>
    </StyledMain>
  );
};

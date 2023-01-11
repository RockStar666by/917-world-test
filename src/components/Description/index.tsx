import React from 'react';
import {
  DescriptionHeader,
  DescriptionText,
  DescriptionContainer
} from './Description.styles';

export const Description = () => {
  return (
    <DescriptionContainer>
      <DescriptionHeader>
        Start building your first home deposit today
      </DescriptionHeader>
      <DescriptionText>
        Open a Nude savings or investment account, boost your deposit with
        government bonuses and get ideas to buy your home in record time.
      </DescriptionText>
    </DescriptionContainer>
  );
};

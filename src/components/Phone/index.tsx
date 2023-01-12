import React from 'react';
import {
  PhoneContainer,
  Giveaway,
  Watch,
  WatchPreview,
  WatchText,
  PhoneScreen
} from './Phone.styles';

export const Phone = () => {
  return (
    <PhoneContainer>
      <Giveaway href='' />
      <Watch>
        <WatchPreview href='' />
        <WatchText>Watch: Nude in under 2 mins</WatchText>
      </Watch>
      <PhoneScreen />
    </PhoneContainer>
  );
};

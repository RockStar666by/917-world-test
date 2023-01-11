import React from 'react';
import { PartnersContainer, PartnerImage } from './Partners.styles';
import { imagesArray } from './images';

export const Partners = () => {
  return (
    <PartnersContainer>
      {imagesArray.map((image) => (
        <PartnerImage key={image} src={image} />
      ))}
    </PartnersContainer>
  );
};

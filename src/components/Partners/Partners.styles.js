import styled, { css } from 'styled-components';

function createCSS() {
  let styles = '';

  for (let i = 0; i < 8; i += 1) {
    styles += `
       & :nth-child(${i}) {
         animation: 1s ease-out ${2.5 + i * 0.2}s 1 slideInFromLeft;
         animation-fill-mode: forwards;
         fill: white;
         opacity: 0;
       }
     `;
  }

  return css`
    ${styles}
  `;
}

export const PartnersContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  ${createCSS()};

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-20%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const PartnerImage = styled.img`
  height: 50px;
`;

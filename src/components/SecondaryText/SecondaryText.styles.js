import styled from 'styled-components';

export const SecondaryContainer = styled.div`
  opacity: 0;
  animation: 1s ease-out 1s 1 slideInFromLeft;
  animation-fill-mode: forwards;

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

export const SecondaryText = styled.p`
  display: flex;
  width: 100%;
  max-width: 356px;
  text-align: left;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 0.32px;
  color: #3e3e42;
`;

import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  animation: 1s ease-out 0s 1 slideInFromUp;

  @keyframes slideInFromUp {
    0% {
      transform: translateY(-20%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const DescriptionHeader = styled.h1`
  display: flex;
  margin: 45px 0 27px;
  width: 100%;
  text-align: left;
  font-family: 'Times New Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 50px;
  letter-spacing: 1px;
  color: #374f4c;
`;

export const DescriptionText = styled.p`
  display: flex;
  width: 100%;
  text-align: left;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.32px;
  color: #3e3e42;
`;

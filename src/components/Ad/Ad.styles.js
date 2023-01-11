import styled from 'styled-components';
import bgImage from '../../assets/images/ad.png';

export const StyledAd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #374f4c;
`;

export const StyledImage = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 40px;
  background: url(${bgImage}) center no-repeat;
  background-size: contain;
`;

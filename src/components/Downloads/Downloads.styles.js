import styled from 'styled-components';
import bgImageApple from '../../assets/images/download_apple.png';
import bgImageAndroid from '../../assets/images/download_android.png';

export const DownloadsContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  animation: 1s ease-out 2s 1 rotate;
  animation-fill-mode: forwards;

  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @keyframes rotate {
    0% {
      transform: rotateX(0);
      opacity: 0;
    }
    33% {
      transform: rotateX(90deg);
    }
    66% {
      transform: rotateX(270deg);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const AppstoreBtn = styled.a`
  width: 162px;
  height: 54px;
  background: url(${bgImageApple});
`;

export const PlaymarketBtn = styled.a`
  width: 182px;
  height: 54px;
  background: url(${bgImageAndroid});
`;

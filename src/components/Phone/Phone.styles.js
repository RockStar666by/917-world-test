import styled from 'styled-components';
import bgGiveaway from '../../assets/images/giveaway.png';
import bgWatch from '../../assets/images/watch_background.png';
import bgWatchPreview from '../../assets/images/watch_preview.png';
import bgPhoneScreen from '../../assets/images/phone_screen.png';

export const PhoneContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  animation: 1s ease-out 4s 1 zoom;
  animation-fill-mode: forwards;

  width: 100%;
  height: calc(100vw - 400px);
  min-width: 450px;
  min-height: 480px;
  max-height: 600px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-auto-rows: max-content;
  align-items: flex-start;

  @keyframes zoom {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Giveaway = styled.a`
  grid-area: 1 / 1 / 3 / 3;
  margin: 50px 0 0 48px;
  width: 61%;
  height: 55%;
  background: url(${bgGiveaway}) center no-repeat;
  background-size: contain;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;

export const Watch = styled.div`
  grid-area: 2 / 1 / 4 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -10px;
  width: 88%;
  height: 91%;
  background: url(${bgWatch}) center no-repeat;
  background-size: contain;
`;

export const WatchPreview = styled.a`
  position: relative;
  top: 24%;
  width: 57%;
  height: 42%;
  background: url(${bgWatchPreview}) center no-repeat;
  background-size: contain;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const WatchText = styled.p`
  position: relative;
  top: 20%;
  max-width: 143px;
  user-select: none;
  font-family: 'Times New Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.8px;
  color: #374f4c;
`;

export const PhoneScreen = styled.div`
  position: relative;
  grid-area: 1 / 2 / 4 / 4;
  align-self: flex-start;
  justify-self: end;
  width: 73%;
  height: 97%;
  background: url(${bgPhoneScreen}) center no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1;
`;

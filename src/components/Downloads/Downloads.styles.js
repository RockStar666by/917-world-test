import styled from 'styled-components';
import bgImageApple from '../../assets/images/download_apple.png';
import bgImageAndroid from '../../assets/images/download_android.png';

export const DownloadsContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
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

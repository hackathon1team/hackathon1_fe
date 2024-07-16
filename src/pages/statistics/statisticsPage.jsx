import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/logInStatistics.png';
import { BackGroundImg } from '../../styles/common';
import GlassmorphismModal from '../../components/glassmorphismModal/glassmorphismModal';
import TitleBox from './components/titleBox';
import PercentBar from './components/\bpercentBar';

function StatisticsPage() {
  return (
    <>
      <BackImg>
        <GlassmorphismModal margin={'100px'}>
          <TitleBox text={'이번 달 내가 가장 많이\n쓴 시간을 살펴볼까요?'} />
        </GlassmorphismModal>
      </BackImg>
      <BackImg>
        <GlassmorphismModal margin={'100px'}>
          <TitleBox
            text={'지난 달과 비교하여\n 시간을 한 눈에 확인해 볼까요?'}
          />
          <PercentWrapper>
            <PercentBar />
            <PercentBar />
          </PercentWrapper>
        </GlassmorphismModal>
      </BackImg>
    </>
  );
}
export default StatisticsPage;

const BackImg = styled.div`
  ${BackGroundImg(Background)}
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PercentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

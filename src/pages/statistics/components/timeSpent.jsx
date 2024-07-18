import styled from 'styled-components';
import { BackGroundImg } from '../../../styles/common';
import TitleBox from './titleBox';
import Background from '../../../assets/Img/backgroundImg/logInStatistics.png';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { ArrowIcon } from '../../../components/icons/icons';

function TimeSpent() {
    return (
        <BackImg>
            <GlassmorphismModal>
                <TitleBox
                    text={'이번 달 내가 가장 많이\n쓴 시간을 살펴볼까요?'}
                />
            </GlassmorphismModal>
            <ArrowIcon />
        </BackImg>
    );
}
export default TimeSpent;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    justify-content: center;
`;

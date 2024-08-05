import styled from 'styled-components';
import { BackGroundImg } from '../../../styles/common';
import TitleBox from './titleBox';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { ArrowIcon } from '../../../components/icons/icons';
import PrevNoneData from './prevNoneData';
import Cloud1 from '../../../assets/Img/LogInImg/Cloud1.png';
import PieChartComponent from './pieChartComponent';

function TimeSpent({ data, tabsList }) {
    return (
        <BackImg ref={tabsList[0].element}>
            <GlassmorphismModal height={'55%'}>
                <Cloud1Img src={Cloud1} alt="" />
                <TitleBox
                    text={'이번 달 내가 가장 많이\n쓴 시간을 살펴볼까요?'}
                />
                {data.length === 0 ? (
                    <PrevNoneData />
                ) : (
                    <Wrapper>
                        <PieChartComponent apiData={data} />
                    </Wrapper>
                )}
            </GlassmorphismModal>
            <ArrowIcon onClick={tabsList[1].onMoveToElement} />
        </BackImg>
    );
}
export default TimeSpent;
const BackImg = styled.div`
    ${BackGroundImg}
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    justify-content: center;
`;
const Cloud1Img = styled.img`
    position: absolute;
    top: -100px;
    left: -10px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 40px;
`;

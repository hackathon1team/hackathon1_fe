import styled from 'styled-components';
import { BackGroundImg } from '../../../styles/common';
import TitleBox from './titleBox';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { ArrowIcon } from '../../../components/icons/icons';
import PieChartComponent from './pieChartComponent';
import PrevNoneData from './prevNoneData';
import Cloud1 from '../../../assets/Img/LogInImg/Cloud1.png';

function TimeSpent({ data, scrollRef }) {
    const scrollToItem = () => {
        console.log('dd');
        scrollRef.current[3].scrollRef({ behavior: 'smooth' });
    };
    return (
        <BackImg>
            <GlassmorphismModal height={'70%'}>
                <Cloud1Img src={Cloud1} alt="" />
                <TitleBox
                    text={'이번 달 내가 가장 많이\n쓴 시간을 살펴볼까요?'}
                />
                {data.length === 0 ? (
                    <PrevNoneData />
                ) : (
                    <PieChartComponent apiData={data} />
                )}
            </GlassmorphismModal>
            <ArrowIcon onClick={scrollToItem} />
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

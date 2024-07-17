import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import TitleBox from './titleBox';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/logInStatistics.png';
import ColumnPercentBar from './columnPercentBar';

function EmotionsSummary({ data }) {
    const maxObjArr = data.reduce((prev, value) => {
        return prev.count >= value.count ? prev : value;
    });

    let ratio = Math.floor(100 / maxObjArr.count).toFixed(2);

    return (
        <BackImg>
            <GlassmorphismModal margin={'100px'}>
                <TitleBox
                    text={'이번 달, 내가 가장 많이\n느낀 감정을 확인해 볼까요?'}
                />
                <PercentWrapper>
                    {data.map((val, idx) => (
                        <ColumnPercentBar
                            key={idx}
                            ratio={ratio}
                            category={val.type}
                            count={val.count}
                        />
                    ))}
                </PercentWrapper>
            </GlassmorphismModal>
        </BackImg>
    );
}
export default EmotionsSummary;

const BackImg = styled.div`
    ${BackGroundImg(Background)}/* display: flex;
    flex-direction: column;
    align-items: center; */
`;
const PercentWrapper = styled.div`
    //     display: flex;
    //     align-items: center;
    //     flex-direction: column;
    //     justify-content: center;
    //     width: 100%;
    //     & > * {
    //         margin-top: 15px;
    //     }
    background-color: red;
    min-height: 400px;
    display: flex;
    flex-direction: column;
`;

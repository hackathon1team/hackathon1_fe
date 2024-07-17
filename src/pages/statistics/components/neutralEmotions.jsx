import styled from 'styled-components';
import PercentBar from './percentBar';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import TitleBox from './titleBox';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/logInStatistics.png';

function NeutralEmotions({ data }) {
    const maxObjArr = data.reduce((prev, value) => {
        return prev.count >= value.count ? prev : value;
    });

    let ratio = Math.floor(100 / maxObjArr.count).toFixed(2);

    return (
        <BackImg>
            <GlassmorphismModal margin={'100px'}>
                <TitleBox text={'중립적 감정'} />
                <PercentWrapper>
                    {data.map((val, idx) => (
                        <PercentBar
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
export default NeutralEmotions;
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
    & > * {
        margin-top: 15px;
    }
`;

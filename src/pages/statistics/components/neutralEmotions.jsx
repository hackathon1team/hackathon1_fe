import styled from 'styled-components';
import PercentBar from './percentBar';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import TitleBox from './titleBox';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/logInStatistics.png';
import { ArrowIcon, UpArrowIcon } from '../../../components/icons/icons';
import PrevNoneData from './prevNoneData';

function NeutralEmotions({ data }) {
    const maxObjArr =
        data.length === 0
            ? 0
            : data.reduce((prev, value) => {
                  return prev.count >= value.count ? prev : value;
              });

    let ratio = Math.floor(100 / maxObjArr.count).toFixed(2);

    return (
        <BackImg>
            <UpArrowIcon />
            <GlassmorphismModal height={'70%'}>
                <TitleBox text={'중립적 감정'} />
                {maxObjArr === 0 ? (
                    <PrevNoneData />
                ) : (
                    <PercentWrapper>
                        {data.map((val, idx) => (
                            <PercentBar
                                key={idx}
                                ratio={ratio}
                                category={val.emotions}
                                count={val.count}
                            />
                        ))}
                    </PercentWrapper>
                )}
            </GlassmorphismModal>
            <ArrowIcon />
        </BackImg>
    );
}
export default NeutralEmotions;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PercentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    width: 100%;
    & > * {
        margin-top: 15px;
    }
`;

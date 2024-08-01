import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import TitleBox from './titleBox';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/logInStatistics.png';
import ColumnPercentBar from './columnPercentBar';
import { ArrowIcon, UpArrowIcon } from '../../../components/icons/icons';
import PrevNoneData from './prevNoneData';

function EmotionsSummary({ data }) {
    const maxObjArr =
        data.length === 0
            ? 0
            : data.reduce((prev, value) => {
                  return Number(prev.count) >= Number(value.count)
                      ? prev
                      : value;
              });

    let ratio = Math.floor(100 / maxObjArr.count).toFixed(2);

    return (
        <BackImg>
            <UpArrowIcon />
            <GlassmorphismModal height={'70%'}>
                <TitleBox
                    text={'이번 달, 내가 가장 많이\n느낀 감정을 확인해 볼까요?'}
                />
                {maxObjArr === 0 ? (
                    <PrevNoneData />
                ) : (
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
                )}
            </GlassmorphismModal>
            <ArrowIcon />
        </BackImg>
    );
}
export default EmotionsSummary;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const PercentWrapper = styled.div`
    margin-top: 20px;
    height: 80%;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

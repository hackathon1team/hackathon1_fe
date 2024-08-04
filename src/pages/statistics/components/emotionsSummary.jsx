import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import TitleBox from './titleBox';
import { BackGroundImg } from '../../../styles/common';
import ColumnPercentBar from './columnPercentBar';
import { ArrowIcon, UpArrowIcon } from '../../../components/icons/icons';
import PrevNoneData from './prevNoneData';
import Cloud1 from '../../../assets/Img/LogInImg/Cloud1.png';

function EmotionsSummary({ data, tabsList }) {
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
        <BackImg ref={tabsList[2].element}>
            <UpArrowIcon onClick={tabsList[1].onMoveToElement} />
            <GlassmorphismModal height={'70%'}>
                <Cloud1Img src={Cloud1} alt="" />

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
                                tabsList={tabsList}
                            />
                        ))}
                    </PercentWrapper>
                )}
            </GlassmorphismModal>
            <ArrowIcon onClick={tabsList[3].onMoveToElement} />
        </BackImg>
    );
}
export default EmotionsSummary;

const BackImg = styled.div`
    ${BackGroundImg()}
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
const Cloud1Img = styled.img`
    position: absolute;
    top: -100px;
    left: -10px;
`;

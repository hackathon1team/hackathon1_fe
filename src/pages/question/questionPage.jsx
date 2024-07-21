import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import { BackGroundImg } from '../../styles/common';
import NoneCalendarPage from './components/NoneCalendarPage';
import CustomButton from '../../components/customButton/customButton';
import { BiBox } from 'react-icons/bi';
import Star1 from '../../assets/Img/questionImg/star1.png';
import Star2 from '../../assets/Img/questionImg/star.png';
import Hami from '../../assets/Img/questionImg/hamham.png';

function QuestionPage() {
    return (
        <>
            <BackImg>
                <NoneCalendarPage />
            </BackImg>
            <BackImg>
                <Wrapper>
                    <TopBox>
                        오늘, 가장 인상깊었던 <br />
                        사건은 무엇인가요?
                        <StarImg1 src={Star1} alt="" />
                        <StarImg2 src={Star2} alt="" />
                    </TopBox>
                    <MiddleBox>
                        <HamHam src={Hami} alt="" />
                        <CategoryBox>
                            <Category>친구 만나기</Category>
                        </CategoryBox>
                    </MiddleBox>
                    <BottomBox>
                        <CustomButton icon={'right'}>대화하러</CustomButton>
                        <CustomButton icon={'right'}>
                            이전 대화 보기
                        </CustomButton>
                    </BottomBox>
                </Wrapper>
            </BackImg>
            <BackImg>1-2메코의 질문</BackImg>
        </>
    );
}
export default QuestionPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;

const Wrapper = styled.div`
    width: 100%;
`;
const TopBox = styled.div`
    margin-top: 20px;
    width: 245px;
    height: 118px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 22px;
    padding-left: 16px;
    color: #5a639c;
    position: relative;
    top: 0px;
`;

const StarImg1 = styled.img`
    position: absolute;
    right: -5px;
    top: -10px;
`;

const StarImg2 = styled.img`
    position: absolute;
    right: -10px;
    top: 25px;
    width: 21px;
`;

const MiddleBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

const CategoryBox = styled.div`
    width: 100%;
    height: 48px;
    background-color: #5e5b88c8;
    border-radius: 10px;
`;
const HamHam = styled.img`
    width: 125px;
    height: 143px;
    margin-bottom: 10px;
`;

const Category = styled.div`
    color: #cccccc;
    font-size: 16px;
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 16px;
`;

const BottomBox = styled.div`
    background-color: aqua;
`;

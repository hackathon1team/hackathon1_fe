import styled from 'styled-components';
import CustomButton from '../../../components/customButton/customButton';
import Star1 from '../../../assets/Img/questionImg/star1.png';
import Star2 from '../../../assets/Img/questionImg/star.png';
import Meco from '../../../assets/Img/meco.png';
import MecoSmile from '../../../assets/Img/mecoSmile.png';
import { useState } from 'react';
import { ArrowDowIcon } from '../../../components/icons/icons';
import { useNavigate } from 'react-router-dom';
import { useGetToday } from '../../../hooks/useGetToday';
import ReactCalendar from '../../../components/datePicker/datePicker';
import useGetMecoQuestions from '../../../query/Get/useGetMecoQuestions';
import useStrAddDots from '../../../hooks/useStrAddDot';
import customToast from '../../../components/toast/toast';

function SelectDate({ getContents }) {
    const navigate = useNavigate();

    const [val, setVal] = useState('');
    const [isView, setIsView] = useState(false);
    const [isViewModal, setIsViewModal] = useState(false);
    const today = useGetToday();
    const { data: getQuestionSum } = useGetMecoQuestions(today);

    let isGetQuestionSumData =
        Object.keys(getQuestionSum).length === 0 ? false : true;

    const handleClickCategory = (el) => {
        setVal(el);
        setIsView(false);
    };
    const handleGoChatting = () => {
        if (val === '') return customToast('사건을 선택해주세요', 'warning');

        navigate(`/question/${val}`);
    };

    return (
        <Wrapper>
            <TopWrapper>
                <TopBox>
                    {isGetQuestionSumData ? (
                        <>
                            이미 메코의 질문을 하셨네요. <br />
                            메코..! 메코..!
                        </>
                    ) : (
                        <>
                            오늘, 가장 인상깊었던 <br />
                            사건은 무엇인가요?
                        </>
                    )}
                    <StarImg1 src={Star1} alt="" />
                    <StarImg2 src={Star2} alt="" />
                </TopBox>
                <MiddleBox>
                    <HamHam
                        src={isGetQuestionSumData ? MecoSmile : Meco}
                        alt=""
                    />

                    {isGetQuestionSumData ? (
                        <CategoryBox>
                            <Category val={val}>
                                {'오늘의 사건 : ' + getQuestionSum.contents}
                            </Category>
                        </CategoryBox>
                    ) : (
                        <CategoryBox
                            isView={isView}
                            onClick={() => setIsView((prev) => !prev)}
                        >
                            <Category val={val}>
                                {val
                                    ? useStrAddDots(val, 25)
                                    : '사건을 선택해주세요.'}
                                <ArrowDowIcon rotate={isView ? '180' : '0'} />
                            </Category>
                        </CategoryBox>
                    )}
                    {isView && (
                        <CategoryWrapper>
                            {getContents.map((el, idx) => (
                                <CategoryBox key={idx}>
                                    <Category
                                        onClick={() => handleClickCategory(el)}
                                    >
                                        {useStrAddDots(el, 25)}
                                    </Category>
                                </CategoryBox>
                            ))}
                        </CategoryWrapper>
                    )}
                </MiddleBox>
            </TopWrapper>
            {isViewModal && <ReactCalendar url={'/questionSum/'} />}

            <BottomBox>
                {isGetQuestionSumData ? (
                    <CustomButton
                        icon={'right'}
                        onClick={() => navigate(`/questionSum/${today}`)}
                    >
                        오늘 대화 보기
                    </CustomButton>
                ) : (
                    <CustomButton icon={'right'} onClick={handleGoChatting}>
                        대화하러
                    </CustomButton>
                )}
                <CustomButton
                    icon={'right'}
                    onClick={() => setIsViewModal((prev) => !prev)}
                >
                    이전 대화 보기
                </CustomButton>
            </BottomBox>
        </Wrapper>
    );
}
export default SelectDate;
const Wrapper = styled.div`
    width: 100%;
    height: 70vh;
`;
const TopWrapper = styled.div`
    height: 100%;
`;
const TopBox = styled.h2`
    margin-top: 20px;
    width: fit-content;
    width: fit-content;
    height: 118px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 22px;
    padding: 0 20px;
    color: #5a639c;
    position: relative;
    top: 0px;
    line-height: 150%;
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
    border-radius: ${({ isView }) => (isView ? '10px 10px 0 0 ' : '10px')};
    cursor: pointer;
    overflow: hidden;
`;

const CategoryWrapper = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    & > div {
        border-radius: 0;
    }
    & > div:last-child {
        border-radius: 0 0 10px 10px;
    }
`;
const HamHam = styled.img`
    width: 180px;

    margin-bottom: 30px;
`;

const Category = styled.div`
    font-size: 16px;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    color: ${({ val }) => (val ? 'white' : '#cccccc')};
`;
const CategoryList = styled.div``;

const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    & > * {
        margin-bottom: 14px;
    }
`;

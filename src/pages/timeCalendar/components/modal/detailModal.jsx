import styled from 'styled-components';
import { CancelIcon } from '../../../../components/icons/icons';
import CustomButton from '../../../../components/customButton/customButton';
import { useDeleteSchedule } from '../../../../query/Delete/useDeleteSchedule';

function DetailModal({ setIsDetailModal, isDetailModal, refetch }) {
    const { category, contents, emotion, recordId, takedTime } =
        isDetailModal.data;
    const { mutate: deleteSchedule } = useDeleteSchedule(
        setIsDetailModal,
        refetch,
    );

    const handleDetail = () => {
        setIsDetailModal({ isView: false, data: {} });
        deleteSchedule(recordId);
    };
    return (
        <Wrapper>
            <Data>
                <div>감정 상세 보기</div>
                <CancelIcon
                    onClick={() =>
                        setIsDetailModal({
                            isView: false,
                            data: {},
                        })
                    }
                />
            </Data>
            <ContentsList>
                <Category>감정 : </Category>
                <CategoryVal>{emotion}</CategoryVal>
            </ContentsList>
            <ContentsList>
                <Category>분류 : </Category>
                <CategoryVal>{category} </CategoryVal>
            </ContentsList>
            <ContentsList>
                <Category>내용 : </Category>
                <CategoryVal>{contents}</CategoryVal>
            </ContentsList>
            <ContentsList>
                <Category>시간 : </Category>
                <CategoryVal>{takedTime}시간</CategoryVal>
            </ContentsList>
            <ButtonWrapper>
                <CustomButton onClick={handleDetail}>삭제</CustomButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
export default DetailModal;

const Wrapper = styled.div`
    height: 350px;
    width: 100%;
    left: 0;
    background-color: #cdcbe2;
    position: absolute;
    bottom: 0;
    border-radius: 40px 40px 0 0;
    color: #5d659e;
    padding: 40px 30px;
    z-index: 11;
    animation: fadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Data = styled.div`
    font-size: 21px;
    font-weight: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    & > div {
        font-weight: 700;
    }
`;
const ContentsList = styled.div`
    display: flex;
    padding: 11px 0;
    align-items: start;
`;
const Category = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
`;
const CategoryVal = styled.h2`
    font-size: 18px;
    cursor: pointer;
    color: #797fab;
    font-weight: ${({ isVal }) => (isVal ? 'bold' : '')};
    width: 80%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 10px;
`;

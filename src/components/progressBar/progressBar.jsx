import styled from 'styled-components';
import Star from '../../assets/Img/signUpImg/star.png';

function ProgressBar({ currentPageNum, limit }) {
    return (
        <CompleteLineWrap>
            <CompleteLine width={currentPageNum * (100 / limit)}>
                <StarImg2 src={Star} alt="" />
            </CompleteLine>
        </CompleteLineWrap>
    );
}
export default ProgressBar;
const CompleteLineWrap = styled.div`
    width: 100%;
    height: 7px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 30px;
`;

const CompleteLine = styled.div`
    width: ${({ width }) => (width ? width : '0')}%;
    height: 7px;
    background-color: #e2bbe9;
    border-radius: 10px;
    position: relative;
`;
const StarImg2 = styled.img`
    width: 17px;
    height: 16px;
    margin-bottom: 12px;
    margin-left: 5px;
    position: absolute;
    right: -10px;
    top: -4px;
`;

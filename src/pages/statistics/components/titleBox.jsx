import styled from 'styled-components';
import Star from '../../../assets/Img/statistics/star.png';

function TitleBox({ text }) {
    return (
        <Wrapper>
            {text}
            <Img src={Star} />
        </Wrapper>
    );
}
export default TitleBox;

const Wrapper = styled.div`
    background-color: #ffffff;
    min-width: 250px;
    max-width: fit-conten;
    min-height: 30px;
    padding: 12px 30px;
    border-radius: 30px;
    white-space: pre-line;
    color: #5a639c;
    font-weight: bold;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Img = styled.img`
    position: absolute;
    top: -6px;
    right: 5px;
`;

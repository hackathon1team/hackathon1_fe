import styled from 'styled-components';

function PrevNoneData() {
    return (
        <Wrapper>
            전달에 데이터가 없습니다.
            <br />
            우리가 더 친해져볼까요?
        </Wrapper>
    );
}
export default PrevNoneData;

const Wrapper = styled.h3`
    height: 300px;
    display: flex;
    align-items: center;
    color: #edecec;
    text-align: center;
    font-size: 21px;
`;
